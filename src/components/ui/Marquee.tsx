'use client'

import { motion } from 'framer-motion'
import { marqueeVariants } from '@/lib/motion'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Marquee({ children, className, speed = 25 }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="inline-block"
        animate={{
          x: ['100%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}