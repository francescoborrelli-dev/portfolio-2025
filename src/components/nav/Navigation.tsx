'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { 
  Home, 
  FolderOpen, 
  User, 
  Briefcase, 
  BookOpen, 
  Mail 
} from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'About', href: '/about', icon: User },
  { name: 'Portfolio', href: '/expertise', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center pt-6">
          <div className={cn(
            'flex items-center px-8 py-4 rounded-full transition-all duration-300',
            scrolled || pathname !== '/'
              ? 'bg-background/80 backdrop-blur-xl border border-border shadow-lg' 
              : 'bg-black/20 backdrop-blur-xl border border-white/10'
          )}>
          {/* Logo/Nome */}
          <Link 
            href="/" 
            className={cn(
              'font-heading font-bold text-lg mr-8 transition-colors',
              scrolled || pathname !== '/'
                ? 'text-foreground hover:text-primary' 
                : 'text-white hover:text-white/80'
            )}
          >
            Francesco Borrelli
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
                    isActive
                      ? scrolled || pathname !== '/'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/20 text-white'
                      : scrolled || pathname !== '/'
                        ? 'text-muted hover:text-foreground hover:bg-background-alt'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                  title={item.name}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
            
            {/* Separator */}
            <div className={cn(
              'h-8 w-px mx-4',
              scrolled || pathname !== '/'
                ? 'bg-border'
                : 'bg-white/20'
            )} />
            
            {/* Theme Toggle */}
            <ThemeToggle 
              variant="desktop" 
              scrolled={scrolled} 
              pathname={pathname} 
            />
          </div>
        </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex items-center justify-around px-4 py-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 min-w-[60px]',
                    isActive
                      ? 'text-primary'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              )
            })}
            
            {/* Theme Toggle */}
            <ThemeToggle variant="mobile" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Logo in Top Left */}
      <motion.div
        className="fixed top-6 left-6 z-50 md:hidden"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/" 
          className={cn(
            'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 font-bold text-lg',
            scrolled || pathname !== '/'
              ? 'bg-background/80 backdrop-blur-xl border border-border text-foreground shadow-lg' 
              : 'bg-black/20 backdrop-blur-xl border border-white/10 text-white'
          )}
        >
          FB
        </Link>
      </motion.div>
    </>
  )
}
