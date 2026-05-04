import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      {/* Background — dark green with plant/leaf photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2A]/95 via-[#1B3A2A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-20">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-8 max-w-xl">
          Built on Research.<br />
          <span className="text-white">Not Guesswork.</span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-md mb-10">
          Most lab reviews focus on individual numbers.<br />
          We look at how your body works together.
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

        <div className="flex items-center gap-4 text-white/60 text-sm">
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
    </section>
  );
}
