'use client'

import Image from 'next/image'
import { ScrollSection } from 'components/scroll-section'
import { MotionWrapper } from 'components/motion-wrapper'

export default function AboutPage() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
              Building the future of construction and infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light">
              We're a team of dedicated professionals committed to delivering excellence in concrete and asphalt solutions.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Mission Section */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl font-light text-white/70">
                To revolutionize the construction industry through innovative solutions, sustainable practices, and unwavering commitment to quality.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Construction site"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Values Section */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <MotionWrapper
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5"
              >
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-white/70 font-light">
                  {value.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Team Section */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <MotionWrapper
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-2">
                  {member.name}
                </h3>
                <p className="text-white/70 font-light">
                  {member.role}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* History Section */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:order-last">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Company history"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                Our History
              </h2>
              <p className="text-xl font-light text-white/70">
                Since our founding, we've been at the forefront of construction innovation, continuously evolving our techniques and expanding our expertise to meet the changing needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
            Ready to work with us?
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

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to find better solutions and more efficient methods in construction.",
  },
  {
    title: "Quality",
    description: "Every project is executed with the highest standards of craftsmanship and attention to detail.",
  },
  {
    title: "Sustainability",
    description: "We're committed to environmentally conscious practices and sustainable construction methods.",
  },
  {
    title: "Safety",
    description: "The well-being of our team and clients is paramount in everything we do.",
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business relationships.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, from planning to execution.",
  },
]

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Brown",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Wilson",
    role: "Safety Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Lisa Martinez",
    role: "Quality Control Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
]
