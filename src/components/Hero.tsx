import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f5f0e8] min-h-screen flex items-center pt-20 pb-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          <span className="inline-block w-fit px-4 py-1.5 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest rounded-full">
            Coming Soon
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Your Labs<br />Tell a Story.<br />
            <span className="text-[#8B6914] italic">Understand It<br />with Clarity.</span>
          </h1>

          <div className="w-8 h-0.5 bg-[#8B6914]" />

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
            Upload your bloodwork and explore wellness-focused insights, metabolic patterns, and personalized guidance to help you better understand your body.
          </p>

          <div className="flex flex-col gap-3 max-w-xs">
            <a
              href="#signup"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-950 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Your Labs
            </a>
            <a
              href="#problem"
              className="flex items-center justify-center px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:border-green-900 hover:text-green-900 transition-colors text-sm"
            >
              Learn More
            </a>
          </div>

          <p className="text-xs text-gray-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure. Private. Your data is safe with us.
          </p>
        </div>

        {/* Right — Laptop image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
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
    </section>
  );
}
