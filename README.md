# Francesco Borrelli - Portfolio 2025

A modern, performant portfolio website built with Next.js 13, TypeScript, and Tailwind CSS featuring smooth animations, dark theme, and comprehensive content management.

![Portfolio Homepage](https://github.com/user-attachments/assets/ae39ae55-3cce-4fde-8227-7e799b44806b)

## 🚀 Features

### ✨ Modern Tech Stack
- **Next.js 13** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with custom design system and dark theme
- **Framer Motion** for smooth animations and transitions
- **Contentlayer** for MDX content management (ready for production)
- **Responsive Design** with mobile-first approach

### 🎨 Design & UX
- **Dark Premium Theme** with gradient accents
- **Smooth Animations** throughout the site
- **Split Headline Animation** in hero section
- **Scroll-triggered Reveals** for all sections
- **Interactive Elements** with hover effects and micro-interactions
- **Accessibility** with proper ARIA labels and keyboard navigation

### 📄 Complete Page Structure
- **Homepage** - Hero, social proof, projects, expertise, blog, FAQ
- **About** - Personal story, skills, values, and contact CTA
- **Expertise** - Detailed service breakdowns with processes
- **Projects** - Portfolio showcase with filters and project cards
- **Blog** - Article listing with featured posts and newsletter
- **Contact** - Comprehensive form with validation and contact info

### 🔧 Content Management
- **MDX Support** for rich blog posts and project descriptions
- **Content Abstraction Layer** for easy development/production switching
- **Type-safe Content** with proper TypeScript interfaces
- **Reading Time Calculation** for blog posts
- **Tag System** for categorization and filtering

### ⚡ Performance & SEO
- **Static Site Generation** for optimal loading times
- **Image Optimization** with Next.js Image component
- **Font Optimization** with proper loading strategies
- **SEO Meta Tags** configured for all pages
- **Core Web Vitals** optimized

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/francescoborrelli-dev/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js 13 App Router
│   ├── layout.tsx           # Root layout with fonts
│   ├── globals.css          # Global styles
│   └── (site)/              # Site route group
│       ├── layout.tsx       # Site layout with navigation
│       ├── page.tsx         # Homepage
│       ├── about/page.tsx   # About page
│       ├── expertise/page.tsx # Expertise page
│       ├── projects/page.tsx  # Projects listing
│       ├── blog/page.tsx      # Blog listing
│       └── contact/page.tsx   # Contact form
├── components/              # Reusable components
│   ├── ui/                 # Base UI components
│   ├── motion/             # Animation components
│   ├── cards/              # Card components
│   ├── sections/           # Page sections
│   ├── nav/               # Navigation
│   ├── footer/            # Footer
│   └── hero/              # Hero section
├── content/                # MDX content files
│   ├── projects/          # Project case studies
│   └── blog/              # Blog posts
├── lib/                   # Utility functions
│   ├── utils.ts           # General utilities
│   ├── motion.ts          # Animation variants
│   └── content.ts         # Content API
└── styles/
    └── globals.css        # Global styles
```

## 🎯 Key Components

### Homepage Sections
1. **Hero Section** - Split headline animation with CTA buttons
2. **Social Proof** - Star ratings and animated logo marquee
3. **Big Number Block** - Animated counter (9,991 look-alikes)
4. **Projects Preview** - Featured projects with hover effects
5. **Expertise** - 4 service pillars with detailed processes
6. **Blog Preview** - Recent articles with reading times
7. **FAQ** - Accordion with common questions
8. **Footer** - Navigation and social links

### Animation Features
- **Page Transitions** with AnimatePresence
- **Scroll Reveals** using Intersection Observer
- **Hover Effects** on interactive elements  
- **Staggered Animations** for lists and grids
- **Counter Animation** from 0 to target number
- **Marquee Animation** for logo showcase

### Content Management
- **Mock Data System** for development
- **Contentlayer Integration** ready for production
- **Type-safe Content** with proper interfaces
- **MDX Processing** for rich content
- **Reading Time** calculation

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment variables: Copy from `.env.example`

### Vercel
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://francescoborrelli.dev
NEXT_PUBLIC_SITE_NAME="Francesco Borrelli - Portfolio"
CONTACT_EMAIL=francesco@example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
REVALIDATE_SECRET=your-secret-key-here
```

### Tailwind CSS
Custom design system with:
- **Color Palette** - Primary orange, accent blue, dark backgrounds
- **Typography** - Satoshi font family with responsive scales
- **Animations** - Custom keyframes for smooth interactions
- **Components** - Utility classes for common patterns

## 📱 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing
This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License
MIT License - feel free to use this as inspiration for your own portfolio.

## 📧 Contact
- **Email**: francesco@example.com
- **LinkedIn**: [Francesco Borrelli](https://linkedin.com/in/francescoborrelli)
- **GitHub**: [francescoborrelli-dev](https://github.com/francescoborrelli-dev)

---

Built with ❤️ and Next.js by Francesco Borrelli
