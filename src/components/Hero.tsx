import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      {/* Hero background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Ancient tree with deep roots in golden forest light"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        <Image
          src="/images/logo.jpg"
          alt="Rooted Clarity — Tree of Life"
          width={160}
          height={160}
          className="rounded-full shadow-2xl shadow-gold/20"
          priority
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight">
          Your Labs Tell a Story.{" "}
          <span className="text-gold">Understand It with Clarity.</span>
        </h1>

        <p className="text-lg sm:text-xl text-softwhite/80 max-w-2xl leading-relaxed">
          Upload your bloodwork. Get real answers. Metabolic health insights,
          alternative supplement protocols, and personalized wellness plans —
          backed by real science, not mainstream silence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#signup"
            className="px-8 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
          >
            Get Started
          </a>
          <a
            href="#problem"
            className="px-8 py-3 border border-softwhite/30 text-softwhite rounded-lg hover:border-gold hover:text-gold transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg className="w-6 h-6 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
