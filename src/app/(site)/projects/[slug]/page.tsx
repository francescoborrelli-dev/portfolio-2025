import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/motion/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { getProject, getProjects } from '@/lib/content'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Francesco Borrelli`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.cover],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-small font-medium">
                    {project.category}
                  </span>
                  <span className="text-muted">•</span>
                  <span className="text-muted text-small">{project.year}</span>
                </div>
                
                <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                  {project.title}
                </h1>
                
                <p className="text-body text-muted max-w-2xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-16">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Il Mio Ruolo
                  </h3>
                  <p className="text-body text-muted">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Anno
                  </h3>
                  <p className="text-body text-muted">
                    {project.year}
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Tecnologie
                  </h3>
                  <div className="space-y-2">
                    {project.stack.map((tech: string) => (
                      <div key={tech} className="bg-card px-3 py-1 rounded text-small text-muted">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                    La Sfida
                  </h2>
                  <p className="text-body text-muted leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                    La Soluzione
                  </h2>
                  <p className="text-body text-muted leading-relaxed mb-8">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    {project.gallery?.slice(0, 4).map((image: string, index: number) => (
                      <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )) || (
                      // Fallback gallery if no images
                      <>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-background">
                          <div className="absolute inset-0 flex items-center justify-center text-muted">
                            Gallery Image 1
                          </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-background">
                          <div className="absolute inset-0 flex items-center justify-center text-muted">
                            Gallery Image 2
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                    Risultati
                  </h2>
                  <p className="text-body text-muted leading-relaxed mb-8">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  {/* Results Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="bg-card p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">+150%</div>
                      <div className="text-small text-muted">Crescita Conversioni</div>
                    </div>
                    <div className="bg-card p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">-40%</div>
                      <div className="text-small text-muted">Riduzione Bounce Rate</div>
                    </div>
                    <div className="bg-card p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary mb-2">98%</div>
                      <div className="text-small text-muted">Soddisfazione Cliente</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
                Prossimo Progetto
              </h2>
              <Link 
                href="/projects/brand-identity-refresh"
                className="group block max-w-md mx-auto"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
                    alt="Brand Identity Refresh"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="400px"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  Brand Identity Refresh
                </h3>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
