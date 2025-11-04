'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Book, Gamepad2, Dumbbell, Camera, Plane, Music, Heart } from 'lucide-react'
import SectionWidget from './SectionWidget'

const hobbies = [
  {
    icon: Book,
    emoji: '📚',
    title: 'Reading',
    description: 'Love diving into tech blogs, sci-fi novels, and books on philosophy and personal development',
  },
  {
    icon: Gamepad2,
    emoji: '🎮',
    title: 'Gaming',
    description: 'Enjoy strategic games and exploring virtual worlds during downtime',
  },
  {
    icon: Dumbbell,
    emoji: '🏃',
    title: 'Fitness',
    description: 'Running marathons and hitting the gym keeps my mind sharp and body healthy',
  },
  {
    icon: Camera,
    emoji: '📷',
    title: 'Photography',
    description: 'Capturing moments and exploring the world through my lens',
  },
  {
    icon: Plane,
    emoji: '✈️',
    title: 'Travel',
    description: 'Exploring new cultures, cuisines, and meeting interesting people around the world',
  },
  {
    icon: Music,
    emoji: '🎵',
    title: 'Music',
    description: 'From jazz to electronic, music fuels my creativity and focus',
  },
]

export default function Hobbies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="hobbies" ref={ref} className="section-padding relative" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #f3e8ff 100%)' }}>
      <SectionWidget icon={Heart} sectionId="hobbies" label="Hobbies" delay={0.4} topOffset="40%" />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-5xl"
            >
              ✨
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              When I'm Not Coding
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl"
            >
              ✨
            </motion.div>
          </div>
          <p className="text-center text-gray-700 mb-12 text-xl md:text-2xl">Me, Unplugged and Offline</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-2 border-purple-200/50 hover:border-pink-400 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl"
                  >
                    {hobby.emoji}
                  </motion.div>
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                    <hobby.icon className="text-purple-600" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{hobby.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

