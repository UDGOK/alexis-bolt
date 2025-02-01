'use client'

import React, { useRef, useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import { ScrollSection } from '../components/ScrollSection'
import { MotionWrapper } from '../components/MotionWrapper'
import CalculatorIcon from '../components/CalculatorIcon'
import RecentBlogPosts from '../components/RecentBlogPosts'
import { LocalBusinessSchema } from '../components/local-business-schema'
import Script from 'next/script'

const features: Array<{
  title: string;
  description: string;
  image: string;
}> = [
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
];

export default function Home() {
  const pageTitle = "Tulsa Concrete & Asphalt Experts | Alexis Concrete & Asphalt"
  const pageDescription = "Premier concrete and asphalt solutions in Tulsa, Norman, Broken Arrow, and surrounding Oklahoma areas. Expert services for driveways, foundations, parking lots, and commercial projects. Serving Tulsa and nearby cities with top-quality construction solutions."
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
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <LocalBusinessSchema
        name="Alexis Concrete & Asphalt"
        description="Premier concrete and asphalt solutions in Tulsa and surrounding Oklahoma areas"
        telephone="+1-918-555-1234"
        address={{
          streetAddress: "123 Main St",
          addressLocality: "Tulsa",
          addressRegion: "OK",
          postalCode: "74103"
        }}
        geo={{
          latitude: 36.1540,
          longitude: -95.9928
        }}
        url="https://www.alexisconcreteandasphalttulsa.com"
        image="/images/alexis-logo-new.png"
        priceRange="$$"
        openingHours={[
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-13:00"
        ]}
      />
      <Script id="schema-services" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alexis Concrete & Asphalt",
            "description": "Premier concrete and asphalt solutions in Tulsa and surrounding Oklahoma areas",
            "url": "https://www.alexisconcreteandasphalttulsa.com",
            "telephone": "+1-918-555-1234",
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
            "areaServed": ["Tulsa", "Norman", "Broken Arrow", "Oklahoma City"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Concrete and Asphalt Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Concrete Services",
                    "description": "Expert concrete solutions for driveways, patios, foundations, and more"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Asphalt Services",
                    "description": "Professional asphalt paving, repair, and maintenance for driveways, parking lots, and roadways"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Site Preparation & Excavation",
                    "description": "Comprehensive site preparation, grading, and excavation services for construction projects"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <main className="relative bg-background text-foreground">
        {/* Hero Section */}
        {/* ... (keep existing hero section code) ... */}

        {/* Feature Section 1 */}
        {/* ... (keep existing feature section 1 code) ... */}

        {/* Feature Section 2 */}
        {/* ... (keep existing feature section 2 code) ... */}

        {/* New Asphalt Section */}
        {/* ... (keep existing new asphalt section code) ... */}

        {/* Feature Grid */}
        <ScrollSection className="py-2">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {features.map((feature) => (
                <MotionWrapper
                  key={feature.title}
                  motionTag="div"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group"
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - ${feature.description} in Tulsa, Oklahoma`}
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
                  <a href={`/services/${feature.title.toLowerCase().replace(' ', '-')}`} className="absolute inset-0 z-10">
                    <span className="sr-only">Learn more about {feature.title} in Tulsa</span>
                  </a>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Calculators Section */}
        {/* ... (keep existing calculators section code) ... */}

        {/* Testimonials Section */}
        {/* ... (keep existing testimonials section code) ... */}

        {/* Recent Blog Posts Section */}
        {/* ... (keep existing recent blog posts section code) ... */}

        {/* CTA Section */}
        {/* ... (keep existing CTA section code) ... */}
      </main>
    </>
  )
        name="Alexis Concrete & Asphalt"
        description="Premier concrete and asphalt solutions in Tulsa and surrounding Oklahoma areas"
        telephone="+1-918-555-1234"
        address={{
          streetAddress: "123 Main St",
          addressLocality: "Tulsa",
          addressRegion: "OK",
          postalCode: "74103"
        }}
        geo={{
          latitude: 36.1540,
          longitude: -95.9928
        }}
        url="https://www.alexisconcreteandasphalttulsa.com"
        image="/images/alexis-logo-new.png"
        priceRange="$$"
        openingHours={[
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-13:00"
        ]}
      />
      <Script id="schema-services" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Concrete and Asphalt Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alexis Concrete & Asphalt"
            },
            "areaServed": ["Tulsa", "Norman", "Broken Arrow", "Oklahoma City"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Concrete and Asphalt Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Concrete Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Asphalt Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Site Preparation & Excavation"
                  }
                }
              ]
            }
          }
        `}
      </Script>
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
          className="z-10 w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(48px,8vw,120px)] font-extralight tracking-[-0.02em] text-primary-foreground leading-[0.9] md:leading-[0.85]">
              Tulsa's Premier<br />Concrete & Asphalt Experts
            </h1>
            <p className="mt-4 text-xl font-light text-primary-foreground/80">
              Top-quality concrete and asphalt solutions for Tulsa, Norman, Broken Arrow, and surrounding Oklahoma areas
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
                <a href="/services/concrete" className="hover:underline">Premium Concrete Solutions in Tulsa</a>
              </h2>
              <p className="text-xl font-light text-muted-foreground">
                Looking for top-notch concrete services in Tulsa? We specialize in premium concrete solutions, including <a href="/services/concrete/driveways" className="text-primary hover:underline">driveways</a>, <a href="/services/concrete/patios" className="text-primary hover:underline">patios</a>, <a href="/services/concrete/foundations" className="text-primary hover:underline">foundations</a>, and more. With years of experience and a commitment to quality, we deliver durable, beautiful results tailored to your needs.
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
                alt="Expert concrete pouring process by Alexis Concrete & Asphalt for premium solutions in Tulsa, Oklahoma"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <a href="/services/concrete" className="absolute inset-0 z-10">
                <span className="sr-only">Learn more about our concrete services in Tulsa</span>
              </a>
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
                alt="Professional site preparation and concrete footings by Alexis Concrete & Asphalt in Tulsa, Oklahoma"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <a href="/services/site-preparation" className="absolute inset-0 z-10">
                <span className="sr-only">Learn more about our site preparation services in Tulsa</span>
              </a>
            </MotionWrapper>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-primary">
                <a href="/services/site-preparation" className="hover:underline">Site Preparation & Excavation</a>
              </h2>
              <p className="text-xl font-light text-secondary-foreground/70">
                From initial <a href="/services/site-preparation/groundwork" className="text-primary hover:underline">groundwork</a> to final <a href="/services/site-preparation/grading" className="text-primary hover:underline">grading</a>, our fleet of modern equipment and skilled operators ensure your project starts with a solid foundation. Start your project on the right foundation with our professional site preparation and excavation services in Tulsa, OK.
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
                <a href="/services/asphalt" className="hover:underline">Tulsa Asphalt Experts</a>
              </h2>
              <p className="text-xl font-light text-muted-foreground">
                As Tulsa's premier asphalt contractors, we deliver top-quality asphalt solutions for <a href="/services/asphalt/driveways" className="text-primary hover:underline">driveways</a>, <a href="/services/asphalt/parking-lots" className="text-primary hover:underline">parking lots</a>, and <a href="/services/asphalt/roadways" className="text-primary hover:underline">roadways</a>. Our expertise in asphalt paving, repair, and maintenance ensures long-lasting, smooth surfaces that withstand Tulsa's diverse weather conditions.
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
                alt="Expert asphalt paving services by Alexis Concrete & Asphalt in Tulsa, Oklahoma"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <a href="/services/asphalt" className="absolute inset-0 z-10">
                <span className="sr-only">Learn more about our asphalt paving services in Tulsa</span>
              </a>
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
                  alt={`${feature.title} - ${feature.description} in Tulsa, Oklahoma`}
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
                <a href={`/services/${feature.title.toLowerCase().replace(' ', '-')}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Learn more about {feature.title} in Tulsa</span>
                </a>
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

const features: Array<{
  title: string;
  description: string;
  image: string;
}> = [
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
];
