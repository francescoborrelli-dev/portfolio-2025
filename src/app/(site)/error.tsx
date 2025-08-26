'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl text-primary/20 mb-4">
            ⚠️
          </h1>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            Qualcosa è andato storto
          </h2>
          <p className="text-body text-muted leading-relaxed mb-8">
            Si è verificato un errore imprevisto. Riprova o torna alla homepage.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Riprova
          </Button>
          <Button 
            onClick={() => window.location.href = '/'} 
            variant="secondary" 
            size="lg"
          >
            Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
