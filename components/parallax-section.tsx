'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { MotionWrapper } from './motion-wrapper'

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number[]
}

export function ParallaxSection({ children, offset = [0, 1] }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const yValue = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <MotionWrapper
      motionTag="div"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ opacity: opacityValue }}
      className="relative min-h-screen"
    >
      <MotionWrapper motionTag="div" style={{ y: yValue }}>
        {children}
      </MotionWrapper>
    </MotionWrapper>
  )
}
