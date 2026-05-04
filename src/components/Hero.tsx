export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full page background image */}
      <img
        src="/images/hero-scene.jpg"
        alt="Rooted Clarity Health"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay — bottom heavy so text on bottom left is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Text — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-16 pb-16 sm:pb-24 max-w-2xl">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight mb-4">
          Built on Research.<br />
          <span className="text-[#C9A84C]">Not Guesswork.</span>
        </h1>
        <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
          Personalized lab insights so you can understand your body and take action with confidence.
        </p>
        <a
          href="#signup"
          className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1B1B1B] font-bold px-8 py-4 rounded-md hover:bg-[#b8944c] transition-colors text-sm uppercase tracking-widest"
        >
          Upload Your Labs (Takes 2 Minutes)
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
