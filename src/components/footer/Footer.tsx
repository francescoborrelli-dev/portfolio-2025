import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/francescoborrelli-dev', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/francescoborrelli', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/francescoborrelli', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com/francescoborrelli', icon: Instagram, label: 'Instagram' },
]

const footerLinks = [
  { href: '/about', label: 'Chi Sono' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Progetti' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contatti' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-gradient"
            >
              Francesco Borrelli
            </Link>
            <p className="text-foreground/70 max-w-sm">
              Designer e sviluppatore specializzato in branding, app mobile, 
              social media e sviluppo web.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigazione</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seguimi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground/70 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Francesco Borrelli. Tutti i diritti riservati.
          </p>
          <p className="text-foreground/60 text-sm mt-2 sm:mt-0">
            Realizzato con ❤️ e Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}