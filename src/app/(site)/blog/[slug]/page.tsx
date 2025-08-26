import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/motion/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { getPost, getPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Francesco Borrelli`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
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
                    {post.category}
                  </span>
                  <span className="text-muted">•</span>
                  <span className="text-muted text-small">{formatDate(post.date)}</span>
                  <span className="text-muted">•</span>
                  <span className="text-muted text-small">{post.readTime} min lettura</span>
                </div>
                
                <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                  {post.title}
                </h1>
                
                <p className="text-body text-muted max-w-2xl mx-auto leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16">
                <Image
                  src={post.cover}
                  alt={post.title}
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

      {/* Article Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <article className="prose prose-lg max-w-none">
                <p className="text-body text-muted leading-relaxed mb-8 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="font-heading font-bold text-2xl text-foreground mb-6 mt-12">
                  Il Design System del Futuro
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-body text-muted leading-relaxed mb-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-4 mt-10">
                  Componenti Riutilizzabili
                </h3>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                    <span className="text-body text-muted">Design tokens per consistenza cross-platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                    <span className="text-body text-muted">Componenti modulari e scalabili</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                    <span className="text-body text-muted">Documentazione interattiva per sviluppatori</span>
                  </li>
                </ul>

                <div className="bg-background-alt rounded-2xl p-8 my-12">
                  <blockquote className="border-l-4 border-primary pl-6">
                    <p className="text-body italic text-muted mb-4">
                      "Un design system ben progettato non è solo una collezione di componenti, 
                      ma un linguaggio condiviso che permette ai team di creare esperienze 
                      coerenti e memorabili."
                    </p>
                    <footer className="text-small text-muted">
                      — Francesco Borrelli, Design System Architect
                    </footer>
                  </blockquote>
                </div>

                <h2 className="font-heading font-bold text-2xl text-foreground mb-6 mt-12">
                  Implementazione Pratica
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                  excepturi sint occaecati cupiditate non provident.
                </p>

                <p className="text-body text-muted leading-relaxed mb-8">
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum 
                  et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-4 mt-10">
                  Best Practices
                </h3>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
                  quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-background-alt rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      Scalabilità
                    </h4>
                    <p className="text-body text-muted text-small">
                      Design tokens e variabili CSS per una facile manutenzione
                    </p>
                  </div>
                  <div className="bg-background-alt rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground mb-3">
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
