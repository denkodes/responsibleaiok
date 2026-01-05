# Responsible AI OK

A professional, single-page nonprofit landing site built with Next.js, featuring Swiss-inspired minimal luxury design.

**Live Site:** [responsibleaiok.org](https://responsibleaiok.org) *(after deployment)*

---

## 🎯 Project Overview

This website serves as the digital home for **Responsible AI OK** (formerly AI Safety Tulsa), an Oklahoma-based nonprofit advancing responsible AI through education, governance, and equitable access.

### Design Philosophy

- **Swiss Modernism**: Typography-first hierarchy, asymmetric grids, generous whitespace
- **Minimal Luxury**: Restrained color palette, subtle effects, professional aesthetic
- **Modern "Alive" Backgrounds**: Fluid gradient mesh animations (no static gradients)
- **High-Impact Footer**: "Site-ender" typography for a lasting impression
- **Performance-First**: <100KB bundle, optimized images, minimal JavaScript
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **Grant-Ready**: Designed to pass funder credibility scan in under 60 seconds

### Recent Updates (Jan 2026)

- Added animated "breathing" background gradients (`animate-blob`)
- Modernized activity cards with gradient borders
- Overhauled footer with massive typographic layout

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.17 or higher
- **npm**: v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/responsibleaiok.git
cd responsibleaiok

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
responsibleaiok/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Design system tokens & base styles
├── components/
│   ├── Navigation.tsx      # Sticky nav with scroll tracking
│   ├── HeroSection.tsx     # Above-fold hero
│   ├── MissionSection.tsx  # Mission statement
│   ├── ActivitiesSection.tsx  # Asymmetric activity cards
│   ├── WhyItMattersSection.tsx  # Impact narrative
│   ├── AboutSection.tsx    # Organizational credibility
│   ├── GetInvolvedSection.tsx  # HubSpot form integration
│   └── Footer.tsx          # Contact & social links
├── lib/
│   ├── constants.ts        # Centralized content (EDIT HERE!)
│   └── utils.ts            # Helper functions
├── public/
│   ├── og-image.png        # Social sharing image
│   └── favicon/            # Favicon variants
├── next.config.ts          # Security headers & optimization
└── .env.example            # Environment variable template
```

---

## ✏️ Editing Content

**All site content lives in one place:** `lib/constants.ts`

To update text, headings, or descriptions:

1. Open `lib/constants.ts`
2. Find the section you want to edit (e.g., `HERO_CONTENT`, `MISSION_CONTENT`)
3. Update the text
4. Save the file
5. Changes appear automatically in development

**No need to touch component files!** This makes content updates beginner-friendly.

---

## 🔧 Configuration

### HubSpot Form Integration

1. **Get HubSpot Credentials:**
   - Log in to HubSpot
   - Go to Settings → Integrations → API Key
   - Note your **Portal ID** and create a form to get **Form ID**

2. **Add to Environment:**
   ```bash
   # In .env.local
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
   NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
   ```

3. **Restart Development Server:**
   ```bash
   npm run dev
   ```

The form will automatically switch from native fallback to HubSpot integration.

### Analytics (Optional)

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Or Plausible (privacy-friendly alternative)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=responsibleaiok.org
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary */
--navy-deep: #0F172A      /* Trust, authority */
--slate: #334155          /* Body text */
--teal-muted: #0E7490     /* Accent, links */

/* Warm Accent */
--taupe-gold: #A78166     /* CTAs (luxury, not loud) */

/* Neutrals */
--off-white: #FAFAF9      /* Background */
--gray-light: #F1F5F9     /* Card backgrounds */
```

### Typography

- **Headings**: Inter Display (bold, geometric precision)
- **Body**: Inter (proven readability)
- **Scale**: Fluid with `clamp()` for responsive sizing

### Spacing

- **Section Padding**: 120px (desktop), 80px (mobile)
- **Card Padding**: 32px–48px (luxury spacing)
- **Grid**: 4px base unit

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Domains:**
   - In Vercel dashboard, go to Settings → Domains
   - Add `responsibleaiok.org` (primary)
   - Add `responsibleaiok.com` → redirect to .org
   - Add `aistulsa.com` → redirect to .org

4. **Add Environment Variables:**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
   - Add `NEXT_PUBLIC_HUBSPOT_FORM_ID`
   - Redeploy for changes to take effect

### DNS Configuration

Point your domains to Vercel:

```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

---

## ✅ Quality Checklist

### Before Launch

- [ ] Update contact email in `lib/constants.ts`
- [ ] Add HubSpot credentials to environment variables
- [ ] Test form submission
- [ ] Update social media URLs in footer (when available)
- [ ] Run Lighthouse audit (target: 95+ performance, 100 accessibility)
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Verify all links work
- [ ] Check spelling and grammar
- [ ] Test with screen reader (VoiceOver on Mac: Cmd+F5)
- [ ] Verify keyboard navigation (Tab through entire page)

### Post-Launch

- [ ] Submit to Google Search Console
- [ ] Set up analytics tracking
- [ ] Monitor form submissions in HubSpot
- [ ] Share on social media
- [ ] Send to stakeholders for feedback

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint

# Type check
npm run type-check

# Security audit
npm audit
```

---

## 🔒 Security Features

- **Content Security Policy (CSP)** headers
- **HTTPS enforcement** (HSTS)
- **XSS protection** via React's automatic escaping
- **Input validation** on forms
- **Environment variable** protection
- **Dependency auditing** in CI/CD

---

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** for all interactive elements
- **Screen reader** support with ARIA labels
- **Color contrast** ratios ≥4.5:1
- **Focus indicators** on all focusable elements
- **Reduced motion** support for animations

---

## 📊 Performance

- **Lighthouse Scores** (targets):
  - Performance: 95+
  - Accessibility: 100
  - SEO: 100
  - Best Practices: 100

- **Bundle Size**: <100KB (first load JS)
- **Time to Interactive**: <2s on 3G
- **Image Optimization**: WebP/AVIF with lazy loading

---

## 🤝 Contributing

This is a nonprofit project. Contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📝 License

Copyright © 2026 Responsible AI OK. All rights reserved.

---

## 📧 Contact

- **Email**: contact@responsibleaiok.org
- **Website**: [responsibleaiok.org](https://responsibleaiok.org)

---

## 🙏 Acknowledgments

- **Design Inspiration**: Swiss modernism, minimal luxury aesthetics
- **Typography**: Inter font family by Rasmus Andersson
- **Built With**: Next.js 14, React, TypeScript, Tailwind CSS
- **Deployed On**: Vercel

---

**Built with ❤️ for the responsible AI community in Oklahoma and beyond.**
