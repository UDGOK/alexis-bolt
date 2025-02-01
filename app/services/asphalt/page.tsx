'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MotionWrapper } from '@/components/motion-wrapper'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Head from 'next/head'

const features = [
  {
    title: "Asphalt Paving",
    description: "Expert asphalt paving for driveways and parking lots, delivering long-lasting results for both residential and commercial properties.",
    image: "/images/asphalt-paving.jpg"
  },
  {
    title: "Asphalt Sealcoating",
    description: "Protect your asphalt surfaces from sun damage, rain, and wear and tear with our professional sealcoating services.",
    image: "/images/tulsa-sealcoating.jpg"
  },
  {
    title: "Asphalt Repairs",
    description: "Quick and effective repairs for cracks, potholes, and other damage to asphalt surfaces, ensuring safety and longevity.",
    image: "/images/tulsa-repair-and patching.jpg"
  },
  {
    title: "Parking Lot Striping",
    description: "Professional line striping and marking services for parking lots, ensuring safety, organization, and compliance with local regulations.",
    image: "/images/tulsa-parking-lot-striping.jpg"
  },
]

const services = [
  {
    title: "Asphalt Paving",
    shortDescription: "Expert paving for driveways, parking lots, and commercial spaces.",
    longDescription: "Our professional asphalt paving services in Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso deliver durable, smooth surfaces for driveways, parking lots, and commercial spaces. We use high-quality materials and advanced techniques to ensure long-lasting results that enhance property value and curb appeal.",
    image: "/images/asphalt-paving.jpg"
  },
  {
    title: "Sealcoating",
    shortDescription: "Protect and extend the life of your asphalt surfaces.",
    longDescription: "Our sealcoating services in Tulsa and surrounding areas provide a protective layer that shields your asphalt from UV rays, water damage, and chemical spills. This cost-effective treatment extends the life of your pavement by up to 30%, saving you money on repairs and replacements in the long run.",
    image: "/images/tulsa-sealcoating.jpg"
  },
  {
    title: "Repairs & Patching",
    shortDescription: "Quick and effective repairs for cracks, potholes, and other damage.",
    longDescription: "We offer prompt and efficient asphalt repair and patching services throughout Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso. Our team quickly addresses cracks, potholes, and surface damage to prevent further deterioration and ensure a safe, smooth driving surface for your property.",
    image: "/images/tulsa-repair-and-patching.jpg"
  },
  {
    title: "Crack Filling",
    shortDescription: "Seal gaps to prevent water infiltration and further deterioration.",
    longDescription: "Our crack filling services in Tulsa and nearby cities target and seal asphalt cracks before they develop into more serious issues. This preventive measure stops water infiltration, which can cause extensive damage to your asphalt surface, especially during freeze-thaw cycles common in Oklahoma.",
    image: "/images/tulsa-crack-filling.jpg"
  },
  {
    title: "Parking Lot Striping",
    shortDescription: "Professional line striping and marking for safe, organized parking lots.",
    longDescription: "We provide expert parking lot striping services in Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso to ensure your lot is safe, organized, and compliant with local regulations. Our precise markings maximize parking efficiency and improve traffic flow, enhancing the overall functionality of your property.",
    image: "/images/tulsa-parking-lot-striping.jpg"
  },
  {
    title: "Asphalt Resurfacing",
    shortDescription: "Restore smoothness and durability without full replacement.",
    longDescription: "Our asphalt resurfacing services offer a cost-effective solution for worn or damaged surfaces in Tulsa and surrounding areas. By applying a new layer of asphalt over the existing surface, we can restore smoothness and durability without the need for a full replacement, saving you time and money.",
    image: "/images/tulsa-asphalt-resurfacing.jpg"
  },
  {
    title: "New Construction",
    shortDescription: "Expert asphalt installation for new construction projects.",
    longDescription: "For new construction projects in Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso, our team provides expert asphalt installation services. We work closely with contractors and property owners to ensure high-quality, durable asphalt surfaces that meet project specifications and local building codes.",
    image: "/images/new-construction.jpg"
  },
  {
    title: "Industrial Services",
    shortDescription: "Heavy-duty asphalt solutions for industrial properties.",
    longDescription: "Our industrial asphalt services cater to the unique needs of manufacturing facilities, warehouses, and other industrial properties in Tulsa and nearby cities. We provide heavy-duty asphalt solutions designed to withstand heavy traffic, equipment loads, and chemical exposure common in industrial settings.",
    image: "/images/industrial-services.jpg"
  },
  {
    title: "Maintenance Programs",
    shortDescription: "Routine care to keep your asphalt surfaces in top condition.",
    longDescription: "We offer comprehensive asphalt maintenance programs for properties in Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso. Our proactive approach includes regular inspections, cleaning, minor repairs, and treatments to extend the life of your asphalt and prevent costly replacements.",
    image: "/images/maintenance-programs.jpg"
  },
  {
    title: "ADA Compliance",
    shortDescription: "Ensure your property meets ADA requirements for accessible parking.",
    longDescription: "Our ADA compliance services help property owners in Tulsa and surrounding areas meet federal and state accessibility requirements. We provide expert consultation and implementation of ADA-compliant parking spaces, ramps, and signage to ensure your property is accessible to all visitors.",
    image: "/images/ada-compliance.jpg"
  },
  {
    title: "Asphalt Inspections",
    shortDescription: "Professional evaluations to identify and address potential issues.",
    longDescription: "Our thorough asphalt inspection services in Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, and Owasso help property owners identify potential issues before they become major problems. Our experts assess the condition of your asphalt surfaces and provide detailed reports with recommendations for maintenance or repairs.",
    image: "/images/asphalt-inspections.jpg"
  }
]

