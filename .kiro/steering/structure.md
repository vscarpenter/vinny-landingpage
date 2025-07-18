# Project Structure

## Directory Organization

```
/
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output (generated)
├── node_modules/           # Dependencies (generated)
├── out/                    # Static export output (generated)
├── public/                 # Static assets
│   └── vinnycarpenter-headshot.png  # Profile image
├── src/                    # Source code
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.tsx        # Home page component
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico     # Site favicon
│   └── content/            # Content data files
│       ├── about.ts        # About section content
│       ├── contact.ts      # Contact section content
│       ├── experience.ts   # Experience section content
│       ├── hero.ts         # Hero section content
│       ├── index.ts        # Content exports
│       ├── projects.ts     # Projects section content
│       └── testimonials.ts # Testimonials section content
├── .env                    # Environment variables (not in repo)
├── .env.example            # Example environment variables
├── deploy.sh               # AWS deployment script
├── next.config.js          # Next.js configuration
├── package.json            # Project metadata and dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Architecture Patterns

### Content-Driven Architecture
- Content is separated from presentation in TypeScript files under `src/content/`
- Each section of the site has its own content file (hero.ts, about.ts, etc.)
- Content is imported and rendered by React components
- This approach makes content updates easy without modifying component code

### Next.js App Router
- Uses the Next.js 14 App Router pattern
- `src/app/layout.tsx` defines the root layout with metadata
- `src/app/page.tsx` contains the main page component
- Static site generation with `output: 'export'` in next.config.js

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom theme configuration in tailwind.config.ts
- Global styles in src/app/globals.css
- Framer Motion for animations

### Deployment Strategy
- Static site generation with Next.js export
- Deployment to AWS S3 buckets
- CloudFront distribution for CDN
- Automated deployment script (deploy.sh)