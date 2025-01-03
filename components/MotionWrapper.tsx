'use client'

import React, { useEffect, useState } from 'react'
import { motion, HTMLMotionProps, MotionProps } from 'framer-motion'

type MotionComponent = React.ComponentType<HTMLMotionProps<any>>

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode
  motionTag?: keyof JSX.IntrinsicElements
  className?: string  // Add className prop
  style?: React.CSSProperties  // Add style prop
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  motionTag = 'div', 
  className,
  style,
  ...props 
}) => {
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
    return (
      <FallbackComponent 
        className={className}
        style={style}
        {...domProps}
      >
        {children}
      </FallbackComponent>
    )
  }

  return (
    <MotionComponent 
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
