export default function WebPageStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rinneaiable.com'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'RINNE AIABLE LLC - Automating Complexity',
    description: 'We provide high-end technical solutions to automate complex workflows. We bridge the gap between manual labor and AI-driven efficiency.',
    url: baseUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'RINNE AIABLE LLC',
      url: baseUrl,
    },
    about: {
      '@type': 'Organization',
      name: 'RINNE AIABLE LLC',
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'RINNE AIABLE LLC',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
