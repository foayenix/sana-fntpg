import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Practitioners - Build Your Evidence-Based Practice",
  description: "Join SANA as a CAM practitioner. Access AI Clinical Assistant for SOAP notes, outcome tracking, SANA Index credibility scoring, and connect with wellness seekers. Free Forever plan available. Professional tier £19/month for founding members.",
  keywords: [
    "CAM practitioner platform",
    "complementary medicine software",
    "herbal medicine practice management",
    "acupuncture business software",
    "naturopath tools",
    "AI clinical assistant",
    "SOAP notes generator",
    "practitioner outcome tracking",
    "SANA Index",
    "CAM practitioner verification",
    "alternative medicine practice",
    "evidence-based CAM",
    "client management for practitioners",
    "online booking for practitioners"
  ],
  openGraph: {
    title: "SANA for Practitioners | Build Your Evidence-Based Practice",
    description: "AI Clinical Assistant, outcome tracking, and the SANA Index. Join 1,000+ verified CAM practitioners. Free Forever plan or £19/month Professional tier.",
    url: "https://sana.health/practitioner",
    type: "website",
  },
  alternates: {
    canonical: "/practitioner",
  },
};

// FAQPage Schema for Practitioner FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What qualifications do I need to join SANA as a practitioner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA welcomes all qualified complementary and alternative medicine practitioners. You'll need recognized professional qualifications in your modality (e.g., diploma, degree, or certification), current membership with a relevant professional body, and valid professional indemnity insurance. We verify credentials to maintain marketplace quality and client trust."
      }
    },
    {
      "@type": "Question",
      "name": "How are my credentials verified on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During onboarding, you'll upload qualification certificates, professional body membership details, and insurance documents. Our team verifies these with issuing organizations. Verified practitioners receive a trust badge on their profile, and verification typically takes 2-5 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the SANA Index and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SANA Index is our proprietary credibility scoring system that helps clients find the most suitable practitioners. It's calculated from verified credentials (20%), treatment volume (20%), anonymised client outcomes (40%), profile completeness (10%), and client satisfaction ratings (10%). Higher scores improve your marketplace visibility and build client confidence."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI Clinical Assistant work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI Clinical Assistant is trained on extensive CAM literature, traditional medicine texts, and clinical evidence. It provides protocol suggestions, identifies herb-drug interactions, recommends evidence-based approaches, and helps with treatment planning—all while respecting your clinical autonomy. It's a decision-support tool that enhances, never replaces, your expertise."
      }
    },
    {
      "@type": "Question",
      "name": "Which modalities does SANA support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA supports virtually all CAM modalities including herbal medicine, Traditional Chinese Medicine (acupuncture, herbs, cupping), naturopathy, homeopathy, nutritional therapy, osteopathy, chiropractic, Ayurveda, energy healing (Reiki, healing touch), massage therapy, reflexology, aromatherapy, functional medicine, integrative medicine, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "Does the AI replace my clinical judgement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. SANA's AI Clinical Assistant is a decision-support tool designed to enhance your practice, not direct it. All clinical decisions remain entirely yours. The AI provides suggestions, flags potential interactions, and offers evidence summaries—you decide what's appropriate for each client."
      }
    },
    {
      "@type": "Question",
      "name": "How do online bookings work on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients can book directly through your SANA profile or the marketplace. You set your availability, consultation types, and prices. The system handles scheduling, reminders, payments, and cancellations. You can also share your booking link on your website and social media."
      }
    },
    {
      "@type": "Question",
      "name": "How is client health data handled on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA is built with privacy-first architecture. All health data is encrypted at rest and in transit, stored on UK-based servers compliant with GDPR and healthcare data regulations. Clients control their data and can grant or revoke access to practitioners. We never sell data or use it for advertising."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SANA cost for practitioners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA offers three tiers: Free Forever (£0) with core features, Professional (£19/month for founding members, normally £49) with full AI Clinical Assistant and outcome tracking, and Practice (£99/month) for multi-practitioner clinics with team management and white-label options."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try SANA before committing to paid plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—our Free Forever plan lets you experience SANA with no time limit. When you're ready for more features, you can upgrade to Professional or Practice tier. We also offer demos for practitioners who want a guided tour before signing up."
      }
    }
  ]
};

// Product Schema for Practitioner Platform
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SANA Practitioner Platform",
  "description": "Evidence-based practice management platform for CAM practitioners with AI Clinical Assistant, SANA Index credibility scoring, outcome tracking, and client management.",
  "brand": {
    "@type": "Organization",
    "name": "SANA Technologies"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Forever",
      "price": "0",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    {
      "@type": "Offer",
      "name": "Professional - Founding Member",
      "price": "19",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/LimitedAvailability",
      "priceValidUntil": "2025-12-31",
      "description": "Limited to first 1,000 practitioners"
    },
    {
      "@type": "Offer",
      "name": "Practice",
      "price": "99",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    }
  ],
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Dr. Sarah Mitchell"
    },
    "reviewBody": "SANA changed everything. I went from scattered notes to professional SOAP documentation in minutes. My clients trust me more because I can show them real outcome data."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

export default function PractitionerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
