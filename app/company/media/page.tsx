'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const imageCount = 6 // Updated to include the new image
const videoCount = 4 // Updated to include the new videos

const MediaPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const images = [
    ...Array.from({ length: imageCount - 1 }, (_, i) => `/images/our-work-${i + 1}.jpg`),
    '/images/2-4-2.jpg'
  ]
  const videos = [
    ...Array.from({ length: videoCount - 2 }, (_, i) => `/videos/our-work-${i + 1}.mp4`),
    '/videos/2-4-1.mp4',
    '/videos/2-4-3.mp4'
  ]

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">Our Work</h1>
        
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-orange-300">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedMedia(src)}
              >
                <Image
                  src={src}
                  alt={src.includes('2-4-2') ? 'New project showcase' : `Our work ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-8 text-orange-300">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((src, index) => (
              <div key={src} className="relative aspect-video rounded-lg overflow-hidden">
                <video
                  src={src}
                  controls
                  className="w-full h-full object-cover"
                  poster={src.includes('2-4') ? `/images/2-4-2.jpg` : `/images/our-work-${index + 1}.jpg`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-4xl aspect-square"
          >
            <Image
              src={selectedMedia}
              alt="Selected work"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </main>
  )
}

export default MediaPage