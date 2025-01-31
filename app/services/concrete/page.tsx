'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionWrapper } from '@/components/motion-wrapper'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ConcreteServicesPage() {
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
            src="/images/alexis-concrete-pours2.jpg"
            alt="Workers pouring and smoothing fresh concrete"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6">
            Concrete Services
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto">
            Delivering premium concrete solutions with precision and expertise in Tulsa and surrounding areas
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-16 text-center">
            Our Concrete Solutions
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
            alt="Large concrete structure under construction"
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
            What Our Clients Say
          </h2>
          <MotionWrapper
            motionTag="blockquote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light italic mb-8"
          >
            "Alexis Concrete delivered exceptional quality and professionalism. Their expertise transformed our project beyond expectations."
          </MotionWrapper>
          <p className="text-white/70 font-light">John Doe, CEO of BuildRight Inc.</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
          <Image
            src="/images/alexis-concrete-splash.jpg"
            alt="Completed concrete structure with workers inspecting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
            Ready to Start Your Concrete Project?
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
    title: "Commercial Concrete",
    description: "Tailored solutions for businesses in Tulsa, from foundations to decorative finishes.",
    image: "/images/alexis-commercial-concrete 1.jpeg"
  },
  {
    title: "Residential Concrete",
    description: "Enhance your Tulsa home with our expert residential concrete services.",
    image: "/images/alexis-residential-concrete 1.jpeg"
  },
  {
    title: "Industrial Concrete",
    description: "Durable and high-performance concrete solutions for industrial spaces in Tulsa.",
    image: "/images/alexis-industriall-concrete 1.jpeg"
  },
  {
    title: "Decorative Concrete",
    description: "Artistic and aesthetically pleasing concrete designs for any project in Tulsa.",
    image: "/images/alexis-concrete-footings3.jpg"
  },
  {
    title: "Trickle Channels",
    description: "Expertly designed trickle channels for efficient water management in Tulsa and surrounding areas. Our solutions prevent erosion and improve drainage for residential and commercial properties.",
    image: "/images/trickle-channel.png"
  },
  {
    title: "Sidewalks",
    description: "Premium sidewalk construction and repair services for Tulsa, Jenks, Owasso, and Bixby. We create safe, durable, and ADA-compliant walkways that enhance your property's curb appeal and accessibility.",
    image: "/images/sidewalk-concrete.jpg"
  },
  {
    title: "Retention Ponds",
    description: "Custom-engineered concrete retention ponds for effective stormwater management in Tulsa. Our solutions help control flooding, improve water quality, and comply with local regulations while blending seamlessly with the landscape.",
    image: "/images/concrete-retention-pond.jpg"
  },
]
