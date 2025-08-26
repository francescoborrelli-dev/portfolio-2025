'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navigation } from '@/components/nav/Navigation'
import { Footer } from '@/components/footer/Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
