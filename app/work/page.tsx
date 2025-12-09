'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'

const projects = [
  { 
    id: 1, 
    title: 'Project One', 
    year: '2024',
    categories: 'Web Development, Full Stack',
    subtitle: 'A modern web application',
    link: '' // Add your GitHub repo or project link here
  },
  { 
    id: 2, 
    title: 'Project Two', 
    year: '2024',
    categories: 'Full Stack, API Development',
    subtitle: 'RESTful API with React frontend',
    link: '' // Add your GitHub repo or project link here
  },
  { 
    id: 3, 
    title: 'Project Three', 
    year: '2023',
    categories: 'Web Development, UI/UX',
    subtitle: 'Responsive design system',
    link: '' // Add your GitHub repo or project link here
  },
  { 
    id: 4, 
    title: 'Project Four', 
    year: '2023',
    categories: 'Full Stack, Database Design',
    subtitle: 'E-commerce platform',
    link: '' // Add your GitHub repo or project link here
  },
  { 
    id: 5, 
    title: 'Project Five', 
    year: '2023',
    categories: 'Web Development, Performance',
    subtitle: 'Optimized web application',
    link: '' // Add your GitHub repo or project link here
  },
  { 
    id: 6, 
    title: 'Project Six', 
    year: '2022',
    categories: 'Full Stack, Mobile',
    subtitle: 'Cross-platform application',
    link: '' // Add your GitHub repo or project link here
  },
]

type Project = {
  id: number
  title: string
  year: string
  categories: string
  subtitle: string
  link: string
}

function ProjectImage({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm transition-all duration-300 ${
          isHovered ? 'blur-md scale-105' : 'blur-0 scale-100'
        }`}
      >
        Image Placeholder
      </div>
      
      {/* Cursor Following View Button */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          x: '-50%',
          y: '-50%',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="bg-blue-600 dark:bg-blue-700 px-6 py-3 rounded-sm">
          <span className="text-white text-base md:text-lg font-light tracking-wide whitespace-nowrap">
            View
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Work() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-20 tracking-tight text-gray-900 dark:text-gray-100">Work</h1>
        
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="block">
                <Link href={`/work/${project.id}`} className="block">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6">
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-6xl font-light mb-3 tracking-tight group-hover:opacity-60 transition-opacity text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col md:items-end gap-3 md:min-w-[200px]">
                      <span className="text-sm text-gray-400 dark:text-gray-500 font-light">
                        {project.year}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-light text-left md:text-right">
                        {project.categories}
                      </span>
                    </div>
                  </div>
                </Link>
                <ProjectImage project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

