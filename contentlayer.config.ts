import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

const computedFields = {
  readingTime: {
    type: 'json' as const,
    resolve: (doc: any) => readingTime(doc.body.raw),
  },
  slug: {
    type: 'string' as const,
    resolve: (doc: any) => doc._raw.flattenedPath,
  },
  slugAsParams: {
    type: 'string' as const,
    resolve: (doc: any) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    client: {
      type: 'string',
      required: false,
    },
    year: {
      type: 'string',
      required: true,
    },
    link: {
      type: 'string',
      required: false,
    },
    github: {
      type: 'string',
      required: false,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    order: {
      type: 'number',
      default: 0,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})