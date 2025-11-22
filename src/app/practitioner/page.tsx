'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BadgeCheck,
  BarChart3,
  ShoppingCart,
  Smartphone,
  Rocket,
  Bot,
  Pill,
  Calendar,
  ClipboardList,
  Shield,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function PractitionerPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In production, this would submit to your backend
    }
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail) {
      setCtaSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] pb-20 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#EAE7DC]">
        <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#5F6368] hover:text-[#2C3333] transition-colors min-h-[44px]">
            <ArrowLeftIcon />
            <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#6B9080] flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#2C3333]">SANA</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4" style={{ background: 'linear-gradient(180deg, #6B9080 0%, #8FB3A3 50%, #FAF9F6 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
            <span className="text-white text-sm font-medium">For CAM Practitioners</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            You&apos;re not &ldquo;alternative&rdquo;.<br />You&apos;re essential.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            After years of training, you deserve infrastructure that proves your work, grows your practice, and positions CAM as the evidence-based medicine it truly is.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-8">
            <button className="bg-white text-[#6B9080] px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105 min-h-[52px]">
              Start Your Free Practice
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-all min-h-[52px]">
              Book a Demo
            </button>
          </div>

          <p className="text-white/70 text-sm">
            Free forever plan • No credit card required
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              We understand your frustrations
            </h2>
            <p className="text-lg text-[#5F6368] max-w-2xl mx-auto">
              80,000+ UK CAM practitioners face these challenges daily. You&apos;re not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '💸',
                title: 'Dismissed as "alternative"',
                description: 'Despite years of rigorous training, you\'re still seen as lesser than conventional medicine. Your expertise deserves recognition.'
              },
              {
                emoji: '📝',
                title: 'Drowning in admin',
                description: 'Paper records, manual booking, handwritten notes. You spend 15+ hours a week on admin instead of healing patients.'
              },
              {
                emoji: '🔬',
                title: 'Can\'t prove it works',
                description: 'Zero infrastructure to capture outcomes. You know your treatments work, but you have no data to prove it at scale.'
              },
              {
                emoji: '💰',
                title: 'Revenue walking out the door',
                description: 'Clients buy products elsewhere after consultation. You do the work, Amazon gets the sale.'
              },
              {
                emoji: '⚠️',
                title: 'Unqualified competitors',
                description: 'No verification system means charlatans damage your credibility. Clients can\'t tell who\'s qualified.'
              },
              {
                emoji: '🏥',
                title: 'NHS can\'t integrate you',
                description: 'Social prescribing needs CAM infrastructure. Without it, the referral pathway doesn\'t exist.'
              }
            ].map((pain, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#EAE7DC]">
                <div className="text-4xl mb-4">{pain.emoji}</div>
                <h3 className="text-lg font-semibold text-[#2C3333] mb-2">{pain.title}</h3>
                <p className="text-[#5F6368] text-sm">{pain.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#6B9080]/10 to-[#4A90A4]/10 rounded-2xl p-8 text-center border border-[#6B9080]/20">
            <p className="text-2xl text-[#2C3333] font-medium mb-2">
              £8.7 billion spent on CAM annually
            </p>
            <p className="text-[#5F6368]">
              With ZERO data capture. No evidence infrastructure. No verification. No connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight Section */}
      <section className="py-12 md:py-20 px-4 bg-[#2C3333]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            CAM doesn&apos;t need fixing.<br />It needs infrastructure.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            The gap isn&apos;t medical—it&apos;s technological. Complementary medicine works. Millions use it. Billions are spent. But there&apos;s no connected system.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BadgeCheck className="w-8 h-8" />, label: 'Verification', desc: 'Who\'s qualified?', gradient: 'from-emerald-400 to-teal-500' },
              { icon: <BarChart3 className="w-8 h-8" />, label: 'Evidence', desc: 'What actually works?', gradient: 'from-purple-400 to-indigo-500' },
              { icon: <ShoppingCart className="w-8 h-8" />, label: 'Supply Chain', desc: 'Connected commerce', gradient: 'from-amber-400 to-orange-500' },
              { icon: <Smartphone className="w-8 h-8" />, label: 'Ecosystem', desc: 'All pieces linked', gradient: 'from-blue-400 to-cyan-500' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-white font-semibold">{item.label}</div>
                <div className="text-white/60 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-white/60 mt-8 text-lg">
            SANA is building the rails that natural healing runs on.
          </p>
        </div>
      </section>

      {/* Your Journey Section */}
      <section className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              Your journey with SANA
            </h2>
            <p className="text-lg text-[#5F6368]">
              From sign-up to thriving practice in five steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#6B9080] via-[#4A90A4] to-[#6B9080]"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: 'Sign Up Free',
                  description: 'Get instant access to your AI clinical assistant. No credit card needed.',
                  icon: <Rocket className="w-7 h-7" />,
                  gradient: 'from-violet-500 to-purple-600'
                },
                {
                  step: '2',
                  title: 'Get Verified',
                  description: 'Earn your SANA Verified badge. Stand out from unqualified competitors.',
                  icon: <BadgeCheck className="w-7 h-7" />,
                  gradient: 'from-emerald-500 to-teal-600'
                },
                {
                  step: '3',
                  title: 'See Clients',
                  description: 'AI writes your SOAP notes in 30 seconds. Focus on healing, not typing.',
                  icon: <Bot className="w-7 h-7" />,
                  gradient: 'from-blue-500 to-indigo-600'
                },
                {
                  step: '4',
                  title: 'Prescribe & Earn',
                  description: 'Recommend products through SANA. Clients buy, you earn commission.',
                  icon: <Pill className="w-7 h-7" />,
                  gradient: 'from-rose-500 to-pink-600'
                },
                {
                  step: '5',
                  title: 'Build Evidence',
                  description: 'Track outcomes automatically. Get featured in practitioner rankings.',
                  icon: <BarChart3 className="w-7 h-7" />,
                  gradient: 'from-amber-500 to-orange-600'
                }
              ].map((journey, i) => (
                <div key={i} className="relative text-center group">
                  <div className={`relative z-10 w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${journey.gradient} shadow-lg flex items-center justify-center text-white mb-4 border-4 border-white group-hover:scale-110 transition-transform`}>
                    {journey.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EAE7DC]">
                    <div className="text-xs font-bold text-[#6B9080] mb-2">STEP {journey.step}</div>
                    <h3 className="font-semibold text-[#2C3333] mb-2">{journey.title}</h3>
                    <p className="text-sm text-[#5F6368]">{journey.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#5F6368] mb-4">
              <span className="font-semibold text-[#6B9080]">The flywheel effect:</span> More practitioners → More data → Better AI → Higher success rates → More clients → More practitioners
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              One platform. Everything you need.
            </h2>
            <p className="text-lg text-[#5F6368]">
              Complete practice management built specifically for CAM practitioners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-7 h-7" />,
                title: 'AI Clinical Assistant',
                description: 'Generate professional SOAP notes in 30 seconds. Our AI learns your style, your terminology, your approach.',
                highlight: 'Save 15+ hours/week',
                color: '#6B9080',
                gradient: 'from-[#6B9080] to-[#4A90A4]'
              },
              {
                icon: <Calendar className="w-7 h-7" />,
                title: 'Smart Booking System',
                description: 'Online scheduling with automated reminders, intake forms, and telehealth built in.',
                highlight: 'Reduce no-shows 80%',
                color: '#4A90A4',
                gradient: 'from-[#4A90A4] to-blue-600'
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: 'Evidence Engine',
                description: 'Automatically capture every treatment and outcome. Build your personal evidence database.',
                highlight: 'First in CAM',
                color: '#6B9080',
                gradient: 'from-purple-500 to-indigo-600'
              },
              {
                icon: <Pill className="w-7 h-7" />,
                title: 'Integrated Dispensary',
                description: 'Prescribe products through SANA. Clients purchase seamlessly. You earn commission on every sale.',
                highlight: 'New revenue stream',
                color: '#4A90A4',
                gradient: 'from-rose-500 to-pink-600'
              },
              {
                icon: <BadgeCheck className="w-7 h-7" />,
                title: 'SANA Verified Badge',
                description: 'Credential verification that clients trust. Stand out from unqualified competitors in your area.',
                highlight: 'Boost credibility',
                color: '#6B9080',
                gradient: 'from-emerald-500 to-teal-600'
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: 'Secure Records',
                description: 'GDPR-compliant, ISO 27001 certified client records. Access anywhere, encrypted everywhere.',
                highlight: 'Enterprise security',
                color: '#4A90A4',
                gradient: 'from-slate-600 to-slate-700'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#EAE7DC] hover:shadow-lg transition-all group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2C3333] mb-2">{feature.title}</h3>
                <p className="text-[#5F6368] mb-4">{feature.description}</p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#6B9080] to-[#4A7A6B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-white/80">
              Start free, upgrade when you&apos;re ready
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="inline-block bg-[#EAE7DC] px-3 py-1 rounded-full text-xs font-medium text-[#5F6368] mb-4">
                Free Forever
              </div>
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-[#2C3333]">£0</span>
                <span className="text-[#5F6368]">/month</span>
              </div>
              <p className="text-sm text-[#5F6368] mb-6">Perfect for getting started with AI-powered practice management</p>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🤖</span>
                    <span className="font-semibold text-[#2C3333] text-sm">AI Clinical Assistant (Unlimited)</span>
                  </div>
                  <p className="text-xs text-[#5F6368] ml-7">Voice-to-SOAP notes, treatment recommendations across 8+ traditions</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">✓</span>
                    <span className="font-semibold text-[#2C3333] text-sm">SANA Verified Badge</span>
                  </div>
                  <p className="text-xs text-[#5F6368] ml-7">Automated credential verification from 40+ UK institutions</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📱</span>
                    <span className="font-semibold text-[#2C3333] text-sm">Product Scanner (5/month)</span>
                  </div>
                  <p className="text-xs text-[#5F6368] ml-7">Herb-drug interaction checks, safety analysis</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">👥</span>
                    <span className="font-semibold text-[#2C3333] text-sm">Client Records (25 clients)</span>
                  </div>
                  <p className="text-xs text-[#5F6368] ml-7">GDPR-compliant storage, SOAP templates</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📊</span>
                    <span className="font-semibold text-[#2C3333] text-sm">Basic Analytics</span>
                  </div>
                  <p className="text-xs text-[#5F6368] ml-7">Session tracking, revenue overview</p>
                </div>
              </div>

              <button className="w-full border-2 border-[#2C3333] text-[#2C3333] py-3 rounded-full font-semibold hover:bg-[#2C3333] hover:text-white transition-all">
                Start Free
              </button>
            </div>

            {/* Professional Plan - Featured */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 lg:p-8 ring-2 ring-[#4A90A4] lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4A90A4] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                <span>⭐</span> MOST POPULAR
              </div>

              <div className="inline-block bg-[#4A90A4]/10 px-3 py-1 rounded-full text-xs font-medium text-[#4A90A4] mb-4">
                Professional
              </div>
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-[#2C3333]">£19</span>
                <span className="text-[#5F6368]">/month</span>
              </div>
              <div className="text-sm text-[#5F6368] mb-2">
                <span className="line-through">£49</span>
                <span className="ml-2 text-[#6B9080] font-medium">Founding Member Pricing</span>
              </div>
              <div className="bg-[#6B9080]/10 rounded-lg p-2 text-center text-sm text-[#6B9080] font-medium mb-4">
                First 1,000 practitioners only
              </div>

              <p className="text-xs text-[#5F6368] mb-4">Everything in Free, plus:</p>

              <div className="space-y-3 mb-6 text-sm">
                {[
                  '📅 Unlimited client records',
                  '🔄 Unlimited product scans',
                  '📆 Integrated booking system',
                  '🌐 Marketplace profile & visibility',
                  '📈 Evidence insights & SANA Health Graph',
                  '💬 Secure client messaging',
                  '📊 Advanced analytics dashboard',
                  '🎯 SANA Index profile & ranking',
                  '📋 PROMs tracking (WHO-5, DASS-21)',
                  '🔗 Wearable integration',
                  '📱 Journal AI for clients'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>{feature.split(' ')[0]}</span>
                    <span className="text-[#2C3333]">{feature.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-[#5F6368] mb-1">
                  <span>487/1,000 claimed</span>
                  <span className="text-[#6B9080] font-medium">51% remaining</span>
                </div>
                <div className="h-2 bg-[#EAE7DC] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6B9080] to-[#4A90A4] rounded-full" style={{ width: '49%' }}></div>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-full border-2 border-[#EAE7DC] focus:border-[#4A90A4] focus:outline-none text-[#2C3333] text-center text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#4A90A4] text-white py-3 rounded-full font-semibold shadow-lg hover:bg-[#357080] transition-all"
                  >
                    Join First 1,000
                  </button>
                </form>
              ) : (
                <div className="bg-[#4A90A4]/10 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#4A90A4] flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#2C3333] font-medium">You&apos;re on the list!</p>
                </div>
              )}
            </div>

            {/* Practice Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="inline-block bg-[#EAE7DC] px-3 py-1 rounded-full text-xs font-medium text-[#5F6368] mb-4">
                Practice
              </div>
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-[#2C3333]">£99</span>
                <span className="text-[#5F6368]">/month</span>
              </div>
              <p className="text-sm text-[#5F6368] mb-6">For established practices and multi-practitioner clinics</p>

              <p className="text-xs text-[#5F6368] mb-4">Everything in Professional, plus:</p>

              <div className="space-y-3 mb-8 text-sm">
                {[
                  '👥 Up to 10 practitioners',
                  '🏢 Team features & permissions',
                  '📊 Practice-level analytics',
                  '🎨 Custom branding & white-label',
                  '🔗 Embeddable booking widget',
                  '💼 Priority support (<2hr response)',
                  '🏥 FHIR-compatible data export',
                  '💳 Multi-practitioner payment splits',
                  '📈 Enhanced SANA Index & "Top Practice" badge'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>{feature.split(' ')[0]}</span>
                    <span className="text-[#2C3333]">{feature.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              <button className="w-full border-2 border-[#2C3333] text-[#2C3333] py-3 rounded-full font-semibold hover:bg-[#2C3333] hover:text-white transition-all">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payments
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              GDPR compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              NHS integration ready
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              Join the practitioners building evidence for CAM
            </h2>
            <p className="text-lg text-[#5F6368]">
              <span className="font-bold text-[#6B9080]">487 practitioners</span> have already claimed their founding member pricing
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#EAE7DC]">
              <div className="text-3xl lg:text-4xl font-bold text-[#6B9080] mb-2">8 hrs</div>
              <div className="text-sm text-[#5F6368]">saved weekly on admin with AI</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#EAE7DC]">
              <div className="text-3xl lg:text-4xl font-bold text-[#4A90A4] mb-2">73%</div>
              <div className="text-sm text-[#5F6368]">reduction in no-shows</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#EAE7DC]">
              <div className="text-3xl lg:text-4xl font-bold text-[#6B9080] mb-2">2.3x</div>
              <div className="text-sm text-[#5F6368]">higher retention with PROMs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#EAE7DC]">
              <div className="text-3xl lg:text-4xl font-bold text-[#4A90A4] mb-2">40%</div>
              <div className="text-sm text-[#5F6368]">more inquiries via SANA Index</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <blockquote className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#2C3333] italic mb-4">
                &ldquo;I was spending 3 hours every evening on notes. Now it&apos;s done before the client leaves. SANA gave me my life back.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold text-sm">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333] text-sm">Dr. Sarah Mitchell</div>
                  <div className="text-xs text-[#5F6368]">Herbalist, London</div>
                </div>
              </div>
            </blockquote>
            <blockquote className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAE7DC]">
              <p className="text-[#2C3333] italic mb-4">
                &ldquo;The SANA Index helped me stand out. I went from 2 new clients a month to 8. The evidence tracking sells itself.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold text-sm">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333] text-sm">James Chen</div>
                  <div className="text-xs text-[#5F6368]">Acupuncturist, Manchester</div>
                </div>
              </div>
            </blockquote>
          </div>

          {/* Modalities */}
          <div className="text-center">
            <p className="text-sm text-[#5F6368] mb-4">Trusted by practitioners in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Herbal Medicine', 'Acupuncture & TCM', 'Naturopathy', 'Homeopathy', 'Nutritional Therapy', 'Osteopathy', 'Ayurveda', 'Energy Healing'].map((modality, i) => (
                <span key={i} className="bg-[#EAE7DC] text-[#5F6368] px-3 py-1 rounded-full text-xs">
                  {modality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            title="Frequently asked questions"
            items={[
              {
                q: 'What qualifications do I need to join SANA as a practitioner?',
                a: 'SANA welcomes all qualified complementary and alternative medicine practitioners. You\'ll need recognized professional qualifications in your modality (e.g., diploma, degree, or certification), current membership with a relevant professional body, and valid professional indemnity insurance. We verify credentials to maintain marketplace quality and client trust.'
              },
              {
                q: 'How are my credentials verified?',
                a: 'During onboarding, you\'ll upload qualification certificates, professional body membership details, and insurance documents. Our team verifies these with issuing organizations. Verified practitioners receive a trust badge on their profile, and verification typically takes 2-5 business days.'
              },
              {
                q: 'What is the SANA Index and how does it work?',
                a: 'The SANA Index is our proprietary credibility scoring system that helps clients find the most suitable practitioners. It\'s calculated from verified credentials (20%), treatment volume (20%), anonymised client outcomes (40%), profile completeness (10%), and client satisfaction ratings (10%). Higher scores improve your marketplace visibility and build client confidence.'
              },
              {
                q: 'How does the AI Clinical Assistant work?',
                a: 'Our AI Clinical Assistant is trained on extensive CAM literature, traditional medicine texts, and clinical evidence. It provides protocol suggestions, identifies herb-drug interactions, recommends evidence-based approaches, and helps with treatment planning—all while respecting your clinical autonomy. It\'s a decision-support tool that enhances, never replaces, your expertise.'
              },
              {
                q: 'Which modalities does SANA support?',
                a: 'SANA supports virtually all CAM modalities including herbal medicine, Traditional Chinese Medicine (acupuncture, herbs, cupping), naturopathy, homeopathy, nutritional therapy, osteopathy, chiropractic, Ayurveda, energy healing (Reiki, healing touch), massage therapy, reflexology, aromatherapy, functional medicine, integrative medicine, and many more.'
              },
              {
                q: 'How do online bookings work?',
                a: 'Clients can book directly through your SANA profile or the marketplace. You set your availability, consultation types, and prices. The system handles scheduling, reminders, payments, and cancellations. You can also share your booking link on your website and social media.'
              },
              {
                q: 'How is client health data handled?',
                a: 'SANA is built with privacy-first architecture. All health data is encrypted at rest and in transit, stored on UK-based servers compliant with GDPR and healthcare data regulations. Clients control their data and can grant or revoke access to practitioners. We never sell data or use it for advertising.'
              },
              {
                q: 'How do client payments work?',
                a: 'SANA handles all payment processing securely. Clients pay at booking or after consultation (your choice). Funds are transferred to your account within 3-5 business days. We accept all major cards and handle invoicing, receipts, and payment disputes.'
              },
              {
                q: 'Is there a mobile app for practitioners?',
                a: 'Yes—the SANA practitioner app (iOS and Android) lets you manage bookings, communicate with clients, access the AI Clinical Assistant, view schedules, and receive notifications on the go. It\'s designed for practitioners who need flexibility.'
              },
              {
                q: 'Can I try before committing to paid plans?',
                a: 'Yes—our Free Forever plan lets you experience SANA with no time limit. When you\'re ready for more features, you can upgrade to Professional or Practice tier. We also offer demos for practitioners who want a guided tour before signing up.'
              }
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#6B9080] to-[#4A90A4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to build the practice you deserve?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join the movement making CAM evidence-based, trustworthy, and scalable.
          </p>

          {!ctaSubmitted ? (
            <form onSubmit={handleCtaSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full text-[#2C3333] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-[#2C3333] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1a1a1a] transition-all whitespace-nowrap"
                >
                  Get Started Free
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3">No credit card required</p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#6B9080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-1">Welcome to SANA!</h4>
              <p className="text-sm text-white/80">Check your inbox — we&apos;ve sent you everything you need to get started.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© 2024 SANA Technologies Ltd. Building the infrastructure for natural healing.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-[#EAE7DC] p-3 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex gap-2 max-w-md mx-auto">
          <a href="#pricing" className="flex-1 bg-[#6B9080] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px] flex items-center justify-center">
            Start Free Practice
          </a>
          <a href="mailto:hello@sana.health?subject=Demo%20Request" className="flex-1 bg-[#4A90A4] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px] flex items-center justify-center">
            Book a Demo
          </a>
        </div>
      </div>
    </main>
  );
}
