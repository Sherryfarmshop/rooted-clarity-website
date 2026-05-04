export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Full background image */}
      <img
        src="/images/hero-scene.jpg"
        alt="Rooted Clarity Health"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-24 w-full">
        <div className="max-w-lg">
          {/* Headline */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl text-white font-bold leading-[1.0] mb-6">
            Built on<br />
            Research.<br />
            <span className="text-[#C9A84C]">Not Guesswork.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-10 max-w-xs">
            Personalized lab insights so you can understand your body and take action with confidence.
          </p>

          {/* CTA Button */}
          <a
            href="#signup"
            className="inline-flex items-center gap-4 bg-[#C9A84C] text-[#1B1B1B] font-bold px-8 py-4 rounded-md hover:bg-[#b8944c] transition-colors text-sm uppercase tracking-widest mb-12"
          >
            Get My Results
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust icons */}
          <div className="flex items-center gap-8 text-white/70 text-xs">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Research Driven</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <circle cx="12" cy="12" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <span>Personalized Insights</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
              </svg>
              <span>Actionable Steps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
