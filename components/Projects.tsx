'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { Github, ExternalLink, X, FolderKanban, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react'
import SectionWidget from './SectionWidget'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isUserScrollingRef = useRef(false)

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  const startAutoScroll = useCallback(() => {
    if (!scrollContainerRef.current || isUserScrollingRef.current) return
    
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current && !isUserScrollingRef.current) {
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
        const currentScroll = scrollContainerRef.current.scrollLeft
        
        if (currentScroll >= maxScroll - 10) {
          // Reset to start for seamless loop
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' })
        } else {
          scrollContainerRef.current.scrollBy({ left: 1, behavior: 'auto' })
        }
      }
    }, 30) // Smooth scroll every 30ms
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500
      isUserScrollingRef.current = true
      
      // Clear auto-scroll
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      
      // Resume auto-scroll after 3 seconds
      setTimeout(() => {
        isUserScrollingRef.current = false
        startAutoScroll()
      }, 3000)
    }
  }

  useEffect(() => {
    if (inView) {
      startAutoScroll()
    }
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [inView, startAutoScroll])

  return (
    <section id="projects" ref={ref} className="section-padding relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 50%, #fce7f3 100%)' }}>
      <SectionWidget icon={FolderKanban} sectionId="projects" label="Projects" delay={0.3} topOffset="45%" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-16 text-center text-black pt-8">
            PROJECTS
          </h2>

          <div className="relative auto-scroll-wrapper overflow-hidden">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-purple-600" size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-purple-600" size={24} />
            </button>
            
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 px-4"
              onMouseEnter={() => {
                isUserScrollingRef.current = true
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current)
                }
              }}
              onMouseLeave={() => {
                isUserScrollingRef.current = false
                startAutoScroll()
              }}
            >
              <div className="flex gap-8 auto-scroll-content">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="min-w-[450px] md:min-w-[500px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group border-2 border-purple-200/50 hover:border-pink-400 hover:scale-[1.02] flex-shrink-0 relative transform hover:-translate-y-2"
                    onClick={() => setSelectedProject(project.id)}
                    whileHover={{ y: -5, rotate: 0.5 }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                      ) : (
                        <div className={`h-full bg-gradient-to-br ${project.imageGradient || 'from-gray-400 to-gray-600'} flex items-center justify-center relative`}>
                          <div className="text-6xl font-bold text-white/90 drop-shadow-lg">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3 z-10">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full border-2 border-purple-400 shadow-xl"
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                          >
                            <MousePointer2 className="text-purple-600" size={16} />
                          </motion.div>
                          <span className="text-xs font-bold text-purple-700">Click for details</span>
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-sm font-semibold text-secondary border border-gray-200">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-base md:text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium group-hover:gap-3 transition-all">
                        <span>View Details</span>
                        <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="auto-scroll-content">
                {projects.map((project) => (
                  <div
                    key={`dup-${project.id}`}
                    className="min-w-[450px] md:min-w-[500px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-purple-200/50 flex-shrink-0 relative"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className={`h-full bg-gradient-to-br ${project.imageGradient || 'from-gray-400 to-gray-600'} flex items-center justify-center relative`}>
                          <div className="text-6xl font-bold text-white/90 drop-shadow-lg">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-primary">
                  {selectedProjectData.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Description</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProjectData.longDescription || selectedProjectData.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProjectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    style={{ 
                      background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    View on GitHub
                  </motion.a>
                  {selectedProjectData.liveUrl && (
                    <motion.a
                      href={selectedProjectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                      style={{ 
                        background: 'linear-gradient(to right, #ec4899, #a855f7)',
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
