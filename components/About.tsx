'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: 50, label: 'Projects', suffix: '+' },
    { number: 30, label: 'Clients', suffix: '+' },
    { number: 5, label: 'Years', suffix: '+' },
  ]

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary-500/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity" />
              <motion.div
                className="absolute inset-0 border-2 border-primary-500/50 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                    '0 0 40px rgba(14, 165, 233, 0.5)',
                    '0 0 20px rgba(14, 165, 233, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-400 text-xs font-mono uppercase tracking-widest mb-6"
            >
              About Tevuna
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Deep Understanding, Strategic Solutions
            </h2>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Tevuna—meaning deep understanding, strategic thinking, and insight in Hebrew—guides everything we do. 
              We go beyond surface-level solutions to understand your business at its core, applying strategic 
              thinking to every challenge we encounter.
            </p>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Our approach combines profound insight with smart solutions, delivering digital experiences that 
              not only look exceptional but solve real problems with intelligence and strategic depth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2 font-mono">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

