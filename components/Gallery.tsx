'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const galleryItems = [
    { title: 'Data Analytics', image: '/assets/home-data.png' },
    { title: 'Mobile Apps', image: '/assets/mobileappdev.jpg' },
    { title: 'Tech Solutions', image: '/assets/home-cloud.png' },
    { title: 'UI/UX Design', image: '/assets/ui-ux-design.jpg' },
    { title: 'Digital Strategy', image: '/assets/home-strategy.png' },
    { title: 'AI', image: '/assets/home-ai.png' },
  ]

  return (
    <section id="gallery" ref={ref} className="py-32 relative">
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
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs font-sans uppercase tracking-widest mb-6"
          >
            Gallery
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Insight-Driven Creations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 150,
                damping: 15,
              }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            >
              <div
                role="img"
                aria-label={`${item.title} - Insight-driven creation`}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-xl transition-all duration-500"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(14, 165, 233, 0)',
                    '0 0 20px rgba(14, 165, 233, 0.4)',
                    '0 0 0px rgba(14, 165, 233, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

