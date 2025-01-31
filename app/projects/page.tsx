'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  type: 'image' | 'video'
  src: string
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/projects-tulsa-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Our Projects in Tulsa</h1>
            <p className="text-xl">Transforming the city, one project at a time</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.type === 'image' ? (
                <Image
                  src={project.src}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={project.src}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  muted
                  loop
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                />
              )}
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white text-black p-8 rounded-lg max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.type === 'image' ? (
                <Image
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg mb-4"
                />
              ) : (
                <video
                  src={selectedProject.src}
                  className="w-full h-auto rounded-lg mb-4"
                  controls
                  autoPlay
                  loop
                />
              )}
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

const projects: Project[] = [
  {
    title: "Enclave Commercial",
    description: "A heart of Bixby elite shopping center coming to Bixby, oklahoma",
    type: "image",
    src: "/images/projects-tulsa-1.jpg"
  },
  {
    title: "Full Service Ground Services",
    description: "From shale to agg base to asphalt, we provide comprehensive ground services",
    type: "video",
    src: "/videos/projects-tulsa-1.mp4"
  },
  {
    title: "We do utilities, underground civil, electrical and more",
    description: "Comprehensive services including utilities, underground civil work, and electrical installations",
    type: "image",
    src: "/images/projects-tulsa-2.jpg"
  },
  {
    title: "Perfect Food & Gas",
    description: "Bixby premier Gas Station coming to town, its Sinclair gas with ethanol free fuel in bixby",
    type: "image",
    src: "/images/projects-tulsa-3.jpg"
  },
  {
    title: "Compaction and Moisture Control Testing",
    description: "We do compaction and moisture control testing on ALL of our projects",
    type: "video",
    src: "/videos/projects-tulsa-2.mp4"
  },
  {
    title: "Route 66 Historical Restoration",
    description: "Preserving Tulsa's connection to the Mother Road with period-accurate materials",
    type: "image",
    src: "/images/tulsa-concrete-projects.jpeg"
  }
]
