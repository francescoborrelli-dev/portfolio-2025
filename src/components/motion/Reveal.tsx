'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        ...fadeInUp,
        animate: {
          ...fadeInUp.animate,
          transition: {
            ...fadeInUp.animate.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}