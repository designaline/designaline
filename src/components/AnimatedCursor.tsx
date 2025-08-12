'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]')
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return interactiveElements
    }

    const interactiveElements = addListeners()
    window.addEventListener('mousemove', updateMousePosition)

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      const newElements = addListeners()
      newElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      observer.disconnect()
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#1B6B36] rounded-full pointer-events-none z-50 mix-blend-difference will-change-transform"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#1B6B36]/30 rounded-full pointer-events-none z-40 will-change-transform"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  )
}

export default AnimatedCursor