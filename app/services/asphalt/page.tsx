'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrollSection } from "components/ScrollSection"
import { MotionWrapper } from "components/MotionWrapper"

export default function AsphaltServicesPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <MotionWrapper
      motionTag="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <ScrollSection className="h-[300vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <MotionWrapper
            motionTag="div"
            style={{ y }}
            className="h-full w-full"
          >
            <Image
              src="/images/asphalt-services.jpg"
              alt="Asphalt Services"
              fill
              className="object-cover"
            />
          </MotionWrapper>
        </div>
      </ScrollSection>

      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-8">Asphalt Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg mb-6">
              We provide comprehensive asphalt solutions for both residential and commercial properties.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Services Offered</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Asphalt Paving</li>
              <li className="mb-2">Driveway Installation</li>
              <li className="mb-2">Parking Lot Construction</li>
              <li className="mb-2">Asphalt Repair & Maintenance</li>
              <li className="mb-2">Sealcoating</li>
            </ul>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
