'use client'

import { useRef, useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrollSection } from '../components/ScrollSection'
import { MotionWrapper } from '../components/MotionWrapper'
import CalculatorIcon from '../components/CalculatorIcon'
import RecentBlogPosts from '../components/RecentBlogPosts'

export default function Home() {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  useEffect(() => {
    console.log('About to render RecentBlogPosts');
  }, []);

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  const calculators = [
    { name: 'Concrete Calculator', icon: 'concrete', path: '/resources/concrete-calculator' },
    { name: 'Asphalt Calculator', icon: 'asphalt', path: '/resources/asphalt-calculator' },
    { name: 'Rebar Calculator', icon: 'rebar', path: '/resources/rebar-calculator' },
    { name: 'Gravel Calculator', icon: 'gravel', path: '/resources/gravel-calculator' },
  ]

  return (
    <main className="relative bg-background text-foreground">
      {/* Hero Section */}
      <div ref={heroRef} className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <video
          src="/videos/projects-tulsa-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <MotionWrapper
          motionTag="div"
          opacity={opacity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center mb-8 px-4 sm:px-0"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[clamp(48px,8vw,120px)] font-extralight tracking-[-0.02em] text-primary-foreground leading-[0.9] md:leading-[0.85]">
              Concrete & Asphalt<br />Experts in Tulsa
            </h1>
            <p className="mt-4 text-xl font-light text-primary-foreground/80">
              Premier concrete and asphalt solutions for Tulsa and surrounding areas
            </p>
          </div>
        </MotionWrapper>
        
        {/* Calculators Section in Hero */}
        <div className="container mx-auto z-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary-foreground mb-8 text-center">
            Project Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calculators.map((calc) => (
              <MotionWrapper
                key={calc.name}
                motionTag="a"
                href={calc.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center flex flex-col items-center justify-center hover:bg-primary-foreground/30 transition-colors duration-300"
              >
                <CalculatorIcon name={calc.icon as any} className="w-12 h-12 mb-2 text-primary-foreground" />
                <h3 className="text-xl font-light text-primary-foreground">{calc.name}</h3>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section 1 */}
      <ScrollSection className="py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                Premium Concrete Solutions in Tulsa
              </h2>
              <p className="text-xl font-light text-muted-foreground">
                Looking for top-notch concrete services in Tulsa? We specialize in premium concrete solutions, including driveways, patios, foundations, and more. With years of experience and a commitment to quality, we deliver durable, beautiful results tailored to your needs.
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
      <ScrollSection className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
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
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                Site Preparation & Excavation
              </h2>
              <p className="text-xl font-light text-secondary-foreground/70">
                From initial groundwork to final grading, our fleet of modern equipment and skilled operators ensure your project starts with a solid foundation. Start your project on the right foundation with our professional site preparation and excavation services in Tulsa, OK.
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
      <ScrollSection className="py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
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
      <ScrollSection className="py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="text-2xl font-light tracking-tight mb-1 text-primary-foreground">
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

      {/* Calculators Section */}
      <ScrollSection className="py-2">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-8 text-center">
            Project Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {calculators.map((calc) => (
              <MotionWrapper
                key={calc.name}
                motionTag="a"
                href={calc.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary p-2 rounded-lg shadow-lg text-center flex flex-col items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <CalculatorIcon name={calc.icon as any} className="w-10 h-10 mb-1 text-secondary-foreground" />
                <h3 className="text-xl font-light text-secondary-foreground">{calc.name}</h3>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Testimonials Section */}
      <ScrollSection className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-2 text-center">
            What Our Tulsa Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-background p-2 rounded-lg shadow-lg">
              <p className="text-lg font-light mb-1 text-orange-500">"Alexis Concrete & Asphalt transformed our driveway with their expert concrete work. The team was professional, efficient, and the results exceeded our expectations. Highly recommended for any concrete project in Tulsa!"</p>
              <p className="font-semibold text-orange-600 text-sm">- Sarah T., Tulsa Homeowner</p>
            </div>
            <div className="bg-background p-2 rounded-lg shadow-lg">
              <p className="text-lg font-light mb-1 text-orange-500">"As a business owner in Tulsa, I needed a reliable asphalt contractor for our parking lot renovation. Alexis delivered outstanding results on time and within budget. Their asphalt sealing service has significantly extended the life of our pavement."</p>
              <p className="font-semibold text-orange-600 text-sm">- Mike R., Tulsa Business Owner</p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Recent Blog Posts Section */}
      <ScrollSection className="py-2">
        <RecentBlogPosts />
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-1">
            Ready to start your Tulsa project?
          </h2>
          <p className="text-xl font-light mb-2">
            Whether it's concrete, asphalt, or site preparation, we're here to bring your vision to life in Tulsa and surrounding areas.
          </p>
          <MotionWrapper
            motionTag="a"
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-background text-primary px-4 py-2 rounded-full text-lg font-light tracking-tight"
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
