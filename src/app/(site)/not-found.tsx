import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto px-6">
        <Reveal>
          <div className="mb-8">
            <h1 className="font-heading font-bold text-[8rem] md:text-[12rem] lg:text-[16rem] text-primary/20 leading-none">
              404
            </h1>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            Pagina Non Trovata
          </h2>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-body text-muted leading-relaxed mb-8 max-w-md mx-auto">
            La pagina che stai cercando non esiste o è stata spostata. 
            Torna alla homepage per continuare la navigazione.
          </p>
        </Reveal>
        
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                Torna alla Homepage
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/projects">
                Vedi i Progetti
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
