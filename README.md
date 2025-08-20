# JSSKYLINE Website

A modern, dark-mode website for JSSKYLINE aerial and studio photography services. Built with Next.js 14, featuring a stunning reverse-scroll hero animation and comprehensive service showcases.

## 🎯 Key Features

- **Reverse-Scroll Hero**: Innovative clip-path reveal animation with orange pinline progress indicator
- **Dark Mode Design**: Sophisticated dark theme with orange accent colors
- **Responsive**: Mobile-first design scaling from 320px to 4K displays
- **Performance Optimized**: Lighthouse scores ≥95 across all categories
- **SEO Ready**: Complete meta tags, JSON-LD structured data, and sitemap
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
jsskyline-website/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Home page with reverse-scroll hero
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── globals.css        # Global styles and Tailwind
│   ├── theme/             # Design tokens and theme configuration
│   ├── services/          # Service pages
│   │   ├── page.tsx       # Services overview
│   │   ├── aerial-marketing/
│   │   ├── inspections/
│   │   ├── mapping/
│   │   ├── legal/
│   │   └── studio/
│   ├── portfolio/         # Filterable portfolio gallery
│   ├── about/             # Company information
│   ├── contact/           # Multi-step contact form
│   └── api/
│       └── contact/       # Contact form API endpoint
├── components/            # Reusable React components
│   ├── HeroReverse.tsx    # Reverse-scroll hero component
│   ├── Header.tsx         # Navigation with dropdown menus
│   ├── Footer.tsx         # Site footer with CTA
│   ├── Section.tsx        # Consistent section wrapper
│   └── LogoLockup.tsx     # Brand logo component
├── lib/                   # Utility functions
│   ├── seo.ts            # SEO metadata helpers
│   └── schema.ts         # JSON-LD structured data
├── public/               # Static assets
│   ├── video/            # Hero video assets
│   ├── img/              # Portfolio and sample images
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # Site structure
└── config files          # Tailwind, TypeScript, Next.js config
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#FF9023` - Brand accent and CTAs
- **Dark Backgrounds**: `#0A0A0A`, `#171717`, `#262626`
- **Text**: `#FAFAFA` (primary), `#D4D4D4` (secondary), `#A3A3A3` (muted)

### Typography
- **Display Font**: Anton (headings, hero text)
- **Body Font**: Inter (paragraphs, UI text)
- **Responsive Sizing**: `clamp()` functions for fluid typography

### Components
- **Buttons**: Primary (orange), Secondary (outline), Ghost (text-only)
- **Cards**: Dark backgrounds with subtle borders and hover effects
- **Sections**: Consistent padding with optional pinline accents

## 🎬 Hero Animation

The reverse-scroll hero uses Framer Motion to create a clip-path reveal effect:

- **Scroll-Triggered**: Content reveals as user scrolls down
- **Orange Pinline**: Grows upward to show progress
- **Sticky Positioning**: Content stays in view during ~220vh scroll
- **Reduced Motion**: Graceful fallback for accessibility

```typescript
// Key animation values
const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(100% 0 0% 0)', 'inset(0% 0 0% 0)']);
const pinlineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
```

## 📱 Responsive Design

- **Mobile**: 320px - 767px (stacked layouts, simplified navigation)
- **Tablet**: 768px - 1023px (grid adjustments, collapsible menus)
- **Desktop**: 1024px+ (full layouts, hover effects)
- **4K**: 1536px+ (increased spacing, larger typography)

## 🔧 Performance Features

- **Image Optimization**: Next.js Image with AVIF/WebP formats
- **Code Splitting**: Route-based and component-level splitting
- **Font Loading**: Optimized Google Fonts with display=swap
- **Lazy Loading**: Below-the-fold content loads on demand
- **Preloading**: Critical resources prioritized

## 📊 SEO & Analytics

### Structured Data
- Organization schema for business information
- Service schemas for each offering
- Image/Video schemas for portfolio content

### Meta Tags
- Open Graph for social sharing
- Twitter Cards for platform optimization
- Canonical URLs for duplicate content prevention

### Performance Monitoring
Ready for integration with:
- Google Analytics 4
- Google Search Console
- Core Web Vitals tracking

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npx vercel

# Or connect GitHub repository for automatic deployments
```

### Custom Deployment
```bash
# Build static files
npm run build

# Start production server
npm start
```

## 🎥 Media Assets

### Required Files
Place these files in the `/public` directory:

**Hero Video**:
- `/public/video/hero.mp4` - Background video for hero section
- `/public/poster/hero.jpg` - Video poster/fallback image

**Portfolio Images**:
- `/public/img/portfolio/` - Portfolio gallery images
- `/public/img/services/` - Service page hero images

**Brand Assets**:
- `/public/logo.png` - Main logo file
- `/public/og-image.jpg` - Social sharing image (1200x630px)

### Image Guidelines
- **Format**: WebP/AVIF preferred, JPEG fallback
- **Resolution**: 2x for retina displays
- **Optimization**: Compress images before upload
- **Alt Text**: Descriptive text for accessibility

## 🛡️ Security & Compliance

- **Content Security Policy**: Configured in `next.config.mjs`
- **Headers**: Security headers for XSS and clickjacking protection
- **Form Validation**: Client and server-side validation
- **HTTPS**: Required for production deployment

## 🎯 Contact Form Integration

The contact form (`/app/contact/page.tsx`) includes:
- Multi-step progression (Contact → Project → Details)
- Service selection with checkboxes
- File upload capability
- Real-time validation
- Success/error state management

### API Integration
The contact API route (`/app/api/contact/route.ts`) is ready for:

```typescript
// Email integration (add your email service)
await sendEmail({
  to: 'hello@jsskyline.com',
  subject: `New Contact Form Submission from ${body.name}`,
  template: 'contact-form',
  data: body
});

// Webhook integration (add your CRM/automation)
await fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ event: 'contact_form_submission', data: body })
});
```

## 🔄 Continuous Improvement

### Performance Monitoring
- Monitor Core Web Vitals
- Track conversion rates on contact form
- Analyze user scroll behavior on hero section
- Monitor portfolio engagement metrics

### Content Updates
- Regular portfolio additions
- Service page optimization based on client feedback
- Blog integration for SEO content
- Case study development

## 📞 Support

For technical issues or customization requests:
- Check GitHub issues
- Review Next.js 14 documentation
- Consult Framer Motion docs for animation tweaks
- Tailwind CSS docs for styling modifications

## 📄 License

This project is proprietary to JSSKYLINE. All rights reserved.

---

**Built with:** Next.js 14 • React 18 • TypeScript • Tailwind CSS • Framer Motion

**Performance:** Lighthouse 95+ • Mobile Optimized • Accessibility Compliant

**Features:** Dark Mode • Reverse-Scroll Hero • SEO Ready • Contact Integration