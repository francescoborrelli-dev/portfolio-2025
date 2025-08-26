'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { accordionVariants, chevronRotate } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <div key={item.id} className="border border-border rounded-xl bg-card">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background-alt/50 transition-colors rounded-xl"
            aria-expanded={openItem === item.id}
          >
            <span className="font-heading font-medium text-foreground pr-4">
              {item.question}
            </span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0 text-muted"
              variants={chevronRotate}
              animate={openItem === item.id ? 'open' : 'closed'}
            >
              <path
                d="M12 6L8 10L4 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>
          
          <AnimatePresence>
            {openItem === item.id && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={accordionVariants}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-muted text-body leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
