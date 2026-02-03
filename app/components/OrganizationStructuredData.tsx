export default function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rinneaiable.com'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RINNE AIABLE LLC',
    url: baseUrl,
    logo: `${baseUrl}/images/rinne_icon.png`,
    description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@rinneaiable.com',
    },
    sameAs: [
      // Add social media links when available
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'AI Automation',
      'Workflow Automation',
      'Custom Chatbots',
      'RAG Systems',
      'Enterprise AI',
      'Machine Learning',
      'Natural Language Processing',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
