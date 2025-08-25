'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BlogCard } from '@/components/cards/BlogCard'
import { Reveal } from '@/components/motion/Reveal'
import { stagger, fadeInUp } from '@/lib/motion'

// Mock data - in a real app this would come from the content API
const recentPosts = [
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

export function BlogPreviewSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Dal Mio <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Condivido regolarmente conoscenze, esperienze e riflessioni 
              sul mondo del design e dello sviluppo web moderno.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {recentPosts.map((post, index) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/blog" className="flex items-center">
                Leggi Tutti gli Articoli
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}