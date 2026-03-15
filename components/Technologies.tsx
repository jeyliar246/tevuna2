'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code,
  Database,
  Smartphone,
  BarChart3,
  Cloud,
  Palette,
  Globe,
  Settings,
  Brain,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const techCategories = [
  {
    icon: Code,
    title: 'Web Development',
    image: '/assets/home-data.png',
    gradient: 'from-blue-600/90 to-cyan-600/90',
    bodyOverlay: 'from-blue-600/35 to-cyan-600/35',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Angular',
      'Node.js',
      'Express.js',
      'PHP',
      'Python',
      'Django',
      'Flask',
      'Ruby on Rails',
      'ASP.NET',
      'Laravel',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    image: '/assets/mobileappdev.jpg',
    gradient: 'from-violet-600/90 to-purple-600/90',
    bodyOverlay: 'from-violet-600/35 to-purple-600/35',
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Java',
      'Dart',
      'Ionic',
      'Xamarin',
      'Android Studio',
      'Xcode',
      'Firebase',
      'App Store',
      'Google Play',
    ],
  },
  {
    icon: Globe,
    title: 'CMS & E-Commerce',
    image: '/assets/home-analytics.png',
    gradient: 'from-amber-600/90 to-orange-600/90',
    bodyOverlay: 'from-amber-600/35 to-orange-600/35',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Shopify',
      'Magento',
      'Drupal',
      'Joomla',
      'Squarespace',
      'Webflow',
      'Contentful',
      'Strapi',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Backend',
    image: '/assets/home-data.png',
    gradient: 'from-emerald-600/90 to-teal-600/90',
    bodyOverlay: 'from-emerald-600/35 to-teal-600/35',
    technologies: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase',
      'Supabase',
      'DynamoDB',
      'Oracle',
      'SQL Server',
      'MariaDB',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    image: '/assets/home-analytics.png',
    gradient: 'from-sky-600/90 to-blue-600/90',
    bodyOverlay: 'from-sky-600/35 to-blue-600/35',
    technologies: [
      'Google Analytics',
      'Tableau',
      'Power BI',
      'Looker',
      'Mixpanel',
      'Amplitude',
      'Segment',
      'Snowflake',
      'BigQuery',
      'Apache Spark',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    image: '/assets/home-cloud.png',
    gradient: 'from-indigo-600/90 to-blue-600/90',
    bodyOverlay: 'from-indigo-600/35 to-blue-600/35',
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'Terraform',
      'Ansible',
    ],
  },
  {
    icon: Palette,
    title: 'Design & UI/UX Tools',
    image: '/assets/ui-ux-design.jpg',
    gradient: 'from-pink-600/90 to-rose-600/90',
    bodyOverlay: 'from-pink-600/35 to-rose-600/35',
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Framer',
      'Principle',
      'Zeplin',
      'Miro',
    ],
  },
  {
    icon: Settings,
    title: 'Development Tools',
    image: '/assets/programmer.jpg',
    gradient: 'from-slate-600/90 to-slate-700/90',
    bodyOverlay: 'from-slate-600/35 to-slate-700/35',
    technologies: [
      'Git',
      'GitHub',
      'GitLab',
      'VS Code',
      'WebStorm',
      'Postman',
      'Jira',
      'Confluence',
      'Slack',
      'Trello',
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    image: '/assets/home-ai.png',
    gradient: 'from-fuchsia-600/90 to-purple-600/90',
    bodyOverlay: 'from-fuchsia-600/35 to-purple-600/35',
    technologies: [
      'OpenAI GPT',
      'Claude AI',
      'LLM APIs',
      'LangChain',
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'Stable Diffusion',
      'Midjourney API',
      'Anthropic API',
      'Google Gemini',
      'Azure OpenAI',
      'AWS Bedrock',
      'AI Integration',
      'RAG',
      'Vector Databases',
      'Pinecone',
      'Weaviate',
    ],
  },
]

const INITIAL_INDEX = Math.floor(techCategories.length / 2)

export default function Technologies() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX)
  const listRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToIndex = (index: number) => {
    const container = listRef.current
    const card = cardRefs.current[index]
    if (!container || !card) return
    const containerCenter = container.offsetWidth / 2
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    container.scrollTo({ left: cardCenter - containerCenter, behavior: 'smooth' })
  }

  const goTo = (index: number) => {
    const next = (index + techCategories.length) % techCategories.length
    setCurrentIndex(next)
    scrollToIndex(next)
  }
  const goNext = () => goTo(currentIndex + 1)
  const goPrev = () => goTo(currentIndex - 1)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToIndex(INITIAL_INDEX))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const container = listRef.current
    if (!container) return
    let rafId: number
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const center = container.scrollLeft + container.offsetWidth / 2
        let closest = 0
        let minDist = Infinity
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const cardCenter = card.offsetLeft + card.offsetWidth / 2
          const dist = Math.abs(center - cardCenter)
          if (dist < minDist) {
            minDist = dist
            closest = i
          }
        })
        setCurrentIndex(closest)
      })
    }
    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="technologies" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-sans uppercase tracking-widest mb-6"
          >
            Technologies
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Our Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three cards in view — center is active. Move left or right to see more.
          </p>
        </motion.div>

        {/* Three-card carousel: compact cards, center active, scroll left/right */}
        <div className="w-full overflow-hidden">
          <div
            ref={listRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-4"
            style={{
              paddingLeft: 'max(1rem, calc(50vw - 170px))',
              paddingRight: 'max(1rem, calc(50vw - 170px))',
            }}
          >
            {techCategories.map((category, index) => {
              const Icon = category.icon
              const isActive = index === currentIndex
              return (
                <motion.div
                  key={category.title}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className="snap-center flex-shrink-0 w-[300px] sm:w-[340px] group cursor-pointer"
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.75,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  onClick={() => goTo(index)}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20 relative h-[320px] md:h-[340px]">
                    {/* Full-card image background */}
                      <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />

                    {/* Content overlaid on image */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                      <div className="flex flex-col items-center justify-center flex-1 min-h-0">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mt-2 text-lg md:text-xl font-bold text-white text-center drop-shadow-lg line-clamp-2">
                          {category.title}
                        </h3>
                      </div>

                      {/* Language strip: compact, transparent over image */}
                      <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-1">
                        {category.technologies.slice(0, 8).map((tech) => (
                          <div
                            key={tech}
                            className="flex-shrink-0 snap-center rounded-lg bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-2"
                          >
                            <span className="text-xs font-semibold text-white whitespace-nowrap">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="max-w-5xl mx-auto mt-8 space-y-4 px-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goPrev}
                aria-label="Previous stack"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 shadow-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              <div className="flex gap-2 flex-wrap justify-center">
                {techCategories.map((category, index) => (
                  <button
                    key={category.title}
                    onClick={() => goTo(index)}
                    aria-label={`Go to ${category.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-500 w-8'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Next stack"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 shadow-sm transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
      </div>
    </section>
  )
}
