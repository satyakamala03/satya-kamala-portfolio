'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import SectionWidget from './SectionWidget'
import { User } from 'lucide-react'

const skills = [
  'Python',
  'Java',
  'C/C++',
  'JavaScript',
  'TypeScript',
  'Go',
  'HTML/CSS',
  'SQL',
  'Bash/Shell Scripting',
]

const technologies = [
  'Spring Boot',
  'REST APIs',
  'Docker',
  'Kubernetes',
  'AWS (Lambda, DynamoDB, S3)',
  'PostgreSQL',
  'MongoDB',
  'OpenTelemetry',
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="section-padding relative" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #f3e8ff 50%, #fce7f3 100%)' }}>
      <SectionWidget icon={User} sectionId="about" label="About" delay={0.1} topOffset="55%" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-12 text-center text-black pt-8">
            ABOUT
          </h2>

          <div className="space-y-10 text-gray-700">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                I'm a passionate Full Stack Developer and AI Enthusiast currently pursuing my Master's in Computer Science at New York University. 
                With a strong foundation in software engineering and experience building scalable applications at companies like PayPal, 
                I specialize in creating efficient, reliable systems that solve real-world problems.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
                My experience spans from developing automated tools that save thousands of hours to building event-driven platforms 
                capable of processing 100,000+ concurrent orders. I'm particularly interested in the intersection of AI/ML and 
                software engineering, and I'm always exploring new technologies and methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl text-sm font-semibold text-gray-700 hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all cursor-default border-2 border-blue-300 hover:border-transparent shadow-md hover:shadow-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Technologies & Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (index + skills.length) * 0.05 }}
                      className="px-3 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl text-sm font-semibold text-gray-700 hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all cursor-default border-2 border-blue-300 hover:border-transparent shadow-md hover:shadow-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-300">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">Education</h3>
              
              {/* Education Cards - Simple Horizontal Scroll */}
              <div className="relative mb-8">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="min-w-[400px] bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all border-2 border-purple-200/50 hover:border-pink-300 flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                        <span className="text-4xl">🎓</span>
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-primary">
                          New York University
                        </h4>
                        <p className="text-lg text-gray-600">Master of Science in Computer Science</p>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 mb-3">GPA: <span className="font-semibold text-purple-600">3.7/4.0</span></p>
                    <p className="text-xl text-gray-700 mb-6">May 2026 (Expected)</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-2xl text-sm font-semibold">Merit Scholarship</span>
                      <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-2xl text-sm font-semibold">Grace Hopper 2025</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="min-w-[400px] bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all border-2 border-purple-200/50 hover:border-pink-300 flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
                        <span className="text-4xl">🎓</span>
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-primary">
                          BITS Pilani
                        </h4>
                        <p className="text-lg text-gray-600">BE EEE + M.Sc. Physics</p>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 mb-3">GPA: <span className="font-semibold text-blue-600">7.95/10.0</span></p>
                    <p className="text-xl text-gray-700">May 2022</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
