export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="relative bg-[#f0ece3] overflow-hidden">

      {/* Olive branch top right */}
      <div className="absolute top-0 right-0 w-64 h-80 pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80"
          alt=""
          className="w-full h-full object-cover object-left-bottom opacity-80"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Label */}
        <p className="text-center text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-2">Why Rooted Clarity</p>
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

        {/* Intro line */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-full bg-[#8B6914]/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[#8B6914]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
            </svg>
          </div>
          <p className="text-gray-700 text-lg">You&apos;re not crazy. Your labs are missing the full picture.</p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5m4 0h6m-6 0v3m6-3h4m-4 0v3M5 3v3m14-3v3M5 6h14M5 6a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2M5 12v3m14-3v3M5 15h14M5 15a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2" />
                </svg>
              ),
              title: "We Look Beyond \u201cNormal\u201d",
              body: <>Most providers check ranges. We analyze how your labs <strong>work together.</strong></>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 7.5l3 3" />
                  <ellipse cx="16" cy="16" rx="3" ry="5" transform="rotate(-45 16 16)" strokeLinecap="round"/>
                </svg>
              ),
              title: "No Guesswork Supplements",
              body: <>You get <strong>exact</strong> products.<br />You get <strong>exact</strong> dosages.</>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h3M6 6V3m0 3v12m0 0H3m3 0a2 2 0 104 0H6zm7-9s-1 2-1 4 1 4 1 4M13 6s1 2 1 4-1 4-1 4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7c1.5 1 2 3 1.5 5s-2 3-2 3" />
                </svg>
              ),
              title: "Nutrition That Matches Your Labs",
              body: <>Not trends. Not fads.<br />What your body <strong>actually</strong> needs.</>
            },
            {
              icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <circle cx="12" cy="9" r="3" strokeWidth={1.2}/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v1m0 4v1m-3-3h1m4 0h1" />
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
        <div className="bg-[#1c3320] rounded-2xl px-8 py-10 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80')] bg-cover bg-right" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
            {/* Circle icon */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#C9A84C]/60 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4m0 0A7 7 0 105 5a7 7 0 0012 12z" />
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
