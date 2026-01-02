# Coup - iMessage Automation Landing Page

A pixel-perfect, responsive landing page for Coup, an iMessage automation tool for teams and AI workflows. Built with modern web technologies and designed for optimal performance and user experience.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Library**: React 19.2.3
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel (Recommended)

---

## ✨ Features

### Design & UI
- **Pixel-Perfect Implementation**: Matches Figma design specifications exactly
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS-based animations for birds, floating elements, and fade-in effects
- **Custom Gradient Background**: Light sky blue gradient from top to bottom
- **Floating Header**: Clean, pill-shaped navigation bar with shadow effect

### Components
- **Reusable UI Components**: Button, Badge, Logo, Icons
- **Layout Components**: Header with mobile menu support
- **Section Components**: Hero section with animated elements
- **Icon System**: Custom SVG icons (Apple, Message Bubble, Logo)

### Animations
- **Bird Animations**: Four unique flying patterns (float, fly, fly-reverse, float-slow)
- **Fade-in Effects**: Staggered fade-in animations for hero content
- **Bounce Effect**: Soft bouncing animation for scroll indicator
- **Smooth Transitions**: All interactive elements have smooth hover/active states

### Performance
- **Optimized Images**: Using Next.js Image component for automatic optimization
- **CSS Animations**: Hardware-accelerated CSS animations (no JS animation libraries)
- **Code Splitting**: Automatic code splitting via Next.js
- **Fast Loading**: Minimal bundle size with optimized dependencies

---

## 📁 Project Structure

```
feeble/
├── app/
│   ├── globals.css          # Global styles, animations, custom CSS
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   └── favicon.ico           # Site favicon
├── components/
│   ├── icons/
│   │   ├── AppleIcon.tsx     # Apple logo SVG
│   │   ├── MessageBubble.tsx # Message bubble icon
│   │   └── index.ts          # Icon exports
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header
│   │   └── index.ts          # Layout exports
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section
│   │   └── index.ts          # Section exports
│   ├── ui/
│   │   ├── Badge.tsx         # Badge component
│   │   ├── Button.tsx        # Button component
│   │   └── index.ts          # UI exports
│   └── index.ts              # Component exports
├── public/
│   ├── arrow-down-04.svg     # Scroll indicator arrow
│   ├── birds.png             # Small decorative birds
│   ├── coup.png              # Desktop logo
│   ├── Frame 23.png          # Badge icon
│   ├── Frame 28.png          # Cloud background
│   ├── Group 1.png           # Mobile logo
│   ├── Group 3.png           # Flying bird 1
│   ├── Group 6.png           # Flying bird 2
│   ├── Group 7.png           # Flying bird 3
│   └── Group 11.png          # Flying bird 4
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration for Tailwind v4
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── README.md                 # This file
```

---

## 🎨 Design Specifications

### Colors
- **Primary Blue**: `#007AFF`
- **Text Primary**: `#1A1A1A`
- **Text Secondary**: `#6b7280`
- **Background Gradient**:
  - Top: `#f5faff` (very light blue)
  - Middle: `#e8f4ff` (soft sky blue)
  - Bottom: `#d4e9ff` (light blue)

### Typography
- **Font Family**: General Sans (via CDN)
- **Heading Size**: 28-35px (responsive)
- **Body Text**: 14px
- **Button Text**: 15-16px

### Spacing
- **Header Height**: 70px
- **Header Border Radius**: 200px (pill shape)
- **Button Border Radius**: 43px
- **Content Max Width**: 768px (3xl)

### Animations
| Animation | Duration | Timing |
|-----------|----------|--------|
| Float | 3s | ease-in-out infinite |
| Float Slow | 4s | ease-in-out infinite |
| Fly | 6s | ease-in-out infinite |
| Fly Reverse | 7s | ease-in-out infinite |
| Fade-in-up | 0.8s | ease-out forwards |
| Bounce Soft | 2s | ease-in-out infinite |

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd feeble
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 🎯 Key Components

### Button Component
**Location**: `components/ui/Button.tsx`

- **Variants**: Primary (blue), Secondary (white with border)
- **Props**: `variant`, `href`, `icon`, `className`, `onClick`
- **Features**: Icon support, link/button support, hover effects

```tsx
<Button variant="primary" href="#get-started">
  Get Started
</Button>
```

### Badge Component
**Location**: `components/ui/Badge.tsx`

