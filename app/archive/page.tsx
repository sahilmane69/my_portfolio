'use client'

import { motion } from 'framer-motion'

const archiveItems = [
  { id: 1, title: 'Archive Project 1', year: '2024', type: 'Web App', description: 'A comprehensive web application with modern features' },
  { id: 2, title: 'Archive Project 2', year: '2024', type: 'Mobile App', description: 'Cross-platform mobile application' },
  { id: 3, title: 'Archive Project 3', year: '2023', type: 'Web App', description: 'Responsive web application with advanced functionality' },
  { id: 4, title: 'Archive Project 4', year: '2023', type: 'Full Stack', description: 'Complete full stack solution with backend and frontend' },
]

export default function Archive() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 md:py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-12 md:mb-20 tracking-tight text-gray-900 dark:text-gray-100">Archive</h1>
        
        <div className="space-y-6 md:space-y-8">
          {archiveItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-950/50 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors border border-gray-200/50 dark:border-gray-800/50">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-gray-100 group-hover:opacity-70 transition-opacity">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-light">{item.year}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 font-light uppercase tracking-wider">
                    {item.type}
                  </p>
                  {item.description && (
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

