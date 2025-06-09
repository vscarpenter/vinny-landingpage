import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinny Carpenter - Cloud & DevOps Engineering Leader',
  description: 'Portfolio of Vinny Carpenter, a Cloud & DevOps Engineering Leader with over 30 years of experience in enterprise software development and architecture.',
  metadataBase: new URL('https://vinny.io'),
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
