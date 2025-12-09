'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { 
    id: 1, 
    title: 'Project One', 
    year: '2024',
    categories: 'Web Development, Full Stack',
    subtitle: 'A modern web application'
  },
  { 
    id: 2, 
    title: 'Project Two', 
    year: '2024',
    categories: 'Full Stack, API Development',
    subtitle: 'RESTful API with React frontend'
  },
  { 
    id: 3, 
    title: 'Project Three', 
    year: '2023',
    categories: 'Web Development, UI/UX',
    subtitle: 'Responsive design system'
  },
  { 
    id: 4, 
    title: 'Project Four', 
    year: '2023',
    categories: 'Full Stack, Database Design',
    subtitle: 'E-commerce platform'
  },
  { 
    id: 5, 
    title: 'Project Five', 
    year: '2023',
    categories: 'Web Development, Performance',
    subtitle: 'Optimized web application'
  },
  { 
    id: 6, 
    title: 'Project Six', 
    year: '2022',
    categories: 'Full Stack, Mobile',
    subtitle: 'Cross-platform application'
  },
]

export default function Work() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-20 tracking-tight">Work</h1>
        
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <Link href={`/work/${project.id}`} className="block">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl font-light mb-3 tracking-tight group-hover:opacity-60 transition-opacity">
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
                <div className="w-full h-[500px] md:h-[600px] bg-gray-100 dark:bg-gray-800 overflow-hidden group-hover:opacity-90 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
                    Image Placeholder
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

