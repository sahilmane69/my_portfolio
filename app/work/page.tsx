'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  { 
    id: 1, 
    title: 'Analyze your resume with AI', 
    year: '2024',
    categories: 'get instant feedback on structure, tone, content, and ATS (Applicant Tracking System) compatibility.',
    subtitle: 'A modern web application',
    link: 'https://github.com/sahilmane69/ai-resume-analyzer',
    image: 'app\projectimg\p1.png' // Add your project images here
  },
  { 
    id: 2, 
    title: 'Project Two', 
    year: '2024',
    categories: 'Full Stack, API Development',
    subtitle: 'RESTful API with React frontend',
    link: '',
    image: '/project-2.jpg'
  },
  { 
    id: 3, 
    title: 'Project Three', 
    year: '2023',
    categories: 'Web Development, UI/UX',
    subtitle: 'Responsive design system',
    link: '',
    image: '/project-3.jpg'
  },
  { 
    id: 4, 
    title: 'Project Four', 
    year: '2023',
    categories: 'Full Stack, Database Design',
    subtitle: 'E-commerce platform',
    link: '',
    image: '/project-4.jpg'
  },
  { 
    id: 5, 
    title: 'Project Five', 
    year: '2023',
    categories: 'Web Development, Performance',
    subtitle: 'Optimized web application',
    link: '',
    image: '/project-5.jpg'
  },
  { 
    id: 6, 
    title: 'Project Six', 
    year: '2022',
    categories: 'Full Stack, Mobile',
    subtitle: 'Cross-platform application',
    link: '',
    image: '/project-6.jpg'
  },
]

type Project = {
  id: number
  title: string
  year: string
  categories: string
  subtitle: string
  link: string
  image: string
}

export default function Work() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Register ScrollTrigger only on client side
    gsap.registerPlugin(ScrollTrigger)

    const cardWrappers = gsap.utils.toArray('.card-wrapper') as HTMLElement[]
    const cards = gsap.utils.toArray('.card') as HTMLElement[]

    cardWrappers.forEach((wrapper, i) => {
      const card = cards[i]
      if (!card) return

      let scale = 1
      let rotation = 0

      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i
        rotation = -10
      }

      gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: `top ${60 + 10 * i}`,
          end: 'bottom 550',
          endTrigger: '.wrapper',
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
          id: `${i + 1}`,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleCardClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div ref={wrapperRef} className="wrapper min-h-[100vh] pt-6 md:pt-12 pb-8 md:pb-12">
        <div ref={cardsRef} className="cards w-full max-w-[750px] mx-auto px-4 md:px-6 lg:px-8 md:w-[85%] lg:w-[75%]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 md:mb-20 tracking-tight text-gray-900 dark:text-gray-100 px-2">Work</h1>
          
          {projects.map((project, index) => (
            <div key={project.id} className="card-wrapper w-full mb-8 md:mb-12 last:mb-0" style={{ perspective: '500px' }}>
              <div 
                className="card w-full h-[350px] sm:h-[400px] md:h-[500px] flex flex-col justify-center items-center rounded-3xl cursor-pointer relative overflow-hidden shadow-2xl border border-gray-300/10 dark:border-gray-700/20"
                onClick={() => handleCardClick(project)}
                style={{
                  backgroundImage: project.image ? `url(${project.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Professional gradient overlay - better colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-900/85 to-black/90 dark:from-black/90 dark:via-slate-950/85 dark:to-gray-950/90"></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center px-4 md:px-6 text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 tracking-tight">{project.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 md:mb-2 font-light">{project.year}</p>
                  <p className="text-xs md:text-sm text-gray-400 font-light mb-2">{project.categories}</p>
                  {project.subtitle && (
                    <p className="text-sm md:text-base lg:text-lg text-gray-200 mt-3 md:mt-4 font-light px-2">{project.subtitle}</p>
                  )}
                  <div className="mt-4 md:mt-6">
                    <span className="text-xs md:text-sm text-gray-400 font-light">Click to view →</span>
                  </div>
                </div>

                {/* View Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 rounded-3xl">
                  <span className="text-white text-lg md:text-xl lg:text-2xl font-light">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="spacer min-h-[30vh] md:min-h-[40vh]"></div>
    </div>
  )
}

