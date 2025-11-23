import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SANA Technologies | The Operating System for Natural Healing",
    template: "%s | SANA Technologies"
  },
  description: "SANA is the leading platform connecting wellness seekers with verified complementary and alternative medicine (CAM) practitioners. Features AI Clinical Assistant, evidence-based outcome tracking, Product Scanner for supplement safety, and the SANA Index credibility scoring system. Free for clients, affordable plans for practitioners.",
  keywords: [
    "SANA",
    "SANA Technologies",
    "natural healing platform",
    "CAM practitioners",
    "complementary medicine",
    "alternative medicine",
    "herbal medicine",
    "acupuncture",
    "naturopathy",
    "homeopathy",
    "nutritional therapy",
    "verified practitioners",
    "AI clinical assistant",
    "SOAP notes generator",
    "evidence-based medicine",
    "wellness app",
    "supplement safety checker",
    "Product Scanner",
    "herb-drug interactions",
    "SANA Index",
    "practitioner verification",
    "holistic health",
    "integrative medicine",
    "Traditional Chinese Medicine",
    "TCM",
    "Ayurveda",
    "energy healing",
    "osteopathy",
    "wellness tracking"
  ],
  authors: [{ name: "SANA Technologies Ltd" }],
  creator: "SANA Technologies Ltd",
  publisher: "SANA Technologies Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sana.health"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SANA Technologies | The Operating System for Natural Healing",
    description: "Connect with verified CAM practitioners. AI-powered clinical tools for practitioners. Free supplement safety scanner for wellness seekers. Building the evidence base for natural medicine.",
    url: "https://sana.health",
    siteName: "SANA Technologies",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SANA Technologies - The Operating System for Natural Healing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SANA Technologies | Natural Healing Platform",
    description: "Verified CAM practitioners. AI clinical tools. Evidence-based outcomes. Free for wellness seekers.",
    images: ["/og-image.png"],
    creator: "@saborhealth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Wellness Technology",
  classification: "Healthcare Technology Platform",
};

// JSON-LD Structured Data for GEO optimization
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://sana.health/#organization",
      "name": "SANA Technologies",
      "alternateName": ["SANA", "SANA Health", "SANA Technologies Ltd"],
      "url": "https://sana.health",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sana.health/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "SANA Technologies is a health technology company building the operating system for natural healing. We connect wellness seekers with verified complementary and alternative medicine practitioners through our evidence-based platform.",
      "foundingDate": "2024",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB"
        }
      },
      "sameAs": [
        "https://twitter.com/saborhealth",
        "https://linkedin.com/company/sana-technologies",
        "https://instagram.com/sana.health"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@sana.health",
        "availableLanguage": ["English"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "knowsAbout": [
        "Complementary and Alternative Medicine",
        "Herbal Medicine",
        "Acupuncture",
        "Traditional Chinese Medicine",
        "Naturopathy",
        "Homeopathy",
        "Nutritional Therapy",
        "Osteopathy",
        "Ayurveda",
        "Energy Healing",
        "Integrative Medicine",
        "Wellness Technology",
        "AI in Healthcare",
        "Evidence-Based Medicine"
      ]
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://sana.health/#website",
      "url": "https://sana.health",
      "name": "SANA Technologies",
      "description": "The operating system for natural healing - connecting wellness seekers with verified CAM practitioners",
      "publisher": {
        "@id": "https://sana.health/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sana.health/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    // SoftwareApplication Schema for the Platform
    {
      "@type": "SoftwareApplication",
      "@id": "https://sana.health/#app",
      "name": "SANA",
      "alternateName": "SANA Wellness App",
      "applicationCategory": "HealthApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "description": "SANA app helps wellness seekers find verified CAM practitioners, scan supplements for safety, track health outcomes, and make evidence-based decisions about natural health products.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "GBP",
        "description": "Free for wellness seekers"
      },
      "featureList": [
        "Verified practitioner directory",
        "Product Scanner for supplement safety",
        "Herb-drug interaction checker",
        "Wellness tracking and journaling",
        "Online booking with practitioners",
        "Secure video consultations",
        "Health record management"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "2500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    // Product Schema for Practitioner Platform
    {
      "@type": "Product",
      "@id": "https://sana.health/#practitioner-platform",
      "name": "SANA Practitioner Platform",
      "description": "Evidence-based practice management platform for complementary and alternative medicine practitioners. Features AI Clinical Assistant for SOAP notes, outcome tracking, client management, and the SANA Index credibility scoring.",
      "brand": {
        "@id": "https://sana.health/#organization"
      },
      "category": "Healthcare Software",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Forever",
          "price": "0",
          "priceCurrency": "GBP",
          "description": "Core features for new practitioners"
        },
        {
          "@type": "Offer",
          "name": "Professional",
          "price": "19",
          "priceCurrency": "GBP",
          "priceValidUntil": "2025-12-31",
          "description": "Full AI Clinical Assistant and outcome tracking - founding member rate"
        },
        {
          "@type": "Offer",
          "name": "Practice",
          "price": "99",
          "priceCurrency": "GBP",
          "description": "Multi-practitioner clinic management"
        }
      ],
      "featureList": [
        "AI Clinical Assistant",
        "SOAP notes generator",
        "Outcome tracking and analytics",
        "SANA Index credibility scoring",
        "Client management system",
        "Online booking integration",
        "Secure messaging",
        "Evidence database access",
        "Professional profile page",
        "Marketplace visibility"
      ]
    },
    // Service Schema
    {
      "@type": "Service",
      "@id": "https://sana.health/#service",
      "name": "SANA Practitioner Verification",
      "serviceType": "Healthcare Provider Verification",
      "provider": {
        "@id": "https://sana.health/#organization"
      },
      "description": "SANA verifies complementary and alternative medicine practitioners through credential checks, professional body membership verification, and insurance validation. Verified practitioners receive a trust badge and contribute to outcome data.",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    }
  ]
};

