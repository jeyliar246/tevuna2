'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Smartphone, Layers } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Strategically crafted websites built with deep understanding of your business goals, delivering smart solutions with exceptional performance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Insight-driven mobile applications that understand user behavior, delivering strategic solutions for iOS and Android platforms.',
    },
    {
      icon: Layers,
      title: 'Tech Solutions',
      description: 'Smart technology solutions built with strategic thinking, from cloud infrastructure to intelligent automation systems.',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-32 relative">
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
            Services
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Strategic Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-dark-900/50 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center border border-primary-500/30 group-hover:border-primary-500/50 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary-400" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

