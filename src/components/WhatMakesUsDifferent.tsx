export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="relative bg-[#f0ece3] overflow-hidden">

      {/* Olive branch background image top right */}
      <div className="absolute top-0 right-0 w-72 h-96 opacity-60 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1620127807580-990c3eceChronicles?w=400&q=80"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Label + Headline */}
        <div className="text-center mb-12">
          <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">Why Rooted Clarity</p>
          <div className="w-8 h-px bg-[#8B6914] mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
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

          {/* Intro line */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B6914]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#8B6914]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
              </svg>
            </div>
            <p className="text-gray-700 text-lg">You&apos;re not crazy. Your labs are missing the full picture.</p>
          </div>
        </div>

        {/* 4 cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "We Look Beyond "Normal"",
              body: <>Most providers check ranges. We analyze how your labs <strong>work together.</strong></>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                </svg>
              ),
              title: "No Guesswork Supplements",
              body: <>You get <strong>exact</strong> products. You get <strong>exact</strong> dosages.</>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Nutrition That Matches Your Labs",
              body: <>Not trends. Not fads. What your body <strong>actually</strong> needs.</>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
              title: "Built on Real Science",
              body: <>Our protocols are based on <strong>real</strong> research and clinical <strong>experience.</strong> Not opinions. Not trends.</>
            },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                <div className="w-6 h-px bg-[#8B6914] mb-2" />
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark CTA banner */}
        <div className="bg-[#1c3320] rounded-2xl px-8 py-10 text-center relative overflow-hidden">
          {/* Subtle leaf background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80')] bg-cover bg-center" />
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full border border-[#C9A84C]/50 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
              We connect the dots so you can finally get{" "}
              <span className="text-[#C9A84C] font-bold">clear answers</span>{" "}
              and{" "}
              <span className="text-[#C9A84C] font-bold italic">feel like yourself again.</span>
            </p>
            <a
              href="#signup"
              className="inline-block bg-[#C9A84C] text-white font-bold px-10 py-3.5 rounded-lg hover:bg-[#b8944c] transition-colors text-base mb-6"
            >
              See What Your Labs Are Really Saying
            </a>
            <div className="flex items-center justify-center gap-6 text-green-300/70 text-xs">
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
    </section>
  );
}