export default function AsphaltServicesPage() {
  const pageTitle = "Comprehensive Asphalt Services in Tulsa, OK | Expert Paving & Maintenance"
  const pageDescription = "Professional asphalt paving, sealcoating, repairs, and maintenance services in Tulsa and surrounding areas. Get long-lasting results for your driveway or parking lot."

  const [expandedService, setExpandedService] = useState<string | null>(null);

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
            src="/images/asphalt-paving.jpg"
            alt="Professional asphalt paving crew working on a commercial parking lot in Tulsa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6">
            Comprehensive Asphalt Services
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto">
            Expert asphalt solutions for driveways, parking lots, and more in Tulsa, OK, and surrounding areas
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
            src="/images/tulsa-parking-lot-striping.jpg"
            alt="Freshly paved and striped asphalt parking lot in Tulsa, showcasing our quality work"
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
                className="relative p-6 rounded-2xl bg-white/5 cursor-pointer"
                onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
              >
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 font-light">
                  {service.shortDescription}
                </p>
                <AnimatePresence>
                  {expandedService === service.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} in Tulsa and surrounding areas`}
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                      />
                      <p className="text-white/70 font-light">{service.longDescription}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
            Why Choose Us
          </h2>
          <p className="text-xl font-light text-white/70 mb-8">
            With years of experience, high-grade materials, and a commitment to customer satisfaction, we deliver reliable asphalt services at fair pricing. Whether it's a small driveway or a large commercial parking lot, we treat every project with the same level of care and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/services/concrete" className="text-white hover:text-blue-400 underline">Concrete Services</a>
            <a href="/services/resurfacing" className="text-white hover:text-blue-400 underline">Resurfacing Services</a>
            <a href="/resources/asphalt-calculator" className="text-white hover:text-blue-400 underline">Asphalt Calculator</a>
            <a href="/resources/faq" className="text-white hover:text-blue-400 underline">FAQs</a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
            Service Areas
          </h2>
          <p className="text-xl font-light text-white/70 mb-12">
            We proudly serve Tulsa, Bixby, Oklahoma City, Jenks, Weatherford, Owasso, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
          <Image
            src="/images/tulsa-repair-and-patching.jpg"
            alt="Asphalt repair and maintenance crew working on a residential driveway in Tulsa"
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
            Get a Free Estimate
          </MotionWrapper>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alexis Asphalt Services",
            "image": "https://www.alexisasphalt.com/images/alexis-asphalt-paving.jpg",
            "description": "Expert asphalt paving, sealcoating, repairs, and maintenance services in Tulsa and surrounding areas.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Tulsa",
              "addressRegion": "OK",
              "postalCode": "74103",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.1540,
              "longitude": -95.9928
            },
            "url": "https://www.alexisasphalt.com/services/asphalt",
            "telephone": "+1-918-555-1234",
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$"
          })
        }}
      />
    </main>
  )
}
