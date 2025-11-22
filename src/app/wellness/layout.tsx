import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Wellness Seekers - Find Verified Natural Health Practitioners",
  description: "Find verified complementary medicine practitioners on SANA. Use the free Product Scanner to check supplement safety and herb-drug interactions. Book consultations with herbalists, acupuncturists, naturopaths, and more. Track your wellness journey with evidence-based tools.",
  keywords: [
    "find natural health practitioner",
    "verified CAM practitioners",
    "complementary medicine near me",
    "herbal medicine practitioner",
    "acupuncturist near me",
    "naturopath finder",
    "supplement safety checker",
    "herb-drug interaction checker",
    "Product Scanner",
    "wellness app",
    "alternative medicine directory",
    "holistic health practitioners",
    "book natural health consultation",
    "wellness tracking app"
  ],
  openGraph: {
    title: "SANA for Wellness Seekers | Find Verified Practitioners",
    description: "Free app to find verified CAM practitioners, check supplement safety, and track your wellness. Scan products for herb-drug interactions. Book consultations easily.",
    url: "https://sana.health/wellness",
    type: "website",
  },
  alternates: {
    canonical: "/wellness",
  },
};

// FAQPage Schema for Client FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SANA and how does it work for wellness seekers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA is a wellness platform that connects you with verified complementary and alternative medicine practitioners, provides personalized safety checks for supplements and herbs, and helps you track your wellness journey. Download the app, create your profile, and get personalized recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Is SANA free for clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—SANA is completely free for wellness seekers. You can access the practitioner directory, Product Scanner, health tracking, and educational content at no cost. You only pay when you book consultations with practitioners."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find the right practitioner for my needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA's smart matching considers your health concerns, location, budget, preferred consultation type (in-person/online), and modality preferences. You can also browse verified practitioners, view their success rates, read reviews, and compare specializations."
      }
    },
    {
      "@type": "Question",
      "name": "What makes SANA practitioners different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All SANA practitioners are verified with credential checks, professional body memberships, and insurance verification. They also have transparent success rates through the SANA Index, so you can see actual outcomes—not just marketing claims."
      }
    },
    {
      "@type": "Question",
      "name": "How does the SANA Product Scanner work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply scan a supplement or herbal product barcode using the SANA app. You'll instantly see ingredient analysis, quality ratings, potential interactions with your medications or conditions, evidence ratings, and personalized safety alerts."
      }
    },
    {
      "@type": "Question",
      "name": "Can the Product Scanner check for herb-drug interactions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—the Product Scanner is especially useful if you take medications, as it flags potential herb-drug interactions. It draws from peer-reviewed research, traditional medicine databases, and clinical evidence. Always inform both your GP and complementary practitioner about all treatments you're using."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a consultation with a practitioner on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Find a practitioner you like, view their availability, choose your consultation type (video, phone, in-person, or messaging), and book directly through the app. You'll receive confirmation and reminders automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Is my health data private and secure on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. SANA uses bank-level encryption, stores data on UK servers compliant with GDPR and healthcare regulations, and never sells your information. You control who sees your health data and can revoke access anytime."
      }
    },
    {
      "@type": "Question",
      "name": "What modalities/therapies can I find on SANA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA includes practitioners from herbal medicine, acupuncture & TCM, naturopathy, homeopathy, nutritional therapy, osteopathy, chiropractic, Ayurveda, energy healing, massage therapy, reflexology, aromatherapy, functional medicine, integrative medicine, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "Does SANA replace medical care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No—SANA complements conventional medicine, it doesn't replace it. Always consult your GP for medical conditions. SANA helps you safely explore complementary approaches and find qualified practitioners for integrative wellness."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get the SANA app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SANA will be available on both iOS (App Store) and Android (Google Play). Join our early access list to be notified the moment we launch and get priority access to new features."
      }
    }
  ]
};

// SoftwareApplication Schema for the App
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SANA Wellness App",
  "applicationCategory": "HealthApplication",
  "operatingSystem": ["iOS", "Android"],
  "description": "SANA helps wellness seekers find verified complementary medicine practitioners, scan supplements for safety and interactions, track wellness progress, and book consultations.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP",
    "description": "Free for wellness seekers"
  },
  "featureList": [
    "Verified practitioner directory with SANA Index scores",
    "Product Scanner for supplement safety checks",
    "Herb-drug interaction warnings",
    "Personalized health safety alerts",
    "Online booking with video consultations",
    "Wellness tracking and journaling",
    "Evidence-based modality information"
  ],
  "screenshot": [
    {
      "@type": "ImageObject",
      "url": "https://sana.health/screenshots/product-scanner.png",
      "caption": "SANA Product Scanner checking supplement safety"
    },
    {
      "@type": "ImageObject",
      "url": "https://sana.health/screenshots/practitioner-search.png",
      "caption": "Find verified CAM practitioners near you"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500",
    "bestRating": "5"
  }
};

export default function WellnessLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {children}
    </>
  );
}
