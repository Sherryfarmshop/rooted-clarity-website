export default function TaglineBanner() {
  return (
    <section
      className="w-full py-24 sm:py-32"
      style={{
        background: "linear-gradient(135deg, #1e3d2a 0%, #2a4d36 50%, #1a3826 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f0ece3] font-semibold leading-tight mb-5">
          Where most stop at &ldquo;normal,&rdquo; we go further.
        </h2>
        <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-5" />
        <p className="text-[#f0ece3]/75 text-base sm:text-lg">
          We look for patterns, not just numbers.
        </p>
      </div>
    </section>
  );
}
