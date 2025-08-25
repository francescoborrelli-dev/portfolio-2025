// This file provides a content abstraction layer
// In development, it can return mock data
// In production with contentlayer, it would use the generated types

export interface Project {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  client?: string
  year: string
  link?: string
  github?: string
  slug: string
  featured: boolean
  order: number
  published: boolean
  body?: {
    code: string
  }
  readingTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export interface Post {
  title: string
  description: string
  date: string
  image?: string
  tags: string[]
  slug: string
  published: boolean
  featured: boolean
  body?: {
    code: string
  }
  readingTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

// Mock data for development
const mockProjects: Project[] = [
  {
    title: 'E-commerce di Lusso',
    description: 'Piattaforma e-commerce premium per brand di moda di alta gamma con esperienza utente immersiva e integrazione completa con sistemi di pagamento e gestione inventario.',
    image: '/images/placeholder-project.jpg',
    category: 'E-commerce',
    tags: ['React', 'Next.js', 'Shopify', 'Tailwind CSS', 'Stripe', 'Node.js'],
    client: 'Fashion Brand Italia',
    year: '2024',
    link: 'https://example.com',
    github: 'https://github.com',
    slug: 'e-commerce-luxury',
    featured: true,
    order: 1,
    published: true,
    readingTime: { text: '5 min lettura', minutes: 5, time: 300000, words: 1000 }
  },
  {
    title: 'App Mobile Startup',
    description: 'Applicazione mobile per startup fintech con focus su UX/UI moderna e funzionalità avanzate per la gestione delle finanze personali.',
    image: '/images/placeholder-project.jpg',
    category: 'Mobile App',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'Node.js', 'Redux'],
    client: 'FinTech Startup',
    year: '2024',
    link: 'https://example.com',
    slug: 'app-mobile-startup',
    featured: true,
    order: 2,
    published: true,
    readingTime: { text: '6 min lettura', minutes: 6, time: 360000, words: 1200 }
  },
  {
    title: 'Brand Identity Tech',
    description: 'Identità visiva completa per azienda tecnologica con logo, brand guidelines e materiali marketing per lancio sul mercato internazionale.',
    image: '/images/placeholder-project.jpg',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Figma', 'Illustrator'],
    client: 'Tech Company',
    year: '2023',
    slug: 'brand-identity-tech',
    featured: false,
    order: 3,
    published: true,
    readingTime: { text: '4 min lettura', minutes: 4, time: 240000, words: 800 }
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard web per analytics avanzati con visualizzazioni dati interattive e sistema di reporting automatizzato per aziende SaaS.',
    image: '/images/placeholder-project.jpg',
    category: 'Web App',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Docker'],
    client: 'SaaS Company',
    year: '2023',
    link: 'https://example.com',
    slug: 'dashboard-analytics',
    featured: false,
    order: 4,
    published: true,
    readingTime: { text: '7 min lettura', minutes: 7, time: 420000, words: 1400 }
  },
  {
    title: 'Social Media Campaign',
    description: 'Campagna social completa per lancio prodotto con content strategy, visual design e gestione community per aumento engagement.',
    image: '/images/placeholder-project.jpg',
    category: 'Social Media',
    tags: ['Content Strategy', 'Visual Design', 'Instagram', 'Facebook'],
    client: 'Consumer Brand',
    year: '2023',
    slug: 'social-media-campaign',
    featured: false,
    order: 5,
    published: true,
    readingTime: { text: '3 min lettura', minutes: 3, time: 180000, words: 600 }
  },
  {
    title: 'Portfolio Architetto',
    description: 'Sito portfolio per studio di architettura con galleria progetti interattiva e sistema CMS personalizzato per gestione contenuti.',
    image: '/images/placeholder-project.jpg',
    category: 'Portfolio',
    tags: ['Next.js', 'Sanity CMS', 'GSAP', 'Tailwind CSS'],
    client: 'Studio di Architettura',
    year: '2022',
    link: 'https://example.com',
    github: 'https://github.com',
    slug: 'portfolio-architetto',
    featured: false,
    order: 6,
    published: true,
    readingTime: { text: '4 min lettura', minutes: 4, time: 240000, words: 800 }
  }
]

const mockPosts: Post[] = [
  {
    title: 'Le Tendenze del Design Web nel 2024',
    description: 'Analisi delle principali tendenze di design che stanno definendo il web design nel 2024, dalle animazioni micro-interattive all\'AI-driven UX.',
    date: '2024-01-15',
    image: '/images/placeholder-blog.jpg',
    tags: ['Web Design', 'UX/UI', 'Tendenze', '2024'],
    slug: 'tendenze-design-web-2024',
    published: true,
    featured: true,
    readingTime: { text: '8 min lettura', minutes: 8, time: 480000, words: 1600 }
  },
  {
    title: 'Guida Completa a Next.js 14 per Principianti',
    description: 'Una guida pratica per iniziare con Next.js 14, il framework React che sta rivoluzionando lo sviluppo web moderno.',
    date: '2024-01-08',
    image: '/images/placeholder-blog.jpg',
    tags: ['Next.js', 'React', 'JavaScript', 'Tutorial', 'Frontend'],
    slug: 'guida-nextjs-14-principianti',
    published: true,
    featured: false,
    readingTime: { text: '12 min lettura', minutes: 12, time: 720000, words: 2400 }
  },
  {
    title: 'Come Ottimizzare le Performance di un\'App React',
    description: 'Tecniche avanzate e best practices per migliorare le performance delle applicazioni React, dalla gestione dello stato al code splitting.',
    date: '2024-01-02',
    image: '/images/placeholder-blog.jpg',
    tags: ['React', 'Performance', 'Ottimizzazione', 'Frontend', 'JavaScript'],
    slug: 'ottimizzare-performance-react',
    published: true,
    featured: false,
    readingTime: { text: '15 min lettura', minutes: 15, time: 900000, words: 3000 }
  }
]

// Content API functions
export async function getAllProjects(): Promise<Project[]> {
  // In production, this would use contentlayer:
  // const { allProjects } = await import('contentlayer/generated')
  // return allProjects.filter(project => project.published).sort((a, b) => a.order - b.order)
  
  return mockProjects.filter(project => project.published).sort((a, b) => a.order - b.order)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // In production:
  // const { allProjects } = await import('contentlayer/generated')
  // return allProjects.find(project => project.slug === slug && project.published) || null
  
  return mockProjects.find(project => project.slug === slug && project.published) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.filter(project => project.featured)
}

export async function getAllPosts(): Promise<Post[]> {
  // In production:
  // const { allPosts } = await import('contentlayer/generated')
  // return allPosts.filter(post => post.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return mockPosts.filter(post => post.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // In production:
  // const { allPosts } = await import('contentlayer/generated')
  // return allPosts.find(post => post.slug === slug && post.published) || null
  
  return mockPosts.find(post => post.slug === slug && post.published) || null
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.featured)
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}