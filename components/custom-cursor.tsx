'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = () => setIsHovered(true)
    const handleUnhover = () => setIsHovered(false)

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleUnhover)
      })
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative bg-white rounded-full"
        animate={{
          scale: isHovered ? 2 : 1,
          width: isHovered ? '48px' : '16px',
          height: isHovered ? '48px' : '16px',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
