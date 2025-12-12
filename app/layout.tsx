import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import LoaderOverlay from '@/components/LoaderOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sahil Mane - Full Stack Developer | React, Next.js, TypeScript Expert',
    template: '%s | Sahil Mane - Full Stack Developer'
  },
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications with clean code and thoughtful design. Explore my portfolio of innovative projects.',
  keywords: [
    'Sahil Mane',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Portfolio',
    'Web Development',
    'Software Engineer',
    'UI/UX Developer'
  ],
  authors: [{ name: 'Sahil Mane' }],
  creator: 'Sahil Mane',
  publisher: 'Sahil Mane',
  metadataBase: new URL('https://sahilmane-one.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahilmane-one.vercel.app',
    title: 'Sahil Mane - Full Stack Developer | React, Next.js, TypeScript Expert',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications with clean code and thoughtful design.',
    siteName: 'Sahil Mane Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can add an OG image later
        width: 1200,
        height: 630,
        alt: 'Sahil Mane - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Mane - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications.',
    creator: '@sahilmane', // Update with your Twitter handle
    images: ['/og-image.jpg'],
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
  verification: {
    // Add verification codes when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <LoaderOverlay />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-10 pb-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

