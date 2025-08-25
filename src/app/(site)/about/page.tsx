import { Reveal } from '@/components/motion/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Chi <span className="text-gradient">Sono</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              La mia storia, le mie passioni e il percorso che mi ha portato 
              a diventare designer e sviluppatore.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Bio Section */}
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">La Mia Storia</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  Ciao! Sono Francesco Borrelli, un designer e sviluppatore 
                  con oltre 8 anni di esperienza nel mondo digitale. La mia 
                  passione per il design e la tecnologia è nata durante gli 
                  studi universitari, dove ho scoperto il potere di combinare 
                  creatività e codice.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Negli anni ho avuto il privilegio di lavorare con startup 
                  innovative, aziende consolidate e brand internazionali, 
                  aiutandoli a costruire la loro presenza digitale e raggiungere 
                  i loro obiettivi di business.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Oggi mi concentro sulla creazione di esperienze digitali 
                  che non solo sono belle da vedere, ma che funzionano davvero 
                  e generano risultati concreti per i miei clienti.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Profile Image */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-panther.jpg"
                  alt="Francesco Borrelli"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
              
              {/* Info Cards */}
              <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Milano, Italia</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-background/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">8+ anni esperienza</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Skills & Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-6">Le Mie Competenze</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>UI/UX Design</Badge>
                    <Badge>Brand Identity</Badge>
                    <Badge>Design Systems</Badge>
                    <Badge>Prototyping</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>React Native</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Figma</Badge>
                    <Badge>Adobe Creative Suite</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Git</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6">I Miei Valori</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <h4 className="font-semibold mb-2">Qualità prima di tutto</h4>
                  <p className="text-foreground/70 text-sm">
                    Ogni progetto deve rispettare i più alti standard di qualità,
                    dalla fase di concept fino al deployment.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <h4 className="font-semibold mb-2">Comunicazione trasparente</h4>
                  <p className="text-foreground/70 text-sm">
                    Mantengo i clienti sempre aggiornati sui progressi e 
                    coinvolti in ogni decisione importante.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <h4 className="font-semibold mb-2">Innovazione continua</h4>
                  <p className="text-foreground/70 text-sm">
                    Studio costantemente nuove tecnologie e trend per offrire
                    sempre soluzioni all'avanguardia.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA Section */}
        <Reveal>
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Pronto a Iniziare un Progetto?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Sono sempre entusiasta di incontrare nuove persone e lavorare 
              su progetti interessanti. Raccontami la tua idea!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Iniziamo a Collaborare
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:francesco@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Scrivimi
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}