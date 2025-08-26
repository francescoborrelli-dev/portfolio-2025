'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 40, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
