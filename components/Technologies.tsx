'use client'

import { useState, useRef } from 'react'
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

export default function Technologies() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const listRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToIndex = (index: number) => {
    const container = listRef.current
    const card = cardRefs.current[index]
    if (!container || !card) return

    const containerCenter = container.offsetWidth / 2
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    const scrollLeft = cardCenter - containerCenter

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    })
  }

  const goTo = (index: number) => {
    const next = (index + techCategories.length) % techCategories.length
    setCurrentIndex(next)
    scrollToIndex(next)
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
            Drag or tap through the stacks. The next and previous stacks stay in view so you can see what&apos;s coming.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Horizontal carousel with center-focused card */}
          <div
            ref={listRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 pt-2 px-1 scroll-smooth snap-x snap-mandatory"
          >
            {techCategories.map((category, index) => {
              const Icon = category.icon
              const isActive = index === currentIndex

              return (
                <motion.div
                  key={category.title}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className="snap-center flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px]"
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : 12,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  onClick={() => goTo(index)}
                >
                  <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/80 flex flex-col min-h-[340px]">
                    {/* Image header with gradient overlay */}
                    <div className="relative h-40 md:h-44 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="absolute bottom-0 left-0 right-0 p-4 text-xl md:text-2xl font-bold text-white text-center drop-shadow-lg bg-gradient-to-t from-black/50 to-transparent">
                        {category.title}
                      </h3>
                    </div>

                    {/* Tech tags */}
                    <div className="p-5 md:p-6 flex-1">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 bg-slate-50 rounded-full border border-slate-200/80 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom navigation */}
          <div className="mt-8 space-y-4">
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

            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden max-w-md mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                initial={false}
                animate={{ width: `${((currentIndex + 1) / techCategories.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

            <p className="text-center text-sm font-medium text-slate-500">
              {currentIndex + 1} of {techCategories.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
