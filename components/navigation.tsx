'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MotionWrapper } from './motion-wrapper'
import { Menu, X, Building, HardHat, Paintbrush, Hammer, Info, FileText, HelpCircle, Image as ImageIcon, Download, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  {
    name: 'Services',
    items: [
      { name: 'Concrete Services', href: '/services/concrete', icon: <Building className="w-5 h-5" /> },
      { name: 'Asphalt Services', href: '/services/asphalt', icon: <HardHat className="w-5 h-5" /> },
      { name: 'Resurfacing', href: '/services/resurfacing', icon: <Paintbrush className="w-5 h-5" /> },
      { name: 'Building Erection', href: '/services/building-erection', icon: <Hammer className="w-5 h-5" /> },
    ],
  },
  {
    name: 'Company',
    items: [
      { name: 'About', href: '/about', icon: <Info className="w-5 h-5" /> },
      { name: 'Projects', href: '/projects', icon: <FileText className="w-5 h-5" /> },
      { name: 'Terms', href: '/terms', icon: <FileText className="w-5 h-5" /> },
    ],
  },
  {
    name: 'Resources',
    items: [
      { name: 'FAQ', href: '/resources/faq', icon: <HelpCircle className="w-5 h-5" /> },
      { name: 'Technical', href: '/resources/technical', icon: <FileText className="w-5 h-5" /> },
      { name: 'Concrete Calculator', href: '/resources/concrete-calculator', icon: <FileText className="w-5 h-5" /> },
      { name: 'Rebar Calculator', href: '/resources/rebar-calculator', icon: <FileText className="w-5 h-5" /> },
      { name: 'Gravel Calculator', href: '/resources/gravel-calculator', icon: <FileText className="w-5 h-5" /> },
    ],
  },
  {
    name: 'Contact',
    items: [
      { name: 'Contact Us', href: '/contact', icon: <Mail className="w-5 h-5" /> },
    ],
  },
]

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const announcementBanner = document.getElementById('announcement-banner')
      const bannerHeight = announcementBanner ? announcementBanner.offsetHeight : 0
      setBannerHeight(bannerHeight)
      setIsScrolled(window.scrollY > bannerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
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
      className={`fixed left-0 right-0 z-40 transition-all duration-300`}
      style={{ top: isScrolled ? 0 : `${bannerHeight}px` }}
    >
      <nav className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="bg-background py-4 px-6">
            <Link href="/" className="relative h-24 w-72 block">
              <Image
                src="/images/alexis-logo-new.png"
                alt="Alexis Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <div className={`py-4 px-6 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-secondary text-primary-foreground'
              : 'bg-background text-secondary'
          }`}>
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
                    className={`text-base font-bold tracking-wide uppercase ${
                      isScrolled || isMobileMenuOpen
                        ? 'text-primary-foreground hover:text-primary-foreground'
                        : 'text-secondary hover:text-secondary'
                    } transition-colors`}
                  >
                    {item.name}
                  </button>
                  <MotionWrapper
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activeMenu === item.name ? 1 : 0,
                      y: activeMenu === item.name ? 0 : 10 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-full pt-2"
                  >
                    {activeMenu === item.name && (
                      <div className="bg-secondary/90 backdrop-blur-md py-6 px-4 min-w-[260px] rounded-md shadow-lg">
                        <motion.div className="flex flex-col gap-2">
                          {item.items.map((subItem, index) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                              <Link
                                href={subItem.href}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide uppercase text-primary-foreground hover:bg-primary/10 rounded-md transition-all duration-200 ease-in-out ${
                                  pathname === subItem.href ? 'bg-primary/20 text-primary' : ''
                                }`}
                              >
                                <motion.div
                                  initial={{ scale: 1 }}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {subItem.icon}
                                </motion.div>
                                <span>{subItem.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </MotionWrapper>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled || isMobileMenuOpen
                ? 'text-primary-foreground hover:text-primary-foreground'
                : 'text-secondary hover:text-secondary'
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
              className="fixed inset-0 bg-secondary z-50 md:hidden"
              style={{ top: '0' }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 pt-8">
                  <Link
                    href="/"
                    className="relative h-24 w-72 text-primary-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/alexis-logo-new.png"
                      alt="Alexis Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground hover:text-primary-foreground transition-colors"
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
                        className="text-2xl font-bold tracking-wide uppercase mb-6 text-primary-foreground hover:text-primary transition-colors"
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
                              className="text-lg font-medium tracking-wide uppercase text-primary-foreground/70 hover:text-primary transition-colors"
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
