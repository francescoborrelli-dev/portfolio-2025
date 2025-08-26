export interface Project {
  title: string
  slug: string
  category: string
  cover: string
  featured: boolean
  publishedAt: string
  impact?: any
  gallery?: string[]
  description: string
  role: string
  year: string
  stack: string[]
  url: string
  body: {
    raw: string
    code: string
  }
}

export interface Post {
  title: string
  slug: string
  cover: string
  tags?: string[]
  readingMinutes: number
  readTime: number
  publishedAt: string
  date: string
  description: string
  excerpt: string
  category: string
  featured: boolean
  url: string
  body: {
    raw: string
    code: string
  }
}

export const mockProjects: Project[] = [
  {
    title: 'E-commerce Platform Redesign',
    slug: 'ecommerce-platform-redesign',
    category: 'E-commerce',
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    featured: true,
    publishedAt: '2024-03-15',
    description: 'Completo redesign di una piattaforma e-commerce che ha aumentato le conversioni del 150% attraverso un approccio user-centered.',
    role: 'Lead UX/UI Designer',
    year: '2024',
    stack: ['Figma', 'React', 'TypeScript', 'Tailwind CSS'],
    url: '/projects/ecommerce-platform-redesign',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop'
    ],
    body: {
      raw: 'Detailed project content...',
      code: '<h1>Project Details</h1>',
    },
  },
  {
    title: 'SaaS Dashboard Interface',
    slug: 'saas-dashboard-interface',
    category: 'SaaS',
    cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    featured: true,
    publishedAt: '2024-02-28',
    description: 'Design e sviluppo di una dashboard complessa per la gestione di dati aziendali con focus sull\'usabilità.',
    role: 'Product Designer',
    year: '2024',
    stack: ['Sketch', 'Vue.js', 'D3.js', 'SCSS'],
    url: '/projects/saas-dashboard-interface',
    body: {
      raw: 'Detailed project content...',
      code: '<h1>Project Details</h1>',
    },
  },
  {
    title: 'Brand Identity Refresh',
    slug: 'brand-identity-refresh',
    category: 'Branding',
    cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    featured: true,
    publishedAt: '2024-02-20',
    description: 'Un completo restyling dell\'identità visiva che ha trasformato la percezione del brand nel mercato.',
    role: 'Creative Director',
    year: '2024',
    stack: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    url: '/projects/brand-identity-refresh',
    body: {
      raw: 'Detailed project content...',
      code: '<h1>Project Details</h1>',
    },
  },
]

export const mockPosts: Post[] = [
  {
    title: 'Il Futuro del Web Design nel 2024',
    slug: 'futuro-web-design-2024',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    tags: ['Web Design', 'UI/UX', 'Trends'],
    readingMinutes: 8,
    readTime: 8,
    publishedAt: '2024-01-15T10:00:00.000Z',
    date: '2024-01-15T10:00:00.000Z',
    description: 'Esploriamo le tendenze emergenti che definiranno il design web nel 2024, dai micro-interactions al design system thinking.',
    excerpt: 'Esploriamo le tendenze emergenti che definiranno il design web nel 2024, dai micro-interactions al design system thinking.',
    category: 'Design',
    featured: true,
    url: '/blog/futuro-web-design-2024',
    body: {
      raw: 'Lorem ipsum dolor sit amet...',
      code: 'var Component = () => {}'
    }
  },
  {
    title: 'Typography nella Digital Experience',
    slug: 'typography-digital-experience',
    cover: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
    tags: ['Typography', 'Design', 'UX'],
    readingMinutes: 12,
    readTime: 12,
    publishedAt: '2024-03-05T10:00:00.000Z',
    date: '2024-03-05T10:00:00.000Z',
    description: 'Come la tipografia influenza profondamente la percezione e l\'usabilità dei prodotti digitali.',
    excerpt: 'Come la tipografia influenza profondamente la percezione e l\'usabilità dei prodotti digitali.',
    category: 'Design',
    featured: false,
    url: '/blog/typography-digital-experience',
    body: {
      raw: 'Detailed blog content...',
      code: '<h1>Blog Post Content</h1>',
    },
  },
  {
    title: 'Animazioni che Convertono',
    slug: 'animazioni-che-convertono',
    cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['Animation', 'UX', 'Performance'],
    readingMinutes: 6,
    readTime: 6,
    publishedAt: '2024-02-20T10:00:00.000Z',
    date: '2024-02-20T10:00:00.000Z',
    description: 'Il potere delle micro-animazioni nel migliorare l\'esperienza utente e i tassi di conversione.',
    excerpt: 'Il potere delle micro-animazioni nel migliorare l\'esperienza utente e i tassi di conversione.',
    category: 'Sviluppo',
    featured: false,
    url: '/blog/animazioni-che-convertono',
    body: {
      raw: 'Detailed blog content...',
      code: '<h1>Blog Post Content</h1>',
    },
  },
]

// Mock functions that simulate contentlayer behavior
export async function getProjects(): Promise<Project[]> {
  return mockProjects
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return mockProjects.find((project) => project.slug === slug)
}

export async function getPosts(): Promise<Post[]> {
  return mockPosts
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return mockPosts.find((post) => post.slug === slug)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter(project => project.featured)
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter(post => post.featured)
}
