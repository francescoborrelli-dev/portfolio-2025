import { Reveal } from '@/components/motion/Reveal'
import { BlogCard } from '@/components/cards/BlogCard'
import { Badge } from '@/components/ui/Badge'

// Mock blog data - in a real app this would come from contentlayer
const blogPosts = [
  {
    title: 'Le Tendenze del Design Web nel 2024',
    description: 'Analisi delle principali tendenze di design che stanno definendo il web design nel 2024, dalle animazioni micro-interattive all\'AI-driven UX.',
    date: '2024-01-15',
    image: '/images/placeholder-blog.jpg',
    tags: ['Web Design', 'UX/UI', 'Tendenze', '2024'],
    slug: 'tendenze-design-web-2024',
    readingTime: { text: '8 min lettura' },
    featured: true
  },
  {
    title: 'Guida Completa a Next.js 14 per Principianti',
    description: 'Una guida pratica per iniziare con Next.js 14, il framework React che sta rivoluzionando lo sviluppo web moderno.',
    date: '2024-01-08',
    image: '/images/placeholder-blog.jpg',
    tags: ['Next.js', 'React', 'JavaScript', 'Tutorial', 'Frontend'],
    slug: 'guida-nextjs-14-principianti',
    readingTime: { text: '12 min lettura' },
    featured: false
  },
  {
    title: 'Come Ottimizzare le Performance di un\'App React',
    description: 'Tecniche avanzate e best practices per migliorare le performance delle applicazioni React, dalla gestione dello stato al code splitting.',
    date: '2024-01-02',
    image: '/images/placeholder-blog.jpg',
    tags: ['React', 'Performance', 'Ottimizzazione', 'Frontend', 'JavaScript'],
    slug: 'ottimizzare-performance-react',
    readingTime: { text: '15 min lettura' },
    featured: false
  }
]

const categories = ['Tutti', 'Web Design', 'React', 'Next.js', 'Tutorial', 'Performance']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Il Mio <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Condivido conoscenze, esperienze e riflessioni sul mondo del design 
              e dello sviluppo web moderno.
            </p>
          </div>
        </Reveal>

        {/* Featured Post */}
        {featuredPost && (
          <Reveal delay={0.2}>
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Badge variant="primary" className="mr-3">
                  In Evidenza
                </Badge>
                <h2 className="text-2xl font-bold">Post in Evidenza</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 bg-secondary/30 border border-border/50 rounded-2xl p-8">
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold hover:text-primary transition-colors">
                    <a href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </a>
                  </h3>
                  <p className="text-foreground/70 line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center text-sm text-foreground/60">
                    <span>{new Date(featuredPost.date).toLocaleDateString('it-IT', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readingTime.text}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Filters */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherPosts.map((post, index) => (
            <Reveal key={post.slug} delay={0.4 + index * 0.1}>
              <BlogCard {...post} />
            </Reveal>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Reveal>
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Resta Aggiornato
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Iscriviti alla newsletter per ricevere i nuovi articoli direttamente 
              nella tua inbox e non perdere nessun aggiornamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="la-tua-email@example.com"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Iscriviti
              </button>
            </div>
            <p className="text-xs text-foreground/60 mt-3">
              Niente spam, solo contenuti di qualità. Puoi disiscriverti in qualsiasi momento.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}