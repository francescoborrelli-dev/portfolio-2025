import { Navigation } from '@/components/nav/Navigation'
import { Footer } from '@/components/footer/Footer'
import { PageTransition } from '@/components/motion/PageTransition'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}