'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Icon Components
const StethoscopeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PillIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const QuestionIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#6B9080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-sage flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#2C3333]">SANA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#5F6368] hover:text-[#2C3333] transition-colors text-sm font-medium">Features</a>
            <a href="#evidence" className="text-[#5F6368] hover:text-[#2C3333] transition-colors text-sm font-medium">Evidence</a>
            <a href="#pricing" className="text-[#5F6368] hover:text-[#2C3333] transition-colors text-sm font-medium">Pricing</a>
            <a href="#practitioners" className="text-[#5F6368] hover:text-[#2C3333] transition-colors text-sm font-medium">For Practitioners</a>
            <a href="#clients" className="text-[#5F6368] hover:text-[#2C3333] transition-colors text-sm font-medium">For Clients</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#4A90A4] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-[#357080] transition-all btn-elevated">
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/20">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-[#5F6368] hover:text-[#2C3333] text-sm font-medium">Features</a>
            <a href="#evidence" className="block text-[#5F6368] hover:text-[#2C3333] text-sm font-medium">Evidence</a>
            <a href="#pricing" className="block text-[#5F6368] hover:text-[#2C3333] text-sm font-medium">Pricing</a>
            <a href="#practitioners" className="block text-[#5F6368] hover:text-[#2C3333] text-sm font-medium">For Practitioners</a>
            <a href="#clients" className="block text-[#5F6368] hover:text-[#2C3333] text-sm font-medium">For Clients</a>
            <button className="w-full bg-[#4A90A4] text-white px-6 py-2.5 rounded-full text-sm font-semibold">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  const [activeRole, setActiveRole] = useState<'practitioner' | 'client'>('practitioner');
  const router = useRouter();

  const handlePractitionerClick = () => {
    if (activeRole === 'practitioner') {
      router.push('/practitioner');
    } else {
      setActiveRole('practitioner');
    }
  };

  const handleClientClick = () => {
    if (activeRole === 'client') {
      router.push('/wellness');
    } else {
      setActiveRole('client');
    }
  };

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Left Side - Practitioner */}
        <div
          className={`flex-1 relative p-8 lg:p-16 flex flex-col justify-center transition-all duration-500 ${
            activeRole === 'practitioner' ? 'opacity-100' : 'opacity-70'
          }`}
          style={{ background: 'linear-gradient(145deg, #6B9080 0%, #8FB3A3 50%, #A4AC96 100%)' }}
          onMouseEnter={() => setActiveRole('practitioner')}
        >
          {/* Badge */}
          <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">For Practitioners</span>
          </div>

          {/* Dashboard Mockup */}
          <div className={`bg-white rounded-2xl shadow-elevated p-4 max-w-lg mx-auto transition-all duration-300 ${
            activeRole === 'practitioner' ? 'shadow-glow-sage scale-[1.02]' : ''
          }`}>
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#6B9080] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-semibold text-[#2C3333]">SANA Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EAE7DC]"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex gap-4">
              {/* Sidebar */}
              <div className="w-12 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#4A90A4]/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-[#4A90A4]"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gray-300"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gray-300"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-3">
                {/* Calendar Preview */}
                <div className="bg-[#FAF9F6] rounded-xl p-3">
                  <div className="text-xs font-medium text-[#5F6368] mb-2">Today&apos;s Appointments</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                      <div className="w-2 h-8 rounded-full bg-[#6B9080]"></div>
                      <div>
                        <div className="text-xs font-medium text-[#2C3333]">Sarah M. - Initial Consult</div>
                        <div className="text-[10px] text-[#5F6368]">9:00 AM - 10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
                      <div className="w-2 h-8 rounded-full bg-[#4A90A4]"></div>
                      <div>
                        <div className="text-xs font-medium text-[#2C3333]">James C. - Follow-up</div>
                        <div className="text-[10px] text-[#5F6368]">11:00 AM - 11:30 AM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Note Generator */}
                <div className="bg-gradient-to-r from-[#4A90A4]/10 to-[#6B9080]/10 rounded-xl p-3 border border-[#4A90A4]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#4A90A4] flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <span className="text-xs font-medium text-[#2C3333]">AI Note Generator</span>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-[10px] text-[#5F6368]">
                    <span className="typing-effect">Generating SOAP note for Sarah M...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider with Toggle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6 bg-white rounded-2xl p-4 shadow-elevated">
            <div className="w-12 h-12 rounded-xl gradient-sage flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="bg-white/90 backdrop-blur-xl rounded-full p-1.5 shadow-elevated flex items-center">
            <button
              onClick={handlePractitionerClick}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
                activeRole === 'practitioner'
                  ? 'bg-[#6B9080] text-white'
                  : 'text-[#5F6368] hover:text-[#2C3333]'
              }`}
            >
              <StethoscopeIcon />
              <span className="text-sm font-medium">I&apos;m a Practitioner</span>
              {activeRole === 'practitioner' && (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            <button
              onClick={handleClientClick}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
                activeRole === 'client'
                  ? 'bg-[#4A90A4] text-white'
                  : 'text-[#5F6368] hover:text-[#2C3333]'
              }`}
            >
              <LeafIcon />
              <span className="text-sm font-medium">I&apos;m Seeking Wellness</span>
              {activeRole === 'client' && (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-[#6B9080] to-[#4A90A4]"></div>
        </div>

        {/* Right Side - Client */}
        <div
          className={`flex-1 relative p-8 lg:p-16 flex flex-col justify-center transition-all duration-500 ${
            activeRole === 'client' ? 'opacity-100' : 'opacity-70'
          }`}
          style={{ background: 'linear-gradient(145deg, #EAE7DC 0%, #F5F3EE 50%, #6AACBE 100%)' }}
          onMouseEnter={() => setActiveRole('client')}
        >
          {/* Badge */}
          <div className="absolute top-8 right-8 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#2C3333] text-sm font-medium">For Clients</span>
          </div>

          {/* iPhone Mockup */}
          <div className={`relative mx-auto transition-all duration-300 ${
            activeRole === 'client' ? 'shadow-glow-teal scale-[1.02]' : ''
          }`}>
            <div className="w-[280px] h-[560px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-elevated">
              <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                {/* Phone Header */}
                <div className="bg-[#FAF9F6] px-6 pt-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#6B9080] flex items-center justify-center">
                        <span className="text-white font-bold text-xs">S</span>
                      </div>
                      <span className="font-semibold text-sm text-[#2C3333]">SANA</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#EAE7DC]"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#2C3333]">Scan Product</div>
                    <div className="text-xs text-[#5F6368]">Point camera at barcode</div>
                  </div>
                </div>

                {/* Scanner Area */}
                <div className="relative bg-gray-900 h-40 flex items-center justify-center">
                  {/* Barcode visualization */}
                  <div className="flex gap-[2px]">
                    {[3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 3, 1].map((w, i) => (
                      <div key={i} className="bg-white h-16" style={{ width: `${w * 2}px` }}></div>
                    ))}
                  </div>
                  {/* Scan Line */}
                  <div className="absolute inset-x-4 top-4 h-1 bg-[#4A90A4] rounded-full scan-line opacity-80"></div>
                  {/* Corner Markers */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#4A90A4]"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#4A90A4]"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#4A90A4]"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#4A90A4]"></div>
                </div>

                {/* Results Panel */}
                <div className="bg-white p-4 space-y-3">
                  {/* Product */}
                  <div className="flex items-center gap-3 bg-[#FAF9F6] rounded-xl p-3">
                    <div className="w-12 h-12 bg-[#EAE7DC] rounded-lg flex items-center justify-center">
                      <span className="text-lg">Mg</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#2C3333]">Magnesium Citrate 400mg</div>
                      <div className="text-xs text-[#5F6368]">Nature&apos;s Bounty</div>
                    </div>
                  </div>

                  {/* Safety Score */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#6B9080] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">9.2</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#6B9080]">Safe for you</div>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(i => (
                            <StarIcon key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 flex items-start gap-2">
                    <span className="text-amber-500">!</span>
                    <div className="text-xs text-amber-700">May interact with current medication</div>
                  </div>

                  {/* User Profile Badge */}
                  <div className="bg-[#4A90A4]/10 rounded-lg p-2 text-center">
                    <span className="text-xs text-[#4A90A4]">Profile: Sarah, Anxiety, Pregnant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#2C3333] mb-4 leading-tight">
            The operating system for natural healing
          </h1>
          <p className="text-lg lg:text-xl text-[#5F6368] mb-8">
            Join 1,000+ verified practitioners building the evidence revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="bg-[#4A90A4] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-elevated hover:bg-[#357080] transition-all btn-elevated">
              Start Your Free Practice
            </button>
            <button className="border-2 border-[#2C3333] text-[#2C3333] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2C3333] hover:text-white transition-all">
              Download SANA App
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-[#5F6368]">
            <span className="flex items-center gap-1">
              <CheckIcon />
              GDPR Compliant
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon />
              ISO 27001
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon />
              Encrypted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem-Solution Cards Section
function ProblemSolutionSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(2);

  const cards = [
    {
      icon: <ClockIcon />,
      problem: "Spending 15+ hours on admin weekly?",
      solution: "AI writes your notes in 30 seconds",
      color: "#6B9080"
    },
    {
      icon: <PillIcon />,
      problem: "Clients buying random products after consultations?",
      solution: "Integrated dispensary with verified supplements",
      color: "#4A90A4"
    },
    {
      icon: <QuestionIcon />,
      problem: "Can't prove your treatments work at scale?",
      solution: "Automatic outcome tracking & evidence reports",
      color: "#A4AC96"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
            We solve real practitioner problems
          </h2>
          <p className="text-lg text-[#5F6368]">
            Tap any card to see the solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-flip cursor-pointer ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              style={{ perspective: '1000px' }}
            >
              <div
                className="card-flip-inner relative w-full h-80"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0)'
                }}
              >
                {/* Front */}
                <div
                  className="card-front absolute inset-0 bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center justify-center text-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    borderLeft: `4px solid ${card.color}`
                  }}
                >
                  <div className="mb-6" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3333] mb-4">
                    {card.problem}
                  </h3>
                  <div className="text-sm text-[#5F6368] flex items-center gap-1">
                    <span>Tap to explore</span>
                    <ChevronRightIcon />
                  </div>
                </div>

                {/* Back */}
                <div
                  className="card-back absolute inset-0 rounded-2xl shadow-elevated p-8 flex flex-col items-center justify-center text-center text-white"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`
                  }}
                >
                  {/* Mini Demo */}
                  <div className="w-full bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <div className="h-20 flex items-center justify-center">
                      <div className="text-sm typing-effect">Generating...</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {card.solution}
                  </h3>
                  <div className="text-sm opacity-80 mb-4">
                    {index + 1}/3 explored
                  </div>
                  <button className="bg-white text-[#2C3333] px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    Try it free →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Scanner Demo Section
function ProductScannerSection() {
  return (
    <section id="clients" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-6">
              Scan any supplement. Know if it&apos;s safe for YOU.
            </h2>
            <p className="text-lg text-[#5F6368] mb-8">
              Join 50,000 users who&apos;ve scanned 2M+ products to make informed decisions about their wellness journey.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6B9080] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333]">Personalized safety checks</div>
                  <div className="text-sm text-[#5F6368]">Based on your health profile and conditions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6B9080] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333]">Evidence-based ratings</div>
                  <div className="text-sm text-[#5F6368]">Powered by thousands of peer-reviewed studies</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6B9080] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333]">Interaction warnings</div>
                  <div className="text-sm text-[#5F6368]">Real-time alerts for medication conflicts</div>
                </div>
              </div>
            </div>

            {/* Stat Callout */}
            <div className="bg-[#6B9080]/10 border border-[#6B9080]/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#6B9080] mb-2">87%</div>
              <div className="text-[#2C3333] font-medium">of users avoided harmful interactions</div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90A4]/20 to-[#6B9080]/20 blur-3xl rounded-full"></div>
            <div className="relative w-[320px] h-[640px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-glow-teal">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#FAF9F6] px-6 pt-4 pb-2 flex justify-between items-center text-xs text-[#5F6368]">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-[#2C3333] rounded-sm"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="bg-[#FAF9F6] px-6 pt-2 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#6B9080] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <span className="font-bold text-lg text-[#2C3333]">SANA</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EAE7DC] flex items-center justify-center">
                      <span className="text-sm">SM</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#2C3333] mb-1">Scan Product</div>
                    <div className="text-sm text-[#5F6368]">Point your camera at the barcode</div>
                  </div>
                </div>

                {/* Scanner */}
                <div className="relative bg-[#1a1a1a] h-44 flex items-center justify-center overflow-hidden">
                  {/* Supplement Bottle */}
                  <div className="absolute w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">Mg</div>
                      <div className="text-[8px] text-amber-700">Magnesium</div>
                      <div className="text-[6px] text-amber-600">400mg</div>
                    </div>
                  </div>
                  {/* Scan Line */}
                  <div className="absolute inset-x-8 h-0.5 bg-[#4A90A4] scan-line shadow-[0_0_10px_#4A90A4]"></div>
                  {/* Frame */}
                  <div className="absolute inset-8 border-2 border-[#4A90A4]/50 rounded-xl">
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#4A90A4] rounded-tl-lg"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#4A90A4] rounded-tr-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#4A90A4] rounded-bl-lg"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#4A90A4] rounded-br-lg"></div>
                  </div>
                </div>

                {/* Results */}
                <div className="p-4 space-y-3 bg-white">
                  <div className="flex items-center gap-3 bg-[#FAF9F6] rounded-xl p-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-600">Mg</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#2C3333]">Magnesium Citrate</div>
                      <div className="text-sm text-[#5F6368]">400mg • Nature&apos;s Bounty</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-[#6B9080] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#6B9080]">9.2</div>
                        <div className="text-[8px] text-[#5F6368]">/10</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#6B9080] mb-1">Safe for you</div>
                      <div className="flex gap-0.5 mb-1">
                        {[1,2,3,4].map(i => <StarIcon key={i} />)}
                        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div className="text-xs text-[#5F6368]">Based on 5,847 studies</div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                    <span className="text-amber-500 text-lg">⚠</span>
                    <div className="text-sm text-amber-700">May interact with current medication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Evidence Engine Section
function EvidenceEngineSection() {
  return (
    <section id="evidence" className="py-24 bg-[#2C5F7B]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            See the evidence. Built from real outcomes.
          </h2>
          <p className="text-lg text-white/70">
            We&apos;re building the largest CAM outcomes database in history
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-white/70 text-sm">Select Condition:</span>
            <select className="bg-transparent text-white font-medium border-none focus:outline-none">
              <option>IBS</option>
              <option>Anxiety</option>
              <option>Chronic Pain</option>
              <option>Insomnia</option>
            </select>
          </div>
          <div className="flex gap-2">
            {['All Treatments', 'Herbal', 'Acupuncture', 'Nutrition'].map((filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-white text-[#2C5F7B]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-8">
          <div className="relative h-64 lg:h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-white/50">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            {/* Chart Area */}
            <div className="ml-12 h-full relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className="border-b border-white/10"></div>
                ))}
              </div>

              {/* Data Lines - SVG */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Herbal - Green */}
                <path
                  d="M 0 80 Q 20 70, 40 50 T 80 25 T 100 15"
                  fill="none"
                  stroke="#6B9080"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6B9080" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#6B9080" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 80 Q 20 70, 40 50 T 80 25 T 100 15 L 100 100 L 0 100 Z"
                  fill="url(#greenGradient)"
                />

                {/* Acupuncture - Teal */}
                <path
                  d="M 0 85 Q 25 75, 50 55 T 100 30"
                  fill="none"
                  stroke="#4A90A4"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4A90A4" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#4A90A4" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 85 Q 25 75, 50 55 T 100 30 L 100 100 L 0 100 Z"
                  fill="url(#tealGradient)"
                />

                {/* Nutrition - Earth */}
                <path
                  d="M 0 90 Q 30 80, 60 60 T 100 40"
                  fill="none"
                  stroke="#A4AC96"
                  strokeWidth="2"
                />

                {/* Glowing Data Points */}
                <circle cx="40" cy="50" r="4" fill="#6B9080" className="drop-shadow-[0_0_6px_#6B9080]" />
                <circle cx="80" cy="25" r="4" fill="#6B9080" className="drop-shadow-[0_0_6px_#6B9080]" />
                <circle cx="50" cy="55" r="4" fill="#4A90A4" className="drop-shadow-[0_0_6px_#4A90A4]" />
                <circle cx="100" cy="30" r="4" fill="#4A90A4" className="drop-shadow-[0_0_6px_#4A90A4]" />
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/50 transform translate-y-6">
                <span>Week 1</span>
                <span>Week 4</span>
                <span>Week 8</span>
                <span>Week 12</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6B9080]"></div>
              <span className="text-white text-sm">Herbal (78% effective)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4A90A4]"></div>
              <span className="text-white text-sm">Acupuncture (72% effective)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#A4AC96]"></div>
              <span className="text-white text-sm">Nutrition (65% effective)</span>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-[#4A90A4] mb-2">73%</div>
            <div className="text-white font-medium">Average Effectiveness</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-[#6B9080] mb-2">5,000</div>
            <div className="text-white font-medium">Real Treatments Tracked</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-[#A4AC96] mb-2">12</div>
            <div className="text-white font-medium">Week Average Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Clinical Assistant Section
function AIAssistantSection() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
            Meet your AI clinical assistant
          </h2>
          <p className="text-lg text-[#5F6368]">
            Generate professional SOAP notes in seconds, not hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-elevated p-6">
              {/* Controls */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex-1">
                  <label className="text-sm text-[#5F6368] mb-1 block">Select scenario:</label>
                  <select className="w-full bg-[#FAF9F6] border border-[#EAE7DC] rounded-xl px-4 py-3 text-[#2C3333] focus:outline-none focus:ring-2 focus:ring-[#4A90A4]">
                    <option>First visit for chronic fatigue</option>
                    <option>Follow-up for anxiety treatment</option>
                    <option>Initial IBS consultation</option>
                  </select>
                </div>
                <button className="bg-[#4A90A4] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#357080] transition-all btn-elevated flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">AI</span>
                  Generate SOAP Note
                </button>
              </div>

              {/* Output Panel */}
              <div className="bg-[#FAF9F6] rounded-xl p-6 font-mono text-sm relative">
                <button className="absolute top-4 right-4 text-[#5F6368] hover:text-[#2C3333] text-xs flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>

                <div className="space-y-4 text-[#2C3333]">
                  <div>
                    <div className="font-bold text-[#6B9080] mb-1">SUBJECTIVE:</div>
                    <p>Patient presents with persistent fatigue lasting 6 months. Reports feeling exhausted despite sleeping 8-9 hours nightly. Notes brain fog and difficulty concentrating at work. Previous medical workup unremarkable. Currently taking no medications. Diet consists mainly of processed foods with irregular meal timing.</p>
                  </div>
                  <div>
                    <div className="font-bold text-[#4A90A4] mb-1">OBJECTIVE:</div>
                    <p>Vital signs within normal limits. Patient appears fatigued with dark circles under eyes. Tongue pale with thin white coating. Pulse weak and thready, particularly in Spleen position<span className="typing-effect inline-block ml-1">|</span></p>
                  </div>
                  <div className="opacity-50">
                    <div className="font-bold text-[#A4AC96] mb-1">ASSESSMENT:</div>
                    <p className="text-[#5F6368]">Generating...</p>
                  </div>
                  <div className="opacity-30">
                    <div className="font-bold text-[#5F6368] mb-1">PLAN:</div>
                    <p className="text-[#5F6368]">Waiting...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-bold text-xl">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-[#2C3333]">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-[#5F6368]">Herbalist, London</div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4 text-[#4A90A4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-xs text-[#4A90A4] font-medium">SANA Verified</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-[#5F6368] italic leading-relaxed">
                &ldquo;SANA saves me 15 hours every week. I used to dread admin - now I actually have time to focus on my patients and grow my practice.&rdquo;
              </blockquote>
            </div>

            {/* Free Forever Badge */}
            <div className="bg-gradient-to-r from-[#6B9080] to-[#4A90A4] rounded-2xl p-6 text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-3">
                FREE FOREVER
              </div>
              <div className="text-white font-bold text-lg mb-4">
                AI Clinical Assistant included in every plan
              </div>
              <button className="bg-white text-[#2C3333] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors w-full">
                Get Your AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Section
function DashboardPreviewSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(1);

  const hotspots = [
    { id: 0, x: '8%', y: '35%', title: 'Smart SOAP Notes', description: 'AI-powered clinical documentation that learns your style' },
    { id: 1, x: '35%', y: '25%', title: 'Booking System', description: 'Seamless scheduling with automated reminders' },
    { id: 2, x: '75%', y: '30%', title: 'Dispensary', description: 'Curated supplements delivered to your clients' },
    { id: 3, x: '85%', y: '60%', title: 'Evidence Insights', description: 'Track outcomes and build your evidence base' },
    { id: 4, x: '15%', y: '70%', title: 'Records Management', description: 'Secure, compliant client records' },
  ];

  return (
    <section id="practitioners" className="py-24 bg-[#EAE7DC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
            Your complete practice management suite
          </h2>
          <p className="text-lg text-[#5F6368]">
            Everything you need to run a modern, evidence-based practice
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative bg-white rounded-2xl shadow-elevated overflow-hidden">
          {/* Dashboard UI Mockup */}
          <div className="relative p-4 lg:p-8">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6B9080] flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="hidden sm:flex items-center bg-[#FAF9F6] rounded-xl px-4 py-2 w-64">
                  <svg className="w-4 h-4 text-[#5F6368] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-[#5F6368] text-sm">Search clients, notes...</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#5F6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center text-white font-medium text-sm">
                  JC
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              {/* Sidebar */}
              <div className="hidden md:block w-16 space-y-4">
                {[
                  { icon: '📊', active: false },
                  { icon: '📅', active: true },
                  { icon: '👥', active: false },
                  { icon: '💊', active: false },
                  { icon: '📝', active: false },
                  { icon: '⚙️', active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg cursor-pointer transition-all ${
                      item.active ? 'bg-[#4A90A4]/10 shadow-sm' : 'hover:bg-[#FAF9F6]'
                    }`}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                <div className="text-lg font-semibold text-[#2C3333]">Today&apos;s Schedule</div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Appointments */}
                  <div className="space-y-3">
                    {[
                      { time: '9:00 AM', name: 'Sarah Mitchell', type: 'Initial Consultation', color: '#6B9080' },
                      { time: '10:30 AM', name: 'James Chen', type: 'Follow-up', color: '#4A90A4' },
                      { time: '2:00 PM', name: 'Emily Roberts', type: 'Treatment Session', color: '#A4AC96' },
                    ].map((apt, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#FAF9F6] rounded-xl p-4">
                        <div className="w-1 h-12 rounded-full" style={{ backgroundColor: apt.color }}></div>
                        <div className="flex-1">
                          <div className="font-medium text-[#2C3333]">{apt.name}</div>
                          <div className="text-sm text-[#5F6368]">{apt.type}</div>
                        </div>
                        <div className="text-sm font-medium text-[#5F6368]">{apt.time}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-[#FAF9F6] rounded-xl p-4 space-y-4">
                    <div className="text-sm font-medium text-[#5F6368]">This Week</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-[#6B9080]">12</div>
                        <div className="text-xs text-[#5F6368]">Appointments</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-[#4A90A4]">8</div>
                        <div className="text-xs text-[#5F6368]">New Clients</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-[#A4AC96]">94%</div>
                        <div className="text-xs text-[#5F6368]">Show Rate</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-[#2C3333]">4.9</div>
                        <div className="text-xs text-[#5F6368]">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute cursor-pointer"
                style={{ left: hotspot.x, top: hotspot.y }}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              >
                <div className={`w-6 h-6 rounded-full bg-[#4A90A4] pulse-dot flex items-center justify-center ${
                  activeHotspot === hotspot.id ? 'ring-4 ring-[#4A90A4]/30' : ''
                }`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Tooltip */}
                {activeHotspot === hotspot.id && (
                  <div className="absolute left-8 top-0 bg-white rounded-xl shadow-elevated p-4 w-64 z-10">
                    <div className="font-semibold text-[#2C3333] mb-1">{hotspot.title}</div>
                    <div className="text-sm text-[#5F6368]">{hotspot.description}</div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-[#5F6368]">{hotspot.id + 1}/5</span>
                      <button className="text-xs text-[#4A90A4] font-medium">Next →</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-24 gradient-sage">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-white/80">
            Start free, upgrade when you&apos;re ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-elevated transition-all">
            <div className="inline-block bg-[#EAE7DC] px-3 py-1 rounded-full text-xs font-medium text-[#5F6368] mb-4">
              Free Forever
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-[#2C3333]">£0</span>
              <span className="text-[#5F6368]">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'AI Clinical Assistant',
                'SANA Verified Badge',
                '5 scans/month',
                '25 client records',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#5F6368]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full border-2 border-[#2C3333] text-[#2C3333] py-3 rounded-full font-semibold hover:bg-[#2C3333] hover:text-white transition-all">
              Start Free
            </button>
          </div>

          {/* Professional Plan - Featured */}
          <div className="relative bg-white rounded-2xl shadow-elevated p-8 ring-2 ring-[#4A90A4] transform lg:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4A90A4] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span>⭐</span> MOST POPULAR
            </div>

            <div className="inline-block bg-[#4A90A4]/10 px-3 py-1 rounded-full text-xs font-medium text-[#4A90A4] mb-4">
              Professional
            </div>
            <div className="mb-2">
              <span className="text-5xl font-bold text-[#2C3333]">£19</span>
              <span className="text-[#5F6368]">/month</span>
            </div>
            <div className="text-sm text-[#5F6368] mb-4">
              <span className="line-through">£49</span>
              <span className="ml-2 text-[#6B9080] font-medium">Founding Member Pricing</span>
            </div>
            <div className="bg-[#6B9080]/10 rounded-lg p-2 text-center text-sm text-[#6B9080] font-medium mb-6">
              First 1,000 practitioners only
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Everything in Free',
                'Unlimited records & scans',
                'Booking system',
                'Marketplace access',
                'Evidence insights',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#2C3333] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#4A90A4] text-white py-3 rounded-full font-semibold shadow-lg hover:bg-[#357080] transition-all btn-elevated">
              Join First 1,000
            </button>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[#5F6368] mb-1">
                <span>487/1,000 claimed</span>
                <span>51% remaining</span>
              </div>
              <div className="h-2 bg-[#EAE7DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#4A90A4] rounded-full progress-fill" style={{ width: '49%' }}></div>
              </div>
            </div>
          </div>

          {/* Practice Plan */}
          <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-elevated transition-all">
            <div className="inline-block bg-[#EAE7DC] px-3 py-1 rounded-full text-xs font-medium text-[#5F6368] mb-4">
              Practice
            </div>
            <div className="mb-6">
                <span className="text-5xl font-bold text-[#2C3333]">£99</span>
                <span className="text-[#5F6368]">/month</span>
              </div>

            <ul className="space-y-4 mb-8">
              {[
                'Everything in Professional',
                'Up to 10 practitioners',
                'Team features',
                'Advanced analytics',
                'Priority support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#5F6368]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full border-2 border-[#2C3333] text-[#2C3333] py-3 rounded-full font-semibold hover:bg-[#2C3333] hover:text-white transition-all">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="text-center mt-8 space-y-4">
          <p className="text-white/80 text-sm">
            All plans include all features • Cancel anytime
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payments
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              GDPR compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: 'James Chen',
      role: 'Acupuncturist',
      location: 'London, UK',
      quote: 'SANA transformed my practice. I\'m actually helping people instead of drowning in admin.',
      image: 'JC'
    },
    {
      name: 'Dr. Emma Watson',
      role: 'Naturopath',
      location: 'Manchester, UK',
      quote: 'The evidence tracking has completely changed how I communicate with my clients about their progress.',
      image: 'EW'
    },
    {
      name: 'Michael Torres',
      role: 'Herbalist',
      location: 'Bristol, UK',
      quote: 'Finally, a platform that understands what CAM practitioners actually need.',
      image: 'MT'
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3333] mb-4">
            Trusted by practitioners worldwide
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['All Stories', 'Practitioners', 'Clients', 'By Condition'].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? 'bg-[#4A90A4] text-white'
                  : 'bg-[#EAE7DC] text-[#5F6368] hover:bg-[#4A90A4]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-[#6B9080] to-[#4A90A4] flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20"></div>
                      {/* Play Button */}
                      <div className="relative w-20 h-20 rounded-full bg-[#4A90A4]/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <PlayIcon />
                      </div>
                      {/* Quote Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <blockquote className="text-white text-xl lg:text-2xl font-medium italic mb-4">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                            {testimonial.image}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{testimonial.name}</div>
                            <div className="text-white/70 text-sm">{testimonial.role} • {testimonial.location}</div>
                          </div>
                          <div className="ml-auto flex items-center gap-1 bg-[#4A90A4] px-3 py-1 rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            <span className="text-white text-xs font-medium">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FAF9F6] transition-colors"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => setActiveSlide(Math.min(testimonials.length - 1, activeSlide + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FAF9F6] transition-colors"
          >
            <ChevronRightIcon />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index ? 'bg-[#4A90A4] w-8' : 'bg-[#EAE7DC]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24 gradient-cta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Network Lines */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="1"
              fill="white"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Join the natural healing revolution
        </h2>
        <p className="text-xl text-white/80 mb-10">
          Start building your evidence-based practice today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-[#2C3333] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition-all">
            I&apos;m a Practitioner - Start Free
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            I&apos;m Seeking Wellness - Download App
          </button>
        </div>

        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
          <span className="text-yellow-300">⚡</span>
          <span className="text-white font-medium">First 1,000 practitioners get £19/month lifetime pricing</span>
        </div>

        <p className="text-white/60 text-sm">
          No credit card required • 14-day full access
        </p>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-[#2C3333] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-[#6B9080] font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">SANA</span>
            </div>
            <p className="text-white/60 text-sm mb-6">
              The operating system for natural healing
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4A90A4] transition-colors"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex gap-3 mt-6">
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs">
                <div className="text-white/60">Download on</div>
                <div className="font-medium">App Store</div>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs">
                <div className="text-white/60">Get it on</div>
                <div className="font-medium">Google Play</div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay updated</h4>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A90A4] placeholder-white/40"
              />
              <button className="bg-[#4A90A4] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#357080] transition-colors">
                Subscribe
              </button>
            </div>

            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 SANA Technologies Ltd. Building the future of CAM.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
            <a href="#" className="hover:text-white transition-colors">support@sanatech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Mobile Sticky CTA
function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EAE7DC] p-4 md:hidden z-50 shadow-lg">
      <button className="w-full bg-[#4A90A4] text-white py-3 rounded-full font-semibold shadow-lg">
        Start Your Free Practice
      </button>
    </div>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <ProductScannerSection />
      <EvidenceEngineSection />
      <AIAssistantSection />
      <DashboardPreviewSection />
      <PricingSection />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
