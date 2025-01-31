'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { MotionWrapper } from './motion-wrapper'

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentTime, setCurrentTime] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }, 1000)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            setLocation(data.city + ', ' + data.countryName)
          })
      })
    }

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <MotionWrapper
      motionTag="div"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FFB800] w-full overflow-hidden"
    >
      <div id="announcement-banner" className="max-w-[1400px] mx-auto px-6 py-2">
        <div className="flex items-center justify-center relative">
          <div className="overflow-hidden whitespace-nowrap">
            <p className="text-sm font-medium text-black inline-block animate-marquee">
              {location && `${location} - `}{currentTime} | Get 20% off on all concrete services this month. <a href="/contact" className="underline font-bold">Contact us today</a> | Call us: <span className="font-bold">918.861.6776</span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 text-black/60 hover:text-black transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </MotionWrapper>
  )
}
