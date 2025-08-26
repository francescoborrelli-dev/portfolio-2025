'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile'
  scrolled?: boolean
  pathname?: string
}

export function ThemeToggle({ variant = 'desktop', scrolled = false, pathname = '/' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={cn(
        'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
        variant === 'mobile' ? 'min-w-[60px]' : ''
      )}>
        <Sun size={20} className="opacity-0" />
      </div>
    )
  }

  const handleToggle = () => {
    toggleTheme()
  }

  if (variant === 'mobile') {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          'flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 min-w-[60px]',
          'text-muted hover:text-foreground'
        )}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        <span className="text-xs font-medium">Theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
        scrolled || pathname !== '/'
          ? 'text-muted hover:text-foreground hover:bg-background-alt'
          : 'text-white/70 hover:text-white hover:bg-white/10'
      )}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
