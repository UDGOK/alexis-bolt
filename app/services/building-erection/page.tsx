'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionWrapper } from '@/components/motion-wrapper'

export default function BuildingErectionPage() {
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
            src="/images/building-erection-1.jpg"
            alt="Construction workers erecting steel structure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6">
            Building Erection
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto">
            Expert structural erection services for commercial and industrial projects
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-16 text-center">
            Our Erection Services
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
                    src={feature.title === "Steel Structure Erection" ? "/images/building-erection-6.jpg" : `/images/building-erection-${index + 2}.jpg`}
                    alt={`${feature.title} construction work`}
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
            src="/images/building-erection-5.jpg"
            alt="Large steel structure under construction"
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
            "Alexis Building Erection delivered exceptional quality and professionalism. Their expertise transformed our project beyond expectations."
          </MotionWrapper>
          <p className="text-white/70 font-light">Yasir Jahangir, CEO of Upscale Development Group (udgok.com)</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
          <Image
            src="/images/building-erection-1.jpg"
            alt="Completed steel structure with workers inspecting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
            Ready to Start Your Construction Project?
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
    title: "Steel Structure Erection",
    description: "Precision steel erection for commercial and industrial buildings.",
  },
  {
    title: "Pre-engineered Buildings",
    description: "Efficient construction of pre-engineered metal buildings.",
  },
  {
    title: "Industrial Facilities",
    description: "Specialized erection services for industrial complexes.",
  },
  {
    title: "Commercial Structures",
    description: "Expert construction of commercial buildings and facilities.",
  },
]
