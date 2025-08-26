
import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects - Francesco Borrelli',
  description: 'Esplora il portfolio di progetti realizzati da Francesco Borrelli.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="pt-32 md:pt-28 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                Progetti che
                <span className="block text-primary">Fanno la Differenza</span>
              </h1>
              <p className="text-body text-muted max-w-3xl mx-auto leading-relaxed">
                Ogni progetto racconta una storia di trasformazione digitale. 
                Dalla sfida iniziale al risultato finale che supera le aspettative.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {['Tutti', 'Web Development', 'Branding', 'Mobile Apps', 'E-commerce'].map((filter) => (
                <button
                  key={filter}
                  className={`px-6 py-2 rounded-full text-body font-medium transition-colors ${
                    filter === 'Tutti'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background-alt text-muted hover:text-foreground hover:bg-card'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <article className="group cursor-pointer">
                  <Link href={project.url} className="block">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-background-alt">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-small font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Info Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted text-body line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-small text-muted">{project.year}</span>
                      </div>
                      
                      <p className="text-body text-muted leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 flex-wrap">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-background-alt text-muted px-2 py-1 rounded text-small"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-muted text-small">
                            +{project.stack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Load More */}
          <Reveal delay={0.3}>
            <div className="text-center mt-16">
              <button className="bg-background-alt text-foreground px-8 py-3 rounded-xl font-medium hover:bg-card transition-colors border border-border">
                Carica Altri Progetti
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
