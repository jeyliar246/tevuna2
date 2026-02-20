'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react'

export default function AcademyPage() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    setMounted(true)
    // Set countdown to 1 month from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 1)
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      e.currentTarget.reset()
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }

  const courses = [
    {
      category: 'Web Development',
      courses: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript & TypeScript Mastery',
        'React & Next.js Development',
        'Node.js & Express.js Backend',
        'Full-Stack Development',
        'RESTful APIs & GraphQL'
      ]
    },
    {
      category: 'Mobile Development',
      courses: [
        'React Native Development',
        'Flutter & Dart Programming',
        'iOS Development with Swift',
        'Android Development with Kotlin',
        'Cross-Platform Mobile Apps',
        'Mobile App Deployment'
      ]
    },
    {
      category: 'AI & Machine Learning',
      courses: [
        'Introduction to AI & ML',
        'LLM Integration & APIs',
        'LangChain & AI Frameworks',
        'AI-Powered Applications',
        'Natural Language Processing',
        'Computer Vision Basics'
      ]
    },
    {
      category: 'Data & Analytics',
      courses: [
        'Database Design & Management',
        'SQL & NoSQL Databases',
        'Data Analytics & Visualization',
        'Business Intelligence Tools',
        'Data Science Fundamentals',
        'Big Data Technologies'
      ]
    },
    {
      category: 'DevOps & Cloud',
      courses: [
        'Cloud Computing (AWS, Azure, GCP)',
        'Docker & Containerization',
        'Kubernetes Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Best Practices'
      ]
    },
    {
      category: 'Design & UI/UX',
      courses: [
        'UI/UX Design Principles',
        'Figma & Design Tools',
        'Responsive Web Design',
        'Design Systems',
        'User Research & Testing',
        'Prototyping & Wireframing'
      ]
    }
  ]

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-mono uppercase tracking-widest mb-6"
              >
                Tevuna Online Academy
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
                Transform Your Career with
                <span className="block text-primary-500 mt-2">Strategic Tech Education</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
                Join the next generation of tech professionals. Learn cutting edge technologies 
                from industry experts and build real world projects that matter.
              </p>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                className="mb-16"
              >
                <div className="bg-white/80 backdrop-blur-sm border-2 border-primary-500/30 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Next Session Begins In</h3>
                  <div className="grid grid-cols-4 gap-4 md:gap-6">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Minutes', value: timeLeft.minutes },
                      { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white text-4xl md:text-5xl font-bold py-6 px-4 rounded-xl mb-2 shadow-lg">
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Promotional Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: BookOpen, title: 'Comprehensive Curriculum', desc: 'Learn the latest technologies and best practices from industry experts' },
                { icon: Users, title: 'Expert Instructors', desc: 'Learn from professionals with years of real world experience' },
                { icon: Award, title: 'Certification', desc: 'Receive recognized certificates upon course completion' }
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-white border border-slate-200"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Tevuna Academy?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Tevuna Academy, we don't just teach you how to code. We teach you how to think strategically. 
                Our curriculum is designed with deep understanding of what the industry actually needs. We combine 
                theoretical knowledge with hands on projects that solve real world problems you'll face in your career.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're just starting your tech journey or looking to level up your skills, our courses will 
                give you the tools, knowledge, and strategic thinking you need to stand out. We believe in learning by 
                doing, so every course includes real projects you can actually add to your portfolio and show to 
                potential employers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-mono uppercase tracking-widest mb-6"
              >
                Curriculum
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                What You'll Learn
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive tech courses designed to take you from beginner to professional
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm hover:border-primary-500/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-500" />
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.courses.map((course, courseIndex) => (
                      <motion.li
                        key={course}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + courseIndex * 0.05 }}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-mono uppercase tracking-widest mb-6"
                >
                  Join Waitlist
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                  Reserve Your Spot
                </h2>
                <p className="text-xl text-slate-600">
                  Be among the first to enroll when registration opens. Join our waitlist today!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    >
                      <option value="">Select an area</option>
                      <option value="web-dev">Web Development</option>
                      <option value="mobile-dev">Mobile Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="data-analytics">Data & Analytics</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="design">Design & UI/UX</option>
                      <option value="all">All Courses</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your background and goals..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg uppercase tracking-wider hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                  >
                    {formStatus === 'sending' ? (
                      <>Processing...</>
                    ) : formStatus === 'success' ? (
                      <>Successfully Joined! <CheckCircle2 className="w-5 h-5" /></>
                    ) : (
                      <>Join Waitlist <ArrowRight className="w-5 h-5" /></>
                    )}
                  </motion.button>

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm text-center"
                    >
                      Thank you! You've been added to our waitlist. We'll notify you when registration opens.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  )
}

