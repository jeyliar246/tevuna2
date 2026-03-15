'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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
    bodyBg: 'from-blue-600 to-cyan-600',
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
    bodyBg: 'from-violet-600 to-purple-600',
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
    bodyBg: 'from-amber-600 to-orange-600',
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
    bodyBg: 'from-emerald-600 to-teal-600',
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
    bodyBg: 'from-sky-600 to-blue-600',
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
    bodyBg: 'from-indigo-600 to-blue-600',
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
    bodyBg: 'from-pink-600 to-rose-600',
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
    bodyBg: 'from-slate-600 to-slate-700',
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
    bodyBg: 'from-fuchsia-600 to-purple-600',
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
  const langListRef = useRef<HTMLDivElement | null>(null)

  const goTo = (index: number) => {
    setCurrentIndex((index + techCategories.length) % techCategories.length)
  }
  const goNext = () => goTo(currentIndex + 1)
  const goPrev = () => goTo(currentIndex - 1)

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
            Switch stacks with the arrows, then scroll the language list inside each card.
          </p>
        </motion.div>

        {/* One card per view, covers section; lower part solid */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait" initial={false}>
            {techCategories.map((category, index) => {
              if (index !== currentIndex) return null
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col w-full"
                >
                  {/* Card header: image + gradient */}
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                    </div>
                    <h3 className="absolute bottom-0 left-0 right-0 p-6 text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg bg-gradient-to-t from-black/50 to-transparent">
                      {category.title}
                    </h3>
                  </div>

                  {/* Lower part: solid background, language carousel */}
                  <div className={`p-6 md:p-8 min-h-[200px] bg-gradient-to-br ${category.bodyBg}`}>
                    <p className="text-sm font-medium text-white/90 mb-4 text-center">
                      Scroll or drag to browse technologies
                    </p>
                    <div
                      ref={langListRef}
                      className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-2"
                    >
                      {category.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex-shrink-0 snap-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-lg px-5 py-4 min-w-[140px] md:min-w-[160px] hover:bg-white/25 transition-colors"
                        >
                          <span className="text-sm md:text-base font-semibold text-white block text-center leading-tight">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
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
