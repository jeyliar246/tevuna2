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

// SEO snippets for meta descriptions (character-optimized for search results)
export const SEO_SNIPPETS = {
  home: {
    metaTitle: 'Tevuna | Deep Understanding, Strategic Thinking, Smart Solutions',
    metaDescription: 'Tevuna is a UK tech solutions agency. We combine deep understanding with strategic thinking to deliver web development, mobile apps & digital strategy. Get in touch.',
    metaKeywords: 'tech solutions UK, digital agency London, web development, mobile apps, strategic consulting, Tevuna, insight-driven solutions, digital strategy',
    ogTitle: 'Tevuna - Deep Understanding, Strategic Thinking, Smart Solutions',
    ogDescription: 'We craft intelligent, insight-driven experiences that solve complex challenges. Web development, mobile apps, data analytics & digital strategy. UK-based tech agency.',
  },
  academy: {
    metaTitle: 'Tevuna Academy | Tech Courses & Online Learning',
    metaDescription: 'Join Tevuna Academy. Learn web development, mobile apps, data analytics, AI & ML. Practical tech courses for beginners to advanced. Register for the waitlist now.',
    metaKeywords: 'Tevuna Academy, tech courses UK, online programming courses, web development course, coding bootcamp, data analytics training, AI learning, tech education',
    ogTitle: 'Tevuna Academy - Tech Courses & Online Learning',
    ogDescription: 'Learn cutting-edge tech skills at Tevuna Academy. Web development, mobile apps, data analytics, AI & ML. Join the waitlist and start your tech journey.',
  },
}
