export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="relative bg-[#f0ece3] overflow-hidden">

      {/* Olive branch top right */}
      <div className="absolute top-0 right-0 w-64 h-80 pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80"
          alt=""
          className="w-full h-full object-cover object-left-bottom opacity-80"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Label — slightly larger */}
        <p className="text-center text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-2">Why Rooted Clarity</p>
        <div className="w-8 h-px bg-[#8B6914] mx-auto mb-5" />

        {/* Headline */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Why You Still Don&apos;t Have Answers<br />
          <span className="italic">(And What We Do <span className="text-[#8B6914]">Differently)</span></span>
        </h2>

        {/* Leaf divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-px bg-[#8B6914]/50" />
          <svg className="w-4 h-4 text-[#8B6914]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
          </svg>
          <div className="w-10 h-px bg-[#8B6914]/50" />
        </div>

        {/* Intro line — leaf icon */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-9 h-9 rounded-full bg-[#eae6dd] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#4a6741]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
            </svg>
          </div>
          <p className="text-gray-700 text-lg">You&apos;re not crazy. Your labs are missing the full picture.</p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {/* Card 1 — DNA */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#eae6dd] flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 3c0 0 0 3 2.5 4.5S15 9 15 12s-3 4-5.5 5.5S7 21 7 21" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 3c0 0 0 3-2.5 4.5S9 9 9 12s3 4 5.5 5.5S17 21 17 21" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.5h9M7.5 17.5h9M6 10.5h3M15 10.5h3M6 13.5h3M15 13.5h3" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">We Look Beyond &ldquo;Normal&rdquo;</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Most providers check ranges. We analyze how your labs <strong>work together.</strong></p>
            </div>
          </div>

          {/* Card 2 — Pill capsule */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#eae6dd] flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.5l-4 4a4 4 0 005.657 5.657l4-4A4 4 0 0010.5 6.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l3-3" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">No Guesswork Supplements</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">You get <strong>exact</strong> products.<br />You get <strong>exact</strong> dosages.</p>
            </div>
          </div>

          {/* Card 3 — Fork + leaf */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#eae6dd] flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v5m0 0a2 2 0 004 0m-4 0a2 2 0 000 4v9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7c0-2 1.5-4 4-4 0 4-1 6-4 7v10" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Nutrition That Matches Your Labs</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Not trends. Not fads.<br />What your body <strong>actually</strong> needs.</p>
            </div>
          </div>

          {/* Card 4 — Microscope */}
          <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#eae6dd] flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[#3d5c3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 4h4v8h-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a2 2 0 100-4 2 2 0 000 4z" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Built on Real Science</h3>
              <div className="w-6 h-px bg-[#8B6914] mb-2" />
              <p className="text-gray-500 text-sm leading-relaxed">Our protocols are based on <strong>real</strong> research and clinical <strong>experience.</strong> Not opinions. Not trends.</p>
            </div>
          </div>
        </div>

        {/* Dark CTA banner */}
        <div className="bg-[#1c3320] rounded-2xl px-8 py-10 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80')] bg-cover bg-right" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#C9A84C]/60 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4m4 4l-4-4m4 4H3M21 3l-9 9-4-4-5 5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 3h-6M21 3v6" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-5">
                We connect the dots so you can finally get{" "}
                <span className="text-[#C9A84C] font-bold">clear answers</span> and{" "}
                <span className="text-[#C9A84C] font-bold italic">feel like yourself again.</span>
              </p>
              <a
                href="#signup"
                className="inline-block bg-[#C9A84C] text-white font-bold px-10 py-3.5 rounded-lg hover:bg-[#b8944c] transition-colors text-sm tracking-wide mb-5 w-full sm:w-auto text-center"
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