- **Style**: Blue background with white text
- **Props**: `children`, `icon`, `className`
- **Features**: Icon support, rounded-full shape

```tsx
<Badge icon={<MessageIcon />}>
  #1 iMessage Automation Tool
</Badge>
```

### Header Component
**Location**: `components/layout/Header.tsx`

- **Features**: Floating pill design, mobile menu, responsive
- **Navigation Links**: How it Works, Pricing, Use Case, FAQ
- **CTA Button**: Contact Sales

### Hero Component
**Location**: `components/sections/Hero.tsx`

- **Features**: Animated birds, cloud background, gradient, scroll indicator
- **Content**: Badge, heading, subtext, CTA buttons
- **Animations**: Fade-in staggered animations

---

## 🎭 Animation System

All animations are pure CSS (no JavaScript animation libraries) for optimal performance:

### Bird Animations
- **Float**: Simple up/down movement (10px range)
- **Float Slow**: Diagonal floating (15px vertical, 5px horizontal)
- **Fly**: Right-to-left flying pattern (20px horizontal)
- **Fly Reverse**: Left-to-right flying pattern (20px horizontal)

### Content Animations
- **Fade-in-up**: Elements fade in while sliding up 20px
- **Stagger Delays**: 100ms, 200ms, 300ms, 400ms for sequential reveals
- **Bounce Soft**: Gentle 5px bounce for scroll indicator

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px+ | Mobile landscape |
| md | 768px+ | Tablets |
| lg | 1024px+ | Desktop (floating header shows) |
| xl | 1280px+ | Large desktop |

### Responsive Behavior
- **Mobile (< 1024px)**: Full-width header with hamburger menu
- **Desktop (1024px+)**: Floating pill-shaped header, centered content
- **Font Scaling**: Responsive text sizes for optimal readability

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com/)
3. Vercel auto-detects Next.js and deploys
4. Your site is live! 🎉

### Other Platforms

```bash
# Build the application
npm run build

# The output will be in the .next folder
# Deploy the .next folder to your hosting platform
```

---

## 🎨 Assets & Credits

### Images
- **Logo**: `coup.png` (desktop), `Group 1.png` (mobile)
- **Birds**: `Group 3.png`, `Group 6.png`, `Group 7.png`, `Group 11.png`
- **Decorative**: `birds.png` (small background birds)
- **Clouds**: `Frame 28.png`
- **Icons**: `Frame 23.png` (badge), `arrow-down-04.svg` (scroll)

### Fonts
- **General Sans**: Loaded via Fontshare CDN (400, 500, 600, 700 weights)

---

## 🔧 Configuration

### Tailwind CSS v4
This project uses Tailwind CSS v4, which has a different setup than v3:

- **No traditional config file**: Uses CSS-based configuration
- **Import**: `@import "tailwindcss";` in `globals.css`
- **PostCSS Plugin**: `@tailwindcss/postcss` in `postcss.config.mjs`
- **Inline Styles**: Used for precise control where Tailwind classes don't work

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` maps to project root)
- Full type coverage for components

---

## 🐛 Known Issues & Solutions

### Issue: Tailwind classes not applying
**Solution**: Some Tailwind classes may not work due to v4 differences. Use inline styles as a fallback:
```tsx
style={{ paddingLeft: '24px', paddingRight: '24px' }}
```

### Issue: Images not loading
**Solution**: Ensure all images are in the `public/` folder and referenced with `/` prefix:
```tsx
<Image src="/coup.png" alt="Logo" />
```

---

## 📝 Implementation Notes

### Design Accuracy
- All spacing, colors, and sizes match Figma specifications
- Inline styles used where necessary for pixel-perfect accuracy
- Extensive testing across different screen sizes

### Performance Optimizations
- Next.js Image component for automatic optimization and lazy loading
- CSS animations instead of JS for better performance
- Minimal dependencies to reduce bundle size
- Code splitting via Next.js App Router

### Code Quality
- TypeScript for type safety
- Component-based architecture for reusability
- Clear folder structure for maintainability
- Comments for complex logic

---

## 👥 Contributing

This is a frontend implementation assignment. For production use:

1. Add environment variables for API endpoints
2. Implement actual form submissions
3. Add analytics tracking
4. Configure SEO metadata
5. Add more pages (Pricing, FAQ, etc.)
6. Implement proper routing

---

## 📄 License

This project is private and proprietary.

---

## 📞 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**