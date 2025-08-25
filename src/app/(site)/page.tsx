import { HeroSection } from '@/components/hero/HeroSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { Counter } from '@/components/motion/Counter'
import { Reveal } from '@/components/motion/Reveal'
import { ProjectsPreviewSection } from '@/components/sections/ProjectsPreviewSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { FAQSection } from '@/components/faq/FAQSection'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Big Number Block */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient mb-6">
                <Counter from={0} to={9991} />
              </div>
              <p className="text-xl md:text-2xl text-foreground/80 mb-4">
                look-alikes trovati nel mondo
              </p>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Un numero che dimostra quanto sia unico il nostro approccio 
                e quanto sia difficile trovare qualcuno che faccia quello che facciamo noi.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Preview */}
      <ProjectsPreviewSection />

      {/* Expertise */}
      <ExpertiseSection />

      {/* Blog Preview */}
      <BlogPreviewSection />

      {/* FAQ */}
      <FAQSection />
    </div>
  )
}