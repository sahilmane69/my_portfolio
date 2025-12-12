'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function LoaderOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.from(textRef.current, {
      opacity: 0,
      y: 24,
      scale: 0.98,
      duration: 0.9,
      ease: 'power3.out',
    })
      .to(textRef.current, {
        opacity: 0,
        y: -18,
        scale: 1.02,
        duration: 0.7,
        delay: 0.3,
        ease: 'power2.inOut',
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete: () => setIsHidden(true),
        },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  if (isHidden) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
    >
      <div ref={textRef} className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 dark:text-white">
        Hello
      </div>
    </div>
  )
}

