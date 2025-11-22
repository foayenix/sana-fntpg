'use client';

import { useState } from 'react';
import Link from 'next/link';

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
              { icon: '✅', label: 'Verification', desc: 'Who\'s qualified?' },
              { icon: '📊', label: 'Evidence', desc: 'What actually works?' },
              { icon: '🛒', label: 'Supply Chain', desc: 'Connected commerce' },
              { icon: '📱', label: 'Ecosystem', desc: 'All pieces linked' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
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
                  icon: '🚀'
                },
                {
                  step: '2',
                  title: 'Get Verified',
                  description: 'Earn your SANA Verified badge. Stand out from unqualified competitors.',
                  icon: '✅'
                },
                {
                  step: '3',
                  title: 'See Clients',
                  description: 'AI writes your SOAP notes in 30 seconds. Focus on healing, not typing.',
                  icon: '🤖'
                },
                {
                  step: '4',
                  title: 'Prescribe & Earn',
                  description: 'Recommend products through SANA. Clients buy, you earn commission.',
                  icon: '💊'
                },
                {
                  step: '5',
                  title: 'Build Evidence',
                  description: 'Track outcomes automatically. Get featured in practitioner rankings.',
                  icon: '📊'
                }
              ].map((journey, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-4 border-4 border-[#6B9080]">
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
                icon: '🤖',
                title: 'AI Clinical Assistant',
                description: 'Generate professional SOAP notes in 30 seconds. Our AI learns your style, your terminology, your approach.',
                highlight: 'Save 15+ hours/week',
                color: '#6B9080'
              },
              {
                icon: '📅',
                title: 'Smart Booking System',
                description: 'Online scheduling with automated reminders, intake forms, and telehealth built in.',
                highlight: 'Reduce no-shows 80%',
                color: '#4A90A4'
              },
              {
                icon: '📊',
                title: 'Evidence Engine',
                description: 'Automatically capture every treatment and outcome. Build your personal evidence database.',
                highlight: 'First in CAM',
                color: '#6B9080'
              },
              {
                icon: '💊',
                title: 'Integrated Dispensary',
                description: 'Prescribe products through SANA. Clients purchase seamlessly. You earn commission on every sale.',
                highlight: 'New revenue stream',
                color: '#4A90A4'
              },
              {
                icon: '✅',
                title: 'SANA Verified Badge',
                description: 'Credential verification that clients trust. Stand out from unqualified competitors in your area.',
                highlight: 'Boost credibility',
                color: '#6B9080'
              },
              {
                icon: '📋',
                title: 'Secure Records',
                description: 'GDPR-compliant, ISO 27001 certified client records. Access anywhere, encrypted everywhere.',
                highlight: 'Enterprise security',
                color: '#4A90A4'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#EAE7DC] hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* Social Proof */}
      <section className="py-12 md:py-20 px-4 bg-[#EAE7DC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
                Join the evidence revolution
              </h2>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">1,000+</div>
                  <div className="text-[#5F6368]">Practitioners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">50,000+</div>
                  <div className="text-[#5F6368]">Treatments</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">73%</div>
                  <div className="text-[#5F6368]">Avg. Success</div>
                </div>
              </div>

              <div className="space-y-4">
                <blockquote className="bg-white rounded-2xl p-6 shadow-sm">
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

                <blockquote className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-[#2C3333] italic mb-4">
                    &ldquo;The dispensary integration alone has added £800/month to my practice. Products I used to recommend, I now sell.&rdquo;
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
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#6B9080]">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#6B9080] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  FOUNDING MEMBER PRICING
                </div>
                <h3 className="text-2xl font-bold text-[#2C3333] mb-2">Lock in £19/month for life</h3>
                <p className="text-[#5F6368]">
                  <span className="line-through">£49/month</span> — 61% off forever
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-[#5F6368] mb-2">
                  <span>487 of 1,000 spots claimed</span>
                  <span className="text-[#6B9080] font-medium">513 remaining</span>
                </div>
                <div className="h-3 bg-[#EAE7DC] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6B9080] to-[#4A90A4] rounded-full" style={{ width: '49%' }}></div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'AI Clinical Assistant (unlimited)',
                  'SANA Verified badge',
                  'Unlimited client records',
                  'Smart booking system',
                  'Evidence tracking & insights',
                  'Integrated dispensary (earn commissions)',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#6B9080] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-[#2C3333]">{feature}</span>
                  </li>
                ))}
              </ul>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-4 rounded-full border-2 border-[#EAE7DC] focus:border-[#6B9080] focus:outline-none text-[#2C3333] text-center"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#6B9080] text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#5A7A6B] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Claim Your Founding Member Spot
                    <ArrowRightIcon />
                  </button>
                </form>
              ) : (
                <div className="bg-[#6B9080]/10 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#6B9080] flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#2C3333] mb-1">You&apos;re on the list!</h4>
                  <p className="text-sm text-[#5F6368]">We&apos;ll email you when it&apos;s time to set up your practice.</p>
                </div>
              )}

              <p className="text-center text-sm text-[#5F6368] mt-4">
                Start free today • Upgrade when ready • Cancel anytime
              </p>
            </div>
          </div>
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
          <button className="flex-1 bg-[#6B9080] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px]">
            Start Free Practice
          </button>
          <button className="flex-1 bg-[#4A90A4] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px]">
            Book a Demo
          </button>
        </div>
      </div>
    </main>
  );
}
