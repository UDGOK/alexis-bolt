'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface VideoSectionProps {
  videoUrl: string
  title: string
  description: string
  align?: 'left' | 'right'
}

export function VideoSection({ videoUrl, title, description, align = 'left' }: VideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="h-full w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-2xl ${align === 'right' ? 'ml-auto' : ''}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extralight mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-extralight text-white/70"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
