import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Francesco Borrelli - Designer & Developer',
    template: '%s | Francesco Borrelli',
  },
  description: 'Portfolio di Francesco Borrelli, designer e sviluppatore specializzato in branding, app mobile, social media e sviluppo web.',
  keywords: ['Francesco Borrelli', 'designer', 'developer', 'portfolio', 'branding', 'mobile apps', 'web development'],
  authors: [{ name: 'Francesco Borrelli' }],
  creator: 'Francesco Borrelli',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://francescoborrelli.dev',
    title: 'Francesco Borrelli - Designer & Developer',
    description: 'Portfolio di Francesco Borrelli, designer e sviluppatore specializzato in branding, app mobile, social media e sviluppo web.',
    siteName: 'Francesco Borrelli',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francesco Borrelli - Designer & Developer',
    description: 'Portfolio di Francesco Borrelli, designer e sviluppatore specializzato in branding, app mobile, social media e sviluppo web.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}