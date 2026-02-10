'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-mesh opacity-40 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  )
}

