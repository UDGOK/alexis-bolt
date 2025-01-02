'use client'

import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { MotionWrapper } from '@/components/motion-wrapper'

interface Asset {
  title: string
  description: string
  imageUrl: string
  downloadUrl: string
  type: string
}

const assets: Asset[] = [
  {
    title: "AC&A Logo",
    description: "Primary logo in various formats",
    imageUrl: "/placeholder.webp?height=400&width=600",
    downloadUrl: "#",
    type: "ZIP"
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand style guide",
    imageUrl: "/placeholder.webp?height=400&width=600",
    downloadUrl: "#",
    type: "ZIP"
  },
  {
    title: "Project Photos",
    description: "High-resolution project images",
    imageUrl: "/placeholder.webp?height=400&width=600",
    downloadUrl: "#",
    type: "ZIP"
  },
  {
    title: "Company Overview",
    description: "Detailed company information",
    imageUrl: "/placeholder.webp?height=400&width=600",
    downloadUrl: "#",
    type: "PDF"
  }
]

function AssetCard({ asset }: { asset: Asset }) {
  return (
    <MotionWrapper
      motionTag="div"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="aspect-[3/2] mb-8 overflow-hidden bg-black/5 rounded-sm">
        <img
          src={asset.imageUrl}
          alt={asset.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[16px] mb-2 text-black font-normal">{asset.title}</h3>
          <p className="text-[14px] text-[#666666]">{asset.description}</p>
        </div>
        <motion.a
          href={asset.downloadUrl}
          download
          className="flex items-center justify-center w-12 h-12 bg-black rounded-full text-white shrink-0 group/button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="w-5 h-5 transition-transform group-hover/button:-translate-y-0.5" />
        </motion.a>
      </div>
    </MotionWrapper>
  )
}

export default function MediaKitPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <MotionWrapper
          motionTag="div"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-[48px] leading-[1.1] font-light mb-6 text-black">
            Media Kit
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#666666] max-w-[460px]">
            Download official AC&A logos, brand guidelines, and media assets for proper usage in publications and marketing materials.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {assets.map((asset) => (
            <AssetCard key={asset.title} asset={asset} />
          ))}
        </div>

        <MotionWrapper
          motionTag="div"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 max-w-[460px]"
        >
          <h2 className="text-[16px] text-black mb-3 font-normal">Need something else?</h2>
          <p className="text-[14px] text-[#666666] mb-8">
            If you need additional materials or have specific requests, please don't hesitate to reach out to our team.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center h-[52px] px-8 bg-black text-white rounded-full text-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us
          </motion.a>
        </MotionWrapper>
      </div>
    </main>
  )
}
