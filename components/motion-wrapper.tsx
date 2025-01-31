'use client'

import { motion, MotionProps, MotionValue, HTMLMotionProps } from 'framer-motion'
import { ElementType, ReactNode, forwardRef } from 'react'

type MotionWrapperProps = Omit<MotionProps, 'style'> & {
  children: ReactNode
  style?: {
    [key: string]: string | number | MotionValue<number> | MotionValue<string> | undefined
  }
  motionTag?: ElementType
  className?: string
  href?: string
}

export const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps>(
  ({ children, style, motionTag = 'div', className, href, ...props }, ref) => {
    const MotionComponent = (motion[motionTag as keyof typeof motion] || motion.div) as ElementType<HTMLMotionProps<any>>

    return (
      <MotionComponent 
        ref={ref}
        {...props}
        style={style}
        className={className}
        href={href}
      >
        {children}
      </MotionComponent>
    )
  }
)

MotionWrapper.displayName = 'MotionWrapper'
