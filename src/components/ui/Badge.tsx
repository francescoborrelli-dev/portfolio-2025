import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline' | 'primary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        {
          'bg-secondary text-secondary-foreground': variant === 'default',
          'bg-muted text-muted-foreground': variant === 'secondary',
          'border border-border bg-transparent text-foreground': variant === 'outline',
          'bg-primary text-primary-foreground': variant === 'primary',
        },
        className
      )}
    >
      {children}
    </span>
  )
}