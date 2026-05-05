export default function TaglineBanner() {
  return (
    <section
      className="w-full py-14 sm:py-16"
      style={{
        background: "linear-gradient(135deg, #2a5040 0%, #3a6050 50%, #264838 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f0ece3] font-semibold leading-tight mb-4">
          Your labs may be &ldquo;normal.&rdquo;<br />That doesn&apos;t mean optimal.
        </h2>
        <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-4" />
        <p className="text-[#f0ece3]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We look for patterns tied to energy, hormones, metabolism, inflammation, and overall health — not just isolated numbers.
        </p>
      </div>
    </section>
  );
}
