'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MotionWrapper } from './motion-wrapper'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CalculatorIcon, { CalculatorIconProps } from './CalculatorIcon'

type MenuItem = {
  name: string;
  items: {
    name: string;
    href: string;
    icon: CalculatorIconProps['name'];
  }[];
};

const menuItems: MenuItem[] = [
  {
    name: 'Services',
    items: [
      { name: 'Concrete Services', href: '/services/concrete', icon: 'concrete' },
      { name: 'Asphalt Services', href: '/services/asphalt', icon: 'asphalt' },
      { name: 'Resurfacing', href: '/services/resurfacing', icon: 'resurfacing' },
      { name: 'Building Erection', href: '/services/building-erection', icon: 'building' },
      { name: 'Excavation Services', href: '/services/excavation', icon: 'excavation' },
      { name: 'Heavy Civil Contracting', href: '/services/heavy-civil-contracting', icon: 'technical' },
    ],
  },
  {
    name: 'Company',
    items: [
      { name: 'About', href: '/about', icon: 'building' },
      { name: 'Projects', href: '/projects', icon: 'technical' },
      { name: 'Media', href: '/company/media', icon: 'downloads' },
      { name: 'Terms', href: '/terms', icon: 'technical' },
    ],
  },
  {
    name: 'Resources',
    items: [
      { name: 'FAQ', href: '/resources/faq', icon: 'faq' },
      { name: 'Technical', href: '/resources/technical', icon: 'technical' },
      { name: 'Downloads', href: '/resources/downloads', icon: 'downloads' },
      { name: 'Concrete Calculator', href: '/resources/concrete-calculator', icon: 'concrete' },
      { name: 'Asphalt Calculator', href: '/resources/asphalt-calculator', icon: 'asphalt' },
      { name: 'Rebar Calculator', href: '/resources/rebar-calculator', icon: 'rebar' },
      { name: 'Gravel Calculator', href: '/resources/gravel-calculator', icon: 'gravel' },
    ],
  },
]

const blogMenuItem = { name: 'Blog', href: '/blog', icon: 'technical' };
const contactMenuItem = { name: 'Contact', href: '/contact', icon: 'technical' };

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
              ? 'bg-primary text-primary-foreground'
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
                    className={`text-xl font-bold tracking-wide uppercase ${
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
                      <div className="bg-primary/90 backdrop-blur-md py-6 px-4 min-w-[300px] rounded-md shadow-lg">
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
                                className={`flex items-center gap-3 px-4 py-3 text-lg font-medium tracking-wide uppercase text-secondary hover:bg-primary-foreground/10 rounded-md transition-all duration-200 ease-in-out ${
                                  pathname === subItem.href ? 'bg-primary-foreground/20 text-secondary' : ''
                                }`}
                              >
                                <motion.div
                                  initial={{ scale: 1 }}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <CalculatorIcon name={subItem.icon} className="w-6 h-6" />
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
              <Link
                href={blogMenuItem.href}
                className={`text-xl font-bold tracking-wide uppercase ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-primary-foreground hover:text-primary-foreground'
                    : 'text-secondary hover:text-secondary'
                } transition-colors`}
              >
                {blogMenuItem.name}
              </Link>
              <Link
                href={contactMenuItem.href}
                className={`text-xl font-bold tracking-wide uppercase ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-primary-foreground hover:text-primary-foreground'
                    : 'text-secondary hover:text-secondary'
                } transition-colors`}
              >
                {contactMenuItem.name}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled || isMobileMenuOpen
                ? 'text-primary-foreground hover:text-primary-foreground'
                : 'text-secondary hover:text-secondary'
            } transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-10 w-10" />
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
              className="fixed inset-0 bg-primary z-50 md:hidden"
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
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-8 w-8" />
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
                        className="text-3xl font-bold tracking-wide uppercase mb-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
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
                              className="flex items-center gap-3 text-xl font-medium tracking-wide uppercase text-secondary hover:text-secondary/80 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <CalculatorIcon name={subItem.icon} className="w-6 h-6" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-6">
                    <Link
                      href={blogMenuItem.href}
                      className="text-3xl font-bold tracking-wide uppercase text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {blogMenuItem.name}
                    </Link>
                    <Link
                      href={contactMenuItem.href}
                      className="text-3xl font-bold tracking-wide uppercase text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {contactMenuItem.name}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
