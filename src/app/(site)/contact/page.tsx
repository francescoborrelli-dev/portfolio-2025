'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage(data.message)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setStatusMessage(data.error)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Errore di connessione. Riprova più tardi.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-32 md:pt-28 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h1 className="font-heading font-bold text-hero text-foreground mb-6">
                  Iniziamo a
                  <span className="block text-primary">Lavorare Insieme</span>
                </h1>
                <p className="text-body text-muted max-w-2xl mx-auto leading-relaxed">
                  Hai un progetto in mente? Raccontami la tua visione e 
                  trasformiamola in una realtà digitale che supera le aspettative.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Reveal>
                <div className="bg-card p-8 rounded-2xl">
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
                    Invia un Messaggio
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-body font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-body font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="la-tua@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-body font-medium text-foreground mb-2">
                        Messaggio *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="Parlami del tuo progetto..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Invio in corso...' : 'Invia Messaggio'}
                    </Button>

                    {status === 'success' && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-400 text-body">{statusMessage}</p>
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <p className="text-red-400 text-body">{statusMessage}</p>
                      </div>
                    )}
                  </form>
                </div>
              </Reveal>

              {/* Contact Info */}
              <Reveal delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                      Informazioni di Contatto
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-primary">✉️</span>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">Email</p>
                          <p className="text-muted">hello@francescoborrelli.dev</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-primary">📍</span>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">Ubicazione</p>
                          <p className="text-muted">Firenze, Italia</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-primary">🕒</span>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">Orari di Lavoro</p>
                          <p className="text-muted">Lun-Ven: 9:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                      Seguimi Online
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-background-alt rounded-xl flex items-center justify-center text-muted hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        <span>💼</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-background-alt rounded-xl flex items-center justify-center text-muted hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        <span>🐙</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-background-alt rounded-xl flex items-center justify-center text-muted hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        <span>📷</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-background-alt rounded-2xl">
                    <h4 className="font-heading font-medium text-foreground mb-3">
                      Preferisci una chiamata?
                    </h4>
                    <p className="text-muted text-body mb-4">
                      Prenota una call gratuita di 30 minuti per discutere 
                      del tuo progetto senza impegno.
                    </p>
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                      <a href="https://calendly.com/francescoborrelli" target="_blank" rel="noopener noreferrer">
                        Prenota una Call
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Reveal>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Prima di Scrivere
              </h2>
              <p className="text-body text-muted max-w-2xl mx-auto mb-8">
                Ecco alcune informazioni utili che potrebbero rispondere 
                alle tue domande più frequenti.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  question: 'Tempi di risposta?',
                  answer: 'Rispondo entro 24 ore durante i giorni lavorativi.'
                },
                {
                  question: 'Budget minimo?',
                  answer: 'I progetti partono da €2.000 per siti web professionali.'
                },
                {
                  question: 'Processo di lavoro?',
                  answer: 'Strategia → Design → Sviluppo → Test → Lancio.'
                }
              ].map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.1}>
                  <div className="p-6 bg-card rounded-xl text-left">
                    <h3 className="font-heading font-medium text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted text-body">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
