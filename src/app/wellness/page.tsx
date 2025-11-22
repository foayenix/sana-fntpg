'use client';

import { useState } from 'react';
import Link from 'next/link';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function WellnessPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
            <div className="w-8 h-8 rounded-lg bg-[#4A90A4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#2C3333]">SANA</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4" style={{ background: 'linear-gradient(180deg, #4A90A4 0%, #6AACBE 50%, #FAF9F6 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
            <span className="text-white text-sm font-medium">For Your Wellness Journey</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Natural health, finally navigable.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            Know what&apos;s safe for YOU. Find practitioners you can trust. Take control of your wellness journey with evidence, not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-8">
            <button className="bg-white text-[#4A90A4] px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 min-h-[52px]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
            <button className="bg-white text-[#4A90A4] px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 min-h-[52px]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Download for Android
            </button>
          </div>

          <p className="text-white/70 text-sm">
            Free to download • 50,000+ users • 4.8 star rating
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              Sound familiar?
            </h2>
            <p className="text-lg text-[#5F6368] max-w-2xl mx-auto">
              Millions of people are frustrated navigating natural health. You&apos;re not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                emoji: '😰',
                question: 'How do I find a qualified herbalist vs. a charlatan?',
                answer: 'With no verification system, it\'s impossible to know who\'s genuinely trained vs. who watched a YouTube video.'
              },
              {
                emoji: '💊',
                question: 'Which of these 10,000 supplements is right for ME?',
                answer: 'Shelves full of products, but no way to know what\'s safe for your specific conditions, medications, or circumstances.'
              },
              {
                emoji: '📊',
                question: 'Does acupuncture really work for my chronic pain?',
                answer: 'No evidence infrastructure means you\'re relying on anecdotes, not data. You deserve to see real outcomes.'
              },
              {
                emoji: '🏥',
                question: 'My GP dismisses CAM, but pharmaceuticals aren\'t working',
                answer: 'Caught between conventional medicine that doesn\'t help and alternative medicine you can\'t verify. There has to be a better way.'
              }
            ].map((pain, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#EAE7DC]">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{pain.emoji}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3333] mb-2">&ldquo;{pain.question}&rdquo;</h3>
                    <p className="text-[#5F6368] text-sm">{pain.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#4A90A4]/10 to-[#6B9080]/10 rounded-2xl p-8 text-center border border-[#4A90A4]/20 max-w-3xl mx-auto">
            <p className="text-2xl text-[#2C3333] font-medium mb-2">
              £8.7 billion spent on CAM annually
            </p>
            <p className="text-[#5F6368]">
              With no safety oversight. No interaction checking. No way to find qualified practitioners.
            </p>
          </div>
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
              From confusion to confidence in your wellness decisions
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90A4] via-[#6B9080] to-[#4A90A4]"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: 'Download Free',
                  description: 'Get the SANA app and set up your health profile in 2 minutes.',
                  icon: '📱'
                },
                {
                  step: '2',
                  title: 'Scan Products',
                  description: '"This magnesium is safe for YOUR anxiety, but conflicts with your medication"',
                  icon: '🔍'
                },
                {
                  step: '3',
                  title: 'Find Practitioners',
                  description: '"Dr. Sarah - 87% success rate, 234 verified treatments, 4.9★"',
                  icon: '👨‍⚕️'
                },
                {
                  step: '4',
                  title: 'Book & Track',
                  description: 'Book appointments, receive treatments, log your progress.',
                  icon: '📅'
                },
                {
                  step: '5',
                  title: 'See Results',
                  description: 'Evidence-based insights on what\'s working for YOU.',
                  icon: '📊'
                }
              ].map((journey, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-4 border-4 border-[#4A90A4]">
                    {journey.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EAE7DC]">
                    <div className="text-xs font-bold text-[#4A90A4] mb-2">STEP {journey.step}</div>
                    <h3 className="font-semibold text-[#2C3333] mb-2">{journey.title}</h3>
                    <p className="text-sm text-[#5F6368]">{journey.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scanner Feature */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Phone Mockup */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90A4]/20 to-[#6B9080]/20 blur-3xl rounded-full"></div>
              <div className="relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-[#FAF9F6] px-6 pt-4 pb-2 flex justify-between items-center text-xs text-[#5F6368]">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-[#2C3333] rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-[#4A90A4] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <span className="font-bold text-lg text-[#2C3333]">SANA</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#EAE7DC]"></div>
                    </div>

                    {/* Scanned Product */}
                    <div className="bg-[#FAF9F6] rounded-2xl p-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-amber-600">Mg</span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#2C3333]">Magnesium Citrate</div>
                          <div className="text-sm text-[#5F6368]">400mg • Nature&apos;s Bounty</div>
                        </div>
                      </div>

                      {/* Safety Score */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full border-4 border-[#6B9080] flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-[#6B9080]">9.2</div>
                            <div className="text-[8px] text-[#5F6368]">/10</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-[#6B9080]">Safe for you</div>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                          </div>
                          <div className="text-xs text-[#5F6368]">Based on 5,847 studies</div>
                        </div>
                      </div>

                      {/* Warning */}
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                        <span className="text-amber-500 text-lg">⚠️</span>
                        <div className="text-sm text-amber-700">May interact with blood pressure medication</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-[#4A90A4] text-white py-3 rounded-xl font-semibold">
                      Find Safe Alternatives
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-[#4A90A4]/10 text-[#4A90A4] px-4 py-1 rounded-full text-sm font-medium mb-4">
                PRODUCT SCANNER
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
                Vivino for supplements.<br />But personalized to YOU.
              </h2>
              <p className="text-lg text-[#5F6368] mb-8">
                Scan any product&apos;s barcode. Get instant, personalized safety information based on YOUR health profile.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Personalized to Your Profile',
                    description: 'Your conditions, medications, pregnancy status—all factored into every scan.'
                  },
                  {
                    icon: '📚',
                    title: '100,000+ Studies Analyzed',
                    description: 'Every rating backed by peer-reviewed research. Not opinions—evidence.'
                  },
                  {
                    icon: '⚠️',
                    title: 'Interaction Warnings',
                    description: '87% of users avoided harmful interactions thanks to real-time alerts.'
                  },
                  {
                    icon: '💡',
                    title: 'Smart Alternatives',
                    description: 'If something isn\'t safe for you, we\'ll suggest what is.'
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#2C3333] mb-1">{feature.title}</h3>
                      <p className="text-[#5F6368]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 px-4 bg-[#4A90A4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">2M+</div>
              <div className="text-white/80 text-xs md:text-base">Products Scanned</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">87%</div>
              <div className="text-white/80 text-xs md:text-base">Avoided Interactions</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">50K+</div>
              <div className="text-white/80 text-xs md:text-base">Active Users</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">4.8★</div>
              <div className="text-white/80 text-xs md:text-base">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Practitioners */}
      <section className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#6B9080]/10 text-[#6B9080] px-4 py-1 rounded-full text-sm font-medium mb-4">
                VERIFIED PRACTITIONERS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
                Finally know who&apos;s qualified.
              </h2>
              <p className="text-lg text-[#5F6368] mb-8">
                SANA-verified practitioners have proven credentials and transparent success rates. No more guessing.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Credential verification (real qualifications, not claims)',
                  'Transparent success rates (73% average effectiveness)',
                  'Real client reviews from verified treatments',
                  'Specialty matching (find who treats YOUR condition)',
                  'Evidence-based rankings (data, not marketing)'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6B9080] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-[#2C3333]">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#6B9080] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5A7A6B] transition-all">
                Find Practitioners Near You
              </button>
            </div>

            {/* Practitioner Cards */}
            <div className="space-y-4">
              {[
                {
                  name: 'Dr. Sarah Mitchell',
                  specialty: 'Herbalist',
                  location: 'London',
                  rating: 4.9,
                  reviews: 127,
                  success: '87%',
                  treatments: 234,
                  available: true
                },
                {
                  name: 'James Chen',
                  specialty: 'Acupuncturist',
                  location: 'Manchester',
                  rating: 4.8,
                  reviews: 89,
                  success: '82%',
                  treatments: 156,
                  available: true
                },
                {
                  name: 'Dr. Emma Roberts',
                  specialty: 'Naturopath',
                  location: 'Bristol',
                  rating: 5.0,
                  reviews: 64,
                  success: '91%',
                  treatments: 98,
                  available: false
                }
              ].map((practitioner, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-[#EAE7DC] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {practitioner.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <div className="font-semibold text-[#2C3333]">{practitioner.name}</div>
                          <div className="text-sm text-[#5F6368]">{practitioner.specialty} • {practitioner.location}</div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#4A90A4] px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          <span className="text-white text-xs font-medium">Verified</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-[#2C3333] font-medium">{practitioner.rating}</span>
                          <span className="text-[#5F6368]">({practitioner.reviews})</span>
                        </div>
                        <div className="text-[#6B9080] font-medium">{practitioner.success} success</div>
                        <div className="text-[#5F6368]">{practitioner.treatments} treatments</div>
                      </div>

                      <button className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition-all ${
                        practitioner.available
                          ? 'bg-[#4A90A4] text-white hover:bg-[#357080]'
                          : 'bg-[#EAE7DC] text-[#5F6368] cursor-not-allowed'
                      }`}>
                        {practitioner.available ? 'Book Consultation' : 'Join Waitlist'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Infrastructure Message */}
      <section className="py-12 md:py-20 px-4 bg-[#2C3333]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            You deserve better than guesswork.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            SANA is building the infrastructure that makes natural health evidence-based, trustworthy, and navigable. No more confusion. No more charlatans. Just verified practitioners and personalized guidance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '✅', label: 'Verification', desc: 'Know who\'s qualified' },
              { icon: '📊', label: 'Evidence', desc: 'See what works' },
              { icon: '🎯', label: 'Personalization', desc: 'Safe for YOU' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold">{item.label}</div>
                <div className="text-white/60 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#4A90A4] to-[#6B9080]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take control of your wellness journey.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get notified when the app launches in your area. Be among the first to access personalized supplement safety checks.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full text-[#2C3333] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-[#2C3333] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1a1a1a] transition-all whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3">Free forever • No spam, just updates</p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#4A90A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-1">You&apos;re on the early access list!</h4>
              <p className="text-sm text-white/80">We&apos;ll notify you as soon as SANA launches in your area.</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 rounded-xl px-6 py-3 flex items-center gap-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-xs">Coming soon to</div>
                <div className="text-white font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3 flex items-center gap-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-xs">Coming soon to</div>
                <div className="text-white font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© 2024 SANA Technologies Ltd. Building the infrastructure for natural healing.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-[#EAE7DC] p-3 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex gap-2 max-w-md mx-auto">
          <button className="flex-1 bg-[#4A90A4] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px] flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </button>
          <button className="flex-1 bg-[#6B9080] text-white py-4 rounded-2xl font-semibold shadow-lg text-sm min-h-[52px]">
            Find Practitioner
          </button>
        </div>
      </div>
    </main>
  );
}
