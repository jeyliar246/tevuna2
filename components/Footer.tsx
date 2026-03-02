'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    quick: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
      { label: 'Tevuna Academy', href: '/academy' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="mb-4">
              <img
                src="/assets/tevunalogo2.png"
                alt="Tevuna - Tech Solutions Agency Logo"
                title="Tevuna - Tech Solutions Agency"
                width={200}
                height={80}
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
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
            <h4 className="text-lg font-bold mb-4 text-primary-500">
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
            <h4 className="text-lg font-bold mb-4 text-primary-500">
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
            <h4 className="text-lg font-bold mb-4 text-primary-500">
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

          {/* Legal / UK GDPR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 100 }}
          >
            <h4 className="text-lg font-bold mb-4 text-primary-500">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
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
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Tevuna. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-slate-500 hover:text-primary-500 transition-colors">Privacy</a>
            <a href="/cookies" className="text-slate-500 hover:text-primary-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

