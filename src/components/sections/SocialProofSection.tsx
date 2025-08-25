'use client'

import { Star } from 'lucide-react'
import { Marquee } from '@/components/ui/Marquee'
import { Reveal } from '@/components/motion/Reveal'

const brands = [
  'Brand One',
  'Brand Two', 
  'Brand Three',
  'Brand Four',
  'Brand Five',
  'Brand Six',
]

export function SocialProofSection() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="text-foreground/70 text-lg">
              Valutato da 50+ clienti soddisfatti
            </p>
          </div>
        </Reveal>

        {/* Brand Marquee */}
        <Reveal delay={0.2}>
          <div className="py-8">
            <Marquee className="py-4" speed={30}>
              <div className="flex items-center space-x-16 pr-16">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="text-2xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors whitespace-nowrap"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="text-center">
            <p className="text-foreground/60">
              Trusted by leading brands and innovative startups
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}