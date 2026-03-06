'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, GraduationCap, Languages, UserCheck, Globe, Smartphone, Brain, Database, Cloud, Palette, Plus, Minus } from 'lucide-react'

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
  const [openCourse, setOpenCourse] = useState<number | null>(0)
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
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Build modern, responsive websites and web applications from scratch',
      courses: [
        { name: 'HTML5 & CSS3 Fundamentals', duration: '4 weeks' },
        { name: 'JavaScript & TypeScript Mastery', duration: '6 weeks' },
        { name: 'React & Next.js Development', duration: '8 weeks' },
        { name: 'Node.js & Express.js Backend', duration: '6 weeks' },
        { name: 'Full-Stack Development', duration: '10 weeks' },
        { name: 'RESTful APIs & GraphQL', duration: '4 weeks' }
      ]
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Create native and cross-platform mobile apps for iOS and Android',
      courses: [
        { name: 'React Native Development', duration: '8 weeks' },
        { name: 'Flutter & Dart Programming', duration: '8 weeks' },
        { name: 'iOS Development with Swift', duration: '10 weeks' },
        { name: 'Android Development with Kotlin', duration: '10 weeks' },
        { name: 'Cross-Platform Mobile Apps', duration: '6 weeks' },
        { name: 'Mobile App Deployment', duration: '2 weeks' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'Harness the power of artificial intelligence and machine learning',
      courses: [
        { name: 'Introduction to AI & ML', duration: '4 weeks' },
        { name: 'LLM Integration & APIs', duration: '6 weeks' },
        { name: 'LangChain & AI Frameworks', duration: '6 weeks' },
        { name: 'AI-Powered Applications', duration: '8 weeks' },
        { name: 'Natural Language Processing', duration: '6 weeks' },
        { name: 'Computer Vision Basics', duration: '6 weeks' }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Transform raw data into actionable insights and business intelligence',
      courses: [
        { name: 'Database Design & Management', duration: '4 weeks' },
        { name: 'SQL & NoSQL Databases', duration: '6 weeks' },
        { name: 'Data Analytics & Visualization', duration: '6 weeks' },
        { name: 'Business Intelligence Tools', duration: '4 weeks' },
        { name: 'Data Science Fundamentals', duration: '8 weeks' },
        { name: 'Big Data Technologies', duration: '6 weeks' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-sky-500 to-indigo-500',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
      description: 'Master cloud infrastructure, deployment, and automation',
      courses: [
        { name: 'Cloud Computing (AWS, Azure, GCP)', duration: '8 weeks' },
        { name: 'Docker & Containerization', duration: '4 weeks' },
        { name: 'Kubernetes Orchestration', duration: '6 weeks' },
        { name: 'CI/CD Pipelines', duration: '4 weeks' },
        { name: 'Infrastructure as Code', duration: '4 weeks' },
        { name: 'Cloud Security & Best Practices', duration: '4 weeks' }
      ]
    },
    {
      category: 'Design & UI/UX',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Design beautiful, user-centered digital experiences',
      courses: [
        { name: 'UI/UX Design Principles', duration: '4 weeks' },
        { name: 'Figma & Design Tools', duration: '6 weeks' },
        { name: 'Responsive Web Design', duration: '4 weeks' },
        { name: 'Design Systems', duration: '4 weeks' },
        { name: 'User Research & Testing', duration: '4 weeks' },
        { name: 'Prototyping & Wireframing', duration: '4 weeks' }
      ]
    }
  ]

  // Quiz: non-technical questions that reveal how users think. Options don't map obviously to outcomes.
  // Scoring uses a separate weight matrix so results aren't predictable.
  const quizQuestions: { question: string; options: string[] }[] = [
    {
      question: "When you're explaining something to a friend, you usually...",
      options: [
        "Draw it or show them with your hands",
        "Give them step-by-step instructions",
        "Compare it to something they already know",
        "Ask what they've already tried, then build from there",
        "Break it into the big picture first, then details"
      ]
    },
    {
      question: "When something at home breaks (appliance, gadget, furniture), your first move is...",
      options: [
        "Look at it and try to fix it yourself",
        "Search for the exact problem online",
        "See if there's a pattern—when did it start? what changed?",
        "Read the manual or find a tutorial",
        "Call or ask someone who's done it before"
      ]
    },
    {
      question: "In a group project, you naturally end up...",
      options: [
        "Making sure everything looks clear and easy to follow",
        "Keeping the plan organized and making sure things get done on time",
        "Digging into the research or numbers to back up decisions",
        "Coming up with new angles or 'what if we tried this?'",
        "Getting the thing to actually work and run smoothly"
      ]
    },
    {
      question: "When you're learning something new, you get the most out of it when you...",
      options: [
        "See it done, then try it yourself",
        "Have a clear list or path to follow",
        "Understand the why before the how",
        "Experiment and see what happens when you change things",
        "Start with one small part and master it, then add more"
      ]
    },
    {
      question: "What kind of task at home would you actually enjoy and finish?",
      options: [
        "Rearranging a room or making a space look and feel better",
        "Building or fixing something with your hands (furniture, setup, DIY)",
        "Organizing files, budgets, or plans so everything has a place",
        "Researching the best option before buying or deciding",
        "Setting up something that runs on its own (automation, routines, systems)"
      ]
    },
    {
      question: "When you're stuck on a problem, what usually helps you most?",
      options: [
        "Stepping back and looking at it from a different angle",
        "Writing it down or breaking it into smaller steps",
        "Looking for similar situations and what worked there",
        "Trying different approaches until something clicks",
        "Asking someone to explain their thinking so you can compare"
      ]
    },
    {
      question: "How do you prefer to give someone directions to a place?",
      options: [
        "Describe landmarks and what they'll see along the way",
        "Give left/right turns and street names in order",
        "Draw a quick map or sketch",
        "Send a link or show them on your phone",
        "It depends who's asking—I adapt how I explain"
      ]
    },
    {
      question: "You feel most satisfied when...",
      options: [
        "Something finally looks right and feels good to use",
        "Something works reliably every time",
        "You've figured out why something works the way it does",
        "You've helped someone get unstuck",
        "You've built or set up something others can use"
      ]
    },
    {
      question: "When you're planning a trip or a big task, you tend to...",
      options: [
        "Focus on the experience—how it should feel, what you want to see",
        "Make a list and check things off in order",
        "Compare options and look at reviews or data before deciding",
        "Leave room to change plans if something better comes up",
        "Think about what could go wrong and have a backup plan"
      ]
    },
    {
      question: "What drains your energy more?",
      options: [
        "Things that look messy or inconsistent with no clear structure",
        "Unclear instructions or constantly changing requirements",
        "Having to guess without any data or feedback",
        "Doing the same repetitive thing without a way to improve it",
        "When nothing is documented and everything depends on one person"
      ]
    },
    {
      question: "When a friend has a problem, you're most likely to...",
      options: [
        "Listen and help them see it from a different perspective",
        "Break it down into steps and help them tackle one thing at a time",
        "Look for patterns—have they been here before? what worked then?",
        "Suggest tools or systems that could help (apps, lists, routines)",
        "Help them test ideas and see what actually works"
      ]
    },
    {
      question: "Which kind of puzzle or game do you enjoy most?",
      options: [
        "Visual or spatial—how things fit, layout, or look",
        "Logic and rules—following steps to a clear solution",
        "Patterns and connections—finding what links things",
        "Open-ended—many ways to win or many possible answers",
        "Strategy—optimizing and making systems work together"
      ]
    },
    {
      question: "In your ideal day, you'd spend more time...",
      options: [
        "Making or arranging things so they look and feel right",
        "Building or fixing something tangible",
        "Understanding how something works or why it's built that way",
        "Coming up with new ideas or improvements",
        "Making sure things run smoothly so others can do their best work"
      ]
    },
    {
      question: "When you disagree with how something is done, you usually...",
      options: [
        "Notice how confusing or unpleasant it is for the person using it",
        "See a more efficient or logical way to do it",
        "Want to see the evidence or data before changing",
        "Imagine a different approach that might work better",
        "Think about what will break or scale if we don't change it"
      ]
    },
    {
      question: "What would you rather be known for?",
      options: [
        "Making complex things feel simple and enjoyable",
        "Being the person who gets things built and shipped",
        "Finding the insight or pattern others missed",
        "Coming up with ideas that open new possibilities",
        "Being the one who keeps things running when it matters"
      ]
    }
  ]

  // Weight matrix: [questionIndex][optionIndex] -> { category: weight }. Weights are hidden; options don't map 1:1 to categories.
  const quizScoringMatrix: Record<string, number>[][] = [
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 1 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Mobile Development': 2, 'Web Development': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Mobile Development': 2, 'Design & UI/UX': 1, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'Data & Analytics': 1, 'Design & UI/UX': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'DevOps & Cloud': 0, 'Web Development': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Mobile Development': 1, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'Web Development': 1, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Mobile Development': 1, 'Web Development': 0, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Mobile Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Mobile Development': 1, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Mobile Development': 2, 'Web Development': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 1 },
      { 'Mobile Development': 2, 'DevOps & Cloud': 1, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0 },
      { 'Data & Analytics': 2, 'DevOps & Cloud': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'AI & Machine Learning': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'AI & Machine Learning': 1, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 1 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Mobile Development': 1, 'Web Development': 0, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'Data & Analytics': 1, 'Design & UI/UX': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 1, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 2 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 1 },
      { 'Mobile Development': 2, 'Web Development': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'Design & UI/UX': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 1 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'Mobile Development': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'Web Development': 2, 'Mobile Development': 1, 'DevOps & Cloud': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Mobile Development': 0, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'Web Development': 1, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Mobile Development': 1, 'Web Development': 0, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'DevOps & Cloud': 1, 'Web Development': 0, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'Mobile Development': 1, 'Design & UI/UX': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'DevOps & Cloud': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Mobile Development': 0, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0 },
      { 'Mobile Development': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'Mobile Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'Data & Analytics': 2, 'Web Development': 1, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Design & UI/UX': 1, 'AI & Machine Learning': 2, 'Web Development': 0, 'Data & Analytics': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ],
    [
      { 'Design & UI/UX': 2, 'Web Development': 0, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'Web Development': 2, 'Mobile Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0 },
      { 'Data & Analytics': 2, 'AI & Machine Learning': 1, 'Web Development': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'AI & Machine Learning': 2, 'Web Development': 1, 'Data & Analytics': 0, 'Design & UI/UX': 0, 'DevOps & Cloud': 0, 'Mobile Development': 0 },
      { 'DevOps & Cloud': 2, 'Web Development': 1, 'Data & Analytics': 0, 'AI & Machine Learning': 0, 'Design & UI/UX': 0, 'Mobile Development': 0 }
    ]
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
      const weights = quizScoringMatrix[questionIndex]?.[answerIndex]
      if (weights) {
        Object.entries(weights).forEach(([cat, w]) => {
          categoryScores[cat] = (categoryScores[cat] || 0) + w
        })
      }
    })

    const totalWeight = Object.values(categoryScores).reduce((a, b) => a + b, 0) || 1
    const results = Object.entries(categoryScores)
      .map(([category, score]) => ({
        category,
        percentage: Math.round((score / totalWeight) * 100)
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
                Answer 15 short questions about how you think, work, and solve problems—no tech experience needed. 
                We use your answers to suggest tech paths that match how your mind works.
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
                        <span className="text-lg text-slate-700 font-medium">{option}</span>
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
                      Based on how you think and approach problems, these areas tend to fit people like you. 
                      Not a label—just a practical starting point to explore.
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
                                        {course.name}
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

                  {/* Waitlist Form - shown after quiz results */}
                  <div className="mt-16 pt-12 border-t-2 border-slate-200">
                    <div className="text-center mb-8">
                      <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 text-xs font-mono uppercase tracking-widest mb-4">
                        Join Waitlist
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Ready to Start Your Journey?
                      </h3>
                      <p className="text-slate-600">
                        Reserve your spot now and be the first to know when enrollment opens for your matched courses.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="quiz-name" className="block text-sm font-semibold text-slate-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="quiz-name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="quiz-email" className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="quiz-email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="quiz-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="quiz-phone"
                          name="phone"
                          required
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="quiz-interest" className="block text-sm font-semibold text-slate-700 mb-2">
                          Area of Interest
                        </label>
                        <select
                          id="quiz-interest"
                          name="interest"
                          required
                          defaultValue={quizResults?.[0]?.category ? quizResults[0].category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') : ''}
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        >
                          <option value="">Select an area</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-development">Mobile Development</option>
                          <option value="ai-machine-learning">AI & Machine Learning</option>
                          <option value="data-analytics">Data & Analytics</option>
                          <option value="devops-cloud">DevOps & Cloud</option>
                          <option value="design-ui/ux">Design & UI/UX</option>
                          <option value="all">All Courses</option>
                        </select>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="quiz-privacy"
                          name="privacy_consent"
                          required
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                        />
                        <label htmlFor="quiz-privacy" className="text-sm text-slate-600">
                          I have read the{' '}
                          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Privacy Policy</a>
                          {' '}and agree to my data being used to manage my waitlist registration and to be contacted about Tevuna Academy.
                        </label>
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

                    <div className="mt-8 text-center">
                      <button
                        onClick={resetQuiz}
                        className="text-slate-500 hover:text-primary-500 text-sm font-medium transition-colors"
                      >
                        ← Take Quiz Again
                      </button>
                    </div>
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
                    style={{ backgroundImage: 'url(/assets/academy-students.jpg)' }}
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
                    image: '/assets/academy-team.jpg',
                    date: 'Jan 18, 2024'
                  },
                  {
                    title: 'The Art of Tech Learning: Tips for Success',
                    description: 'Delve into the art of tech learning with our in-depth tips for success and strategic thinking.',
                    image: '/assets/academy-students.jpg',
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
                      image: '/assets/academy-learning.jpg',
                      date: 'Jan 18, 2024'
                    },
                    {
                      title: 'Tech & Career Edge',
                      image: '/assets/academy-team.jpg',
                      date: 'Jan 18, 2024'
                    },
                    {
                      title: 'Tech for All Levels',
                      image: '/assets/academy-students.jpg',
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

            <div className="max-w-4xl mx-auto space-y-4">
              {courses.map((category, categoryIndex) => {
                const Icon = category.icon
                const isOpen = openCourse === categoryIndex

                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.08, type: 'spring', stiffness: 100 }}
                    className="group"
                  >
                    <div
                      className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? `${category.borderColor} bg-white shadow-xl`
                          : 'border-slate-200 bg-white/80 hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => setOpenCourse(isOpen ? null : categoryIndex)}
                        className="w-full p-6 flex items-center gap-4 text-left transition-all"
                      >
                        {/* Icon Container */}
                        <motion.div
                          animate={{ scale: isOpen ? 1.1 : 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.bgColor} ${category.borderColor} border-2 flex-shrink-0`}
                        >
                          <Icon className={`w-7 h-7 bg-gradient-to-r ${category.color} bg-clip-text`} style={{ color: isOpen ? undefined : '#64748b' }} />
                        </motion.div>

                        {/* Title & Description */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                            {category.category}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1 truncate">
                            {category.description}
                          </p>
                        </div>

                        {/* Course Count Badge */}
                        <div className="hidden sm:flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.bgColor} text-slate-700`}>
                            {category.courses.length} courses
                          </span>
                        </div>

                        {/* Expand/Collapse Icon */}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                            isOpen ? `bg-gradient-to-r ${category.color} text-white` : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              {/* Divider */}
                              <div className={`h-px bg-gradient-to-r ${category.color} opacity-20 mb-6`} />

                              {/* Course Grid */}
                              <div className="grid sm:grid-cols-2 gap-3">
                                {category.courses.map((course, courseIndex) => (
                                  <motion.div
                                    key={course.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: courseIndex * 0.05, duration: 0.3 }}
                                    className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor} hover:shadow-md transition-all group/item cursor-default`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-medium text-slate-800 text-sm leading-tight">
                                          {course.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                                          <span className="text-xs text-slate-500">{course.duration}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Bottom CTA */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6 flex items-center justify-between"
                              >
                                <p className="text-sm text-slate-500">
                                  Complete all courses in approximately <span className="font-semibold text-slate-700">
                                    {category.courses.reduce((acc, c) => acc + parseInt(c.duration), 0)} weeks
                                  </span>
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  )
}

