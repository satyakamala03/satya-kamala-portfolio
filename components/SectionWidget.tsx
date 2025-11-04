'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LucideIcon } from 'lucide-react'

interface SectionWidgetProps {
  icon: LucideIcon
  sectionId: string
  label: string
  delay?: number
  topOffset?: string
}

export default function SectionWidget({ icon: Icon, sectionId, label, delay = 0, topOffset = '50%' }: SectionWidgetProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [showTooltip, setShowTooltip] = useState(false)

  const scrollToSection = () => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="fixed right-8 z-40 hidden lg:block"
      style={{ top: topOffset, transform: 'translateY(-50%)' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.button
        onClick={scrollToSection}
        className="relative p-4 bg-white/90 backdrop-blur-lg rounded-full shadow-xl border-2 border-purple-200 hover:border-pink-400 transition-all group"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(243, 232, 255, 0.9))',
        }}
      >
        <Icon 
          className="text-purple-600 group-hover:text-pink-600 transition-colors" 
          size={24} 
        />
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg"
          >
            {label}
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  )
}

