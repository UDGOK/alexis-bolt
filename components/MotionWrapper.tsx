'use client'

import React, { useEffect, useState } from 'react'
import { motion, HTMLMotionProps, MotionProps, MotionValue } from 'framer-motion'

type MotionComponent = React.ComponentType<HTMLMotionProps<any>>

type CombinedStyle = React.CSSProperties & {
  [key: string]: any
}

interface MotionWrapperProps extends Omit<MotionProps, 'style'> {
  children: React.ReactNode
  motionTag?: keyof JSX.IntrinsicElements
  className?: string
  style?: CombinedStyle
  scale?: MotionValue<number> | number // Add scale to the interface
  opacity?: MotionValue<number> | number // Add opacity to the interface
  href?: string // Add href to the interface
  // Allow any additional props to be passed
  [key: string]: any
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  motionTag = 'div', 
  className,
  style,
  scale, // Destructure scale
  opacity, // Destructure opacity
  href, // Destructure href
  ...props // Forward all other props
}) => {
  const [MotionComponent, setMotionComponent] = useState<MotionComponent | null>(null)

  useEffect(() => {
    const importMotion = async () => {
      const framerMotion = await import('framer-motion')
      // Explicitly cast the motion component to MotionComponent
      const component = framerMotion.motion[motiontag as keyof typeof framerMotion.motion] as MotionComponent
      setMotionComponent(component)
    }
    importMotion()
  }, [motionTag])

  if (!MotionComponent) {
    const FallbackComponent = motiontag as keyof JSX.IntrinsicElements
    // Filter out framer-motion-specific props that are not applicable to the fallback component
    const { 
      whileHover, 
      whileTap, 
      whileInView, 
      onDrag, 
      onDragStart, 
      onDragEnd, 
      onAnimationStart, 
      onAnimationComplete, 
      ...domProps 
    } = props
    return (
      <FallbackComponent 
        className={className}
        style={style as React.CSSProperties}
        href={href} // Pass href to the fallback component
        {...domProps} // Forward all additional props to the DOM element
      >
        {children}
      </FallbackComponent>
    )
  }

  // Destructure motionTag from props to avoid passing it to the DOM element
  const { motiontag: _, ...restProps } = props;

  return (
    <MotionComponent 
      className={className}
      style={style}
      scale={scale} // Pass scale directly as a motion prop
      opacity={opacity} // Pass opacity directly as a motion prop
      href={href} // Pass href to the motion component
      {...restProps} // Forward all additional props to the motion component
    >
      {children}
    </MotionComponent>
  )
}
