'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MotionWrapper } from './motion-wrapper'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  {
    name: 'Services',
    items: [
      { name: 'Concrete Services', href: '/services/concrete' },
      { name: 'Asphalt Services', href: '/services/asphalt' },
      { name: 'Resurfacing', href: '/services/resurfacing' },
      { name: 'Building Erection', href: '/services/building-erection' },
    ],
  },
  {
    name: 'Company',
    items: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Terms', href: '/terms' },
    ],
  },
  {
    name: 'Resources',
    items: [
      { name: 'Support', href: '/support' },
      { name: 'Media Kit', href: '/media-kit' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Newsletter', href: '/newsletter' },
    ],
  },
]

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const pathname = usePathname()
  const isLightBackground = ['/media-kit'].includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 100)
  }

  return (
    <header
      className={`fixed top-[42px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black text-white'
          : isLightBackground
          ? 'bg-white text-black'
          : 'bg-transparent text-white'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`relative h-12 w-32 ${isLightBackground && !isScrolled && !isMobileMenuOpen ? 'text-black' : 'text-white'}`}>
            <div className="relative h-12 w-32">
              <Image
                src="/images/alexis-logo-small.png"
                alt="Alexis Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-sm font-light tracking-tight ${
                    isLightBackground && !isScrolled && !isMobileMenuOpen
                      ? 'text-black/70 hover:text-black'
                      : 'text-white/70 hover:text-white'
                  } transition-colors`}
                >
                  {item.name}
                </button>
                <MotionWrapper
                  motionTag="div"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeMenu === item.name ? 1 : 0,
                    y: activeMenu === item.name ? 0 : 10 
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-2"
                >
                  {activeMenu === item.name && (
                    <div className="bg-black py-4 min-w-[180px] flex flex-col gap-3">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`px-4 text-sm font-light tracking-tight text-white/40 hover:text-white transition-colors ${
                            pathname === subItem.href ? 'text-white' : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </MotionWrapper>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isLightBackground && !isScrolled && !isMobileMenuOpen
                ? 'text-black/70 hover:text-black'
                : 'text-white/70 hover:text-white'
            } transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-50 md:hidden"
              style={{ top: '0' }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 pt-8">
                  <Link 
                    href="/" 
                    className="relative h-12 w-32 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/alexis-logo-small.png"
                      alt="Alexis Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <motion.div 
                  className="flex-1 overflow-auto px-6 py-8"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  {menuItems.map((item) => (
                    <div key={item.name} className="mb-8">
                      <button
                        className="text-2xl font-extralight tracking-tight mb-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                      >
                        {item.name}
                      </button>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: activeMenu === item.name ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-lg font-extralight tracking-tight text-white/40 hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
