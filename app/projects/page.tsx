'use client'

import { MotionWrapper } from '@/components/MotionWrapper'

export default function ProjectsPage() {
  return (
    <MotionWrapper
      motionTag="main"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Projects
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Discover our portfolio of successful concrete and asphalt projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper
              key={project.title}
              motionTag="div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </MotionWrapper>
  )
}

const projects = [
  {
    title: "Commercial Plaza",
    description: "Modern concrete solutions for a shopping complex",
    image: "/placeholder.webp?height=400&width=600"
  },
  {
    title: "Highway Extension",
    description: "Major asphalt paving project for city infrastructure",
    image: "/placeholder.webp?height=400&width=600"
  },
  {
    title: "Residential Development",
    description: "Complete concrete and asphalt solutions for housing community",
    image: "/placeholder.webp?height=400&width=600"
  },
  {
    title: "Industrial Park",
    description: "Heavy-duty concrete flooring for manufacturing facilities",
    image: "/placeholder.webp?height=400&width=600"
  },
  {
    title: "Airport Runway",
    description: "High-performance asphalt paving for aviation infrastructure",
    image: "/placeholder.webp?height=400&width=600"
  },
  {
    title: "Urban Renewal",
    description: "Revitalizing city streets with decorative concrete and asphalt designs",
    image: "/placeholder.webp?height=400&width=600"
  }
]
