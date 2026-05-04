import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Top — plant image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh]">
        <Image
          src="/images/hero-plants.jpg"
          alt="Green plants in beige planter"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B3A2A]" />
      </div>

      {/* Bottom — text on dark green */}
      <div className="bg-[#1B3A2A] px-6 pb-16 pt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Built on Research.<br />
            <span className="text-[#C9A84C] italic">Not Guesswork.</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md mx-auto">
            Most lab reviews focus on individual numbers. We look at how your body works together.
          </p>

          <a
            href="#signup"
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1B3A2A] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-lg mb-4"
          >
            Upload Your Labs
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <div className="flex items-center justify-center gap-4 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              Takes 2 minutes
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure & private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
