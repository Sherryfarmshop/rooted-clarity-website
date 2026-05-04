export default function CTASignup() {
  return (
    <section id="signup" className="bg-[#1B3A2A] px-6 py-28 sm:py-36 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
          This is where things start to make sense.
        </h2>
        <p className="text-green-200/80 text-lg leading-relaxed mb-10">
          Upload your labs and finally understand what your body has been trying to tell you.
        </p>
        <a
          href="#"
          className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 mb-5"
        >
          Upload Your Labs (Takes 2 Minutes)
        </a>
        <p className="text-green-300/50 text-sm">
          No subscriptions. No confusion. Just clarity.
        </p>
      </div>
    </section>
  );
}
