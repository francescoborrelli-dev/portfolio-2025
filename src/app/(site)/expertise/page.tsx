import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Expertise - Francesco Borrelli',
  description: 'Scopri le competenze e i servizi offerti da Francesco Borrelli per il tuo progetto digitale.',
}

export default function ExpertisePage() {
  return (
    <div className="pt-32 md:pt-28 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                La Mia
                <span className="block text-primary">Expertise</span>
              </h1>
              <p className="text-body text-muted max-w-3xl mx-auto leading-relaxed">
                Ogni competenza è stata affinata attraverso anni di esperienza 
                e centinaia di progetti realizzati. Il risultato è un approccio 
                olistico che unisce strategia, design e tecnologia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: 'Brand Identity & Strategy',
                icon: '🎨',
                description: 'Creo identità visive che raccontano la storia unica del tuo brand',
                services: [
                  'Logo Design & Visual Identity',
                  'Brand Strategy & Positioning',
                  'Guideline & Brand System',
                  'Naming & Tone of Voice',
                  'Brand Refresh & Evolution'
                ],
                projects: 'Oltre 50 brand creati',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
              },
              {
                title: 'Web Design & Development',
                icon: '💻',
                description: 'Siti web che convertono visitatori in clienti attraverso UX strategica',
                services: [
                  'Website Design & Development',
                  'E-commerce Solutions',
                  'Landing Pages ad Alta Conversione',
                  'Responsive & Mobile-First',
                  'SEO & Performance Optimization'
                ],
                projects: 'Oltre 100 siti realizzati',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
              },
              {
                title: 'Mobile App Design',
                icon: '📱',
                description: 'App intuitive che gli utenti adorano utilizzare ogni giorno',
                services: [
                  'iOS & Android App Design',
                  'User Experience (UX) Design',
                  'Prototyping & Testing',
                  'App Store Optimization',
                  'Design System per Mobile'
                ],
                projects: '25+ app pubblicate',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
              },
              {
                title: 'Digital Strategy',
                icon: '📊',
                description: 'Strategie digitali basate sui dati per massimizzare il ROI',
                services: [
                  'Digital Strategy & Consulting',
                  'User Research & Analytics',
                  'Conversion Rate Optimization',
                  'A/B Testing & Data Analysis',
                  'Growth Hacking & Automation'
                ],
                projects: '200% crescita media',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
              }
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="bg-card p-8 rounded-2xl group hover:bg-background transition-colors">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-body text-muted leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="text-small text-primary font-medium">
                        {service.projects}
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <ul className="space-y-2">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-body text-muted">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Il Mio Processo
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto">
                Un metodo consolidato che garantisce risultati eccellenti 
                e clienti soddisfatti in ogni progetto.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Analisi approfondita del business, target e obiettivi',
                duration: '1-2 settimane'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Definizione della strategia e architettura dell\'informazione',
                duration: '1 settimana'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Creazione di wireframe, mockup e prototipi interattivi',
                duration: '2-3 settimane'
              },
              {
                step: '04',
                title: 'Development',
                description: 'Sviluppo del progetto con tecnologie all\'avanguardia',
                duration: '3-4 settimane'
              },
              {
                step: '05',
                title: 'Launch',
                description: 'Testing, ottimizzazione e messa online del progetto',
                duration: '1 settimana'
              }
            ].map((phase, index) => (
              <Reveal key={phase.step} delay={index * 0.1}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-body text-muted leading-relaxed mb-2">
                    {phase.description}
                  </p>
                  <div className="text-small text-primary font-medium">
                    {phase.duration}
                  </div>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground-light mb-4">
                Tecnologie & Strumenti
              </h2>
              <p className="text-body text-foreground-light/80 max-w-2xl mx-auto">
                Utilizzo sempre gli strumenti più adatti al progetto, 
                bilanciando innovazione e affidabilità.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Figma',
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind',
              'Framer',
              'Adobe XD',
              'Sketch',
              'Node.js',
              'Webflow',
              'Shopify',
              'WordPress'
            ].map((tech, index) => (
              <Reveal key={tech} delay={index * 0.05}>
                <div className="bg-card-light p-6 rounded-xl text-center group hover:bg-background-light/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {tech.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-heading font-medium text-foreground-light group-hover:text-primary transition-colors">
                    {tech}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Pronto a Trasformare la Tua Idea?
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                Ogni grande progetto inizia con una conversazione. 
                Raccontami la tua visione e scopriamo insieme come realizzarla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
                  Inizia il Tuo Progetto
                </button>
                <button className="bg-background-alt text-foreground px-8 py-3 rounded-xl font-medium hover:bg-background-alt/80 border border-border transition-colors">
                  Scarica il Portfolio
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
