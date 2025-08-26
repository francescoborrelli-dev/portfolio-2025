'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { pageTransition } from '@/lib/motion'
import { getPost } from '@/lib/content'
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