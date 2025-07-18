import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vinny Carpenter - Cloud & DevOps Engineering Leader',
    template: '%s | Vinny Carpenter'
  },
  description: 'Portfolio of Vinny Carpenter, a Cloud & DevOps Engineering Leader with over 30 years of experience in enterprise software development and architecture. Specializing in AWS, Kubernetes, and team leadership.',
  keywords: ['Cloud Engineering', 'DevOps', 'AWS', 'Kubernetes', 'Team Leadership', 'Enterprise Architecture', 'Vinny Carpenter'],
  authors: [{ name: 'Vinny Carpenter' }],
  creator: 'Vinny Carpenter',
  metadataBase: new URL('https://vinny.io'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Vinny Carpenter - Cloud & DevOps Engineering Leader',
    description: 'Portfolio of Vinny Carpenter, a Cloud & DevOps Engineering Leader with over 30 years of experience in enterprise software development and architecture.',
    url: 'https://vinny.io',
    siteName: 'Vinny Carpenter Portfolio',
    images: [
      {
        url: '/vinnycarpenter-headshot.png',
        width: 1200,
        height: 630,
        alt: 'Vinny Carpenter - Cloud & DevOps Engineering Leader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinny Carpenter - Cloud & DevOps Engineering Leader',
    description: 'Portfolio of Vinny Carpenter, a Cloud & DevOps Engineering Leader with over 30 years of experience in enterprise software development and architecture.',
    images: ['/vinnycarpenter-headshot.png'],
    creator: '@vinnycarpenter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vinny Carpenter" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vinny Carpenter",
              "jobTitle": "Cloud & DevOps Engineering Leader",
              "description": "Cloud & DevOps Engineering Leader with over 30 years of experience in enterprise software development and architecture.",
              "url": "https://vinny.io",
              "image": "https://vinny.io/vinnycarpenter-headshot.png",
              "sameAs": [
                "https://linkedin.com/in/vinnycarpenter",
                "https://github.com/vscarpenter"
              ],
              "knowsAbout": [
                "Cloud Engineering",
                "DevOps",
                "AWS",
                "Kubernetes",
                "Team Leadership",
                "Enterprise Architecture"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
