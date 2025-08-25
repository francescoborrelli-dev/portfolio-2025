'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { hoverScale } from '@/lib/motion'

interface BlogCardProps {
  title: string
  description: string
  date: string
  image: string
  tags: string[]
  slug: string
  readingTime: { text: string }
  featured?: boolean
}

export function BlogCard({
  title,
  description,
  date,
  image,
  tags,
  slug,
  readingTime,
  featured = false
}: BlogCardProps) {
  return (
    <motion.article
      variants={hoverScale}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="group"
    >
      <Link href={`/blog/${slug}`}>
        <div className="bg-secondary/30 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Featured badge */}
            {featured && (
              <div className="absolute top-4 left-4">
                <Badge variant="primary" className="backdrop-blur-sm">
                  In Evidenza
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 2}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-foreground/70 mb-4 line-clamp-3 flex-1">
              {description}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-foreground/60 mt-auto">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>
                  {new Date(date).toLocaleDateString('it-IT', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{readingTime.text}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}