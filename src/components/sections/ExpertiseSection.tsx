'use client'

import { motion } from 'framer-motion'
import { Palette, Smartphone, Share2, Code } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { stagger, fadeInUp } from '@/lib/motion'

const expertiseAreas = [
  {
    icon: Palette,
    title: 'Branding',
    description: 'Identità visive memorabili che raccontano la tua storia e catturano l\'essenza del tuo brand.',
    skills: ['Logo Design', 'Brand Identity', 'Visual Strategy', 'Brand Guidelines']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Applicazioni native e cross-platform con UX intuitive e performance ottimali.',
    skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Strategie social coinvolgenti e contenuti che generano engagement autentico.',
    skills: ['Content Strategy', 'Visual Content', 'Social Campaigns', 'Community Management']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Siti web e applicazioni performanti, responsive e ottimizzate per i motori di ricerca.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js']
  }
]

export function ExpertiseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              La Mia <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Quattro pilastri fondamentali per costruire una presenza digitale 
              di successo che converte e ispira.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="space-y-2">
                      {area.skills.map((skill) => (
                        <div
                          key={skill}
                          className="text-sm text-foreground/60 bg-background/50 px-3 py-1 rounded-full inline-block mr-2"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}