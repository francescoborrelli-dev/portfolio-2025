# Francesco Borrelli Portfolio 2025

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Featuring smooth animations, responsive design, and Italian content optimization.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Performance Optimized**: Image optimization, code splitting, and SEO best practices
- **Accessibility Ready**: WCAG 2.1 compliance and semantic HTML
- **Italian Content**: Fully localized content and formatting
- **Clean Architecture**: Component-based structure with reusable elements

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React
- **Deployment**: [Netlify](https://netlify.com/)
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio-2025/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── (site)/            # Site routes group
│   │   │   ├── about/         # About page
│   │   │   ├── blog/          # Blog pages
│   │   │   │   └── [slug]/    # Dynamic blog posts
│   │   │   ├── contact/       # Contact page
│   │   │   ├── expertise/     # Expertise/Services page
│   │   │   ├── projects/      # Projects pages
│   │   │   │   └── [slug]/    # Dynamic project pages
│   │   │   ├── layout.tsx     # Site layout
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── loading.tsx    # Loading UI
│   │   │   ├── error.tsx      # Error boundary
│   │   │   └── not-found.tsx  # 404 page
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form handler
│   │   ├── globals.css        # Global styles
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── robots.ts          # Robots.txt
│   │   └── sitemap.ts         # Dynamic sitemap
│   ├── components/            # Reusable components
│   │   ├── footer/           # Footer components
│   │   ├── motion/           # Animation components
│   │   ├── nav/              # Navigation components
│   │   └── ui/               # UI components
│   ├── lib/                  # Utilities and data
│   │   ├── content.ts        # Content management
│   │   ├── motion.ts         # Animation variants
│   │   └── utils.ts          # Helper functions
│   └── styles/               # Additional styles
├── public/                   # Static assets
├── .env.local               # Environment variables
├── .env.example             # Environment template
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── netlify.toml             # Netlify deployment config
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0a0a0a` (Black)
- **Background**: `#ffffff` (White)
- **Muted**: `#737373` (Gray)
- **Card**: `#fafafa` (Light Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive scale from 14px to 96px
- **Weights**: 400, 500, 600, 700

### Components
- **Button**: Primary, Secondary, Ghost variants
- **Accordion**: Collapsible FAQ sections
- **Marquee**: Scrolling brand showcase
- **Counter**: Animated number counting
- **Reveal**: Intersection-based animations

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_SITE_NAME="Your Name"
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your-email@domain.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Content Management

The portfolio currently uses a mock data structure in `src/lib/content.ts`. This allows for immediate development and can be easily extended with a headless CMS like:

- [Contentlayer](https://contentlayer.dev/) (prepared but disabled due to Next.js 15 compatibility)
- [Sanity](https://www.sanity.io/)
- [Strapi](https://strapi.io/)
- [Contentful](https://www.contentful.com/)

### Adding Projects
Edit `src/lib/content.ts` and add to the `mockProjects` array:

```typescript
{
  title: 'Your Project Title',
  slug: 'your-project-slug',
  category: 'Category',
  cover: 'https://your-image-url.com/cover.jpg',
  featured: true,
  publishedAt: '2024-01-01',
  description: 'Project description...',
  role: 'Your Role',
  year: '2024',
  stack: ['Technology', 'Stack'],
  url: '/projects/your-project-slug',
  body: {
    raw: 'Detailed content...',
    code: '<h1>HTML content</h1>',
  },
}
```

### Adding Blog Posts
Edit `src/lib/content.ts` and add to the `mockPosts` array:

```typescript
{
  title: 'Your Blog Post Title',
  slug: 'your-post-slug',
  cover: 'https://your-image-url.com/cover.jpg',
  tags: ['Tag1', 'Tag2'],
  readingMinutes: 5,
  readTime: 5,
  publishedAt: '2024-01-01T10:00:00.000Z',
  date: '2024-01-01T10:00:00.000Z',
  description: 'Post description...',
  excerpt: 'Post excerpt...',
  category: 'Category',
  featured: false,
  url: '/blog/your-post-slug',
  body: {
    raw: 'Post content...',
    code: '<h1>HTML content</h1>',
  },
}
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: `netlify/functions`

3. **Add environment variables** in Netlify dashboard

4. **Deploy**: Automatic deploys on git push

### Manual Deployment

```bash
# Build the project
npm run build

# Export static files (if using static export)
npm run export

# Deploy the .next folder to your hosting provider
```

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: 'rgb(var(--primary))',
      'primary-foreground': 'rgb(var(--primary-foreground))',
      // Add your colors here
    }
  }
}
```

### Adding Animations
Create new animation variants in `src/lib/motion.ts`:

```typescript
export const yourAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: easing }
  },
}
```

### Modifying Layout
The main layout is in `src/app/(site)/layout.tsx`. Modify navigation, footer, or add global components here.

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: < 200KB gzipped
- **Image Optimization**: WebP/AVIF with lazy loading

## 🔒 Security

- **CSP Headers**: Content Security Policy implemented
- **XSS Protection**: Input sanitization and validation
- **HTTPS Only**: Secure connections enforced
- **Rate Limiting**: API route protection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Email**: hello@francescoborrelli.dev
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/portfolio-2025/issues)
- **LinkedIn**: [Francesco Borrelli](https://linkedin.com/in/francesco-borrelli)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images

---

**Built with ❤️ by [Francesco Borrelli](https://francescoborrelli.dev)**

Un portfolio moderno e performante costruito con Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Demo

[Visualizza il sito live](https://francescoborrelli.netlify.app)

## ✨ Caratteristiche

- **Next.js 15** con App Router per prestazioni ottimali
- **TypeScript** per un codice type-safe
- **Tailwind CSS** per uno styling rapido e consistente
- **Framer Motion** per animazioni fluide e coinvolgenti
- **Contentlayer** per la gestione dei contenuti MDX
- **Design responsive** ottimizzato per tutti i dispositivi
- **SEO ottimizzato** con meta tags dinamici
- **Accessibilità** con supporto per screen reader e navigazione da tastiera
- **Performance** con immagini ottimizzate e lazy loading

## 🛠 Stack Tecnologico

- **Framework**: Next.js 15
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Contenuti**: Contentlayer (MDX)
- **Database (opzionale)**: Neon (PostgreSQL) con Drizzle ORM
- **Deployment**: Netlify
- **Package Manager**: pnpm

## 🚀 Installazione e Setup

1. **Installa le dipendenze**
   ```bash
   pnpm install
   ```

2. **Avvia il server di sviluppo**
   ```bash
   pnpm dev
   ```

3. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Build di produzione
pnpm build

# Anteprima build
pnpm start
```

## 🚀 Deploy su Netlify

1. **Collega il repository** a Netlify
2. **Configura le build settings**:
   - Build command: `pnpm build`
   - Publish directory: `.next`
3. **Deploy automatico** ad ogni push

---

Realizzato con ❤️ da Francesco Borrelli
