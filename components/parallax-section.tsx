'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage: string
  overlayColor?: string
}

export function ParallaxSection({ children, bgImage, overlayColor = 'rgba(0, 0, 0, 0.5)' }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-20 container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
