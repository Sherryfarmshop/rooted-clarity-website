export default function HowItWorks() {
  return (
    <section id="how-it-works">

      {/* Headline */}
      <div className="bg-[#f5f0e8] px-6 pt-16 pb-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Where most stop at &ldquo;normal,&rdquo;<br />
            <span className="italic">we go further.</span>
          </h2>
        </div>
      </div>

      {/* 3 Steps */}
      <div className="bg-[#f5f0e8] px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-20 h-20 rounded-full border-2 border-[#c5bda8] bg-[#eae6dd] flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">1. Upload Labs</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Securely upload your bloodwork in minutes.</p>
            </div>

            {/* Dotted line */}
            <div className="hidden sm:block flex-shrink-0 w-16 border-t-2 border-dashed border-[#c5bda8] mt-[-30px]" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-20 h-20 rounded-full border-2 border-[#c5bda8] bg-[#eae6dd] flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="11" cy="11" r="6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">2. We Analyze</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We look at patterns others often miss.</p>
            </div>

            {/* Dotted line */}
            <div className="hidden sm:block flex-shrink-0 w-16 border-t-2 border-dashed border-[#c5bda8] mt-[-30px]" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-20 h-20 rounded-full border-2 border-[#c5bda8] bg-[#eae6dd] flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">3. Get Clear Answers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Understand your results and know your next steps.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="bg-[#eae6dd] px-6 py-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {/* Privacy */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#c5bda8] bg-white/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 text-sm font-bold">Your privacy is our priority.</p>
              <p className="text-gray-500 text-xs">Your labs are encrypted and never shared.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-[#c5bda8]" />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-gray-500 text-xs">Trusted by people who want real answers.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
