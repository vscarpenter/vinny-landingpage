# Vinny Carpenter - Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Built with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🎨 Styled with Tailwind CSS
- 🔒 Type-safe with TypeScript
- 📝 Content-driven architecture

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── content/              # Static content
│   ├── hero.ts           # Hero section content
│   ├── about.ts          # About section content
│   ├── expertise.ts      # Expertise section content
│   ├── contact.ts        # Contact section content
│   └── index.ts          # Content exports
├── styles/               # Global styles
└── types/                # TypeScript types
```

## Content Management

The website uses a content-driven architecture where all static content is externalized into separate TypeScript files under the `src/content` directory. This approach provides several benefits:

- Separation of content from presentation
- Easy content updates without touching component code
- Type-safe content management
- Ready for future CMS integration
- Simplified internationalization

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/vscarpenter/vinny-landingpage.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Deployment

The site is deployed to AWS S3 and served through CloudFront. To deploy:

1. Copy `.env.example` to `.env` and fill in your AWS configuration:
   ```bash
   cp .env.example .env
   ```

2. Configure AWS CLI with your credentials:
   ```bash
   aws configure
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

Note: Make sure to never commit your `.env` file or expose your AWS credentials.

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## License

MIT License - feel free to use this project as a template for your own portfolio!

## Contact

- LinkedIn: [Vinny Carpenter](https://linkedin.com/in/vinnycarpenter)
- GitHub: [vscarpenter](https://github.com/vscarpenter)
