'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Smartphone, BarChart3, Cloud, Palette, Globe, Settings, Brain } from 'lucide-react'

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  return (
    <section id="technologies" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-16"
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
            Comprehensive tools and technologies we leverage to build exceptional solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: categoryIndex * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className="group relative p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-500 text-center md:text-left"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30 group-hover:border-primary-500/50 transition-all">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.02 }}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg border border-slate-200 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-600 transition-all cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary-500/0 group-hover:bg-primary-500/5 transition-all duration-500 pointer-events-none"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

