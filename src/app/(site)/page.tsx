'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'
import { Counter } from '@/components/motion/Counter'
import { Reveal } from '@/components/motion/Reveal'
import { Accordion } from '@/components/ui/Accordion'
import { stagger, heroText, pageTransition } from '@/lib/motion'
import { getFeaturedProjects } from '@/lib/content'
import { useEffect, useState } from 'react'
import type { Project } from '@/lib/content'

const brands = [
  'Google', 'Apple', 'Microsoft', 'Amazon', 'Meta', 'Tesla',
  'Nike', 'Adidas', 'Coca-Cola', 'Samsung', 'Sony', 'Adobe'
]

const expertiseAreas = [
  {
    title: 'Branding',
    description: 'Identità visive che raccontano storie autentiche e memorabili.',
    icon: '🎨'
  },
  {
    title: 'Mobile Apps',
    description: 'Applicazioni intuitive che gli utenti adorano utilizzare.',
    icon: '📱'
  },
  {
    title: 'Social Media',
    description: 'Strategie digitali che amplificano la voce del tuo brand.',
    icon: '📊'
  },
  {
    title: 'Web Development',
    description: 'Siti web veloci, sicuri e perfettamente ottimizzati.',
    icon: '💻'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quanto tempo richiede un progetto?',
    answer: 'La durata varia in base alla complessità del progetto. Un sito web standard richiede 4-6 settimane, mentre progetti più complessi possono richiedere 2-3 mesi. Ti fornirò sempre una timeline dettagliata dopo aver analizzato le tue esigenze.'
  },
  {
    id: '2',
    question: 'Lavori con clienti internazionali?',
    answer: 'Assolutamente! Lavoro con clienti in tutto il mondo. Utilizzo strumenti di collaborazione moderni per garantire una comunicazione fluida e risultati eccellenti, indipendentemente dal fuso orario.'
  },
  {
    id: '3',
    question: 'Offri supporto post-lancio?',
    answer: 'Sì, offro diversi piani di supporto post-lancio che includono manutenzione tecnica, aggiornamenti di sicurezza e ottimizzazioni continue. Il tuo successo a lungo termine è la mia priorità.'
  },
  {
    id: '4',
    question: 'Come funziona il processo di pagamento?',
    answer: 'Lavoro con un sistema di pagamenti scaglionati: 30% all\'inizio, 40% a metà progetto e 30% alla consegna finale. Accetto bonifici bancari e i principali sistemi di pagamento digitale.'
  },
  {
    id: '5',
    question: 'Posso vedere alcuni esempi del tuo lavoro?',
    answer: 'Certo! Puoi esplorare il mio portfolio completo nella sezione progetti. Ogni caso studio include dettagli sul processo, le sfide affrontate e i risultati ottenuti.'
  },
  {
    id: '6',
    question: 'Cosa include un progetto di web design?',
    answer: 'Un progetto completo include: ricerca e strategia, wireframing, design UI/UX, sviluppo responsive, ottimizzazione SEO, testing e deployment. Ogni fase è documentata e condivisa con te.'
  }
]

export default function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])

  useEffect(() => {
    const loadContent = async () => {
      const projects = await getFeaturedProjects()
      setFeaturedProjects(projects)
    }
    loadContent()
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-background pt-32 md:pt-28 pb-16 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.03 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-background-alt to-background">
                <Image
                  src="/images/me_serio.png"
                  alt="Francesco Borrelli"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h1 
                  variants={heroText}
                  className="font-heading font-bold text-hero text-foreground leading-tight"
                >
                  <span className="block">Web Designer</span>
                  <span className="block">a Firenze per</span>
                  <span className="block">Siti Web che</span>
                  <span className="block text-primary">Fanno la Differenza</span>
                </motion.h1>
              </motion.div>

              <motion.p 
                variants={heroText}
                className="text-body text-muted max-w-lg leading-relaxed"
              >
                Creo esperienze digitali che non si limitano a essere belle da vedere, 
                ma convertono visitatori in clienti e aiutano i brand a distinguersi 
                in un mercato affollato.
              </motion.p>

              <motion.div variants={heroText} className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">Scopri i Progetti</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/contact">Iniziamo a Parlare</Link>
                </Button>
              </motion.div>

              {/* Credentials */}
              <motion.div variants={heroText} className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-background" />
                  ))}
                </div>
                <div className="text-small text-muted">
                  <div className="font-medium">Trusted by 50+ brands</div>
                  <div>⭐ 4.9/5 rating</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                Scelto da Brand di Successo
              </h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="text-muted">5.0 su Google Reviews</span>
              </div>
            </div>
          </Reveal>

          <Marquee speed={30} className="opacity-60">
            <div className="flex items-center space-x-12">
              {brands.map((brand) => (
                <div key={brand} className="text-muted font-medium text-lg whitespace-nowrap">
                  {brand}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Big Number Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="text-center lg:text-left">
                <h2 className="font-heading font-bold text-6xl lg:text-8xl text-foreground mb-4">
                  In a market of
                </h2>
                <div className="font-heading font-bold text-8xl lg:text-[12rem] text-primary leading-none">
                  <Counter value={9991} />
                </div>
                <p className="text-2xl text-muted font-medium">look-alikes...</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="font-heading font-semibold text-3xl text-foreground leading-tight">
                  Solo idee <em>audaci</em> emergono dal rumore
                </h3>
                <p className="text-body text-muted leading-relaxed">
                  Nel 2024, ogni giorno nascono migliaia di nuovi siti web. 
                  La differenza tra chi viene notato e chi scompare nel vuoto digitale 
                  è una strategia di design che non segue le mode, ma crea tendenze.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Il mio approccio unisce estetica raffinata, psicologia del consumatore 
                  e tecnologie all'avanguardia per creare progetti che non solo 
                  catturano l'attenzione, ma la mantengono.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Progetti in Evidenza
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto">
                Ogni progetto racconta una storia di trasformazione. 
                Dalla sfida iniziale al risultato finale che supera le aspettative.
              </p>
            </div>
          </Reveal>

          {/* Projects Grid 2x2 */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <Link href={project.url} className="block">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      
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
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">Vedi Tutti i Progetti</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Expertise
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto">
                Quattro pilastri per costruire brand digitali che lasciano il segno.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Riconoscimenti
                </h2>
                <p className="text-body text-muted mb-8 leading-relaxed">
                  Dal 2005, il mio lavoro ha ottenuto riconoscimenti dall'industria 
                  e la fiducia di clienti in tutto il mondo. Una testimonianza 
                  della dedizione al design che genera risultati.
                </p>
                <div className="text-small text-muted">
                  Esperienza dal 2005 • 50+ progetti completati
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6">
                  <blockquote className="text-body text-foreground leading-relaxed">
                    "Francesco ha trasformato completamente la nostra presenza online. 
                    Le vendite sono aumentate del 300% nei primi 6 mesi."
                  </blockquote>
                  <div className="flex items-center mt-4 gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-foreground">Marco Rossi</div>
                      <div className="text-small text-muted">CEO, Innovative Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Domande Frequenti
                </h2>
                <p className="text-body text-muted leading-relaxed">
                  Tutto quello che devi sapere sul processo di lavoro e 
                  su come possiamo collaborare per far crescere il tuo business.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Accordion items={faqItems} />
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Domande Frequenti
                </h2>
                <p className="text-body text-muted leading-relaxed">
                  Tutto quello che devi sapere sul processo di lavoro e 
                  su come possiamo collaborare per far crescere il tuo business.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Accordion items={faqItems} />
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
