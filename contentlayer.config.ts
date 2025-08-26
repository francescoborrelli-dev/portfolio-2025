import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    cover: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    impact: {
      type: 'json',
      required: false,
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    description: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
      required: true,
    },
    year: {
      type: 'string',
      required: true,
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project.slug}`,
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    cover: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    readingMinutes: {
      type: 'number',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Project, Post],
})
