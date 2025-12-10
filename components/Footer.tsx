'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-light">
            © {currentYear} Sahil Mane
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/sahilmane74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sahilmane69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs font-light opacity-50 hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
          </div>
          
          <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-light">
            <a href="mailto:sahilmanecode@gmail.com" className="hover:opacity-70 transition-opacity">
              sahilmanecode@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

