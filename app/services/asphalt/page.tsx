'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrollSection } from '@/components/scroll-section'
import { MotionWrapper } from '@/components/motion-wrapper'

export default function AsphaltServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <MotionWrapper
          style={{ opacity }}
          className="container mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Professional Asphalt Services
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto">
            Delivering excellence in asphalt paving and maintenance with cutting-edge technology and expert craftsmanship.
          </p>
        </MotionWrapper>
      </div>

      {/* Feature Sections */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                Commercial Paving
              </h2>
              <p className="text-xl font-light text-white/70">
                Expert asphalt solutions for parking lots, driveways, and commercial spaces. Built to last with premium materials and precision.
              </p>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>High-traffic durability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>ADA compliance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Proper drainage systems</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.webp?height=800&width=800"
                alt="Commercial paving"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Video Section */}
      <ScrollSection className="min-h-[80vh]">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/824477041/rendition/1080p/file.mp4?loc=external&signature=51c8d0517f8bc9b2b2b4358bcf0c7f67a6404d6d4f4b48e69e38a078c7f4c3b7" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                  Advanced Technology
                </h2>
                <p className="text-xl font-light text-white/70">
                  Using state-of-the-art equipment and techniques to deliver superior results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Feature Section 2 */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:order-last">
              <Image
                src="/placeholder.webp?height=800&width=800"
                alt="Road construction"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                Road Construction
              </h2>
              <p className="text-xl font-light text-white/70">
                Comprehensive road construction services with a focus on durability and safety.
              </p>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Highway construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Street paving</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Infrastructure development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Services Grid */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionWrapper
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5"
              >
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 font-light">
                  {service.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Ready to start your project?
          </h2>
          <MotionWrapper
            motionTag="a"
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-light tracking-tight"
          >
            Get in touch
          </MotionWrapper>
        </div>
      </ScrollSection>
    </main>
  )
}

const services = [
  {
    title: "Parking Lots",
    description: "Complete parking lot construction and maintenance services for commercial properties."
  },
  {
    title: "Road Paving",
    description: "Professional road paving services for public and private projects."
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and repair services to extend pavement life."
  },
  {
    title: "Sealcoating",
    description: "Protective sealcoating services to prevent damage and extend longevity."
  },
  {
    title: "Striping",
    description: "Professional line striping and marking services for parking lots and roads."
  },
  {
    title: "Repairs",
    description: "Quick and effective repairs for cracks, potholes, and other damage."
  }
]
