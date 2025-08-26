'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { pageTransition, stagger } from '@/lib/motion'
import { getPosts } from '@/lib/content'
import { useEffect, useState } from 'react'
import type { Post } from '@/lib/content'

const categories = ['Tutti', 'Design', 'Sviluppo', 'UI/UX', 'Branding']

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getPosts()
        setPosts(allPosts)
        setFilteredPosts(allPosts)
      } catch (error) {
        console.error('Errore nel caricamento dei post:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'Tutti') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter(post => post.category === selectedCategory))
    }
  }, [selectedCategory, posts])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="pt-32 md:pt-28 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <Reveal>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                  Blog
                </h1>
                <p className="text-body text-muted leading-relaxed">
                  Pensieri, approfondimenti e tendenze dal mondo del design e dello sviluppo web. 
                  Condivido le mie esperienze e le lezioni apprese durante anni di lavoro nel settore.
                </p>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background-alt">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-small font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-muted hover:bg-primary/10 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <Reveal>
              <div className="text-center py-16">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Nessun articolo trovato
                </h3>
                <p className="text-body text-muted mb-8">
                  Non ci sono articoli in questa categoria al momento.
                </p>
                <Button
                  onClick={() => setSelectedCategory('Tutti')}
                  variant="secondary"
                >
                  Mostra tutti gli articoli
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.1}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={post.url} className="block">
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-background-alt">
                        <Image
                          src={post.cover}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-small text-muted">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span>{new Date(post.publishedAt).toLocaleDateString('it-IT')}</span>
                          <span>•</span>
                          <span>{post.readingMinutes} min di lettura</span>
                        </div>
                        
                        <h2 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-body text-muted leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className="bg-card text-muted px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
