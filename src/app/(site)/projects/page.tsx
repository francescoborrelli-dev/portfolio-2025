'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { pageTransition, stagger } from '@/lib/motion'
import { getProjects } from '@/lib/content'
import { useEffect, useState } from 'react'
import type { Project } from '@/lib/content'

const categories = ['Tutti', 'E-commerce', 'SaaS', 'Branding', 'UI/UX', 'Mobile']

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getProjects()
        setProjects(allProjects)
        setFilteredProjects(allProjects)
      } catch (error) {
        console.error('Errore nel caricamento dei progetti:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'Tutti') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

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
                  Progetti
                </h1>
                <p className="text-body text-muted leading-relaxed">
                  Una selezione dei miei lavori più significativi. Ogni progetto racconta una storia 
                  di sfide superate, soluzioni innovative e risultati che vanno oltre le aspettative.
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

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <Reveal>
              <div className="text-center py-16">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Nessun progetto trovato
                </h3>
                <p className="text-body text-muted mb-8">
                  Non ci sono progetti in questa categoria al momento.
                </p>
                <Button
                  onClick={() => setSelectedCategory('Tutti')}
                  variant="secondary"
                >
                  Mostra tutti i progetti
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.1}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={project.url} className="block">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-background-alt">
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            In Evidenza
                          </div>
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Bottom Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-end justify-between text-white">
                            <h3 className="font-heading font-semibold text-lg leading-tight">
                              {project.title}
                            </h3>
                            <span className="text-sm font-medium opacity-90">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                          <span className="text-small text-muted">{project.year}</span>
                        </div>
                        
                        <h2 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {project.title}
                        </h2>
                        
                        <p className="text-body text-muted leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-small text-muted">{project.role}</span>
                          
                          {project.stack && project.stack.length > 0 && (
                            <div className="flex gap-1">
                              {project.stack.slice(0, 3).map((tech) => (
                                <span 
                                  key={tech}
                                  className="bg-card text-muted px-2 py-1 rounded text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.stack.length > 3 && (
                                <span className="bg-card text-muted px-2 py-1 rounded text-xs">
                                  +{project.stack.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Hai un progetto in mente?
              </h2>
              <p className="text-body text-muted leading-relaxed mb-8">
                Trasformiamo la tua visione in una realtà digitale che fa la differenza. 
                Parliamo del tuo prossimo progetto e scopriamo come posso aiutarti a raggiungere i tuoi obiettivi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Iniziamo a Collaborare</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/about">Scopri di Più</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
