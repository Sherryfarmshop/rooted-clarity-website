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

            {/* Leaf divider */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]/50" />
              <svg className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.5 7.5 6 9.5" strokeLinecap="round"/>
                <path d="M12 2c2.5 4 2.5 8 0 12" strokeLinecap="round"/>
                <path d="M12 2c-2.5 4-2.5 8 0 12" strokeLinecap="round"/>
              </svg>
              <div className="w-8 h-px bg-[#C9A84C]/50" />
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  text: <>You get your bloodwork back and are told <span className="text-[#C9A84C]">everything looks normal.</span></>
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  text: <>But you still<br />do not feel like yourself.</>
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  text: <>You feel <span className="text-[#C9A84C]">tired.<br />Foggy. Off.</span></>
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: <>You know something is <span className="text-[#C9A84C]">not right</span>,<br />even when the numbers seem fine.</>
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                    {item.icon}
                  </div>
                  <p className="text-green-100 text-sm leading-relaxed pt-2">{item.text}</p>
                </div>
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

      {/* MIDDLE: Cream puzzle card */}
      <div className="bg-[#f5f0e8] px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start shadow-sm">
            {/* Puzzle illustration */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 relative">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  {/* Gold puzzle piece */}
                  <path d="M10 10 h20 q0-8 8-8 q8 0 8 8 h0 v20 h-36z" fill="#C9A84C" opacity="0.9"/>
                  {/* Green puzzle piece */}
                  <path d="M10 46 h36 v24 h-20 q0 8-8 8 q-8 0-8-8 h0z" fill="#1c3320" opacity="0.9"/>
                  {/* Light piece */}
                  <path d="M46 10 h24 v36 q8 0 8 8 q0 8-8 8 v0 h-24z" fill="#C9A84C" opacity="0.5"/>
                  {/* Dark overlap */}
                  <path d="M46 54 h24 v16 h-24z" fill="#1c3320" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                That is because health is not always found in one marker alone.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Real insight comes from understanding how your labs work together — and what they may be revealing about the{" "}
                <span className="text-green-800 font-medium">bigger metabolic picture.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Dark CTA card */}
      <div className="bg-[#f5f0e8] px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B3A2A] rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-xl border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">That&apos;s exactly what we do.</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-6">
                  We connect the dots so you can finally get{" "}
                  <span className="text-[#C9A84C]">clear answers</span> and{" "}
                  <span className="text-[#C9A84C]">feel like yourself again.</span>
                </p>
                <a
                  href="#signup"
                  className="inline-block w-full sm:w-auto text-center bg-[#C9A84C] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#b8944c] transition-colors text-sm tracking-wide"
                >
                  See What Your Labs Are Really Saying
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
