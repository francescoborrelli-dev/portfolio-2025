'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Reveal } from '@/components/motion/Reveal'
import { stagger, fadeInUp } from '@/lib/motion'

// Mock project data
const featuredProjects = [
  {
    title: 'E-commerce di Lusso',
    description: 'Piattaforma e-commerce premium per brand di moda di alta gamma con esperienza utente immersiva.',
    image: '/images/placeholder-project.jpg',
    category: 'E-commerce',
    tags: ['React', 'Next.js', 'Shopify', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com',
    slug: 'e-commerce-luxury'
  },
  {
    title: 'App Mobile Startup',
    description: 'Applicazione mobile per startup fintech con focus su UX/UI moderna e funzionalità avanzate.',
    image: '/images/placeholder-project.jpg',
    category: 'Mobile App',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
    link: 'https://example.com',
    slug: 'app-mobile-startup'
  },
  {
    title: 'Brand Identity Tech',
    description: 'Identità visiva completa per azienda tecnologica con logo, brand guidelines e materiali marketing.',
    image: '/images/placeholder-project.jpg',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Figma', 'Illustrator'],
    slug: 'brand-identity-tech'
  }
]

export function ProjectsPreviewSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Progetti in <span className="text-gradient">Evidenza</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Una selezione dei miei lavori più recenti e significativi. 
              Ogni progetto rappresenta una sfida unica e una soluzione innovativa.
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
          {featuredProjects.map((project, index) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/projects" className="flex items-center">
                Vedi Tutti i Progetti
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}