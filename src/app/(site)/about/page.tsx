import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Francesco Borrelli',
  description: 'Scopri la storia e la filosofia dietro il lavoro di Francesco Borrelli, web designer a Firenze.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-28 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                  Ciao, sono
                  <span className="block text-primary">Francesco</span>
                </h1>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Da oltre 15 anni creo esperienze digitali che uniscono 
                  bellezza estetica e funzionalità strategica. La mia missione 
                  è aiutare brand visionari a distinguersi nel rumore digitale.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Non mi limito a progettare interfacce: costruisco ponti 
                  emotivi tra brand e persone, trasformando idee complesse 
                  in soluzioni semplici ed eleganti.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face"
                  alt="Francesco Borrelli"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground-light mb-4">
                I Miei Valori
              </h2>
              <p className="text-body text-foreground-light/80 max-w-2xl mx-auto">
                Ogni progetto è guidato da principi che mettono al centro 
                l'esperienza umana e l'impatto positivo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Autenticità',
                description: 'Ogni brand ha una storia unica da raccontare. Il mio ruolo è amplificarla, non nasconderla.',
                icon: '✨'
              },
              {
                title: 'Semplicità',
                description: 'La vera eleganza nasce dalla sottrazione, non dall\'aggiunta. Meno è più.',
                icon: '🎯'
              },
              {
                title: 'Impatto',
                description: 'Il design ha il potere di cambiare comportamenti e creare valore reale.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-card-light rounded-2xl">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-foreground-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body text-foreground-light/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Il Mio Percorso
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto">
                Un viaggio attraverso esperienze che hanno formato 
                la mia visione del design digitale.
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2024',
                title: 'Consulente Freelance',
                description: 'Focus su progetti strategici per startup e PMI innovative. Specializzazione in e-commerce e SaaS.',
                highlight: true
              },
              {
                year: '2020-2023',
                title: 'Design Lead @ TechCorp',
                description: 'Gestione team di design, implementazione design system aziendali, progetti enterprise.',
                highlight: false
              },
              {
                year: '2015-2020',
                title: 'Senior Designer @ CreativeStudio',
                description: 'Sviluppo competenze in branding e identità visiva. Progetti per brand nazionali.',
                highlight: false
              },
              {
                year: '2009-2015',
                title: 'Freelance Designer',
                description: 'Primi passi nel mondo del design digitale. Formazione autodidatta e primi clienti.',
                highlight: false
              }
            ].map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1}>
                <div className={`flex gap-8 mb-12 ${item.highlight ? 'bg-background-alt p-8 rounded-2xl' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full mt-2 ${item.highlight ? 'bg-primary' : 'bg-muted'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-small text-primary font-medium">{item.year}</span>
                      {item.highlight && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-small">
                          Attuale
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Strumenti & Competenze
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto">
                Una selezione curata degli strumenti che uso quotidianamente 
                per trasformare idee in realtà digitali.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Design',
                tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle', 'ProtoPie']
              },
              {
                category: 'Development',
                tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
              },
              {
                category: 'Strategy',
                tools: ['Analytics', 'User Research', 'A/B Testing', 'SEO', 'Performance Audit']
              }
            ].map((skill, index) => (
              <Reveal key={skill.category} delay={index * 0.1}>
                <div className="bg-card p-8 rounded-2xl">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                    {skill.category}
                  </h3>
                  <ul className="space-y-3">
                    {skill.tools.map((tool) => (
                      <li key={tool} className="text-body text-muted flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
