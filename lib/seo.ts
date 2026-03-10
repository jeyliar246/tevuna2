/**
 * SEO configuration and structured data for Tevuna
 * https://www.tevuna.co.uk
 */

export const SITE_URL = 'https://www.tevuna.co.uk'

export const SITE_CONFIG = {
  name: 'Tevuna',
  description: 'Tevuna embodies deep understanding and strategic thinking. We craft intelligent, insight-driven experiences that solve complex challenges and drive meaningful results.',
  tagline: 'Deep Understanding, Strategic Thinking, Smart Solutions',
  locale: 'en_GB',
  twitterHandle: '@tevuna',
  phone: '+44 776 905 6560',
  email: 'info@tevuna.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
}

// SEO snippets for meta descriptions (~50 words each, drawn from home and academy page content)
export const SEO_SNIPPETS = {
  home: {
    metaTitle: 'Tevuna | Deep Understanding, Strategic Thinking, Smart Solutions',
    metaDescription: 'Tevuna embodies deep understanding and strategic thinking. We create insight-driven experiences that solve complex challenges and deliver meaningful results. Smart solutions through strategic comprehension—web development, mobile apps, and digital strategy from a UK tech agency. Get in touch.',
    metaKeywords: 'tech solutions UK, digital agency London, web development, mobile apps, strategic consulting, Tevuna, insight-driven solutions, digital strategy',
    ogTitle: 'Tevuna - Deep Understanding, Strategic Thinking, Smart Solutions',
    ogDescription: 'Tevuna goes beyond surface-level solutions to understand your business at its core. We combine profound insight with smart solutions, delivering digital experiences that solve real problems. Web development, mobile apps, data analytics & digital strategy. UK-based tech agency.',
  },
  academy: {
    metaTitle: 'Tevuna Academy | Tech Courses & Online Learning',
    metaDescription: 'Transform your career with strategic tech education at Tevuna Academy. Join the next generation of tech professionals. Learn cutting-edge technologies from industry experts, build real-world projects, and go from beginner to professional. Web development, mobile apps, data analytics, AI & ML. Join the waitlist now.',
    metaKeywords: 'Tevuna Academy, tech courses UK, online programming courses, web development course, coding bootcamp, data analytics training, AI learning, tech education',
    ogTitle: 'Tevuna Academy - Tech Courses & Online Learning',
    ogDescription: 'At Tevuna Academy we teach you how to think strategically, not just how to code. Comprehensive tech courses in web development, mobile apps, data analytics, AI & machine learning. Learn from industry experts and build projects that matter. Join the waitlist today.',
  },
}
