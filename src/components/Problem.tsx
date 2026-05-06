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
      <div className="bg-[#f5f0e8] px-6 pt-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B3A2A] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">We connect the dots.</h3>
              <p className="text-green-200/80 text-sm leading-relaxed">
                We help connect patterns across your labs so you can better understand what your body is telling you.
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              <a
                href="/upload"
                className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-8 py-3 rounded-lg text-sm shadow-lg ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Start My Review
              </a>
              <p className="text-green-400/50 text-xs mt-2">Secure &amp; Private · HIPAA Compliant</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
