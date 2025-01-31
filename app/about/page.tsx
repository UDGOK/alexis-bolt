'use client'

import Image from 'next/image'
import { ScrollSection } from '@components/scroll-section'
import { MotionWrapper } from '@components/motion-wrapper'
import { ParallaxSection } from '@components/parallax-section'
import { RotatingCube } from '@components/rotating-cube'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <ParallaxSection bgImage="/images/hero-bg.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Shaping the Future of Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-light"
          >
            Innovating in concrete and asphalt solutions for a sustainable tomorrow
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Mission Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl font-light text-white/70">
                To revolutionize the construction industry through innovative solutions, sustainable practices, and unwavering commitment to quality. We aim to build not just structures, but a better future for communities.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/mission.jpg"
                alt="Innovative construction site"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Values Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16">
            Our Core Values
          </h2>
          <div className="flex justify-center">
            <RotatingCube values={values} />
          </div>
        </div>
      </ScrollSection>

      {/* Team Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-2">
                  {member.name}
                </h3>
                <p className="text-white/70 font-light">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* History Section */}
      <ParallaxSection bgImage="/images/history-bg.jpg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-12">
            {history.map((event, index) => (
              <motion.div
                key={event.year}
                className="flex items-center space-x-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-2xl font-light">
                  {event.year}
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">{event.title}</h3>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
            Ready to build the future together?
          </h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-light tracking-tight transition-colors duration-300 hover:bg-gray-200"
          >
            Let's Connect
          </motion.a>
        </div>
      </ScrollSection>
    </main>
  )
}

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries to find better solutions and more efficient methods in construction.",
  },
  {
    title: "Quality",
    description: "Executing every project with the highest standards of craftsmanship and attention to detail.",
  },
  {
    title: "Sustainability",
    description: "Committed to environmentally conscious practices and sustainable construction methods.",
  },
  {
    title: "Safety",
    description: "Prioritizing the well-being of our team and clients in everything we do.",
  },
  {
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our business relationships.",
  },
  {
    title: "Excellence",
    description: "Striving for excellence in every aspect of our work, from planning to execution.",
  },
]

const team = [
  {
    name: "Francisco Rodriguez",
    role: "CEO & Founder",
    image: "https://source.unsplash.com/featured/?construction,worker",
  },
  {
    name: "Horay Rodriguez",
    role: "Operations Director",
    image: "https://source.unsplash.com/featured/?engineer,woman",
  },
  {
    name: "Kako (HULK)",
    role: "Technical Director",
    image: "https://source.unsplash.com/featured/?construction,manager",
  },
]

const history = [
  {
    year: 1995,
    title: "Foundation",
    description: "Alexis Construction was founded with a vision to revolutionize the construction industry.",
  },
  {
    year: 2005,
    title: "Expansion",
    description: "We expanded our services to include asphalt solutions, becoming a full-service construction company.",
  },
  {
    year: 2010,
    title: "Sustainability Initiative",
    description: "Launched our green construction program, focusing on environmentally friendly practices.",
  },
  {
    year: 2015,
    title: "Innovation Center",
    description: "Opened our state-of-the-art innovation center to develop cutting-edge construction technologies.",
  },
  {
    year: 2020,
    title: "Global Reach",
    description: "Expanded our operations internationally, taking on projects across multiple continents.",
  },
  {
    year: 2025,
    title: "Future Forward",
    description: "Continuing to lead the industry in adopting AI and robotics in construction processes.",
  },
]
