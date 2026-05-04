import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 bg-[#f5f0e8]">

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-5xl w-full">
        <span className="inline-block px-5 py-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold uppercase tracking-widest rounded-full mb-2">
          Coming Soon
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Your Labs Tell a Story.{" "}
          <span className="text-green-800">Understand It with Clarity.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Upload your bloodwork and explore wellness-focused insights, metabolic
          patterns, and personalized guidance to help you better understand your body.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#signup"
            className="px-8 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors text-lg"
          >
            Get Started
          </a>
          <a
            href="#problem"
            className="px-8 py-3 border border-gray-400 text-gray-700 rounded-lg hover:border-green-800 hover:text-green-800 transition-colors text-lg"
          >
            Learn More
          </a>
        </div>

        {/* Laptop image */}
        <div className="relative w-full max-w-3xl mt-8 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-laptop.jpg"
            alt="Rooted Clarity app showing lab results dashboard"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-10 animate-bounce">
        <svg className="w-6 h-6 text-green-800/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
