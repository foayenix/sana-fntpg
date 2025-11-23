'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-[#2C3333]">SANA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/practitioner" className="text-[#5F6368] hover:text-[#2C3333] text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90A4] focus:ring-offset-2 rounded-lg px-2 py-1">
              For Practitioners
            </Link>
            <Link href="/wellness" className="text-[#5F6368] hover:text-[#2C3333] text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90A4] focus:ring-offset-2 rounded-lg px-2 py-1">
              For Wellness Seekers
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 min-w-[44px] min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] focus:ring-offset-2 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
            <Link href="/practitioner" className="block text-gray-600 hover:text-gray-900 text-base font-medium py-3 min-h-[44px] flex items-center">For Practitioners</Link>
            <Link href="/wellness" className="block text-gray-600 hover:text-gray-900 text-base font-medium py-3 min-h-[44px] flex items-center">For Wellness Seekers</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern wellness workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/95 via-[#FAF9F6]/90 to-[#FAF9F6]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3333] mb-4 sm:mb-6">
            About SANA Technologies
          </h1>
          <p className="text-lg sm:text-xl text-[#5F6368] mb-6 sm:mb-8">
            Building the operating system for natural healing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-16 sm:pb-24 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm sm:prose-lg">

          {/* Mission Section */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">Our Mission</h2>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative rounded-xl overflow-hidden h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80"
                    alt="Natural medicine and wellness"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
                    alt="Healthcare technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-[#5F6368] text-lg leading-relaxed mb-4">
                SANA Technologies is on a mission to make complementary and alternative medicine (CAM) evidence-based, trustworthy, and accessible to everyone. We believe natural healing has immense value, but the industry has long suffered from a lack of transparency, verification, and outcome tracking.
              </p>
              <p className="text-[#5F6368] text-lg leading-relaxed">
                We&apos;re changing that by building the infrastructure that connects wellness seekers with verified practitioners, tracks real treatment outcomes, and provides AI-powered tools that enhance—never replace—clinical expertise.
              </p>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">What We Do</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2C3333] mb-3">For Wellness Seekers</h3>
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

              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2C3333] mb-3">For Practitioners</h3>
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
          <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">Modalities We Support</h2>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] mb-4 sm:mb-6">
                SANA supports practitioners across the full spectrum of complementary and alternative medicine, including:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2 text-sm sm:text-base">Herbal & Plant Medicine</h4>
                  <ul className="text-[#5F6368] text-sm space-y-1">
                    <li>• Western Herbal Medicine</li>
                    <li>• Traditional Chinese Medicine</li>
                    <li>• Ayurveda</li>
                    <li>• Aromatherapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2 text-sm sm:text-base">Body-Based Therapies</h4>
                  <ul className="text-[#5F6368] text-sm space-y-1">
                    <li>• Acupuncture</li>
                    <li>• Osteopathy</li>
                    <li>• Chiropractic</li>
                    <li>• Massage Therapy</li>
                    <li>• Reflexology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3333] mb-2 text-sm sm:text-base">Holistic & Integrative</h4>
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
          <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">The SANA Index</h2>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#5F6368] mb-4 sm:mb-6 text-sm sm:text-base">
                The SANA Index is our proprietary credibility scoring system that brings transparency to complementary medicine. Unlike reviews that can be gamed, the SANA Index is calculated from verifiable data:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
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
          <section className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">Privacy & Security</h2>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#EAE7DC]">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3333] mb-4 sm:mb-6">Get in Touch</h2>
            <div className="bg-gradient-to-br from-[#6B9080] to-[#4A90A4] rounded-2xl p-5 sm:p-8 text-white">
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Whether you&apos;re a practitioner looking to join SANA, a wellness seeker with questions, or a potential partner, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/practitioner" className="bg-white text-[#2C3333] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all text-center min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4A90A4]">
                  Join as Practitioner
                </Link>
                <Link href="/wellness" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-center min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4A90A4]">
                  Get the App
                </Link>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© {new Date().getFullYear()} SANA Technologies Ltd. Building the infrastructure for natural healing.</p>
      </footer>
    </main>
  );
}
