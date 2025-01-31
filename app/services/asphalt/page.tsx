'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { MotionWrapper } from '@/components/motion-wrapper'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function AsphaltServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '75%'])

  return (
    <main ref={containerRef} className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <Image
            src="/images/tulsa-concrete-projects.jpeg"
            alt="Professional asphalt paving in progress"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6">
            Asphalt Services
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto">
            Delivering excellence in asphalt paving and maintenance with cutting-edge technology and expert craftsmanship in Tulsa and surrounding areas
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-16 text-center">
            Our Asphalt Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <MotionWrapper
                key={feature.title}
                motionTag="div"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                  <Zoom>
                    <Image
                      src={feature.image}
                      alt={`${feature.title} work in progress`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </Zoom>
                </div>
                <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                <p className="text-white/70 font-light">{feature.description}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[50vh] md:h-[80vh] overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <Image
            src="/images/alexis-concrete-footings.jpg"
            alt="Completed asphalt parking lot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionWrapper
                key={service.title}
                motionTag="div"
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
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
          <Image
            src="/images/alexis-concrete-splash.jpg"
            alt="Asphalt repair and maintenance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
            Ready to Start Your Asphalt Project?
          </h2>
          <MotionWrapper
            motionTag="a"
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-light tracking-tight"
          >
            Get in Touch
          </MotionWrapper>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: "Commercial Paving",
    description: "Expert asphalt solutions for parking lots, driveways, and commercial spaces in Tulsa. Built to last with premium materials and precision.",
    image: "/images/alexis-commercial-concrete 1.jpeg"
  },
  {
    title: "Road Construction",
    description: "Comprehensive road construction services in Tulsa with a focus on durability and safety, including highway construction and street paving.",
    image: "/images/tulsa-concrete-projects.jpeg"
  },
  {
    title: "Asphalt Maintenance",
    description: "Proactive maintenance services to extend the life of your asphalt surfaces in Tulsa, including sealcoating and crack filling.",
    image: "/images/alexis-concrete-footings3.jpg"
  },
  {
    title: "Residential Asphalt",
    description: "High-quality asphalt solutions for residential driveways and pathways in Tulsa, enhancing curb appeal and functionality.",
    image: "/images/alexis-residential-concrete 1.jpeg"
  },
]

const services = [
  {
    title: "Parking Lots",
    description: "Complete parking lot construction and maintenance services for commercial properties in Tulsa."
  },
  {
    title: "Road Paving",
    description: "Professional road paving services for public and private projects throughout Tulsa and surrounding areas."
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and repair services to extend pavement life in Tulsa's challenging climate."
  },
  {
    title: "Sealcoating",
    description: "Protective sealcoating services to prevent damage and extend longevity of asphalt surfaces in Tulsa."
  },
  {
    title: "Striping",
    description: "Professional line striping and marking services for parking lots and roads in Tulsa, ensuring safety and compliance."
  },
  {
    title: "Repairs",
    description: "Quick and effective repairs for cracks, potholes, and other damage to asphalt surfaces in Tulsa."
  },
  {
    title: "Asphalt Sealing",
    description: "Expert asphalt sealing services to protect and extend the life of your asphalt surfaces. Our crew is ready to start in 1 week."
  }
]
