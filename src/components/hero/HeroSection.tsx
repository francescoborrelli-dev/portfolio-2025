'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { heroTextVariants, heroWordVariants, stagger } from '@/lib/motion'

const words = [
  'Designer',
  '&',
  'Developer',
  'specializzato',
  'in',
  'esperienze',
  'digitali',
  'straordinarie'
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-8"
        >
          {/* Split headline animation */}
          <motion.h1
            variants={heroTextVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={heroWordVariants}
                className={`inline-block mr-4 ${
                  word === 'Designer' || word === 'Developer' 
                    ? 'text-gradient' 
                    : 'text-foreground'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl text-foreground/80 max-w-xl"
          >
            Creo brand identità, applicazioni mobile e esperienze web 
            che catturano l&apos;attenzione e generano risultati concreti.
          </motion.p>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-foreground/70">
              5.0 • Basato su 50+ recensioni
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects" className="flex items-center">
                Vedi i Miei Progetti
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Iniziamo a Collaborare
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-panther.jpg"
              alt="Francesco Borrelli - Designer & Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>
          
          {/* Floating element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Disponibile per nuovi progetti
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}