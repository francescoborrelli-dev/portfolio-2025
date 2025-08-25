'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { hoverScale } from '@/lib/motion'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link?: string
  github?: string
  slug: string
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  tags,
  link,
  github,
  slug
}: ProjectCardProps) {
  return (
    <motion.div
      variants={hoverScale}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="group"
    >
      <Link href={`/projects/${slug}`}>
        <div className="bg-secondary/30 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="primary" className="backdrop-blur-sm">
                {category}
              </Badge>
            </div>

            {/* Links */}
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-foreground/70 mb-4 line-clamp-2">
              {description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}