export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full page background image */}
      <img
        src="/images/hero-scene.jpg"
        alt="Rooted Clarity Health"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Text — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-16 pb-16 sm:pb-24 max-w-2xl">

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-5">
          Understand What Your<br />
          <span className="text-[#C9A84C]">Labs Are Actually Saying</span>
        </h1>

        <ul className="mb-8 space-y-2">
          {[
            "A clear breakdown of your labs",
            "Patterns across your entire body",
            "A step-by-step plan for what to do next",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-white/85 text-base sm:text-lg">
              <span className="text-[#C9A84C] font-bold flex-shrink-0">✔</span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="/upload"
          className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-md text-base uppercase tracking-widest shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
        >
          Upload Your Labs (Takes 2 Minutes)
        </a>

      </div>
    </section>
  );
}
