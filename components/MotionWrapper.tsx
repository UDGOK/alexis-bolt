'use client'

import React, { useEffect, useState } from 'react'
import { motion, HTMLMotionProps, MotionProps } from 'framer-motion'

type MotionComponent = React.ComponentType<HTMLMotionProps<any>>

type CombinedStyle = React.CSSProperties & {
  [key: string]: any
}

interface MotionWrapperProps extends Omit<MotionProps, 'style'> {
  children: React.ReactNode
  motionTag?: keyof JSX.IntrinsicElements
  className?: string
  style?: CombinedStyle
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
    const { whileHover, whileTap, whileInView, ...domProps } = props
    return (
      <FallbackComponent 
        className={className}
        style={style as React.CSSProperties}
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
