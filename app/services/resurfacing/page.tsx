'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionWrapper } from "components/MotionWrapper"
import Head from 'next/head'

export default function ResurfacingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '75%'])

  return (
    <>
      <Head>
        <title>Expert Resurfacing Services in Tulsa | Alexis Concrete and Asphalt</title>
        <meta name="description" content="Revitalize your surfaces with Tulsa's premier resurfacing experts. From driveways to commercial spaces, we bring new life to worn-out concrete and asphalt." />
        <meta name="keywords" content="resurfacing Tulsa, concrete resurfacing, asphalt resurfacing, driveway resurfacing, commercial resurfacing, Tulsa contractors" />
      </Head>
      <main ref={containerRef} className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.a0fccce4.jpg-MgjFCBnBlB4HygCm3VSI6h1bf9Zmxl.webp"
              alt="Professional resurfacing equipment and technology"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </motion.div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6">
              Tulsa's Resurfacing Experts
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto">
              Revitalize your surfaces with Tulsa's premier concrete and asphalt resurfacing services
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-16 text-center">
              Our Resurfacing Solutions
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
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
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
              src="/images/tulsa-resurfacing-parallax.webp"
              alt="Resurfacing project in Tulsa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-12">
              What Tulsa Residents Say
            </h2>
            <MotionWrapper
              motionTag="blockquote"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light italic mb-8"
            >
              "Alexis Concrete and Asphalt transformed our worn-out driveway into a stunning, smooth surface. Their resurfacing expertise is unmatched in Tulsa!"
            </MotionWrapper>
            <p className="text-white/70 font-light">Sarah Johnson, Tulsa Homeowner</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
            <Image
              src="/images/tulsa-resurfacing-cta.webp"
              alt="Completed resurfacing project in Tulsa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </motion.div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
              Ready to Resurface in Tulsa?
            </h2>
            <MotionWrapper
              motionTag="a"
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-light tracking-tight"
            >
              Get a Free Quote
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  )
}

const features = [
  {
    title: "Driveway Resurfacing",
    description: "Revitalize your Tulsa home's curb appeal with our expert driveway resurfacing. We breathe new life into worn, cracked surfaces.",
    image: "/images/tulsa-driveway-resurfacing.webp"
  },
  {
    title: "Commercial Resurfacing",
    description: "Enhance your Tulsa business's image with our commercial resurfacing services. Perfect for parking lots, walkways, and more.",
    image: "/images/tulsa-commercial-resurfacing.webp"
  },
  {
    title: "Decorative Resurfacing",
    description: "Add a touch of elegance to your Tulsa property with our decorative resurfacing options, including stamped and colored finishes.",
    image: "/images/tulsa-decorative-resurfacing.webp"
  },
  {
    title: "Pool Deck Resurfacing",
    description: "Transform your Tulsa pool area with our slip-resistant and aesthetically pleasing pool deck resurfacing solutions.",
    image: "/images/tulsa-pool-deck-resurfacing.webp"
  },
]
