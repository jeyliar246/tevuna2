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
      image: '/assets/programmer.jpg',
      link: '/academy',
    },
    {
      title: 'AllFreshFood',
      category: 'E-Commerce & Food Delivery',
      description: 'A strategically designed e-commerce solution that understands customer behavior, delivering smart ordering experiences with intelligent tracking and intuitive interfaces.',
      image: '/assets/home-analytics.png',
      link: 'https://allfreshfood.co.uk/',
      external: true,
      previewUrl: 'https://allfreshfood.co.uk/',
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Strategic Solutions in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                {project.previewUrl ? (
                  <div className="absolute inset-0 flex flex-col">
                    {/* Browser-style frame */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-200 border-b border-slate-300 flex-shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-4 py-1.5 px-3 bg-white rounded text-xs text-slate-500 truncate border border-slate-300">
                        {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </div>
                    </div>
                    <div className="flex-1 min-h-0 relative">
                      <iframe
                        src={project.previewUrl}
                        title={`${project.title} - Live preview`}
                        className="absolute inset-0 w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      role="img"
                      aria-label={`${project.title} - ${project.category}`}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  </>
                )}
                {project.previewUrl ? (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-primary-500 text-white font-semibold rounded-lg uppercase tracking-wider flex items-center gap-2 hover:bg-primary-600 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View full website <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                ) : (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.a
                      href={project.link}
                      target={project.external ? '_blank' : undefined}
                      rel={project.external ? 'noopener noreferrer' : undefined}
                      className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg uppercase tracking-wider flex items-center gap-2 hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.title === 'Tevuna Online Academy' ? 'Join Now' : 'View Project'}
                      {project.external && <ExternalLink className="w-4 h-4" />}
                    </motion.a>
                  </motion.div>
                )}
              </div>
              
              <div className="p-8 text-center md:text-left">
                <div className="text-sm text-primary-400 font-mono uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.external && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-semibold justify-center md:justify-start"
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

