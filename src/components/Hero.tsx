export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh", maxHeight: "95vh" }}>
      {/* Full background image */}
      <img
        src="/images/hero-scene.jpg"
        alt="Rooted Clarity Health"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Text — anchored to bottom left, with top padding clearance for nav */}
      <div className="absolute inset-0 z-10 flex items-end px-8 sm:px-16 pb-14 sm:pb-20 pt-28">
        <div className="max-w-xl">

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-[1.15] mb-5">
            Understand What Your<br />
            <span className="text-[#C9A84C]">Labs Are Actually Saying</span>
          </h1>

          <ul className="mb-7 space-y-2">
            {[
              "A clear breakdown of your labs",
              "Patterns across your entire body",
              "A step-by-step plan for what to do next",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-white/85 text-sm sm:text-base">
                <span className="text-[#C9A84C] font-bold flex-shrink-0">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="/upload"
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1a1a1a] font-bold px-9 py-4 rounded-md text-sm uppercase tracking-widest shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 mb-3"
          >
            Start My Review
          </a>
          <p className="text-white/40 text-xs italic">Upload labs, symptoms, and health concerns for a personalized wellness review.</p>

        </div>
      </div>
    </section>
  );
}
