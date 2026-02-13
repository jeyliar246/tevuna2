'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/2347065977815?text=Hello%20Tevuna!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl z-50 group"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          '0 0 0px rgba(34, 197, 94, 0.4)',
          '0 0 30px rgba(34, 197, 94, 0.6)',
          '0 0 0px rgba(34, 197, 94, 0.4)',
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
        },
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.a>
  )
}


