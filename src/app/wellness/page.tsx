'use client';

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

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#EAE7DC]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#5F6368] hover:text-[#2C3333] transition-colors">
            <ArrowLeftIcon />
            <span className="text-sm font-medium">Back to Home</span>
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
      <section className="pt-32 pb-16 px-4" style={{ background: 'linear-gradient(180deg, #4A90A4 0%, #6AACBE 50%, #FAF9F6 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">For Your Wellness Journey</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Take control of your natural health journey
          </h1>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Scan any supplement, check if it&apos;s safe for YOU, and connect with verified practitioners who can guide your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-[#4A90A4] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </button>
            <button className="bg-white text-[#4A90A4] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
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

      {/* Phone Mockup with Features */}
      <section className="py-20 px-4">
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
                        <span className="text-amber-500 text-lg">!</span>
                        <div className="text-sm text-amber-700">May interact with blood pressure medication</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-[#4A90A4] text-white py-3 rounded-xl font-semibold">
                      Find Alternatives
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
                Know what&apos;s safe before you buy
              </h2>
              <p className="text-lg text-[#5F6368] mb-8">
                The SANA app puts personalized supplement safety in your pocket. Scan any product and get instant, evidence-based guidance.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '📱',
                    title: 'Instant Barcode Scanning',
                    description: 'Point your camera at any supplement and get immediate safety information.'
                  },
                  {
                    icon: '👤',
                    title: 'Personalized Safety Checks',
                    description: 'Your health profile (conditions, medications, pregnancy) is factored into every scan.'
                  },
                  {
                    icon: '📚',
                    title: 'Evidence-Based Ratings',
                    description: 'Every rating is backed by peer-reviewed research from our database of 100,000+ studies.'
                  },
                  {
                    icon: '⚠️',
                    title: 'Interaction Warnings',
                    description: 'Real-time alerts for potential conflicts with your medications or conditions.'
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
      <section className="py-16 px-4 bg-[#4A90A4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2M+</div>
              <div className="text-white/80">Products Scanned</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">87%</div>
              <div className="text-white/80">Avoided Harmful Interactions</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">4.8</div>
              <div className="text-white/80">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Practitioners */}
      <section className="py-20 px-4 bg-[#EAE7DC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
              Connect with verified practitioners
            </h2>
            <p className="text-lg text-[#5F6368] max-w-2xl mx-auto">
              Ready for personalized guidance? Find SANA-verified practitioners in your area who specialize in your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Sarah Mitchell',
                specialty: 'Herbalist',
                location: 'London',
                rating: 4.9,
                reviews: 127,
                available: true
              },
              {
                name: 'James Chen',
                specialty: 'Acupuncturist',
                location: 'Manchester',
                rating: 4.8,
                reviews: 89,
                available: true
              },
              {
                name: 'Emma Roberts',
                specialty: 'Naturopath',
                location: 'Bristol',
                rating: 5.0,
                reviews: 64,
                available: false
              }
            ].map((practitioner, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold text-lg">
                    {practitioner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3333]">{practitioner.name}</div>
                    <div className="text-sm text-[#5F6368]">{practitioner.specialty} • {practitioner.location}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4 text-[#4A90A4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-xs text-[#4A90A4] font-medium">SANA Verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className={`w-4 h-4 ${star <= Math.floor(practitioner.rating) ? 'text-yellow-400' : 'text-gray-200'} fill-current`} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-[#5F6368]">{practitioner.rating} ({practitioner.reviews} reviews)</span>
                </div>

                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  practitioner.available
                    ? 'bg-[#4A90A4] text-white hover:bg-[#357080]'
                    : 'bg-[#EAE7DC] text-[#5F6368] cursor-not-allowed'
                }`}>
                  {practitioner.available ? 'Book Consultation' : 'Join Waitlist'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-[#4A90A4] font-medium hover:underline">
              View all practitioners in your area →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4A90A4] to-[#6B9080]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start your wellness journey today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Download the free SANA app and take control of your natural health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2C3333] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105">
              Download Free App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Find a Practitioner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© 2024 SANA Technologies Ltd. Building the future of CAM.</p>
      </footer>
    </main>
  );
}
