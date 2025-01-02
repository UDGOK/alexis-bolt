'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { MotionWrapper } from './motion-wrapper'

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <MotionWrapper
      motionTag="div"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-[#FFB800] fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-3">
        <div className="flex items-center justify-center">
          <p className="text-sm font-light text-black text-center pr-8">
            Get 20% off on all concrete services this month. <a href="/contact" className="underline">Contact us today</a>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 text-black/60 hover:text-black transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </MotionWrapper>
  )
}
