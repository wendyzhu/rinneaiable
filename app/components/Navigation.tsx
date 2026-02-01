'use client'

import { useEffect } from 'react'

export default function Navigation() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">            
            <img src="/images/ra-icon2.jpg" alt="RINNE AIABLE LLC Logo" 
              className="mx-auto mb-2 max-w-xs"
              width={200} height={60} />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#why" className="hover:text-blue-400 transition-colors">Why Us</a>
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
