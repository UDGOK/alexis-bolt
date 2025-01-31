'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Value {
  title: string
  description: string
}

interface RotatingCubeProps {
  values: Value[]
}

export function RotatingCube({ values }: RotatingCubeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [values.length])

  useEffect(() => {
    controls.start({
      rotateY: currentIndex * -90,
      transition: { duration: 1, ease: 'easeInOut' }
    })
  }, [currentIndex, controls])

  return (
    <div className="w-64 h-64 perspective-1000">
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={controls}
      >
        {values.map((value, index) => (
          <div
            key={value.title}
            className="absolute w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl p-6 backface-hidden"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(8rem)`,
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">{value.title}</h3>
              <p className="text-sm text-white/70">{value.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}