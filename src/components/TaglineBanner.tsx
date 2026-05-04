export default function TaglineBanner() {
  return (
    <section
      className="w-full py-16 sm:py-20"
      style={{
        background: "linear-gradient(135deg, #1e3d2a 0%, #2a4d36 50%, #1a3826 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">

        {/* Mountain icon */}
        <div className="flex-shrink-0">
          <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="#C9A84C" strokeWidth="1.5" />
            <path d="M20 58 L40 24 L60 58" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            <path d="M28 58 L40 36 L52 58" stroke="#C9A84C" strokeWidth="1" strokeLinejoin="round" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f0ece3] font-semibold leading-tight mb-3">
            Where most stop at &ldquo;normal,&rdquo; we go further.
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mb-3 mx-auto sm:mx-0" />
          <p className="text-[#C9A84C] text-base sm:text-lg" style={{ opacity: 0.85 }}>
            We look for patterns, not just numbers.
          </p>
        </div>

      </div>
    </section>
  );
}
