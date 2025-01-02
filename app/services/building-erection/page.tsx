import { MotionWrapper } from '@/components/motion-wrapper'

export default function BuildingErectionPage() {
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
          Building Erection
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Our building erection services combine precision engineering with skilled craftsmanship. We specialize in constructing sturdy, efficient structures for various commercial and industrial applications.
        </p>
        {/* Add more content here */}
      </div>
    </MotionWrapper>
  )
}
