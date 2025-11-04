'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #dbeafe 100%)' }}>
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight pb-2">
                <span 
                  className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent" 
                  style={{ 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text', 
                    color: '#9333ea',
                    backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899, #2563eb)',
                    lineHeight: '1.1',
                    paddingBottom: '0.2em'
                  }}
                >
                  Satya Kamala
                </span>
                <br />
                <span 
                  className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" 
                  style={{ 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text', 
                    color: '#2563eb',
                    backgroundImage: 'linear-gradient(to right, #2563eb, #9333ea, #ec4899)',
                    lineHeight: '1.1',
                    paddingBottom: '0.2em'
                  }}
                >
                  Immidisetty
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                Full Stack Developer | AI Enthusiast
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl leading-relaxed font-trustDisplay font-semibold">
                Hello! I'm Satya, a full stack developer turning complex problems into elegant solutions with the right amount of code and creativity.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed font-dancing font-semibold">
                I've worked on products across fintech, logistics, and cloud platforms, and I'm always excited to explore new domains. Currently pursuing my Master's in Computer Science at NYU.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-10 py-5 text-lg text-white rounded-3xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(to right, #ec4899, #a855f7, #ec4899)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
              <motion.a
                href="https://github.com/satyakamala03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-5 text-lg text-white rounded-3xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(to right, #3b82f6, #06b6d4, #3b82f6)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={18} />
                GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <motion.a
                href="https://linkedin.com/in/isatyakamala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:isatyakamala@gmail.com"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/satyakamala03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="relative"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/30 to-blue-400/30 rounded-full blur-3xl" />
                <div className="relative w-full h-full">
                  {!imageError ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Satya Kamala Immidisetty"
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">SK</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}