import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-background-alt text-foreground hover:bg-background-alt/80 border border-border',
    ghost: 'text-foreground hover:bg-background-alt',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-lg',
    md: 'h-10 px-4 py-2 text-body rounded-xl',
    lg: 'h-12 px-6 py-3 text-lg rounded-xl',
  }

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    } as any)
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
