'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/work', label: 'Work' },
    { href: '/archive', label: 'Archive' },
    { href: '/info', label: 'Info' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient Background - #181818 to black gradient for dark mode */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-gray-200/95 via-gray-300/95 to-gray-200/95 dark:from-[#181818]/95 dark:via-black/95 dark:to-[#181818]/95 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-md'
        }`}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-10 py-3">
          <Link href="/" className="text-sm font-light tracking-tight hover:opacity-70 transition-opacity">
            Sahil Mane
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-light transition-opacity ${
                  pathname === item.href
                    ? 'opacity-100'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="theme-toggle opacity-50 hover:opacity-100 transition-opacity w-5 h-5 flex items-center justify-center"
                type="button"
                title="Toggle theme"
                aria-label="Toggle theme"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className={`theme-toggle__around ${theme === 'dark' ? 'theme-toggle__around--dark' : 'theme-toggle__around--light'}`}
                  viewBox="0 0 32 32"
                >
                  <clipPath id="theme-toggle__around__cutout">
                    <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
                  </clipPath>
                  <g clipPath="url(#theme-toggle__around__cutout)">
                    <circle cx="16" cy="16" r="8.4" />
                    <g>
                      <circle cx="16" cy="3.3" r="2.3" />
                      <circle cx="27" cy="9.7" r="2.3" />
                      <circle cx="27" cy="22.3" r="2.3" />
                      <circle cx="16" cy="28.7" r="2.3" />
                      <circle cx="5" cy="22.3" r="2.3" />
                      <circle cx="5" cy="9.7" r="2.3" />
                    </g>
                  </g>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

