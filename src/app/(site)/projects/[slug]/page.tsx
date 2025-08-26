'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { pageTransition } from '@/lib/motion'
import { getProject, getProjects } from '@/lib/content'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import type { Project } from '@/lib/content'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await getProject(params.slug)
        if (!projectData) {
          notFound()
          return
        }
        setProject(projectData)
      } catch (error) {
        console.error('Errore nel caricamento del progetto:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    loadProject()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
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
                <Link href="/projects" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Progetti
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Project Header */}
          <Reveal delay={0.1}>
            <header className="max-w-4xl mx-auto text-center mb-12">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-small text-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Ruolo: {project.role}</span>
                </div>
              </div>
            </header>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-background-alt">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </Reveal>

          {/* Project Details */}
          <Reveal delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Anno</h3>
                  <p className="text-body text-muted">{project.year}</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Ruolo</h3>
                  <p className="text-body text-muted">{project.role}</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Categoria</h3>
                  <p className="text-body text-muted">{project.category}</p>
                </div>
              </div>

              {/* Tech Stack */}
              {project.stack && project.stack.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Tecnologie Utilizzate</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-card text-muted px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Project Content */}
              <div 
                className="prose-custom prose-lg"
                dangerouslySetInnerHTML={{ __html: project.body.code }}
              />
              
              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-[16/10] rounded-xl overflow-hidden bg-background-alt">
                        <Image
                          src={image}
                          alt={`${project.title} - Immagine ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
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
                  <Link href="/projects">
                    ← Altri Progetti
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

// Generate static params for known projects
export async function generateStaticParams() {
  try {
    const projects = await getProjects()
    return projects.map((project) => ({
      slug: project.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}