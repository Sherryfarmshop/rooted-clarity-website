export default function TaglineBanner() {
  return (
    <section
      className="w-full py-32 sm:py-40"
      style={{
        background: "linear-gradient(135deg, #2a5040 0%, #3a6050 50%, #264838 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#f0ece3] font-semibold leading-tight mb-6">
          Where most stop at &ldquo;normal,&rdquo; we go further.
        </h2>
        <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
        <p className="text-[#f0ece3]/70 text-base sm:text-lg">
          We look for patterns, not just numbers.
        </p>
      </div>
    </section>
  );
}
