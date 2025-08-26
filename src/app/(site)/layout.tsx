import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import { ClientLayout } from '@/components/layout/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Francesco Borrelli - UI/UX Designer & Frontend Developer',
    template: '%s | Francesco Borrelli'
  },
  description: 'Portfolio di Francesco Borrelli, UI/UX Designer e Frontend Developer specializzato in esperienze digitali innovative e user-centered design.',
  keywords: ['UI/UX Designer', 'Frontend Developer', 'Portfolio', 'Design', 'Italia'],
  authors: [{ name: 'Francesco Borrelli' }],
  creator: 'Francesco Borrelli',
  publisher: 'Francesco Borrelli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://francescoborrelli.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Francesco Borrelli - UI/UX Designer & Frontend Developer',
    description: 'Portfolio di Francesco Borrelli, UI/UX Designer e Frontend Developer specializzato in esperienze digitali innovative.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://francescoborrelli.dev',
    siteName: 'Francesco Borrelli Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Francesco Borrelli Portfolio',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francesco Borrelli - UI/UX Designer & Frontend Developer',
    description: 'Portfolio di Francesco Borrelli, UI/UX Designer e Frontend Developer specializzato in esperienze digitali innovative.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head></head>
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}