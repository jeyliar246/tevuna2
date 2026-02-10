'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Tevuna Online Academy',
      category: 'E-Learning Platform',
      description: 'Built with deep understanding of educational needs, this platform delivers strategic learning solutions with intelligent course design and insightful progress analytics.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      link: '#',
    },
    {
      title: 'AllFreshFood',
      category: 'E-Commerce & Food Delivery',
      description: 'A strategically designed e-commerce solution that understands customer behavior, delivering smart ordering experiences with intelligent tracking and intuitive interfaces.',
      image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&q=80',
      link: 'https://allfreshfood.co.uk/',
      external: true,
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-32 relative">
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
            Our Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Strategic Solutions in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where deep understanding meets smart execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-dark-900/50 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.a
                    href={project.link}
                    target={project.external ? '_blank' : undefined}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg uppercase tracking-wider flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    {project.external && <ExternalLink className="w-4 h-4" />}
                  </motion.a>
                </motion.div>
              </div>
              
              <div className="p-8">
                <div className="text-sm text-primary-400 font-mono uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.external && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-semibold"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-2xl transition-all duration-500 pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(14, 165, 233, 0)',
                    '0 0 30px rgba(14, 165, 233, 0.3)',
                    '0 0 0px rgba(14, 165, 233, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

