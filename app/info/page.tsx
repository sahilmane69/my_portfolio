'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHTS = {
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

const setupTextHover = (container: HTMLElement | null, type: 'title') => {
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

export default function Info() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, 'title')

    // Initial fade-in animation
    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll('span')
      gsap.from(spans, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.03,
        ease: 'power2.out',
      })
    }

    return () => {
      cleanupTitle?.()
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden -mt-10">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300">
          {/* Placeholder for background image - you can replace this with an actual image */}
          <div className="w-full h-full opacity-20 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-start justify-center px-6 md:px-12 py-20 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          {/* Large Name Text with Animation */}
          <h1
            ref={titleRef}
            className="text-7xl md:text-9xl lg:text-[12rem] font-light mb-8 tracking-tight leading-none cursor-default inline-block"
          >
            {renderText('Sahil Mane', '', 300)}
          </h1>

          {/* Overlay Text Section */}
          <div className="mt-12 md:mt-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm md:text-base uppercase tracking-wider text-gray-600 dark:text-gray-600 font-light mb-4"
            >
              Full Stack Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl text-gray-900 dark:text-gray-900"
            >
              Building modern web experiences
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl text-gray-700 dark:text-gray-700"
            >
              with clean code and thoughtful design.
            </motion.p>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 md:mt-20 space-y-8 text-base md:text-lg font-light text-gray-600 dark:text-gray-600 max-w-3xl"
            >
              <div className="space-y-4">
                <p>
                  I specialize in creating beautiful and functional web applications using React, Next.js, Node.js, TypeScript, and modern development practices.
                </p>
                <p>
                  My work focuses on creating seamless user experiences with clean code, thoughtful design, and attention to detail.
                </p>
              </div>

              {/* Learning Journey */}
              <div className="pt-8 border-t border-gray-300 dark:border-gray-300">
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 dark:text-gray-900">
                  How I Learned
                </h2>
                <div className="space-y-4">
                  <p>
                    My journey in web development started with curiosity and a drive to build things that matter. I began by learning the fundamentals of HTML, CSS, and JavaScript through online tutorials and hands-on projects.
                  </p>
                  <p>
                    I've learned through a combination of structured courses, building real-world projects, contributing to open source, and constantly staying updated with the latest technologies and best practices. Each project has been a learning opportunity, teaching me new patterns, architectures, and problem-solving approaches.
                  </p>
                  <p>
                    I believe in learning by doing—building projects, breaking things, fixing them, and iterating. This hands-on approach has helped me understand not just how things work, but why they work that way.
                  </p>
                </div>
              </div>

              {/* Resources */}
              <div className="pt-8 border-t border-gray-300 dark:border-gray-300">
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 dark:text-gray-900">
                  Resources & Tools
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-800">
                      Learning Platforms
                    </h3>
                    <p className="text-gray-600 dark:text-gray-600">
                      FreeCodeCamp, MDN Web Docs, JavaScript.info, React Documentation, Next.js Documentation, TypeScript Handbook, and various YouTube channels focused on web development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-800">
                      Development Tools
                    </h3>
                    <p className="text-gray-600 dark:text-gray-600">
                      VS Code, Git & GitHub, Chrome DevTools, Postman, Docker, and various CLI tools. I also use design tools like Figma for UI/UX work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-800">
                      Technologies & Frameworks
                    </h3>
                    <p className="text-gray-600 dark:text-gray-600">
                      React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, Express.js, Tailwind CSS, Framer Motion, GSAP, and various other libraries and frameworks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-gray-800 dark:text-gray-800">
                      Community & Learning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-600">
                      Active participation in developer communities, reading technical blogs, following industry leaders, and contributing to open-source projects have been invaluable in my learning journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

