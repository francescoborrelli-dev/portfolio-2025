'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
  from: number
  to: number
  duration?: number
  className?: string
}

export function Counter({ from, to, duration = 2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const spring = useSpring(motionValue, { duration: duration * 1000 })
  const latest = useTransform(spring, (value) => Math.round(value))
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, isInView, to])

  useEffect(() => {
    const unsubscribe = latest.onChange((value) => {
      if (ref.current) {
        ref.current.textContent = value.toLocaleString('it-IT')
      }
    })

    return unsubscribe
  }, [latest])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {from.toLocaleString('it-IT')}
    </motion.span>
  )
}