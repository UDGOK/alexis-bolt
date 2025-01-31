'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrollSection } from '../components/ScrollSection'
import { MotionWrapper } from '../components/MotionWrapper'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <main className="relative bg-background text-foreground">
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/alexis-concrete-splash.jpg"
            alt="Concrete and Asphalt Services in Tulsa"
            fill
            className="object-cover"
            priority
          />
          <video
            src="/videos/projects-tulsa-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <MotionWrapper
          motionTag="div"
          opacity={opacity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.02em] text-primary-foreground leading-tight">
            Concrete & Asphalt<br />Experts in Tulsa
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-primary-foreground/80">
            Premier concrete and asphalt solutions for Tulsa and surrounding areas
          </p>
        </MotionWrapper>
      </div>

      {/* Feature Section 1 */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                Premium Concrete Solutions in Tulsa
              </h2>
              <p className="text-xl font-light text-muted-foreground">
                Looking for top-notch concrete services in Tulsa? We specialize in premium concrete solutions, including driveways, patios, foundations, and more. With years of experience and a commitment to quality, we deliver durable, beautiful results tailored to your needs. Whether it's residential or commercial, trust us to bring your vision to life. Contact us today for reliable, affordable concrete services in Tulsa, OK!
              </p>
              <ul className="list-disc list-inside text-lg font-light text-muted-foreground">
                <li>Expert concrete pouring and finishing</li>
                <li>Decorative concrete options for unique designs</li>
                <li>Concrete repair and restoration services</li>
                <li>Eco-friendly concrete solutions</li>
              </ul>
            </div>
            <MotionWrapper
              motionTag="div"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/alexis-concrete-pours2.jpg"
                alt="Professional concrete pouring process in Tulsa"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </MotionWrapper>
          </div>
        </div>
      </ScrollSection>

      {/* Feature Section 2 */}
      <ScrollSection className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <MotionWrapper
              motionTag="div"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg md:order-last"
            >
              <Image
                src="/images/alexis-concrete-footings.jpg"
                alt="Concrete footings for a new construction project in Tulsa"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </MotionWrapper>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                Site Preparation & Excavation
              </h2>
              <p className="text-xl font-light text-secondary-foreground/70">
                From initial groundwork to final grading, our fleet of modern equipment and skilled operators ensure your project starts with a solid foundation. Start your project on the right foundation with our professional site preparation and excavation services in Tulsa, OK. From land clearing to grading and leveling, we ensure your site is ready for construction with precision and care. Our experienced team uses advanced equipment to handle projects of all sizes, delivering efficient and reliable results. Trust us to prepare your site for success—contact us today for a free consultation!
              </p>
              <ul className="list-disc list-inside text-lg font-light text-secondary-foreground/70">
                <li>Precise land clearing and grading</li>
                <li>Efficient excavation for all project types</li>
                <li>Soil stabilization techniques</li>
                <li>Erosion control measures</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* New Asphalt Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                Tulsa Asphalt Experts
              </h2>
              <p className="text-xl font-light text-muted-foreground">
                As Tulsa's premier asphalt contractors, we deliver top-quality asphalt solutions for driveways, parking lots, and roadways. Our expertise in asphalt paving, repair, and maintenance ensures long-lasting, smooth surfaces that withstand Tulsa's diverse weather conditions.
              </p>
              <ul className="list-disc list-inside text-lg font-light text-muted-foreground">
                <li>Professional asphalt paving and resurfacing</li>
                <li>Pothole repair and crack filling</li>
                <li>Asphalt sealcoating for extended pavement life</li>
                <li>ADA-compliant asphalt solutions</li>
              </ul>
            </div>
            <MotionWrapper
              motionTag="div"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/alexis-asphalt-paving.jpg"
                alt="Professional asphalt paving in Tulsa"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </MotionWrapper>
          </div>
        </div>
      </ScrollSection>

      {/* Feature Grid */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionWrapper
                key={feature.title}
                motionTag="div"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-light tracking-tight mb-2 text-primary-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light text-primary-foreground/70">
                    {feature.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Testimonials Section */}
      <ScrollSection className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-12 text-center">
            What Our Tulsa Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <p className="text-lg font-light mb-4 text-orange-500">"Alexis Concrete & Asphalt transformed our driveway with their expert concrete work. The team was professional, efficient, and the results exceeded our expectations. Highly recommended for any concrete project in Tulsa!"</p>
              <p className="font-semibold text-orange-600">- Sarah T., Tulsa Homeowner</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <p className="text-lg font-light mb-4 text-orange-500">"As a business owner in Tulsa, I needed a reliable asphalt contractor for our parking lot renovation. Alexis delivered outstanding results on time and within budget. Their asphalt sealing service has significantly extended the life of our pavement."</p>
              <p className="font-semibold text-orange-600">- Mike R., Tulsa Business Owner</p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center py-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Ready to start your Tulsa project?
          </h2>
          <p className="text-xl font-light mb-8">
            Whether it's concrete, asphalt, or site preparation, we're here to bring your vision to life in Tulsa and surrounding areas.
          </p>
          <MotionWrapper
            motionTag="a"
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-background text-primary px-8 py-4 rounded-full text-lg font-light tracking-tight"
          >
            Get a Free Quote
          </MotionWrapper>
        </div>
      </ScrollSection>
    </main>
  )
}

const features = [
  {
    title: 'Commercial Projects',
    description: 'Comprehensive concrete and asphalt solutions for Tulsa businesses and organizations.',
    image: '/images/alexis-commercial-concrete 1.jpeg',
  },
  {
    title: 'Residential Concrete',
    description: 'Expert concrete solutions for homes and properties in Tulsa and surrounding areas.',
    image: '/images/alexis-residential-concrete 1.jpeg',
  },
  {
    title: 'Industrial Concrete',
    description: 'Durable concrete and asphalt solutions for industrial applications in Tulsa.',
    image: '/images/alexis-industriall-concrete 1.jpeg',
  },
]
