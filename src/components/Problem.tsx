export default function Problem() {
  return (
    <section id="problem">

      {/* Dark green — headline + copy */}
      <div className="bg-[#1B3A2A] px-6 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              The Missing Link Between Your Labs<br />
              <span className="text-[#C9A84C]">and Your Health</span>
            </h2>

            <div className="space-y-3 mb-5 max-w-sm">
              <p className="text-green-100 text-lg">
                You&apos;re told everything looks &ldquo;normal.&rdquo;<br />
                But you don&apos;t feel like yourself.
              </p>
              <p className="text-green-100 text-lg">
                Your body works as a connected system — not isolated numbers.
              </p>
            </div>

            <p className="text-green-200/75 text-base leading-relaxed max-w-sm">
              We look for patterns tied to hormones, metabolism, inflammation, energy, and overall health.
            </p>
          </div>

          {/* Right — lab photo */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/lab-results.jpg"
                alt="Hands reviewing lab results with handwritten notes"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <p className="text-gray-400 text-sm italic mt-3 text-center">
              This is what most people are left with — numbers, no answers.
            </p>
          </div>

        </div>
      </div>

      {/* CTA box */}
      <div className="bg-[#f5f0e8] px-6 pt-14 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B3A2A] rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-3">We connect the dots.</h3>
            <p className="text-green-200 text-sm leading-relaxed mb-6">
              We help connect patterns across your labs so you can better understand what your body is telling you.
            </p>
            <a
              href="/upload"
              className="inline-block w-full sm:w-auto text-center bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 mb-2"
            >
              Start My Review
            </a>
            <p className="text-green-300/60 text-xs italic mb-4">Upload labs, symptoms, and health concerns for a personalized wellness review.</p>
            <div className="flex items-center gap-6 text-green-400 text-xs mt-2">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure &amp; Private
              </span>
              <span className="text-green-600">|</span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                HIPAA Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
