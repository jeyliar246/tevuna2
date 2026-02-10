'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const galleryItems = [
    { title: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
    { title: 'Mobile Apps', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
    { title: 'Tech Solutions', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
    { title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
    { title: 'Digital Strategy', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { title: 'Branding', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80' },
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
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            Gallery
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Insight-Driven Creations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
              className="group relative aspect-square rounded-xl overflow-hidden border border-gray-800 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            >
              <div 
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

