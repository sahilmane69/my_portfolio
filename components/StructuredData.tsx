'use client'

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahil Mane',
    givenName: 'Sahil',
    familyName: 'Mane',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications with clean code and thoughtful design.',
    url: 'https://sahilmane-one.vercel.app',
    image: 'https://sahilmane-one.vercel.app/og-image.jpg',
    sameAs: [
      'https://github.com/sahilmane69',
      'https://linkedin.com/in/sahilmane74',
      'https://twitter.com/sahilmane',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'Web Development',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'PostgreSQL',
      'MongoDB',
      'Python',
      'API Development',
      'UI/UX Design',
    ],
    email: 'sahilmanecode@gmail.com',
    telephone: '', // Add if you want
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US', // Update with your country
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sahil Mane Portfolio',
    url: 'https://sahilmane-one.vercel.app',
    description: 'Full Stack Developer Portfolio - React, Next.js, TypeScript Projects',
    author: {
      '@type': 'Person',
      name: 'Sahil Mane',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
