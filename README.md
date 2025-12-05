# Nonna Travel Website

A mobile-first Next.js website for Nonna Travel, a boutique travel agency specializing in intimate, tailor-made journeys to Italian villages for heritage travel.

## Features

- **Mobile-First Design**: Optimized for all devices with responsive navigation
- **Multi-Page Architecture**: Home, Journey, How It Works, About, Contact, FAQ, and Legal pages
- **SEO Optimized**: Metadata, structured data, sitemap, and robots.txt
- **Conversion Optimized**: Multiple CTAs, trust signals, and streamlined forms
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Merriweather, Inter, Lato (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx          # Root layout with navigation and footer
  page.tsx            # Home page
  signature-journey/  # Journey details page
  how-it-works/       # Process explanation page
  about/              # About us page
  contact/            # Contact/quote form page
  faq/                # FAQ page
  privacy/            # Privacy policy
  terms/              # Terms & conditions
  refund/             # Refund policy
  cookies/            # Cookie policy
  sitemap.ts          # Sitemap generation
  globals.css         # Global styles

components/
  Button.tsx          # Reusable button component
  Card.tsx            # Card container component
  Accordion.tsx       # FAQ accordion component
  Input.tsx           # Form input component
  Select.tsx          # Form select component
  Navigation.tsx      # Header navigation
  Footer.tsx          # Footer component
  Hero.tsx            # Hero section component

public/
  Logo.png            # Company logo
  images/             # Image assets
  robots.txt          # SEO robots file
```

## Design System

### Colors
- Primary Green: `#3A6351`
- Accent Gold: `#F4A261`
- Background: `#FAF9F6`
- Text: `#2D2D2D`

### Typography
- Headings: Playfair Display / Merriweather (serif)
- Body: Inter / Lato (sans-serif)
- Base font size: 16px (accessibility)

### Mobile-First Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px

## SEO Features

- Dynamic metadata for each page
- Structured data (Schema.org) for Organization, FAQPage, Service
- Auto-generated sitemap
- robots.txt configuration
- Open Graph and Twitter Card tags
- Semantic HTML structure

## Form Handling

The contact form includes:
- Multi-step wizard for mobile (reduces cognitive load)
- Single-page form for desktop (faster completion)
- Real-time validation
- Error handling

**Note**: Form submission currently logs to console. Backend integration required for production.

## Legal Pages

All legal pages are included:
- Privacy Policy
- Terms & Conditions
- Refund & Cancellation Policy
- Cookie Policy

## Next Steps

1. Replace placeholder images with actual photography
2. Integrate form submission with backend API
3. Add cookie consent banner (GDPR compliance)
4. Set up analytics (Google Analytics, etc.)
5. Configure environment variables for production
6. Set up email service for form submissions

## License

© 2024 NonnaTravel LLC. All rights reserved.

