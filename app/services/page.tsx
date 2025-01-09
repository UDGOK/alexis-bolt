'use client'

import { MotionWrapper } from "components/MotionWrapper"

export default function ServicesPage() {
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
          Our Services
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Explore our comprehensive range of concrete and asphalt solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionWrapper
              key={service.title}
              motionTag="div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-b from-purple-900/10 to-transparent backdrop-blur-sm border border-purple-500/10 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {service.title}
              </h2>
              <p className="text-gray-400">{service.description}</p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </MotionWrapper>
  )
}

const services = [
  {
    title: "Concrete Solutions",
    description: "Expert concrete services for commercial and residential projects, delivering durability and aesthetics."
  },
  {
    title: "Asphalt Paving",
    description: "Professional asphalt paving and maintenance services for roads, parking lots, and more."
  },
  {
    title: "Infrastructure",
    description: "Comprehensive infrastructure development and maintenance for lasting results."
  },
  {
    title: "Decorative Concrete",
    description: "Enhance your spaces with our decorative concrete solutions, including stamped and colored concrete."
  },
  {
    title: "Concrete Repair",
    description: "Restore and strengthen existing concrete structures with our expert repair services."
  },
  {
    title: "Asphalt Maintenance",
    description: "Extend the life of your asphalt surfaces with our comprehensive maintenance programs."
  }
]
