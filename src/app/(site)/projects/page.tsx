import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'

// Mock project data - in a real app this would come from contentlayer
const projects = [
  {
    title: 'E-commerce di Lusso',
    description: 'Piattaforma e-commerce premium per brand di moda di alta gamma con esperienza utente immersiva e integrazione completa con sistemi di pagamento e gestione inventario.',
    image: '/images/placeholder-project.jpg',
    category: 'E-commerce',
    tags: ['React', 'Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com',
    slug: 'e-commerce-luxury',
    year: '2024',
    client: 'Fashion Brand Italia'
  },
  {
    title: 'App Mobile Startup',
    description: 'Applicazione mobile per startup fintech con focus su UX/UI moderna e funzionalità avanzate per la gestione delle finanze personali.',
    image: '/images/placeholder-project.jpg',
    category: 'Mobile App',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'Node.js'],
    link: 'https://example.com',
    slug: 'app-mobile-startup',
    year: '2024',
    client: 'FinTech Startup'
  },
  {
    title: 'Brand Identity Tech',
    description: 'Identità visiva completa per azienda tecnologica con logo, brand guidelines e materiali marketing per lancio sul mercato internazionale.',
    image: '/images/placeholder-project.jpg',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Figma', 'Illustrator'],
    slug: 'brand-identity-tech',
    year: '2023',
    client: 'Tech Company'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard web per analytics avanzati con visualizzazioni dati interattive e sistema di reporting automatizzato per aziende SaaS.',
    image: '/images/placeholder-project.jpg',
    category: 'Web App',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Docker'],
    link: 'https://example.com',
    slug: 'dashboard-analytics',
    year: '2023',
    client: 'SaaS Company'
  },
  {
    title: 'Social Media Campaign',
    description: 'Campagna social completa per lancio prodotto con content strategy, visual design e gestione community per aumento engagement.',
    image: '/images/placeholder-project.jpg',
    category: 'Social Media',
    tags: ['Content Strategy', 'Visual Design', 'Instagram', 'Facebook'],
    slug: 'social-media-campaign',
    year: '2023',
    client: 'Consumer Brand'
  },
  {
    title: 'Portfolio Architetto',
    description: 'Sito portfolio per studio di architettura con galleria progetti interattiva e sistema CMS personalizzato per gestione contenuti.',
    image: '/images/placeholder-project.jpg',
    category: 'Portfolio',
    tags: ['Next.js', 'Sanity CMS', 'GSAP', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com',
    slug: 'portfolio-architetto',
    year: '2022',
    client: 'Studio di Architettura'
  }
]

const categories = ['Tutti', 'E-commerce', 'Mobile App', 'Branding', 'Web App', 'Social Media', 'Portfolio']

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              I Miei <span className="text-gradient">Progetti</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Una collezione dei miei lavori più significativi, ogni progetto 
              rappresenta una sfida unica e una soluzione innovativa.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'Tutti' ? 'primary' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal>
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">{projects.length}+</div>
                <div className="text-foreground/70">Progetti Completati</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                <div className="text-foreground/70">Clienti Soddisfatti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">3</div>
                <div className="text-foreground/70">Anni di Esperienza</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-foreground/70">Progetti in Tempo</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}