'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Stethoscope,
  Shield,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  BadgeCheck,
  Users,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4A90A4] to-[#6B9080] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SANA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/wellness" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              For Clients
            </Link>
            <Link href="/practitioner" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              For Practitioners
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">About</Link>
            <Link href="/wellness" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">For Clients</Link>
            <Link href="/practitioner" className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-2">For Practitioners</Link>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-28 sm:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80"
            alt="Wellness consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A90A4]/90 via-[#5BA3B5]/85 to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">The future of natural health</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Natural health,<br />finally navigable.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-md">
            SANA connects wellness seekers with verified practitioners, powered by evidence and AI. Choose your path below.
          </p>

          {/* Path Selector Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12">
            {/* Client Path */}
            <Link href="/wellness" className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">I&apos;m seeking wellness</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Find verified practitioners, scan supplements, track your health journey.</p>
                <div className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Get started free</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Practitioner Path */}
            <Link href="/practitioner" className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">I&apos;m a practitioner</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">AI clinical tools, verified credentials, grow your practice with evidence.</p>
                <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Start free trial</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>500+ verified practitioners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>50,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>4.8★ app rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is SANA - With Human Imagery */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Built for practitioners, by practitioners
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              SANA brings verification, evidence, and trust to complementary medicine—for the first time ever.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
            {/* Verification */}
            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
                  alt="Verified practitioner with credentials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent" />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification</h3>
              <p className="text-gray-600">Every practitioner credential-checked against 40+ official UK registries. No charlatans.</p>
            </div>

            {/* Evidence */}
            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
                  alt="Practitioner reviewing patient data"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent" />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence</h3>
              <p className="text-gray-600">Outcomes-based rankings. See what actually works, backed by real client data.</p>
            </div>

            {/* AI-Powered */}
            <div className="text-center group">
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80"
                  alt="Practitioner using technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">Clinical tools, supplement safety checks, and personalized wellness insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Testimonials with Photos */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#FAF9F6] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Hear from practitioners like you
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real practitioners sharing how SANA transformed their practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 - Herbalist */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-teal-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;SANA helps me show my patients the evidence behind natural medicine. The AI notes save me hours every week.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80"
                    alt="Dr. Sarah Mitchell"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-gray-500">Medical Herbalist, London</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Acupuncturist */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-teal-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Finally, practice management built for acupuncturists, not just GPs. My clients love seeing their progress tracked.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80"
                    alt="James Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James Chen</div>
                  <div className="text-sm text-gray-500">Acupuncturist, Manchester</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Naturopath */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-teal-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;The verification badge gives my clients instant confidence. I&apos;ve grown my practice 40% since joining SANA.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                    alt="Dr. Emma Roberts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Emma Roberts</div>
                  <div className="text-sm text-gray-500">Naturopath, Bristol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section - Replacing investor stats */}
      <section className="py-12 md:py-16 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Trusted by Practitioners Across the UK
            </h3>
            <p className="text-gray-600">
              Join the waitlist — 500+ practitioners already signed up
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
              <BadgeCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">CPP Registered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
              <BadgeCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">RCHM Approved</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
              <BadgeCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">CNHC Verified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Professional Indemnity Ready</span>
            </div>
          </div>

          {/* Registry Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            <div className="text-xl font-bold text-gray-400">CNHC</div>
            <div className="text-xl font-bold text-gray-400">NIMH</div>
            <div className="text-xl font-bold text-gray-400">UKCP</div>
            <div className="text-xl font-bold text-gray-400">CPP</div>
            <div className="text-xl font-bold text-gray-400">BACP</div>
            <div className="text-xl font-bold text-gray-400">RCHM</div>
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-16 md:py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Wellness seekers love SANA too
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real stories from real people finding their path to healing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Client Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Finally found a herbalist who actually helped my chronic fatigue. The verification gave me confidence I wasn&apos;t wasting money.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                    alt="Sarah E."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah E.</div>
                  <div className="text-sm text-gray-500">Wellness Seeker, London</div>
                </div>
              </div>
            </div>

            {/* Client Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;The supplement scanner flagged an interaction my GP missed. This app genuinely cares about safety.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                    alt="Michael R."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael R.</div>
                  <div className="text-sm text-gray-500">App User, Bristol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#4A90A4] to-[#6B9080] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to start your journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands already using SANA to navigate natural health with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wellness" className="inline-flex items-center justify-center gap-2 bg-white text-[#4A90A4] px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              <Heart className="w-5 h-5" />
              Find Wellness
            </Link>
            <Link href="/practitioner" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all">
              <Stethoscope className="w-5 h-5" />
              I&apos;m a Practitioner
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A90A4] to-[#6B9080] flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="font-bold text-lg">SANA</span>
              </div>
              <p className="text-slate-400 text-sm">
                Building the infrastructure for evidence-based natural health.
              </p>
            </div>

            {/* For Clients */}
            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/wellness" className="hover:text-white transition-colors">Find Practitioners</Link></li>
                <li><Link href="/wellness#features" className="hover:text-white transition-colors">Product Scanner</Link></li>
                <li><Link href="/wellness#value" className="hover:text-white transition-colors">Health Tracking</Link></li>
              </ul>
            </div>

            {/* For Practitioners */}
            <div>
              <h4 className="font-semibold mb-4">For Practitioners</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/practitioner" className="hover:text-white transition-colors">AI Clinical Tools</Link></li>
                <li><Link href="/practitioner#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/practitioner" className="hover:text-white transition-colors">Get Verified</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © 2024 SANA Technologies Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
