'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { pageTransition } from '@/lib/motion'
import { getPost, getPosts } from '@/lib/content'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import type { Post } from '@/lib/content'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getPost(params.slug)
        if (!postData) {
          notFound()
          return
        }
        setPost(postData)
      } catch (error) {
        console.error('Errore nel caricamento del post:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <article className="pt-32 md:pt-28 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Reveal>
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Torna al Blog
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Article Header */}
          <Reveal delay={0.1}>
            <header className="max-w-4xl mx-auto text-center mb-12">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted leading-relaxed mb-8">
                {post.description}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-small text-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingMinutes} min di lettura</span>
                </div>
              </div>
            </header>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-background-alt">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </Reveal>

          {/* Article Content */}
          <Reveal delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose-custom prose-lg"
                dangerouslySetInnerHTML={{ __html: post.body.code }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="w-4 h-4 text-muted" />
                    <span className="text-small font-medium text-foreground">Tag:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-card text-muted px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.4}>
            <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <Button variant="secondary" asChild>
                  <Link href="/blog">
                    ← Altri Articoli
                  </Link>
                </Button>
                
                <Button asChild>
                  <Link href="/contact">
                    Iniziamo a Collaborare
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </article>
    </motion.div>
  )
}

// Generate static params for known posts
export async function generateStaticParams() {
  try {
    const posts = await getPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
                      Accessibilità
                    </h4>
                    <p className="text-body text-muted text-small">
                      Componenti conformi WCAG 2.1 AAA per tutti gli utenti
                    </p>
                  </div>
                </div>

                <h2 className="font-heading font-bold text-2xl text-foreground mb-6 mt-12">
                  Conclusioni
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                  saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>

                <p className="text-body text-muted leading-relaxed">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                  voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="bg-card rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                      alt="Francesco Borrelli"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      Francesco Borrelli
                    </h3>
                    <p className="text-body text-muted leading-relaxed">
                      Design system architect e UI/UX designer con oltre 8 anni di esperienza 
                      nella creazione di interfacce digitali scalabili e accessibili. 
                      Appassionato di tecnologie emergenti e metodologie human-centered.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-16">
                Articoli Correlati
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                <Link href="/blog/design-thinking-process" className="group block">
                  <article className="bg-card rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=225&fit=crop"
                        alt="Design Thinking Process"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-small text-primary mb-2">Design</div>
                      <h3 className="font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        Design Thinking Process: Dalla Teoria alla Pratica
                      </h3>
                      <p className="text-body text-muted text-small">
                        Come applicare il design thinking per risolvere problemi complessi...
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>

              <Reveal delay={0.2}>
                <Link href="/blog/future-of-web-design" className="group block">
                  <article className="bg-card rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop"
                        alt="Future of Web Design"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-small text-primary mb-2">Tecnologia</div>
                      <h3 className="font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        Il Futuro del Web Design: Trends 2025
                      </h3>
                      <p className="text-body text-muted text-small">
                        Le tendenze emergenti che definiranno il design digitale...
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
