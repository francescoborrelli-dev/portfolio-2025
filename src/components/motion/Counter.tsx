'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
  value: number
  duration?: number
  className?: string
}

export function Counter({ value, duration = 2000, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })
  const isInView = useInView(ref, { once: true, margin: "-15%" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("it-IT").format(Math.floor(latest))
      }
    })
  }, [springValue])

  return <span ref={ref} className={className}>0</span>
}
