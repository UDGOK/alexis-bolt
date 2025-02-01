'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { subscribeToNewsletter } from '@/app/actions'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubscriptionStatus('loading')
    try {
      const result = await subscribeToNewsletter(email)
      if (result.success) {
        setSubscriptionStatus('success')
        setStatusMessage(result.message || 'Thank you for subscribing!')
        setEmail('')
      } else {
        throw new Error(result.error || 'Unknown error occurred')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubscriptionStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'An unknown error occurred. Please try again later.')
    }
  }

  return (
    <footer className="w-full py-24 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,auto] gap-16 lg:gap-32">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h2 className="text-[32px] leading-[1.1] font-light">
              Subscribe to the<br />
              Newsletter
            </h2>
            <p className="text-[15px] leading-[1.4] text-[#666666] max-w-[280px]">
              Latest news, musings, announcements and updates direct to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder-white/50 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center h-[52px] px-8 bg-white text-black rounded-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={subscriptionStatus === 'loading'}
              >
                {subscriptionStatus === 'loading' ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="text-green-500">{statusMessage}</p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="text-red-500">{statusMessage}</p>
            )}
          </div>

          {/* Logo Section */}
          <div className="text-2xl font-light lg:text-right">
            
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-[13px] text-[#666666] mb-4">Services</h3>
              <div className="grid gap-[10px]">
                <Link href="/services/concrete" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Concrete
                </Link>
                <Link href="/services/asphalt" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Asphalt
                </Link>
                <Link href="/services/resurfacing" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Resurfacing
                </Link>
                <Link href="/services/excavation" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Excavation
                </Link>
                <Link href="/services/building-erection" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Building Erection
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] text-[#666666] mb-4">Company</h3>
              <div className="grid gap-[10px]">
                <Link href="/about" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/terms" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Privacy
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] text-[#666666] mb-4">Resources</h3>
              <div className="grid gap-[10px]">
                <Link href="/resources/faq" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/resources/technical" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Technical
                </Link>
                <Link href="/resources/downloads" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Downloads
                </Link>
                <Link href="/resources/concrete-calculator" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Concrete Calculator
                </Link>
                <Link href="/resources/asphalt-calculator" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Asphalt Calculator
                </Link>
                <Link href="/resources/rebar-calculator" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Rebar Calculator
                </Link>
                <Link href="/resources/gravel-calculator" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Gravel Calculator
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] text-[#666666] mb-4">Social</h3>
              <div className="grid gap-[10px]">
                <Link href="https://instagram.com" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="https://twitter.com" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="https://linkedin.com" className="text-[15px] text-[#999999] hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[13px] text-[#FF6600]">Alexis Concrete and Asphalt Inc.</p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-[13px] text-[#FF6600]">Copyright 2025. All rights reserved.</p>
            <span className="hidden md:inline text-[#FF6600]">|</span>
            <Link href="/privacy" className="text-[13px] text-[#FF6600] hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
