'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      e.currentTarget.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tevuna.com',
      link: 'mailto:info@tevuna.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+234 706 597 7815',
      link: 'tel:+2347065977815',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      link: 'https://wa.me/2347065977815?text=Hello%20Tevuna!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20project.',
      external: true,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            Contact
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-100">Let's Connect</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Ready to explore how deep understanding and strategic thinking can transform your digital presence? 
              Let's discuss smart solutions tailored to your unique challenges and goals.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl border border-gray-800 bg-dark-900/50 hover:border-primary-500/50 hover:bg-dark-900 transition-all group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center border border-primary-500/30 group-hover:border-primary-500/50 transition-all">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-primary-400 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="p-8 rounded-2xl border border-gray-800 bg-dark-900/50 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>
              
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

