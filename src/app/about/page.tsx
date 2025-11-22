import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About SANA Technologies - The Operating System for Natural Healing",
  description: "Learn about SANA Technologies, the health technology company building the infrastructure for evidence-based complementary and alternative medicine. Founded in the UK, SANA connects wellness seekers with verified CAM practitioners.",
  keywords: [
    "about SANA",
    "SANA Technologies",
    "natural healing platform",
    "CAM technology company",
    "complementary medicine",
    "evidence-based wellness",
    "UK health tech startup",
    "wellness platform",
    "practitioner verification"
  ],
  openGraph: {
    title: "About SANA Technologies",
    description: "Building the operating system for natural healing. Learn about our mission to make complementary medicine evidence-based and trustworthy.",
    url: "https://sana.health/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

// AboutPage Schema
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "SANA Technologies",
    "description": "SANA Technologies is a UK-based health technology company building the operating system for natural healing. We connect wellness seekers with verified complementary and alternative medicine practitioners through evidence-based tools and transparent outcome tracking.",
    "foundingDate": "2024",
    "foundingLocation": "United Kingdom",
    "knowsAbout": [
      "Complementary and Alternative Medicine",
      "Evidence-Based Healthcare",
      "AI in Healthcare",
      "Practitioner Verification",
      "Health Technology"
    ]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#EAE7DC]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl text-[#2C3333]">SANA</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/practitioner" className="text-[#5F6368] hover:text-[#2C3333]">
              For Practitioners
            </Link>
            <Link href="/wellness" className="text-[#5F6368] hover:text-[#2C3333]">
              For Wellness Seekers
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2C3333] mb-6">
            About SANA Technologies
          </h1>
          <p className="text-xl text-[#5F6368] mb-8">
            Building the operating system for natural healing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-24 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">Our Mission</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] text-lg leading-relaxed mb-4">
                SANA Technologies is on a mission to make complementary and alternative medicine (CAM) evidence-based, trustworthy, and accessible to everyone. We believe natural healing has immense value, but the industry has long suffered from a lack of transparency, verification, and outcome tracking.
              </p>
              <p className="text-[#5F6368] text-lg leading-relaxed">
                We&apos;re changing that by building the infrastructure that connects wellness seekers with verified practitioners, tracks real treatment outcomes, and provides AI-powered tools that enhance—never replace—clinical expertise.
              </p>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">What We Do</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
                <h3 className="text-xl font-semibold text-[#2C3333] mb-3">For Wellness Seekers</h3>
                <p className="text-[#5F6368] mb-4">
                  SANA helps people find verified complementary medicine practitioners they can trust. Our platform includes:
                </p>
                <ul className="text-[#5F6368] space-y-2">
                  <li>• <strong>Verified Practitioner Directory</strong> - All practitioners undergo credential verification, professional body checks, and insurance validation</li>
                  <li>• <strong>SANA Index Scores</strong> - Transparent credibility ratings based on real outcomes, not marketing claims</li>
                  <li>• <strong>Product Scanner</strong> - Scan any supplement to check safety, quality, and potential herb-drug interactions</li>
                  <li>• <strong>Wellness Tracking</strong> - Monitor your health journey and share progress with practitioners</li>
                  <li>• <strong>Online Booking</strong> - Book video, phone, or in-person consultations directly through the app</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
                <h3 className="text-xl font-semibold text-[#2C3333] mb-3">For Practitioners</h3>
                <p className="text-[#5F6368] mb-4">
                  SANA provides evidence-based practice management tools that help CAM practitioners build credibility and grow their practice:
                </p>
                <ul className="text-[#5F6368] space-y-2">
                  <li>• <strong>AI Clinical Assistant</strong> - Generate professional SOAP notes in seconds, get protocol suggestions, and identify herb-drug interactions</li>
                  <li>• <strong>Outcome Tracking</strong> - Track treatment effectiveness with standardized measures that build your evidence base</li>
                  <li>• <strong>SANA Index</strong> - Build your credibility score based on verified credentials, outcomes, and client satisfaction</li>
                  <li>• <strong>Client Management</strong> - Streamlined booking, secure messaging, and intake forms</li>
                  <li>• <strong>Marketplace Visibility</strong> - Get discovered by wellness seekers looking for your expertise</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Modalities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">Modalities We Support</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] mb-6">
                SANA supports practitioners across the full spectrum of complementary and alternative medicine, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2">Herbal & Plant Medicine</h4>
                  <ul className="text-[#5F6368] text-sm space-y-1">
                    <li>• Western Herbal Medicine</li>
                    <li>• Traditional Chinese Medicine</li>
                    <li>• Ayurveda</li>
                    <li>• Aromatherapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2">Body-Based Therapies</h4>
                  <ul className="text-[#5F6368] text-sm space-y-1">
                    <li>• Acupuncture</li>
                    <li>• Osteopathy</li>
                    <li>• Chiropractic</li>
                    <li>• Massage Therapy</li>
                    <li>• Reflexology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2">Holistic & Integrative</h4>
                  <ul className="text-[#5F6368] text-sm space-y-1">
                    <li>• Naturopathy</li>
                    <li>• Homeopathy</li>
                    <li>• Nutritional Therapy</li>
                    <li>• Energy Healing</li>
                    <li>• Functional Medicine</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* The SANA Index Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">The SANA Index</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] mb-6">
                The SANA Index is our proprietary credibility scoring system that brings transparency to complementary medicine. Unlike reviews that can be gamed, the SANA Index is calculated from verifiable data:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF9F6] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#6B9080] mb-1">40%</div>
                  <div className="font-semibold text-[#2C3333]">Client Outcomes</div>
                  <div className="text-sm text-[#5F6368]">Anonymised treatment effectiveness data</div>
                </div>
                <div className="bg-[#FAF9F6] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#6B9080] mb-1">20%</div>
                  <div className="font-semibold text-[#2C3333]">Verified Credentials</div>
                  <div className="text-sm text-[#5F6368]">Qualifications, certifications, professional body membership</div>
                </div>
                <div className="bg-[#FAF9F6] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#6B9080] mb-1">20%</div>
                  <div className="font-semibold text-[#2C3333]">Treatment Volume</div>
                  <div className="text-sm text-[#5F6368]">Experience demonstrated through tracked consultations</div>
                </div>
                <div className="bg-[#FAF9F6] rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#6B9080] mb-1">20%</div>
                  <div className="font-semibold text-[#2C3333]">Profile & Satisfaction</div>
                  <div className="text-sm text-[#5F6368]">Completeness and verified client ratings</div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">Privacy & Security</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] mb-4">
                SANA is built with privacy at its core. We understand that health data is sensitive and treat it with the highest standards:
              </p>
              <ul className="text-[#5F6368] space-y-2">
                <li>• <strong>UK-based servers</strong> compliant with GDPR and healthcare data regulations</li>
                <li>• <strong>Bank-level encryption</strong> for all data at rest and in transit</li>
                <li>• <strong>User-controlled access</strong> - clients decide who can see their health information</li>
                <li>• <strong>No data selling</strong> - we never sell personal information to third parties</li>
                <li>• <strong>Anonymised research</strong> - outcome data is anonymised before any aggregation</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl font-bold text-[#2C3333] mb-6">Get in Touch</h2>
            <div className="bg-gradient-to-br from-[#6B9080] to-[#4A90A4] rounded-2xl p-8 text-white">
              <p className="text-white/90 mb-6">
                Whether you&apos;re a practitioner looking to join SANA, a wellness seeker with questions, or a potential partner, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/practitioner" className="bg-white text-[#2C3333] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all">
                  Join as Practitioner
                </Link>
                <Link href="/wellness" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Get the App
                </Link>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© 2024 SANA Technologies Ltd. Building the infrastructure for natural healing.</p>
      </footer>
    </main>
  );
}
