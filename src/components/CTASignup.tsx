export default function CTASignup() {
  return (
    <section
      id="signup"
      className="relative px-6 py-28 sm:py-36 text-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0e2218 0%, #1B3A2A 40%, #152d20 80%, #0e2218 100%)",
      }}
    >
      {/* Soft warm glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Fog/light rays layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(14,34,24,0.6), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[#C9A84C]/70 text-xs font-normal uppercase tracking-widest mb-6">
          Rooted Clarity Health
        </p>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
          Finally understand<br />
          what your body has<br />
          <span className="text-[#C9A84C]">been trying to say.</span>
        </h2>

        {/* Supporting paragraph */}
        <p className="text-green-200/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          We connect the patterns behind your symptoms, labs, energy, metabolism, and overall health — so you can stop guessing and start understanding.
        </p>

        {/* Gold CTA button */}
        <a
          href="#"
          className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-12 py-5 rounded-xl text-base uppercase tracking-widest mb-5 transition-all duration-300 hover:bg-[#b0873a] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
          style={{ boxShadow: "0 4px_20px_rgba(201,168,76,0.2)" }}
        >
          Upload My Labs
        </a>

        {/* Reassurance line */}
        <p className="text-green-300/50 text-sm">
          No subscriptions. No overwhelm. Just clarity.
        </p>

      </div>
    </section>
  );
}
