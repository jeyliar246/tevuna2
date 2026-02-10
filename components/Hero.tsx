'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-mono uppercase tracking-widest">
              Deep Understanding • Strategic Thinking
            </span>
          </motion.div>

          <motion.h1
            variants={slideVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-100">Smart Solutions</span>
            <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Through Insight
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Tevuna embodies deep understanding and strategic thinking. We don't just build digital solutions—we 
            craft intelligent, insight-driven experiences that solve complex challenges and drive meaningful results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg uppercase tracking-wider relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500/50 text-primary-400 font-semibold rounded-lg uppercase tracking-wider hover:bg-primary-500/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(14, 165, 233, 1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Work Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-24 h-32 rounded-xl overflow-hidden border border-primary-500/30 group cursor-pointer"
                whileHover={{ scale: 1.1, y: -10, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-primary-400" />
      </motion.div>
    </section>
  )
}

