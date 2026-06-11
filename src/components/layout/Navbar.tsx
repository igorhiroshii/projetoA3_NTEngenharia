'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/certificacoes', label: 'Certificações' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY.current && currentScrollY > 80 && !mobileOpen) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navBg =
    scrolled || !isHome
      ? 'bg-white shadow-md'
      : 'bg-transparent'

  const linkColor =
    scrolled || !isHome ? 'text-gray-800' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logo/logo-nt-color.png"
              alt="NT Engenharia"
              width={220}
              height={56}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${linkColor} ${
                    active
                      ? 'text-nt-teal font-semibold'
                      : 'hover:text-nt-teal'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-nt-teal text-white rounded-lg text-sm font-semibold hover:bg-nt-teal-dark transition-colors duration-200"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md ${linkColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                      active
                        ? 'bg-nt-teal/10 text-nt-teal font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-nt-teal'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="https://wa.me/5511982612500?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-nt-teal text-white rounded-lg text-sm font-semibold text-center hover:bg-nt-teal-dark transition-colors duration-200"
              >
                Fale Conosco no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
