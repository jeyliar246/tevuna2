'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, GraduationCap, Languages, UserCheck } from 'lucide-react'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function AcademyPage() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [codingAnimation, setCodingAnimation] = useState<any>(null)
  const [quizCurrentQuestion, setQuizCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizResults, setQuizResults] = useState<{ category: string; percentage: number }[] | null>(null)

  useEffect(() => {
    setMounted(true)
    // Set countdown to 3 months from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 3)
    
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

    // Load Lottie animation
    fetch('/assets/lottie/coding-slide.json')
      .then((res) => res.json())
      .then((data) => setCodingAnimation(data))
      .catch((err) => console.error('Error loading Lottie animation:', err))

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

  // Quiz Questions
  const quizQuestions = [
    {
      question: "What excites you most about technology?",
      options: [
        { text: "Building beautiful user interfaces", category: "Design & UI/UX" },
        { text: "Creating mobile apps that people use daily", category: "Mobile Development" },
        { text: "Developing web applications and websites", category: "Web Development" },
        { text: "Working with data and analytics", category: "Data & Analytics" },
        { text: "Building intelligent systems with AI", category: "AI & Machine Learning" },
        { text: "Managing infrastructure and deployment", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What's your preferred work environment?",
      options: [
        { text: "Creative and visual design tools", category: "Design & UI/UX" },
        { text: "Mobile development frameworks", category: "Mobile Development" },
        { text: "Web browsers and development tools", category: "Web Development" },
        { text: "Data visualization and analysis tools", category: "Data & Analytics" },
        { text: "AI models and machine learning platforms", category: "AI & Machine Learning" },
        { text: "Cloud platforms and servers", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "Which problem would you most like to solve?",
      options: [
        { text: "Making apps more user-friendly and intuitive", category: "Design & UI/UX" },
        { text: "Creating apps for smartphones and tablets", category: "Mobile Development" },
        { text: "Building scalable web platforms", category: "Web Development" },
        { text: "Extracting insights from large datasets", category: "Data & Analytics" },
        { text: "Automating tasks with artificial intelligence", category: "AI & Machine Learning" },
        { text: "Ensuring systems run smoothly and efficiently", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What type of projects interest you?",
      options: [
        { text: "Design systems and user experience", category: "Design & UI/UX" },
        { text: "Native and cross-platform mobile apps", category: "Mobile Development" },
        { text: "E-commerce sites and web platforms", category: "Web Development" },
        { text: "Business intelligence dashboards", category: "Data & Analytics" },
        { text: "Chatbots and AI-powered applications", category: "AI & Machine Learning" },
        { text: "Cloud infrastructure and automation", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "How do you prefer to learn?",
      options: [
        { text: "Through visual design and prototyping", category: "Design & UI/UX" },
        { text: "By building mobile apps step by step", category: "Mobile Development" },
        { text: "Creating websites and web applications", category: "Web Development" },
        { text: "Analyzing data and creating reports", category: "Data & Analytics" },
        { text: "Experimenting with AI models", category: "AI & Machine Learning" },
        { text: "Setting up servers and infrastructure", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What's your ideal end result?",
      options: [
        { text: "Beautiful, intuitive user interfaces", category: "Design & UI/UX" },
        { text: "Mobile apps available on app stores", category: "Mobile Development" },
        { text: "Websites accessible to millions", category: "Web Development" },
        { text: "Data-driven business decisions", category: "Data & Analytics" },
        { text: "Intelligent automated systems", category: "AI & Machine Learning" },
        { text: "Reliable, scalable infrastructure", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "Which tool would you most like to master?",
      options: [
        { text: "Figma, Adobe XD, or Sketch", category: "Design & UI/UX" },
        { text: "React Native, Flutter, or Swift", category: "Mobile Development" },
        { text: "React, Next.js, or Node.js", category: "Web Development" },
        { text: "SQL, Python, or Tableau", category: "Data & Analytics" },
        { text: "TensorFlow, PyTorch, or OpenAI APIs", category: "AI & Machine Learning" },
        { text: "AWS, Docker, or Kubernetes", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What motivates you in tech?",
      options: [
        { text: "Creating visually appealing experiences", category: "Design & UI/UX" },
        { text: "Reaching users on their mobile devices", category: "Mobile Development" },
        { text: "Building the next big web platform", category: "Web Development" },
        { text: "Discovering patterns in data", category: "Data & Analytics" },
        { text: "Pushing the boundaries of AI", category: "AI & Machine Learning" },
        { text: "Building robust, scalable systems", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What's your favorite part of development?",
      options: [
        { text: "Designing user flows and interfaces", category: "Design & UI/UX" },
        { text: "Testing apps on different devices", category: "Mobile Development" },
        { text: "Seeing websites come to life", category: "Web Development" },
        { text: "Creating charts and visualizations", category: "Data & Analytics" },
        { text: "Training and fine-tuning AI models", category: "AI & Machine Learning" },
        { text: "Optimizing performance and reliability", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "Which industry appeals to you most?",
      options: [
        { text: "Creative agencies and design studios", category: "Design & UI/UX" },
        { text: "Mobile-first startups", category: "Mobile Development" },
        { text: "SaaS companies and web platforms", category: "Web Development" },
        { text: "Data-driven enterprises", category: "Data & Analytics" },
        { text: "AI and tech innovation companies", category: "AI & Machine Learning" },
        { text: "Cloud infrastructure providers", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "How do you approach problem-solving?",
      options: [
        { text: "Through user research and design thinking", category: "Design & UI/UX" },
        { text: "By building and iterating on mobile apps", category: "Mobile Development" },
        { text: "Creating web solutions from scratch", category: "Web Development" },
        { text: "Analyzing data to find solutions", category: "Data & Analytics" },
        { text: "Using AI to automate and optimize", category: "AI & Machine Learning" },
        { text: "Architecting scalable systems", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What type of team would you enjoy?",
      options: [
        { text: "Design and creative teams", category: "Design & UI/UX" },
        { text: "Mobile app development teams", category: "Mobile Development" },
        { text: "Full-stack web development teams", category: "Web Development" },
        { text: "Data science and analytics teams", category: "Data & Analytics" },
        { text: "AI research and development teams", category: "AI & Machine Learning" },
        { text: "DevOps and infrastructure teams", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What's your learning style?",
      options: [
        { text: "Visual and hands-on design work", category: "Design & UI/UX" },
        { text: "Building mobile apps from tutorials", category: "Mobile Development" },
        { text: "Following web development courses", category: "Web Development" },
        { text: "Working with datasets and examples", category: "Data & Analytics" },
        { text: "Experimenting with AI models", category: "AI & Machine Learning" },
        { text: "Setting up and configuring systems", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What excites you about the future of tech?",
      options: [
        { text: "New design trends and tools", category: "Design & UI/UX" },
        { text: "Advancements in mobile technology", category: "Mobile Development" },
        { text: "Evolution of web platforms", category: "Web Development" },
        { text: "Big data and analytics innovations", category: "Data & Analytics" },
        { text: "Breakthroughs in AI and ML", category: "AI & Machine Learning" },
        { text: "Cloud computing advancements", category: "DevOps & Cloud" }
      ]
    },
    {
      question: "What would make you feel accomplished?",
      options: [
        { text: "Designing an award-winning interface", category: "Design & UI/UX" },
        { text: "Having your app downloaded by thousands", category: "Mobile Development" },
        { text: "Building a popular web application", category: "Web Development" },
        { text: "Providing insights that drive decisions", category: "Data & Analytics" },
        { text: "Creating an AI that solves real problems", category: "AI & Machine Learning" },
        { text: "Building infrastructure that scales globally", category: "DevOps & Cloud" }
      ]
    }
  ]

  // Quiz handlers
  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers, answerIndex]
    setQuizAnswers(newAnswers)

    if (quizCurrentQuestion < quizQuestions.length - 1) {
      setQuizCurrentQuestion(quizCurrentQuestion + 1)
    } else {
      // Calculate results
      calculateQuizResults(newAnswers)
    }
  }

  const calculateQuizResults = (answers: number[]) => {
    const categoryScores: { [key: string]: number } = {
      'Web Development': 0,
      'Mobile Development': 0,
      'AI & Machine Learning': 0,
      'Data & Analytics': 0,
      'DevOps & Cloud': 0,
      'Design & UI/UX': 0
    }

    answers.forEach((answerIndex, questionIndex) => {
      const selectedOption = quizQuestions[questionIndex].options[answerIndex]
      categoryScores[selectedOption.category] = (categoryScores[selectedOption.category] || 0) + 1
    })

    const totalQuestions = answers.length
    const results = Object.entries(categoryScores)
      .map(([category, score]) => ({
        category,
        percentage: Math.round((score / totalQuestions) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3)

    setQuizResults(results)
  }

  const resetQuiz = () => {
    setQuizCurrentQuestion(0)
    setQuizAnswers([])
    setQuizResults(null)
  }

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
            <div className="max-w-4xl mx-auto">
              {/* Content - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="text-center"
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

                {/* Lottie Animation - Below Timer */}
                {codingAnimation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                    className="mt-12"
                  >
                    <Lottie 
                      animationData={codingAnimation} 
                      loop={true}
                      className="w-full h-auto max-w-4xl mx-auto"
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
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

        {/* About Us Section with Statistics */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Content - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="space-y-6 text-center"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block text-sm text-slate-500 uppercase tracking-widest font-semibold"
                >
                  About Us
                </motion.span>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Explore Your Tech Skills{' '}
                  <span className="text-primary-500">With Us</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Discover your tech potential with us! Join our exciting courses at Tevuna Academy 
                  for a fun and strategic tech learning adventure.
                </p>

                {/* Statistics Cards */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                      <UserCheck className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                      2102+
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      Expert Team
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                      <Languages className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">
                      50+
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      Courses
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                      <GraduationCap className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                      55.76k
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      Students
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Know Your Tech Quiz Section */}
        <section className="py-20 bg-white/50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Know Your{' '}
                <span className="text-primary-500">Tech</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Take our personality quiz to discover which tech course is the perfect fit for you. 
                Answer 15 questions and get personalized recommendations.
              </p>
            </motion.div>

            {!quizResults ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-600">
                      Question {quizCurrentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-semibold text-primary-500">
                      {Math.round(((quizCurrentQuestion + 1) / quizQuestions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((quizCurrentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Question Card */}
                <motion.div
                  key={quizCurrentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                    {quizQuestions[quizCurrentQuestion].question}
                  </h3>

                  <div className="space-y-4">
                    {quizQuestions[quizCurrentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuizAnswer(index)}
                        className="w-full text-left p-6 rounded-xl border-2 border-slate-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 bg-white"
                      >
                        <span className="text-lg text-slate-700 font-medium">{option.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              /* Results Section */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-500/20 flex items-center justify-center border-4 border-primary-500"
                    >
                      <CheckCircle2 className="w-10 h-10 text-primary-500" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Your Perfect Tech Match!
                    </h3>
                    <p className="text-lg text-slate-600">
                      Based on your answers, here are the courses that best fit your personality and interests.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {quizResults.map((result, index) => {
                      const courseCategory = courses.find(c => c.category === result.category)
                      const rankLabels = ['1st Choice', '2nd Choice', '3rd Choice']
                      const rankColors = [
                        'from-primary-500 to-primary-600',
                        'from-pink-500 to-pink-600',
                        'from-purple-500 to-purple-600'
                      ]

                      return (
                        <motion.div
                          key={result.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-2 border-slate-200 rounded-xl p-6 hover:border-primary-300 transition-all"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span className={`px-4 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${rankColors[index]}`}>
                                  {rankLabels[index]}
                                </span>
                                <h4 className="text-2xl font-bold text-slate-900">{result.category}</h4>
                              </div>
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-semibold text-slate-600">Best Fit</span>
                                  <span className="text-2xl font-bold text-primary-500">{result.percentage}%</span>
                                </div>
                                <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${result.percentage}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className={`h-full bg-gradient-to-r ${rankColors[index]} rounded-full`}
                                  />
                                </div>
                              </div>
                              {courseCategory && (
                                <div className="mt-4">
                                  <p className="text-sm font-semibold text-slate-600 mb-2">Courses in this category:</p>
                                  <div className="flex flex-wrap gap-2">
                                    {courseCategory.courses.slice(0, 3).map((course, courseIndex) => (
                                      <span
                                        key={courseIndex}
                                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                                      >
                                        {course}
                                      </span>
                                    ))}
                                    {courseCategory.courses.length > 3 && (
                                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200">
                                        +{courseCategory.courses.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="mt-12 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetQuiz}
                      className="px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold text-lg hover:bg-primary-600 transition-colors shadow-lg"
                    >
                      Take Quiz Again
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked{' '}
                <span className="relative">
                  Questions
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-300/50 -z-10 transform -rotate-1" />
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative hidden md:block"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <div
                    role="img"
                    aria-label="Tevuna Academy students learning together"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80)' }}
                  />
                  {/* Decorative plus signs */}
                  <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
                    <div className="grid grid-cols-4 gap-2">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
                        <div key={i} className="w-2 h-2 bg-pink-500 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="space-y-4"
              >
                {[
                  {
                    question: "How much time do I need to commit each week?",
                    answer: "That's totally up to you! You can spend as little or as much time as you want. Remember, practice makes perfect!"
                  },
                  {
                    question: "What if I get stuck on something?",
                    answer: "Don't worry! Our expert instructors and community support are always here to help. You can reach out through our platform, join study groups, or schedule one-on-one sessions."
                  },
                  {
                    question: "How do I know I'm making progress?",
                    answer: "We provide detailed progress tracking, regular assessments, and project reviews. You'll receive feedback on your work and can see your improvement over time through our analytics dashboard."
                  },
                  {
                    question: "Are the courses suitable for beginners?",
                    answer: "Absolutely! Our courses are designed for all skill levels. We start with fundamentals and gradually progress to advanced topics, ensuring everyone can follow along and succeed."
                  },
                  {
                    question: "What happens after I complete a course?",
                    answer: "Upon completion, you'll receive a certificate of achievement. You'll also have access to our alumni network, job placement assistance, and ongoing learning resources to continue your growth."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden border border-slate-200 bg-white"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className={
                        openFAQ === index
                          ? 'w-full px-6 py-4 flex items-center justify-between text-left transition-all bg-pink-500 text-white'
                          : 'w-full px-6 py-4 flex items-center justify-between text-left transition-all bg-slate-50 text-slate-900 hover:bg-slate-100'
                      }
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="px-6 py-4 text-slate-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog/Courses Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Blog Posts */}
              <div className="lg:col-span-2 space-y-6">
                {[
                  {
                    title: 'The Journey to Tech Mastery',
                    description: 'Explore the profound impact of strategic tech education on personal and professional growth.',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
                    date: 'Jan 18, 2024'
                  },
                  {
                    title: 'The Art of Tech Learning: Tips for Success',
                    description: 'Delve into the art of tech learning with our in-depth tips for success and strategic thinking.',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
                    date: 'Jan 18, 2024'
                  }
                ].map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-square">
                        <div
                          role="img"
                          aria-label={`${post.title} - Tevuna Academy blog post`}
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 mb-4">
                            {post.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <motion.button
                            className="px-6 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Read More
                          </motion.button>
                          <span className="text-sm text-slate-500">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Latest Posts Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 p-6 h-fit"
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-semibold">
                    Latest Post
                  </span>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'A Harmony of Learning',
                      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
                      date: 'Jan 18, 2024'
                    },
                    {
                      title: 'Tech & Career Edge',
                      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
                      date: 'Jan 18, 2024'
                    },
                    {
                      title: 'Tech for All Levels',
                      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
                      date: 'Jan 18, 2024'
                    }
                  ].map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 cursor-pointer group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <div
                          role="img"
                          aria-label={`${post.title} - Latest post`}
                          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary-500 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-slate-500">{post.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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

