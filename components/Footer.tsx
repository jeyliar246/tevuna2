'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import tevunaLogo from '@/src/assets/Tevunalogo.png'

export default function Footer() {
  const footerLinks = {
    quick: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
    ],
    services: [
      { label: 'Web Development', href: '#projects' },
      { label: 'Mobile Apps', href: '#projects' },
      { label: 'Tech Solutions', href: '#projects' },
    ],
    contact: [
      { label: 'info@tevuna.com', href: 'mailto:info@tevuna.com' },
      { label: '+234 706 597 7815', href: 'tel:+2347065977815' },
      { label: 'WhatsApp', href: 'https://wa.me/2347065977815?text=Hello%20Tevuna!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20project.', external: true },
    ],
  }

  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
                <Image
                  src={tevunaLogo}
                  alt="Tevuna Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-mono">
                TEVUNA
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Deep understanding. Strategic thinking. Smart solutions. Tevuna delivers insight-driven 
              digital experiences that transform businesses.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
          >
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          >
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-slate-600 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2024 Tevuna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

