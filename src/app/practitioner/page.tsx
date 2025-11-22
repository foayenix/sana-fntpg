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
  Sparkles,
  CheckCircle2,
  Scan,
  Users,
  Globe2,
  MessageCircle,
  Crown,
  Link2,
  Activity,
  FileText,
  BookOpen,
  Building2,
  Palette,
  Code2,
  Headphones,
  CreditCard,
  Award,
  // Pain point icons
  ThumbsDown,
  FileStack,
  SearchX,
  TrendingDown,
  AlertTriangle,
  Unplug,
  // New premium icons
  Brain,
  ShieldCheck,
  ScanLine,
  Database,
  CalendarCheck,
  TrendingUp,
  Lock,
  Watch,
  PenTool,
  UserCog,
  LineChart,
  FileSpreadsheet,
  Heart,
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

      {/* Pain Points Section - Premium Design */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              We understand your frustrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              80,000+ UK CAM practitioners face these challenges daily. You&apos;re not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pain Point 1 - Dismissed */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <ThumbsDown className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dismissed as &ldquo;alternative&rdquo;</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Despite years of rigorous training, you&apos;re still seen as lesser than conventional medicine. Your expertise deserves recognition.</p>
            </div>

            {/* Pain Point 2 - Admin */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <FileStack className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drowning in admin</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Paper records, manual booking, handwritten notes. You spend 15+ hours a week on admin instead of healing patients.</p>
            </div>

            {/* Pain Point 3 - Evidence */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-blue-500 to-slate-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <SearchX className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can&apos;t prove it works</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Zero infrastructure to capture outcomes. You know your treatments work, but you have no data to prove it at scale.</p>
            </div>

            {/* Pain Point 4 - Revenue */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-red-500 to-rose-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <TrendingDown className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue walking out the door</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Clients buy products elsewhere after consultation. You do the work, Amazon gets the sale.</p>
            </div>

            {/* Pain Point 5 - Competitors */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <AlertTriangle className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unqualified competitors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No verification system means charlatans damage your credibility. Clients can&apos;t tell who&apos;s qualified.</p>
            </div>

            {/* Pain Point 6 - NHS */}
            <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center bg-gradient-to-br from-sky-500 to-slate-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Unplug className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NHS can&apos;t integrate you</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Social prescribing needs CAM infrastructure. Without it, the referral pathway doesn&apos;t exist.</p>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center shadow-xl">
            <p className="text-3xl md:text-4xl text-white font-bold mb-3 tracking-tight">
              £8.7 billion spent on CAM annually
            </p>
            <p className="text-slate-300 text-lg">
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

      {/* Pricing Section - Premium Apple/Stripe-level Design */}
      <section id="pricing" className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Start free, upgrade when you&apos;re ready
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Free Plan - Clean white with subtle border */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                Free Forever
              </span>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900 tracking-tight">£0</span>
                <span className="ml-1 text-lg text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Perfect for getting started with AI-powered practice management
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Brain, gradient: 'from-violet-500 to-indigo-600', title: 'AI Clinical Assistant (Unlimited)', desc: 'Voice-to-SOAP notes, 8+ traditions' },
                  { icon: ShieldCheck, gradient: 'from-emerald-500 to-teal-600', title: 'SANA Verified Badge', desc: '40+ UK registry verification' },
                  { icon: ScanLine, gradient: 'from-blue-500 to-cyan-600', title: 'Product Scanner (5/month)', desc: 'Herb-drug interaction checks' },
                  { icon: Users, gradient: 'from-slate-500 to-gray-600', title: 'Client Records (25 clients)', desc: 'GDPR-compliant storage' },
                  { icon: BarChart3, gradient: 'from-purple-500 to-pink-600', title: 'Basic Analytics', desc: 'Session tracking, revenue overview' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
                      <feature.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 mb-0.5">{feature.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full px-6 py-3 rounded-xl font-semibold text-sm bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-md transition-all duration-200">
                Start Free
              </button>
            </div>

            {/* Professional Plan - Premium subtle gradient */}
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl overflow-hidden">
              {/* Subtle animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5" />

              {/* Most Popular Badge - Sophisticated */}
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/25">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              </div>

              <div className="relative pt-4">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                  Professional
                </span>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900 tracking-tight">£19</span>
                  <span className="ml-1 text-lg text-gray-600">/month</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <span className="line-through">£49</span>
                  <span className="ml-2 text-blue-600 font-medium">Founding Member Pricing</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-blue-100 rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-900">487/1,000 claimed</span>
                    <span className="font-semibold text-blue-600">513 spots left</span>
                  </div>
                  <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" style={{ width: '49%' }} />
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-600 font-medium">Everything in Free, plus:</p>

                <div className="mt-4 space-y-3">
                  {[
                    { icon: Database, gradient: 'from-slate-500 to-gray-600', text: 'Unlimited client records' },
                    { icon: CalendarCheck, gradient: 'from-blue-500 to-indigo-600', text: 'Integrated booking system' },
                    { icon: Globe2, gradient: 'from-cyan-500 to-blue-600', text: 'Marketplace profile & visibility' },
                    { icon: TrendingUp, gradient: 'from-purple-500 to-pink-600', text: 'Evidence insights & Health Graph' },
                    { icon: Lock, gradient: 'from-indigo-500 to-purple-600', text: 'Secure client messaging' },
                    { icon: Activity, gradient: 'from-emerald-500 to-teal-600', text: 'SANA Index profile & ranking' },
                    { icon: Heart, gradient: 'from-rose-500 to-orange-500', text: 'PROMs tracking (WHO-5, DASS-21)' },
                    { icon: Watch, gradient: 'from-pink-500 to-rose-600', text: 'Wearable integration' },
                    { icon: PenTool, gradient: 'from-violet-500 to-indigo-600', text: 'Journal AI for clients' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
                        <feature.icon className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {!submitted ? (
                  <button
                    onClick={() => setSubmitted(true)}
                    className="mt-8 w-full px-6 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    Join First 1,000
                  </button>
                ) : (
                  <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-emerald-700">You&apos;re on the list!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Practice Plan - Clean white with premium accent */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                Practice
              </span>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900 tracking-tight">£99</span>
                <span className="ml-1 text-lg text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                For established practices and multi-practitioner clinics
              </p>

              <p className="mt-8 text-xs text-gray-600 font-medium">Everything in Professional, plus:</p>

              <div className="mt-4 space-y-3">
                {[
                  { icon: Users, gradient: 'from-slate-500 to-gray-600', text: 'Up to 5 practitioners' },
                  { icon: UserCog, gradient: 'from-blue-500 to-indigo-600', text: 'Team features & permissions' },
                  { icon: LineChart, gradient: 'from-purple-500 to-pink-600', text: 'Practice-level analytics' },
                  { icon: Palette, gradient: 'from-pink-500 to-rose-600', text: 'Custom branding & white-label' },
                  { icon: Code2, gradient: 'from-cyan-500 to-blue-600', text: 'Embeddable booking widget' },
                  { icon: Headphones, gradient: 'from-emerald-500 to-teal-600', text: 'Priority support (<2hr)' },
                  { icon: FileSpreadsheet, gradient: 'from-slate-600 to-slate-700', text: 'FHIR-compatible data export' },
                  { icon: CreditCard, gradient: 'from-amber-500 to-orange-600', text: 'Multi-practitioner payment splits' },
                  { icon: Award, gradient: 'from-yellow-500 to-amber-600', text: '"Top Practice" badge' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
                      <feature.icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full px-6 py-3 rounded-xl font-semibold text-sm bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-md transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Trust Signals - Premium styling */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-400" />
              Secure payments
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              GDPR compliant
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gray-400" />
              NHS integration ready
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-gray-400" />
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
