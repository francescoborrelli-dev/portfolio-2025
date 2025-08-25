import { Reveal } from '@/components/motion/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Palette, Smartphone, Share2, Code, CheckCircle } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Creo identità visive memorabili che raccontano la storia del tuo brand e lo distinguono dalla concorrenza.',
    services: [
      'Logo Design e Brand Identity',
      'Design System e Style Guide',
      'Packaging e Marketing Materials',
      'Brand Strategy e Positioning'
    ],
    process: [
      'Research e analisi del mercato',
      'Concept e creative direction',
      'Design e iterazioni',
      'Brand guidelines finali'
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Sketch'],
    featured: true
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Sviluppo applicazioni mobile native e cross-platform con focus su UX ottimali e performance eccellenti.',
    services: [
      'App iOS e Android Native',
      'React Native Cross-platform',
      'UI/UX Design per Mobile',
      'App Store Optimization'
    ],
    process: [
      'Wireframing e prototipazione',
      'Design UI/UX specifico per mobile',
      'Sviluppo e testing',
      'Deployment e ottimizzazione'
    ],
    tools: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
    featured: true
  },
  {
    icon: Share2,
    title: 'Social Media Strategy',
    description: 'Sviluppo strategie social coinvolgenti e contenuti che generano engagement autentico e crescita organica.',
    services: [
      'Social Media Strategy',
      'Content Creation e Planning',
      'Visual Content Design',
      'Community Management'
    ],
    process: [
      'Analisi target e competitors',
      'Strategia e calendar planning',
      'Creazione contenuti',
      'Monitoring e ottimizzazione'
    ],
    tools: ['Figma', 'Adobe Creative Suite', 'Buffer', 'Analytics Tools'],
    featured: false
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Realizzo siti web e applicazioni performanti, responsive e ottimizzate per i motori di ricerca.',
    services: [
      'Siti Web Responsive',
      'E-commerce Solutions',
      'Web Applications (SPA)',
      'SEO e Performance Optimization'
    ],
    process: [
      'Analisi requisiti e architettura',
      'Design e prototipazione',
      'Sviluppo frontend e backend',
      'Testing, deploy e manutenzione'
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    featured: true
  }
]

export default function ExpertisePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              La Mia <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Quattro aree di specializzazione per costruire la tua presenza digitale 
              e far crescere il tuo business online.
            </p>
          </div>
        </Reveal>

        {/* Expertise Areas */}
        <div className="space-y-24 mb-24">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            const isEven = index % 2 === 0
            
            return (
              <div key={area.title} className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <Reveal delay={index * 0.1}>
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{area.title}</h2>
                        {area.featured && (
                          <Badge variant="primary" className="mt-1">
                            Specializzazione
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                      {area.description}
                    </p>

                    {/* Services */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Servizi Offerti</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.services.map((service) => (
                          <div key={service} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-foreground/80">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Strumenti e Tecnologie</h3>
                      <div className="flex flex-wrap gap-2">
                        {area.tools.map((tool) => (
                          <Badge key={tool} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Process */}
                <Reveal delay={index * 0.1 + 0.2}>
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-secondary/30 border border-border/50 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold mb-6 text-center">
                        Il Mio Processo
                      </h3>
                      <div className="space-y-4">
                        {area.process.map((step, stepIndex) => (
                          <div key={step} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                              <span className="text-primary font-semibold text-sm">
                                {stepIndex + 1}
                              </span>
                            </div>
                            <div>
                              <p className="text-foreground/80">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <Reveal>
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Hai un Progetto in Mente?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Discutiamo insieme quale delle mie competenze può aiutarti 
              a raggiungere i tuoi obiettivi di business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Richiedi una Consulenza
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  Vedi i Miei Progetti
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}