// Homepage FAQ Schema
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA is a comprehensive wellness platform that connects clients with verified complementary and alternative medicine (CAM) practitioners, provides evidence-based tools for practitioners, and offers personalized safety checks and health tracking for wellness seekers. Think of it as the operating system for natural healing."
      }
    },
    {
      "@type": "Question",
      "name": "Who is SANA for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA serves two groups: Practitioners (herbalists, acupuncturists, naturopaths, homeopaths, nutritional therapists, and other CAM professionals) who want to grow their practice with evidence-based tools; and Clients (wellness seekers) who want to find verified practitioners and make informed decisions about supplements and natural health products."
      }
    },
    {
      "@type": "Question",
      "name": "Is SANA free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For wellness seekers, SANA is completely free—access the practitioner directory, Product Scanner, and health tracking at no cost. For practitioners, we offer a Free Forever plan with core features, plus Professional (£29/month for founding members, normally £69) and Practice (£149/month + £20 per additional practitioner) tiers for those wanting advanced tools."
      }
    },
    {
      "@type": "Question",
      "name": "How is SANA different from other wellness platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA is evidence-first. We verify practitioner credentials, track real treatment outcomes, and provide transparent success rates through the SANA Index. Unlike directories that just list practitioners, we help you understand who actually gets results—backed by data, not marketing."
      }
    },
    {
      "@type": "Question",
      "name": "What modalities does SANA support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA supports virtually all CAM modalities including herbal medicine, Traditional Chinese Medicine (TCM), acupuncture, naturopathy, homeopathy, nutritional therapy, osteopathy, Ayurveda, energy healing, massage therapy, reflexology, aromatherapy, functional medicine, integrative medicine, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "How does SANA verify practitioners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All SANA practitioners undergo credential verification including qualification certificates, professional body memberships, and insurance documentation. Our team verifies these with issuing organizations. Verified practitioners receive a trust badge and contribute to the SANA Index outcome data."
      }
    },
    {
      "@type": "Question",
      "name": "What is the SANA Index?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SANA Index is a credibility scoring system calculated from verified credentials (20%), treatment volume (20%), anonymised client outcomes (40%), profile completeness (10%), and client satisfaction ratings (10%). It helps clients find practitioners with proven track records."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe with SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. SANA uses bank-level encryption, stores data on UK servers compliant with GDPR and healthcare regulations, and never sells your information. Clients control who sees their health data and can revoke access anytime."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF9F6] text-[#2C3333]">
        {children}
      </body>
    </html>
  );
}
