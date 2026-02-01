import type { Metadata } from 'next'
import './globals.css'
import FAQStructuredData from './components/FAQStructuredData'
import faqData from '@/rinneai_faq.json'

export const metadata: Metadata = {
  title: 'RINNE AIABLE LLC - Automating Complexity',
  description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency.',
  keywords: ['AI automation', 'workflow automation', 'custom chatbots', 'RAG systems', 'enterprise AI'],
  icons: {
    icon: '/images/rinne_icon.png', 
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'RINNE AIABLE LLC - Automating Complexity',
    description: 'We provide high-end technical solutions to automate complex workflows.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <FAQStructuredData faqData={faqData} />
      </head>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
