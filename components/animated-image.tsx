'use client'

import Image from 'next/image'
import { MotionWrapper } from './motion-wrapper'

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function AnimatedImage({ src, alt, width, height, className = '' }: AnimatedImageProps) {
  return (
    <MotionWrapper
      motionTag="div"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </MotionWrapper>
  )
}
