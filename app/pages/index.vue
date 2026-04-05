<template>
  <div>
    <Header />
    <Hero />
    <About />
    <VissionMission />
    <CoreValues />
    <Service />
    <Training />
    <WhyUs />
    <Cta />
    <Product />
    <Testimoni />
    <Contact />
    <Faq />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "DKN Digital - Dayaguna Kompetensi Nusantara",
  description:
    "Mitra pengembangan SDM profesional, unggul, dan berdaya saing. Solusi pelatihan dan pengembangan karir digital terpercaya.",
  ogTitle: "DKN Digital - Partner Pengembangan SDM Strategis",
  ogDescription:
    "Solusi pengembangan SDM profesional untuk menghadapi dinamika dunia kerja.",
  ogImage: "/favicon.ico",
  ogUrl: "https://dkn.digital",
  ogType: "website",
  ogSiteName: "DKN Digital",
  twitterCard: "summary_large_image",
  twitterTitle: "DKN Digital - Pengembangan SDM",
  twitterDescription:
    "Mitra pengembangan SDM profesional, unggul, dan berdaya saing.",
  twitterImage: "/favicon.ico",
  keywords:
    "pengembangan sdm, pelatihan kerja, digital marketing, training sdm, dkn digital, jakarta, depok",
  author: "DKN Digital",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#1F5E5A",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "canonical",
      href: "https://asihangger.com",
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      href: "https://asihangger.com/rss.xml",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DKN Digital",
        url: "https://dkn.digital",
        logo: "https://dkn.digital/logo/dkn-logo.jpeg",
        description:
          "Mitra pengembangan SDM profesional, unggul, dan berdaya saing.",
        sameAs: ["https://www.instagram.com/dkndigital/"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+6287831377755",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["id", "en"],
        },
      }),
    },
  ],
});
</script>
