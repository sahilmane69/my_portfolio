'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 300, max: 700, default: 300 },
}

const renderText = (text: string, className: string, baseWeight: number = 300) =>
  Array.from(text).map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontWeight: baseWeight,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

const setupTextHover = (container: HTMLElement | null, type: 'subtitle' | 'title') => {
  if (!container) return

  const letters = container.querySelectorAll('span')
  const { min, max, default: base } = FONT_WEIGHTS[type]

  const animateLetters = (letter: Element, weight: number, duration: number = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontWeight: weight,
    })
  }

  const handleMouseMove = (event: MouseEvent) => {
    const containerRect = container.getBoundingClientRect()
    const containerLeft = containerRect.left
    const mouseX = event.clientX - containerLeft

    letters.forEach((letter) => {
      const rect = (letter as HTMLElement).getBoundingClientRect()
      const left = rect.left - containerLeft
      const width = rect.width
      const center = left + width / 2
      const distance = Math.abs(mouseX - center)
      const intensity = Math.exp(-(distance ** 2) / 20000)
      const weight = min + (max - min) * intensity

      animateLetters(letter, weight)
    })
  }

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter, base)
    })
  }

  container.addEventListener('mousemove', handleMouseMove)
  container.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    container.removeEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseleave', handleMouseLeave)
  }
}

export default function Home() {
  const [time, setTime] = useState('')
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12
      setTime(`${displayHours}:${minutes}:${seconds} ${ampm}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, 'title')
    const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle')

    // Initial fade-in animation
    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll('span')
      gsap.from(spans, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.03,
        ease: 'power2.out',
      })
    }

    if (subtitleRef.current) {
      const spans = subtitleRef.current.querySelectorAll('span')
      gsap.from(spans, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
      })
    }

    return () => {
      cleanupTitle?.()
      cleanupSubtitle?.()
    }
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image - only visible in dark mode */}
      <div className="absolute inset-0 z-0 hero-background">
        {/* Dark mode overlay - darker gradient for better text readability */}
        <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-b dark:from-black/50 dark:via-black/60 dark:to-black/70 transition-all duration-700"></div>
      </div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl mb-6 font-light cursor-default text-gray-600 dark:text-gray-200 dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-colors duration-700"
        >
          {renderText('Full Stack Developer', '', 100)}
        </p>
        
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-light mb-8 tracking-tight cursor-default inline-block text-gray-900 dark:text-white dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] transition-colors duration-700"
        >
          {renderText('Sahil Mane', '', 300)}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm font-mono text-gray-500 dark:text-gray-300 dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] transition-colors duration-700"
        >
          {time}
        </motion.div>
      </motion.div>
    </div>
  )
}

