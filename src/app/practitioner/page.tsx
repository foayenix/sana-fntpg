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

export default function PractitionerPage() {
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
            <div className="w-8 h-8 rounded-lg bg-[#6B9080] flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#2C3333]">SANA</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4" style={{ background: 'linear-gradient(180deg, #6B9080 0%, #8FB3A3 50%, #FAF9F6 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">For Practitioners</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform your practice with AI-powered tools
          </h1>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 1,000+ practitioners who have reclaimed 15+ hours every week and built thriving, evidence-based practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-[#6B9080] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105">
              Start Your Free Practice
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Book a Demo
            </button>
          </div>

          <p className="text-white/70 text-sm">
            No credit card required • Free forever plan available
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] text-center mb-4">
            Everything you need to run a modern practice
          </h2>
          <p className="text-lg text-[#5F6368] text-center mb-16 max-w-2xl mx-auto">
            Purpose-built for CAM practitioners who want to spend less time on admin and more time healing
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI Clinical Assistant',
                description: 'Generate professional SOAP notes in 30 seconds. Our AI learns your style and terminology.',
                highlight: 'Save 15+ hours/week'
              },
              {
                icon: '📅',
                title: 'Smart Booking System',
                description: 'Online scheduling with automated reminders. Reduce no-shows by 80%.',
                highlight: '24/7 availability'
              },
              {
                icon: '📊',
                title: 'Evidence Tracking',
                description: 'Automatically track client outcomes. Build your evidence base and prove your results.',
                highlight: 'First in CAM'
              },
              {
                icon: '💊',
                title: 'Integrated Dispensary',
                description: 'Recommend and sell verified supplements directly. Earn commissions on every sale.',
                highlight: 'New revenue stream'
              },
              {
                icon: '📋',
                title: 'Client Records',
                description: 'Secure, GDPR-compliant record management. Access anywhere, anytime.',
                highlight: 'ISO 27001 certified'
              },
              {
                icon: '✓',
                title: 'SANA Verified Badge',
                description: 'Stand out with our verified practitioner badge. Build trust with potential clients.',
                highlight: 'Boost credibility'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-[#EAE7DC]">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C3333] mb-2">{feature.title}</h3>
                <p className="text-[#5F6368] mb-4">{feature.description}</p>
                <span className="inline-block bg-[#6B9080]/10 text-[#6B9080] px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-[#EAE7DC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
                Trusted by practitioners across the UK
              </h2>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">1,000+</div>
                  <div className="text-[#5F6368]">Practitioners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">50,000+</div>
                  <div className="text-[#5F6368]">Consultations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#6B9080]">4.9/5</div>
                  <div className="text-[#5F6368]">Rating</div>
                </div>
              </div>

              <blockquote className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-lg text-[#2C3333] italic mb-4">
                  &ldquo;SANA has completely transformed how I run my practice. The AI note-taking alone has given me back 3 hours every day. I can finally focus on what matters - my patients.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3333]">Dr. Sarah Mitchell</div>
                    <div className="text-sm text-[#5F6368]">Herbalist, London • Using SANA since 2023</div>
                  </div>
                </div>
              </blockquote>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#6B9080] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  LIMITED OFFER
                </div>
                <h3 className="text-2xl font-bold text-[#2C3333] mb-2">Founding Member Pricing</h3>
                <p className="text-[#5F6368]">Lock in £19/month for life (normally £49)</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-[#5F6368] mb-2">
                  <span>487 of 1,000 spots claimed</span>
                  <span>513 remaining</span>
                </div>
                <div className="h-3 bg-[#EAE7DC] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6B9080] to-[#4A90A4] rounded-full" style={{ width: '49%' }}></div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'AI Clinical Assistant',
                  'Unlimited client records',
                  'Smart booking system',
                  'Evidence tracking',
                  'Dispensary access',
                  'SANA Verified badge',
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

              <button className="w-full bg-[#6B9080] text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#5A7A6B] transition-all transform hover:scale-[1.02]">
                Claim Your Founding Member Spot
              </button>

              <p className="text-center text-sm text-[#5F6368] mt-4">
                No credit card required to start
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#6B9080] to-[#4A90A4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join the evidence revolution. Start your free practice today.
          </p>
          <button className="bg-white text-[#2C3333] px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105">
            Start Free - No Credit Card Required
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2C3333] text-white/60 text-center text-sm">
        <p>© 2024 SANA Technologies Ltd. Building the future of CAM.</p>
      </footer>
    </main>
  );
}
