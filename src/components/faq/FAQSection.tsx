'use client'

import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/motion/Reveal'

const faqData = [
  {
    id: '1',
    question: 'Quanto tempo richiede un progetto tipico?',
    answer: 'I tempi variano in base alla complessità del progetto. Un sito web semplice richiede 2-4 settimane, mentre progetti più complessi come app mobile o e-commerce possono richiedere 2-6 mesi. Fornisco sempre una timeline dettagliata durante la fase di consulenza iniziale.'
  },
  {
    id: '2',
    question: 'Offri supporto e manutenzione post-lancio?',
    answer: 'Assolutamente sì! Offro pacchetti di manutenzione mensili che includono aggiornamenti di sicurezza, backup, ottimizzazioni delle performance e supporto tecnico. Il supporto è essenziale per mantenere il tuo progetto sempre aggiornato e sicuro.'
  },
  {
    id: '3',
    question: 'Lavori con clienti internazionali?',
    answer: 'Sì, lavoro regolarmente con clienti in tutto il mondo. Sono abituato a gestire progetti in remoto e utilizzo strumenti di collaborazione moderni per garantire una comunicazione efficace indipendentemente dal fuso orario.'
  },
  {
    id: '4',
    question: 'Qual è il tuo processo di lavoro?',
    answer: 'Il mio processo è strutturato in 5 fasi: 1) Consulenza e strategia, 2) Design e prototipazione, 3) Sviluppo e implementazione, 4) Testing e ottimizzazione, 5) Lancio e supporto. Mantengo il cliente coinvolto in ogni fase con aggiornamenti regolari.'
  },
  {
    id: '5',
    question: 'Fornisci la formazione per gestire il sito/app?',
    answer: 'Certamente! Includo sempre una sessione di formazione per il cliente e fornisco documentazione dettagliata. Voglio assicurarmi che tu sia completamente autonomo nella gestione del tuo progetto.'
  },
  {
    id: '6',
    question: 'Come gestisci i pagamenti?',
    answer: 'Lavoro con un sistema di pagamenti suddiviso in milestone: 30% all\'inizio, 40% a metà progetto e 30% al completamento. Accetto bonifici bancari, PayPal e Stripe. Per progetti più grandi, possiamo concordare rate mensili.'
  }
]

export function FAQSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Domande <span className="text-gradient">Frequenti</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Le risposte alle domande più comuni sui miei servizi e sul processo di lavoro.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqData} />
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Non trovi la risposta che cerchi?
            </p>
            <p className="text-foreground/60">
              <a 
                href="mailto:francesco@example.com" 
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                Scrivimi direttamente
              </a> e sarò felice di aiutarti!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}