'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-gray-400 dark:text-gray-500 font-light">
            © {currentYear} Sahil Mane
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
          </div>
          
          <div className="text-xs text-gray-400 dark:text-gray-500 font-light">
            <a href="mailto:sahilmane@example.com" className="hover:opacity-70 transition-opacity">
              sahilmane@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

