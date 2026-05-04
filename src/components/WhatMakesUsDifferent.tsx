export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="relative bg-[#f0ece3] overflow-hidden">

      {/* Olive branch SVG — top right corner, desktop only */}
      <div className="hidden md:block absolute top-0 right-0 w-80 h-[500px] pointer-events-none select-none opacity-20">
        <svg viewBox="0 0 300 500" fill="none" className="w-full h-full">
          <path d="M280 0 C260 80 220 140 180 200 C140 260 100 320 80 400 C70 440 65 480 60 500" stroke="#4a6741" strokeWidth="2" fill="none"/>
          <ellipse cx="240" cy="60" rx="20" ry="10" fill="#4a6741" transform="rotate(-30 240 60)"/>
          <ellipse cx="260" cy="40" rx="18" ry="9" fill="#4a6741" transform="rotate(-50 260 40)"/>
          <ellipse cx="220" cy="100" rx="22" ry="10" fill="#4a6741" transform="rotate(20 220 100)"/>
          <ellipse cx="250" cy="90" rx="18" ry="8" fill="#4a6741" transform="rotate(-40 250 90)"/>
          <ellipse cx="200" cy="150" rx="20" ry="10" fill="#4a6741" transform="rotate(-20 200 150)"/>
          <ellipse cx="230" cy="140" rx="18" ry="9" fill="#4a6741" transform="rotate(30 230 140)"/>
          <ellipse cx="180" cy="210" rx="22" ry="10" fill="#4a6741" transform="rotate(15 180 210)"/>
          <ellipse cx="210" cy="195" rx="16" ry="8" fill="#4a6741" transform="rotate(-35 210 195)"/>
          <ellipse cx="160" cy="270" rx="20" ry="10" fill="#4a6741" transform="rotate(-25 160 270)"/>
          <ellipse cx="190" cy="250" rx="18" ry="8" fill="#4a6741" transform="rotate(25 190 250)"/>
          <ellipse cx="140" cy="330" rx="22" ry="10" fill="#4a6741" transform="rotate(10 140 330)"/>
          <ellipse cx="170" cy="310" rx="16" ry="8" fill="#4a6741" transform="rotate(-30 170 310)"/>
          <ellipse cx="110" cy="390" rx="20" ry="10" fill="#4a6741" transform="rotate(-20 110 390)"/>
          <ellipse cx="140" cy="370" rx="18" ry="8" fill="#4a6741" transform="rotate(20 140 370)"/>
          <ellipse cx="90" cy="440" rx="18" ry="9" fill="#4a6741" transform="rotate(15 90 440)"/>
          <ellipse cx="115" cy="420" rx="16" ry="8" fill="#4a6741" transform="rotate(-25 115 420)"/>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Label */}
        <p className="text-center text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-2">Why Rooted Clarity</p>
        <div className="w-8 h-px bg-[#8B6914] mx-auto mb-6" />

        {/* Headline */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Why You Still Don&apos;t Have Answers<br />
          <span className="italic">(And What We Do <span className="text-[#8B6914]">Differently)</span></span>
        </h2>

        {/* Leaf divider */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="w-10 h-px bg-[#8B6914]/50" />
          <svg className="w-4 h-4 text-[#8B6914]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
          </svg>
          <div className="w-10 h-px bg-[#8B6914]/50" />
        </div>

        {/* Intro line */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-full bg-[#e5e0d5] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#4a6741]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
            </svg>
          </div>
          <p className="text-gray-700 text-base sm:text-lg">You&apos;re not crazy. Your labs are missing the full picture.</p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">

          {/* Card 1 — DNA */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#e8e3d8] flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 3s1 1.5 5 1.5S17 3 17 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21s1-1.5 5-1.5 5 1.5 5 1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 3c0 0-3 3-3 9s3 9 3 9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 3c0 0 3 3 3 9s-3 9-3 9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 8h13M5.5 16h13" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">We Look Beyond &ldquo;Normal&rdquo;</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Most providers check ranges.<br />We analyze how your labs <strong>work together.</strong></p>
            </div>
          </div>

          {/* Card 2 — Capsule */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#e8e3d8] flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <rect x="4" y="10" width="16" height="4" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h8" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">No Guesswork Supplements</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">You get <strong>exact</strong> products.<br />You get <strong>exact</strong> dosages.</p>
            </div>
          </div>

          {/* Card 3 — Fork + Leaf */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#e8e3d8] flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v4m0 0a2 2 0 000 4m0-4a2 2 0 010 4m0 0v10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 3v3M8 3v3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 8c1-3 4-5 6-4-1 3-3 6-6 7v6" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Nutrition That Matches Your Labs</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Not trends. Not fads.<br />What your body <strong>actually</strong> needs.</p>
            </div>
          </div>

          {/* Card 4 — Microscope */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#e8e3d8] flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h4v8H9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 12v3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 19h6" />
                <circle cx="11" cy="16" r="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4l2 2M15 4l-2 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Built on Real Science</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Our protocols are based on <strong>real</strong> research and clinical <strong>experience.</strong> Not opinions. Not trends.</p>
            </div>
          </div>

        </div>

        {/* Dark CTA banner */}
        <div className="bg-[#1B3A2A] rounded-2xl px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Circle chart icon */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
              <svg className="w-10 h-10 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="11" cy="11" r="6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 13l2-3 2 2 2-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4" />
              </svg>
            </div>
            {/* Text + button */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-5">
                We connect the dots so you can finally get{" "}
                <span className="text-[#C9A84C] font-bold">clear answers</span> and{" "}
                <span className="text-[#C9A84C] font-bold italic">feel like yourself again.</span>
              </p>
              <a
                href="#signup"
                className="inline-block w-full sm:w-auto text-center bg-[#C9A84C] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-base mb-5"
              >
                See What Your Labs Are Really Saying
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-5 text-green-300/70 text-xs flex-wrap">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Secure & Private
                </span>
                <span className="text-green-700">|</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  HIPAA Compliant
                </span>
                <span className="text-green-700">|</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Trusted by Patients
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
