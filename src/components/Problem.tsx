export default function Problem() {
  return (
    <section id="problem" className="bg-green-900">

      {/* Top: headline + bullets with image */}
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            The Missing Link Between Your Labs{" "}
            <span className="text-[#C9A84C]">and Your Health</span>
          </h2>
          <div className="w-8 h-0.5 bg-[#C9A84C] mb-8" />
          <div className="space-y-5">
            {[
              { icon: "📋", text: <>You get your bloodwork back and are told <span className="text-[#C9A84C] font-medium">everything looks normal.</span></> },
              { icon: "🙁", text: "But you still do not feel like yourself." },
              { icon: "⚡", text: <>You feel <span className="text-[#C9A84C] font-medium">tired. Foggy. Off.</span></> },
              { icon: "❓", text: <>You know something is <span className="text-[#C9A84C] font-medium">not right</span>, even when the numbers seem fine.</> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-lg">
                  {item.icon}
                </div>
                <p className="text-green-100 leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — lab image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
            alt="Laboratory report with pen and coffee"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Middle white card */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-[#f5f0e8] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-5xl flex-shrink-0">🧩</div>
          <div>
            <p className="text-gray-700 leading-relaxed mb-2">
              That is because health is not always found in one marker alone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Real insight comes from understanding how your labs work together — and what they may be revealing about the{" "}
              <span className="text-green-700 font-medium">bigger metabolic picture</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA card */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#1a3a1a] rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">🔬</div>
          <h3 className="text-2xl font-bold text-white mb-2">That&apos;s exactly what we do.</h3>
          <p className="text-green-200 mb-6 leading-relaxed">
            We connect the dots so you can finally get{" "}
            <span className="text-[#C9A84C]">clear answers</span> and{" "}
            <span className="text-[#C9A84C]">feel like yourself again</span>.
          </p>
          <a
            href="#signup"
            className="inline-block bg-[#C9A84C] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#b8944c] transition-colors text-sm tracking-wide"
          >
            See What Your Labs Are Really Saying
          </a>
          <div className="flex items-center justify-center gap-6 mt-4 text-green-400 text-xs">
            <span className="flex items-center gap-1">🔒 Secure & Private</span>
            <span className="text-green-600">|</span>
            <span className="flex items-center gap-1">🛡️ HIPAA Compliant</span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-green-300/60 text-xs italic">🌿 Clarity in your labs. Confidence in your health.</p>
      </div>

    </section>
  );
}
