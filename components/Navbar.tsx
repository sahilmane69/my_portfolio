'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '/work', label: 'Work' },
    { href: '/archive', label: 'Archive' },
    { href: '/info', label: 'Info' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient Background - Red gradient for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/95 via-gray-300/95 to-gray-200/95 dark:from-black/95 dark:via-red-950/95 dark:to-black/95 backdrop-blur-2xl"></div>
      
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
                className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

