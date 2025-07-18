# Technical Stack

## Core Technologies
- **Next.js 14**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript for better developer experience
- **React 18**: UI component library
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React

## Build System
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for JavaScript

## Deployment
- **AWS S3**: Static website hosting
- **AWS CloudFront**: Content delivery network
- **Static Site Generation**: Next.js export for static HTML files

## Common Commands

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint
```

### Building & Deployment
```bash
# Build for production
npm run build

# Start production server locally
npm run start

# Export static site
npm run export

# Deploy to AWS
# (Requires AWS credentials and .env configuration)
./deploy.sh
```

## Environment Configuration
- Copy `.env.example` to `.env` and configure AWS settings:
  - `S3_BUCKET_1`: Primary S3 bucket name
  - `S3_BUCKET_2`: Secondary S3 bucket name
  - `CLOUDFRONT_DISTRIBUTION_ID_1`: Primary CloudFront distribution ID
  - `CLOUDFRONT_DISTRIBUTION_ID_2`: Secondary CloudFront distribution ID
  - `AWS_REGION`: AWS region (defaults to us-east-1)

## Code Style
- ESLint for code linting
- Tailwind classes for styling (no separate CSS files)
- Functional React components with hooks
- TypeScript for type safety