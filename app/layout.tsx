import type { Metadata } from 'next'
import './globals.css'
import OrganizationStructuredData from './components/OrganizationStructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rinneaiable.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'RINNE AIABLE LLC - Automating Complexity',
    template: '%s | RINNE AIABLE LLC',
  },
  description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency. Specializing in custom AI chatbots, RAG systems, and enterprise automation solutions.',
  keywords: ['AI automation', 'workflow automation', 'custom chatbots', 'RAG systems', 'enterprise AI', 'business automation', 'AI solutions', 'machine learning', 'natural language processing', 'customer service AI'],
  authors: [{ name: 'RINNE AIABLE LLC' }],
  creator: 'RINNE AIABLE LLC',
  publisher: 'RINNE AIABLE LLC',
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
  icons: {
    icon: '/images/rinne_icon.png',
    apple: '/images/rinne_icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'RINNE AIABLE LLC',
    title: 'RINNE AIABLE LLC - Automating Complexity',
    description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency.',
    images: [
      {
        url: '/images/rinne_icon.png',
        width: 1200,
        height: 630,
        alt: 'RINNE AIABLE LLC - Automating Complexity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RINNE AIABLE LLC - Automating Complexity',
    description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency.',
    images: ['/images/rinne_icon.png'],
    creator: '@rinneaiable',
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
      </head>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
