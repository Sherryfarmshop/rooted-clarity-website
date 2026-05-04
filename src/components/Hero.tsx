import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Hero — background image with text overlay */}
      <div className="relative w-full min-h-[85vh] flex items-center">
        <Image
          src="/images/hero-bg-new.jpg"
          alt="Dark green background with leaf branch"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-20">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6 max-w-xl">
            Built on Research.<br />
            Not Guesswork.
          </h1>

          <div className="w-10 h-0.5 bg-[#C9A84C] mb-6" />

          <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8">
            Most lab reviews focus on individual numbers.<br />
            We look at how your body works together.
          </p>

          <a
            href="#signup"
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1B3A2A] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-lg mb-4"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Your Labs
          </a>

          <div className="flex items-center gap-4 text-white/50 text-sm">
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
              Secure &amp; private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
