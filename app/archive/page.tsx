'use client'

import { motion } from 'framer-motion'

const archiveItems = [
  { id: 1, title: 'Archive Project 1', year: '2024', type: 'Web App' },
  { id: 2, title: 'Archive Project 2', year: '2024', type: 'Mobile App' },
  { id: 3, title: 'Archive Project 3', year: '2023', type: 'Web App' },
  { id: 4, title: 'Archive Project 4', year: '2023', type: 'Full Stack' },
]

export default function Archive() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-16 tracking-tight">Archive</h1>
        
        <div className="space-y-8">
          {archiveItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-light mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

