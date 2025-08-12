'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Home, Lightbulb, TreePine } from 'lucide-react'

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Leaf, delay: 0, x: '10%', y: '20%' },
    { Icon: Home, delay: 0.5, x: '80%', y: '15%' },
    { Icon: Lightbulb, delay: 1, x: '15%', y: '70%' },
    { Icon: TreePine, delay: 1.5, x: '85%', y: '75%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5 will-change-transform"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} className="text-[#1B6B36]" />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements