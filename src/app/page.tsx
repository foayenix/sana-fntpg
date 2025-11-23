'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Stethoscope,
  Shield,
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
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

      {/* Hero Section with Path Selector */}
      <section className="pt-28 sm:pt-32 pb-16 md:pb-24 px-4" style={{ background: 'linear-gradient(180deg, #4A90A4 0%, #5BA3B5 40%, #FAF9F6 100%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">The future of natural health</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Natural health,<br />finally navigable.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
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
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white/90" />
              <span>500+ verified practitioners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white/90" />
              <span>50,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white/90" />
              <span>4.8★ app rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is SANA - Brief */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              The infrastructure natural health deserves
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              SANA brings verification, evidence, and trust to complementary medicine—for the first time ever.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {/* Verification */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification</h3>
              <p className="text-gray-600">Every practitioner credential-checked against 40+ official UK registries. No charlatans.</p>
            </div>

            {/* Evidence */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence</h3>
              <p className="text-gray-600">Outcomes-based rankings. See what actually works, backed by real client data.</p>
            </div>

            {/* AI-Powered */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-5 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">Clinical tools, supplement safety checks, and personalized wellness insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">£8.7B</div>
              <div className="text-slate-400 text-sm sm:text-base">UK CAM market</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">0%</div>
              <div className="text-slate-400 text-sm sm:text-base">Current oversight</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">87%</div>
              <div className="text-slate-400 text-sm sm:text-base">Interactions avoided</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">73%</div>
              <div className="text-slate-400 text-sm sm:text-base">Avg. success rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Human Photos */}
      <section className="py-16 md:py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Trusted by thousands
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real stories from real people finding their path to wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 - Client */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-gray-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Finally found a herbalist who actually helped my chronic fatigue. The verification gave me confidence I wasn&apos;t wasting money on another charlatan.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {/* Placeholder avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                  SE
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah E.</div>
                  <div className="text-sm text-gray-500">Wellness Seeker, London</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Practitioner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-gray-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;The AI clinical assistant saves me 2 hours daily on notes. My clients love the outcome tracking—it shows them CAM actually works.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-semibold text-lg">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. James C.</div>
                  <div className="text-sm text-gray-500">Acupuncturist, Manchester</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Client */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <Quote className="w-8 h-8 text-gray-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;The supplement scanner probably saved my life—flagged an interaction with my blood pressure meds that my GP missed.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
                  MR
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

      {/* Featured In / Trust Logos */}
      <section className="py-12 md:py-16 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm font-medium mb-8">TRUSTED BY PRACTITIONERS FROM</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder logos - these would be real logos */}
            <div className="text-2xl font-bold text-gray-400">CNHC</div>
            <div className="text-2xl font-bold text-gray-400">NIMH</div>
            <div className="text-2xl font-bold text-gray-400">UKCP</div>
            <div className="text-2xl font-bold text-gray-400">CPP</div>
            <div className="text-2xl font-bold text-gray-400">BACP</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#4A90A4] to-[#6B9080]">
        <div className="max-w-4xl mx-auto text-center">
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
