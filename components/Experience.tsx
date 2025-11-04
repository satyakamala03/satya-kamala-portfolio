'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@/data/experience'
import { coursework } from '@/data/coursework'
import { Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import SectionWidget from './SectionWidget'
import { Briefcase } from 'lucide-react'

const experienceImages: Record<string, string> = {
  'nyu-ta': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  'paypal-se1': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  'paypal-intern': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  'rivigo-intern': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [expandedItems, setExpandedItems] = useState<Record<string, number | null>>({})
  
  // Refs for coursework auto-scroll
  const courseworkScrollContainerRef = useRef<HTMLDivElement>(null)
  const courseworkAutoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isUserScrollingCourseworkRef = useRef(false)

  const toggleExpand = (expId: string, itemIndex: number) => {
    setExpandedItems((prev) => {
      const key = `${expId}-${itemIndex}`
      return {
        ...prev,
        [key]: prev[key] === itemIndex ? null : itemIndex,
      }
    })
  }

  // Auto-scroll for coursework
  const startCourseworkAutoScroll = useCallback(() => {
    if (!courseworkScrollContainerRef.current || isUserScrollingCourseworkRef.current) return
    
    if (courseworkAutoScrollIntervalRef.current) {
      clearInterval(courseworkAutoScrollIntervalRef.current)
    }
    
    courseworkAutoScrollIntervalRef.current = setInterval(() => {
      if (courseworkScrollContainerRef.current && !isUserScrollingCourseworkRef.current) {
        const maxScroll = courseworkScrollContainerRef.current.scrollWidth - courseworkScrollContainerRef.current.clientWidth
        const currentScroll = courseworkScrollContainerRef.current.scrollLeft
        
        if (currentScroll >= maxScroll - 10) {
          // Reset to start for seamless loop
          courseworkScrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' })
        } else {
          courseworkScrollContainerRef.current.scrollBy({ left: 1, behavior: 'auto' })
        }
      }
    }, 30) // Smooth scroll every 30ms
  }, [])

  const scrollCoursework = (direction: 'left' | 'right') => {
    if (courseworkScrollContainerRef.current) {
      const scrollAmount = 300
      isUserScrollingCourseworkRef.current = true
      
      // Clear auto-scroll
      if (courseworkAutoScrollIntervalRef.current) {
        clearInterval(courseworkAutoScrollIntervalRef.current)
      }
      
      courseworkScrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      
      // Resume auto-scroll after 3 seconds
      setTimeout(() => {
        isUserScrollingCourseworkRef.current = false
        startCourseworkAutoScroll()
      }, 3000)
    }
  }

  // Manual scroll for experience
  const scrollExperience = (direction: 'left' | 'right') => {
    const container = document.getElementById('experience-scroll')
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -500 : 500,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (inView) {
      startCourseworkAutoScroll()
    }
    
    return () => {
      if (courseworkAutoScrollIntervalRef.current) {
        clearInterval(courseworkAutoScrollIntervalRef.current)
      }
    }
  }, [inView, startCourseworkAutoScroll])

  return (
    <section id="experience" ref={ref} className="section-padding overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #dbeafe 100%)' }}>
      <SectionWidget icon={Briefcase} sectionId="experience" label="Experience" delay={0.2} topOffset="50%" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Coursework Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-10 text-center text-gray-700">Relevant Coursework</h3>
            <div className="relative auto-scroll-wrapper overflow-hidden">
              <button
                onClick={() => scrollCoursework('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="text-purple-600" size={24} />
              </button>
              <button
                onClick={() => scrollCoursework('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="text-purple-600" size={24} />
              </button>
              
              <div
                ref={courseworkScrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => {
                  isUserScrollingCourseworkRef.current = true
                  if (courseworkAutoScrollIntervalRef.current) {
                    clearInterval(courseworkAutoScrollIntervalRef.current)
                  }
                }}
                onMouseLeave={() => {
                  isUserScrollingCourseworkRef.current = false
                  startCourseworkAutoScroll()
                }}
              >
                <div className="flex gap-6 auto-scroll-content">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="min-w-[320px] bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-2 border-purple-200/50 hover:border-pink-300 flex-shrink-0 group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{course.name}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-6 auto-scroll-content">
                  {coursework.map((course) => (
                    <div
                      key={`dup-${course.id}`}
                      className="min-w-[320px] bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-200/50 flex-shrink-0"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{course.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-16 mt-16 text-center text-black">
            EXPERIENCE
          </h2>

          <div className="relative overflow-hidden">
            <button
              onClick={() => scrollExperience('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-purple-600" size={24} />
            </button>
            <button
              onClick={() => scrollExperience('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border-2 border-purple-200 hover:border-pink-400 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-purple-600" size={24} />
            </button>
            
            <div
              id="experience-scroll"
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 px-4"
            >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                  initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="min-w-[500px] md:min-w-[550px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all border-2 border-purple-200/50 hover:border-pink-300 flex-shrink-0 hover:scale-[1.02] transform hover:-translate-y-2"
                  whileHover={{ y: -5, rotate: 0.5 }}
                >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={experienceImages[exp.id] || experienceImages['paypal-se1']}
                        alt={exp.company}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">{exp.title}</h3>
                        <p className="text-xl text-white/90 font-medium drop-shadow-md">{exp.company}</p>
                        <div className="flex items-center gap-2 text-white/90 mt-3">
                          <Calendar size={20} />
                          <span className="text-base font-medium">{exp.period}</span>
                  </div>
                  </div>
                </div>
                    <div className="p-8">
                      <ul className="space-y-4 mt-4">
                        {exp.description.map((item, itemIndex) => {
                          const key = `${exp.id}-${itemIndex}`
                          const isExpanded = expandedItems[key] === itemIndex
                          const starDetail = exp.starDetails?.[itemIndex]
                          const hasStarDetail = !!starDetail

                          return (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                              className="flex flex-col gap-3"
                            >
                            <div className="flex items-start gap-4">
                              <span className="text-purple-600 mt-3 font-bold text-2xl">▹</span>
                              <div className="flex-1">
                                <span className="leading-relaxed text-lg md:text-xl font-medium text-gray-800">{item}</span>
                                {hasStarDetail && (
                                  <button
                                    onClick={() => toggleExpand(exp.id, itemIndex)}
                                    className="ml-4 text-base text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 group transition-all"
                                  >
                                    {isExpanded ? (
                                      <>
                                        <span>Hide Details</span>
                                        <ChevronUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
                                      </>
                                    ) : (
                                      <>
                                        <span>View STAR Details</span>
                                        <ChevronDown size={16} className="group-hover:translate-y-[2px] transition-transform" />
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                              </div>
                              <AnimatePresence>
                                {isExpanded && starDetail && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-8 mt-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                                  >
                                    <div className="space-y-4">
                                      <div>
                                        <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">
                                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                          Situation
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">{starDetail.situation}</p>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">
                                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                          Task
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">{starDetail.task}</p>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">
                                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                          Action
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">{starDetail.action}</p>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">
                                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                          Result
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">{starDetail.result}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                    </motion.li>
                          )
                        })}
                </ul>

                {exp.technologies && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                                className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl text-sm font-semibold text-gray-700 border border-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                    </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
