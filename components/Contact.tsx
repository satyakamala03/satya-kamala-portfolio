'use client'

import { useState, FormEvent } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'service_placeholder' || 
          templateId === 'template_placeholder' || 
          publicKey === 'public_placeholder') {
        // EmailJS not configured, use mailto fallback
        const mailtoLink = `mailto:isatyakamala@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${encodeURIComponent(formData.email)}`
        window.location.href = mailtoLink
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
        return
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'isatyakamala@gmail.com',
        },
        publicKey
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error: any) {
      console.error('Email sending failed:', error)
      // Fallback to mailto if EmailJS fails
      try {
        const mailtoLink = `mailto:isatyakamala@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${encodeURIComponent(formData.email)}`
        window.location.href = mailtoLink
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } catch (fallbackError) {
        setSubmitStatus('error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #f3e8ff 100%)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
            Let's Connect
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
            Open to ideas and exciting opportunities!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-purple-200/50"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:isatyakamala@gmail.com"
                    className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <span>isatyakamala@gmail.com</span>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/isatyakamala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-600 group-hover:text-white transition-all">
                      <Linkedin size={20} />
                    </div>
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/satyakamala03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-700 hover:text-purple-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg group-hover:from-gray-700 group-hover:to-gray-900 group-hover:text-white transition-all">
                      <Github size={20} />
                    </div>
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Brooklyn, NY 11232
                  <br />
                  Available for opportunities
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-purple-200/50"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-800 bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-800 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-10 py-5 text-lg text-white rounded-3xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(to right, #ec4899, #a855f7, #ec4899)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
