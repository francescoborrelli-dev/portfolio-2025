'use client'

import { useState } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Messaggio inviato con successo! Ti risponderò entro 24 ore.')
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      project: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Iniziamo a <span className="text-gradient">Collaborare</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Hai un progetto in mente? Raccontami la tua idea e vediamo 
              come posso aiutarti a realizzarla.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold mb-8">Invia un Messaggio</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="la-tua-email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Azienda
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Nome azienda (opzionale)"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Seleziona budget</option>
                      <option value="< 5K">Meno di €5.000</option>
                      <option value="5K-10K">€5.000 - €10.000</option>
                      <option value="10K-25K">€10.000 - €25.000</option>
                      <option value="25K+">Oltre €25.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Tipo di Progetto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Seleziona tipo di progetto</option>
                    <option value="branding">Branding & Design</option>
                    <option value="website">Sito Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="mobile">App Mobile</option>
                    <option value="social">Social Media</option>
                    <option value="consultation">Consulenza</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Raccontami del tuo progetto, obiettivi e tempistiche..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold mb-8">Informazioni di Contatto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-foreground/70">francesco@example.com</p>
                    <p className="text-sm text-foreground/60">Rispondo entro 24 ore</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefono</h3>
                    <p className="text-foreground/70">+39 123 456 7890</p>
                    <p className="text-sm text-foreground/60">Lun-Ven 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sede</h3>
                    <p className="text-foreground/70">Milano, Italia</p>
                    <p className="text-sm text-foreground/60">Lavoro anche in remoto</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Disponibilità</h3>
                    <Badge variant="primary" className="mb-2">
                      Accetto nuovi progetti
                    </Badge>
                    <p className="text-sm text-foreground/60">
                      Tempi di risposta: 1-2 giorni lavorativi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Preferisci una call?</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Prenota una chiamata gratuita di 30 minuti per discutere 
                  il tuo progetto in dettaglio.
                </p>
                <Button variant="outline" className="w-full">
                  Prenota una Call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}