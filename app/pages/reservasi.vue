<template>
    <div>
        <Navigation />
        <Contact />
        <Footer />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Professional Photography & Retouching | Asih Angger',
  description: 'High-end photography services for products, portraits, and life\'s milestones. Professional retouching and commercial photography.',
  ogTitle: 'Asih Angger - Professional Photography & Retouching',
  ogDescription: 'High-end photography services for products, portraits, and life\'s milestones.',
  ogImage: 'https://asihangger.com/icon.png',
  ogUrl: 'https://asihangger.com',
  ogType: 'website',
  ogSiteName: 'Asih Angger',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Asih Angger - Professional Photography & Retouching',
  twitterDescription: 'High-end photography services for products, portraits, and life\'s milestones.',
  twitterImage: 'https://asihangger.com/icon.png',
  keywords: 'photography, retouching, product photography, portrait photography, beauty photography, baby photography, event photography, commercial photography, Jakarta',
  author: 'Asih Angger',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ece03f',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://asihangger.com',
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: 'https://asihangger.com/rss.xml',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://asihangger.com',
        name: 'Asih Angger',
        alternateName: 'Asih Angger Photography',
        description: 'High-end photography services for products, portraits, and life\'s milestones. Professional retouching and commercial photography.',
        url: 'https://asihangger.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://asihangger.com/logo.png',
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://asihangger.com/icon.png',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Margonda Raya',
          addressLocality: 'Kota Depok',
          addressRegion: 'Jawa Barat',
          addressCountry: 'ID',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'asih.angger@gmail.com',
            contactType: 'Customer Service',
            areaServed: 'ID',
            availableLanguage: ['en', 'id'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+6287831377755',
            contactType: 'Customer Service',
            areaServed: 'ID',
            availableLanguage: ['en', 'id'],
          },
        ],
        areaServed: {
          '@type': 'City',
          name: 'Jakarta',
        },
        serviceType: ['Product Photography', 'Beauty Portrait', 'Baby Documentary', 'Event Coverage', 'Photo Retouching'],
        priceRange: '$$',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Photography Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Portrait / Solo Photography',
                description: '2 Hours Session, 10 Retouched Photos, Online Gallery Access',
                provider: {
                  '@type': 'Person',
                  name: 'Asih Angger',
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial / Brand Photography',
                description: 'Full Day Session, 25 High-End Retouched, Full Commercial Rights',
                provider: {
                  '@type': 'Person',
                  name: 'Asih Angger',
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Events / Large Scale Photography',
                description: 'Ideal for weddings, corporate events, or unique artistic collaborations',
                provider: {
                  '@type': 'Person',
                  name: 'Asih Angger',
                },
              },
            },
          ],
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Asih Angger',
        jobTitle: 'Photographer & Retoucher',
        url: 'https://asihangger.com',
        sameAs: [
          'https://www.instagram.com/asihangger/',
          'https://www.linkedin.com/in/asihangger/',
        ],
        knowsAbout: ['Photography', 'Photo Retouching', 'Product Photography', 'Portrait Photography'],
      }),
    },
  ],
})
</script>