'use client'

import React, { useEffect, useState } from 'react'
import { motion, HTMLMotionProps, MotionProps } from 'framer-motion'

type MotionComponent = React.ComponentType<HTMLMotionProps<any>>

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode
  motionTag?: keyof JSX.IntrinsicElements
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, motionTag = 'div', ...props }) => {
  const [MotionComponent, setMotionComponent] = useState<MotionComponent | null>(null)

  useEffect(() => {
    const importMotion = async () => {
      const framerMotion = await import('framer-motion')
      setMotionComponent(() => framerMotion.motion[motionTag as keyof typeof framerMotion.motion])
    }
    importMotion()
  }, [motionTag])

  if (!MotionComponent) {
    const FallbackComponent = motionTag as keyof JSX.IntrinsicElements
    // Filter out motion-specific props for the fallback
    const { whileHover, whileTap, whileInView, ...domProps } = props
    return <FallbackComponent {...domProps}>{children}</FallbackComponent>
  }

  return <MotionComponent {...props}>{children}</MotionComponent>
}
