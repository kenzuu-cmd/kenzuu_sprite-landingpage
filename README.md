# Sprite Landing Page

A modern, responsive landing page for Sprite lemon-lime soda built with Next.js 15, React 19, and TypeScript. This project showcases a professional product marketing website with smooth animations, interactive sections, and a clean user interface.

## Overview

This landing page presents Sprite's brand identity through an engaging single-page application featuring product information, ingredients, nutritional facts, customer reviews, and frequently asked questions. The site emphasizes Sprite's crisp, refreshing taste and clean lemon-lime flavor profile.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Radix UI and shadcn/ui component library
- **Smooth Animations**: Framer Motion integration for fluid transitions and interactions
- **Video Hero Section**: Eye-catching hero with background video and overlay effects
- **Interactive Sections**: Product details, ingredients, nutrition facts, reviews, and FAQ
- **Type-Safe**: Full TypeScript implementation for robust development
- **Performance Optimized**: Next.js 15 with Turbopack for fast development and production builds
- **Accessible**: WCAG-compliant components with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 15.5.9
- **UI Library**: React 19.2.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Components**: Radix UI primitives (Accordion, Avatar, Progress, Toast)
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── sections/         # Page sections (Hero, About, FAQ, etc.)
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── layout/           # Header, Footer, Loading screen
│   │   ├── ui/               # Reusable UI components
│   │   └── icons/            # Icon components
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities and configuration
├── public/
│   └── assets/               # Static assets (images, videos)
└── config files
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kenzuu_sprite-landingpage
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:9002](http://localhost:9002) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack on port 9002
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run typecheck` - Run TypeScript compiler checks

## Configuration

Site configuration is managed through `src/lib/config.ts`, which includes:

- Brand name and description
- Drink product details
- Theme colors
- Navigation links

Customize these values to match your product or brand requirements.

## Sections

1. **Hero Section**: Full-screen video background with brand logo and call-to-action
2. **About Section**: Product overview and key features
3. **Ingredients Section**: Detailed ingredient breakdown
4. **Nutrition Section**: Nutritional facts and health information
5. **Reviews Section**: Customer testimonials and ratings
6. **FAQ Section**: Frequently asked questions with accordion interface
7. **Final CTA Section**: Closing call-to-action and engagement prompt

## Styling

The project uses Tailwind CSS with a custom configuration including:

- Custom color palette (Sprite green: `#00C850`)
- Responsive breakpoints
- Custom animations and transitions
- Dark mode support via theme provider

## Dependencies

Key dependencies include:

- **UI Components**: @radix-ui/react-accordion, @radix-ui/react-avatar, @radix-ui/react-progress, @radix-ui/react-toast
- **Animation**: framer-motion
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Icons**: lucide-react

## License

This project is just for fun and to expand my learning.
