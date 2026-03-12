'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Code, Database, Smartphone, BarChart3, Cloud, Palette, Globe, Settings, Brain, ChevronLeft, ChevronRight } from 'lucide-react'

const techCategories = [
  {
    icon: Code,
    title: 'Web Development',
    technologies: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
      'Vue.js', 'Angular', 'Node.js', 'Express.js', 'PHP', 'Python',
      'Django', 'Flask', 'Ruby on Rails', 'ASP.NET', 'Laravel'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    technologies: [
      'React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Dart',
      'Ionic', 'Xamarin', 'Android Studio', 'Xcode', 'Firebase',
      'App Store', 'Google Play'
    ]
  },
  {
    icon: Globe,
    title: 'CMS & E-Commerce',
    technologies: [
      'WordPress', 'WooCommerce', 'Shopify', 'Magento', 'Drupal',
      'Joomla', 'Squarespace', 'Webflow', 'Contentful', 'Strapi'
    ]
  },
  {
    icon: Database,
    title: 'Databases & Backend',
    technologies: [
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
      'Supabase', 'DynamoDB', 'Oracle', 'SQL Server', 'MariaDB'
    ]
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    technologies: [
      'Google Analytics', 'Tableau', 'Power BI', 'Looker', 'Mixpanel',
      'Amplitude', 'Segment', 'Snowflake', 'BigQuery', 'Apache Spark'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: [
      'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
      'Jenkins', 'GitHub Actions', 'CI/CD', 'Terraform', 'Ansible'
    ]
  },
  {
    icon: Palette,
    title: 'Design & UI/UX Tools',
    technologies: [
      'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Adobe Photoshop',
      'Adobe Illustrator', 'Framer', 'Principle', 'Zeplin', 'Miro'
    ]
  },
  {
    icon: Settings,
    title: 'Development Tools',
    technologies: [
      'Git', 'GitHub', 'GitLab', 'VS Code', 'WebStorm',
      'Postman', 'Jira', 'Confluence', 'Slack', 'Trello'
    ]
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    technologies: [
      'OpenAI GPT', 'Claude AI', 'LLM APIs', 'LangChain', 'TensorFlow',
      'PyTorch', 'Hugging Face', 'Stable Diffusion', 'Midjourney API',
      'Anthropic API', 'Google Gemini', 'Azure OpenAI', 'AWS Bedrock',
      'AI Integration', 'RAG', 'Vector Databases', 'Pinecone', 'Weaviate'
    ]
  }
]

const SWIPE_THRESHOLD = 50

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = (index: number) => {
    const next = (index + techCategories.length) % techCategories.length
    setDirection(next > currentIndex ? 1 : -1)
    setCurrentIndex(next)
  }

  const goNext = () => goTo(currentIndex + 1)
  const goPrev = () => goTo(currentIndex - 1)

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -SWIPE_THRESHOLD || velocity < -300) goNext()
    else if (offset > SWIPE_THRESHOLD || velocity > 300) goPrev()
    setDragOffset(0)
  }

  const category = techCategories[currentIndex]
  const Icon = category.icon

  return (
    <section id="technologies" ref={ref} className="py-32 relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-mono uppercase tracking-widest mb-6"
          >
            Technologies
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Our Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Swipe or use the arrows to explore the languages and tools we use
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Prev / Next buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous stack"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next stack"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel card - swipeable */}
          <motion.div
            className="cursor-grab active:cursor-grabbing touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDrag={(_, info) => setDragOffset(info.offset.x)}
            onDragEnd={handleDragEnd}
            style={{ x: dragOffset }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -120 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="group relative p-8 md:p-10 rounded-2xl border-2 border-slate-200 bg-white/90 backdrop-blur-sm hover:border-primary-500/50 transition-colors min-h-[320px] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center border-2 border-primary-500/30">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.02 }}
                      className="px-3 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg border border-slate-200 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-600 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {techCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to stack ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            {currentIndex + 1} of {techCategories.length}
          </p>
        </div>
      </div>
    </section>
  )
}
