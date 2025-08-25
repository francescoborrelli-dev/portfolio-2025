import { HeroSection } from '@/components/hero/HeroSection'
import { Reveal } from '@/components/motion/Reveal'
import { Counter } from '@/components/motion/Counter'

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <HeroSection />

      {/* Big Number Block */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold text-gradient mb-4">
              <Counter from={0} to={9991} />
            </div>
            <p className="text-xl text-foreground/80">
              look-alikes trovati nel mondo
            </p>
          </div>
        </Reveal>
      </section>

      {/* Placeholder sections for now */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Progetti in Evidenza</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Una selezione dei miei lavori più recenti e significativi.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">La Mia Expertise</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Quattro pilastri per costruire la tua presenza digitale.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}