import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* HERO — dark green, two column */}
      <section className="bg-[#1B3A2A] pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-end min-h-[70vh]">

          {/* Left — text */}
          <div className="py-16 md:py-24">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight mb-5">
              Built on Research.<br />
              Not Guesswork.
            </h1>
            <div className="w-12 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-sm">
              Most lab reviews focus on individual numbers.<br />
              We look at how your body works together.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1B3A2A] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-lg mb-5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Your Labs
            </a>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                Takes 2 minutes
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure &amp; private
              </span>
            </div>
          </div>

          {/* Right — plant + vase photo, flush to bottom */}
          <div className="hidden md:flex items-end justify-center h-full">
            <div className="relative w-full max-w-sm h-[500px]">
              <Image
                src="/images/hero-plants.jpg"
                alt="Green plant in beige vase"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* "Where most stop" — ivory */}
      <section className="bg-[#f0ece3] px-6 py-20 sm:py-28 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-5">
          Where most stop<br />
          at &ldquo;normal,&rdquo;<br />
          we go further.
        </h2>
        <div className="w-8 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
        <p className="text-gray-500 text-lg">
          We look for patterns, not just numbers.
        </p>
      </section>
    </>
  );
}
