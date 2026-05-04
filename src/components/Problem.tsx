export default function Problem() {
  return (
    <section id="problem">

      {/* TOP: Dark green with headline + bullets on left, photo on right */}
      <div className="bg-[#1B3A2A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-0 grid md:grid-cols-2 gap-8 items-start">

          {/* Left — headline + bullets */}
          <div className="pb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              The Missing Link<br />Between Your Labs<br />
              <span className="text-[#C9A84C]">and Your Health</span>
            </h2>

            <div className="space-y-4 mt-6">
              {[
                <>You&apos;re told everything looks <span className="text-[#C9A84C]">&ldquo;normal.&rdquo;</span></>,
                <>But you don&apos;t feel like yourself.</>,
                <>You know something is off.</>,
              ].map((text, i) => (
                <p key={i} className="text-green-100 text-lg leading-relaxed">{text}</p>
              ))}
            </div>
          </div>

          {/* Right — lab photo, flush to top and right */}
          <div className="hidden md:block relative h-full min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              alt="Lab report with coffee and plants"
              className="absolute inset-0 w-full h-full object-cover rounded-tl-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c3320] via-[#1c3320]/20 to-transparent rounded-tl-2xl" />
          </div>
        </div>
      </div>

      {/* MIDDLE: Centered statement */}
      <div className="bg-[#f5f0e8] px-6 py-20 sm:py-24 text-center">
        <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B3A2A] leading-tight">
          Your labs don&apos;t exist in isolation.<br />
          Your body works as a system.
        </p>
      </div>

      {/* BOTTOM: Dark CTA card */}
      <div className="bg-[#f5f0e8] px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B3A2A] rounded-2xl p-8">
            <div className="flex flex-col items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">We connect the dots.</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-6">
                  We connect the dots so you can finally get{" "}
                  <span className="text-[#C9A84C]">clear answers</span> and{" "}
                  <span className="text-[#C9A84C]">feel like yourself again.</span>
                </p>
                <a
                  href="#signup"
                  className="inline-block w-full sm:w-auto text-center bg-[#C9A84C] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#b8944c] transition-colors text-sm tracking-wide"
                >
                  Upload Your Labs (Takes 2 Minutes)
                </a>
                <div className="flex items-center gap-6 mt-4 text-green-400 text-xs">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Secure & Private
                  </span>
                  <span className="text-green-600">|</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    HIPAA Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-[#f5f0e8] border-t border-gray-200 py-4 text-center">
        <p className="text-gray-400 text-xs italic flex items-center justify-center gap-2">
          <span>🌿</span> Clarity in your labs. Confidence in your health.
        </p>
      </div>

    </section>
  );
}
