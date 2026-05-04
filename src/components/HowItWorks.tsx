export default function HowItWorks() {
  return (
    <section id="how-it-works">
      {/* Tagline bar */}
      <div className="bg-[#f0ece3] py-3 text-center">
        <p className="text-gray-500 text-xs tracking-wide flex items-center justify-center gap-2">
          <span>🌿</span> Clarity in your labs. Confidence in your health.
        </p>
      </div>

      {/* Main dark green section */}
      <div className="bg-[#1B3A2A] py-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">How It Works</h2>
            <svg className="w-4 h-4 text-[#C9A84C] mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
            </svg>
          </div>

          {/* 3 Steps with arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mb-10">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full border border-[#C9A84C]/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <p className="text-[#C9A84C] font-bold text-lg mb-1">1.</p>
              <h3 className="text-white font-bold text-lg mb-1">Upload Your Labs</h3>
              <p className="text-green-200/60 text-base leading-relaxed">Securely upload your bloodwork in just a few minutes.</p>
            </div>

            {/* Arrow */}
            <div className="hidden sm:block px-4">
              <svg className="w-8 h-4 text-[#C9A84C]/50" fill="none" viewBox="0 0 32 16" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28m0 0l-6-6m6 6l-6 6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full border border-[#C9A84C]/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-[#C9A84C] font-bold text-lg mb-1">2.</p>
              <h3 className="text-white font-bold text-lg mb-1">Get Clear Insights</h3>
              <p className="text-green-200/60 text-base leading-relaxed">We review your results and identify patterns, imbalances, and opportunities.</p>
            </div>

            {/* Arrow */}
            <div className="hidden sm:block px-4">
              <svg className="w-8 h-4 text-[#C9A84C]/50" fill="none" viewBox="0 0 32 16" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28m0 0l-6-6m6 6l-6 6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full border border-[#C9A84C]/50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-[#C9A84C] font-bold text-lg mb-1">3.</p>
              <h3 className="text-white font-bold text-lg mb-1">Personalized Guidance</h3>
              <p className="text-green-200/60 text-base leading-relaxed">Receive tailored recommendations and supplement support.</p>
            </div>

          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-green-300/50 text-xs flex-wrap">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              100% Secure & Private
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Trusted by Patients
            </span>
          </div>

        </div>
      </div>

      {/* Bottom bar — research tagline with leaf */}
      <div className="bg-[#f0ece3] relative overflow-hidden">
        {/* Olive branch SVG right side */}
        <div className="hidden sm:block absolute right-0 top-0 h-full w-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
            <path d="M90 0 C80 20 60 40 40 60 C30 70 20 75 10 80" stroke="#4a6741" strokeWidth="1.5" fill="none"/>
            <ellipse cx="70" cy="20" rx="12" ry="6" fill="#4a6741" transform="rotate(-30 70 20)"/>
            <ellipse cx="80" cy="10" rx="10" ry="5" fill="#4a6741" transform="rotate(-50 80 10)"/>
            <ellipse cx="55" cy="40" rx="12" ry="6" fill="#4a6741" transform="rotate(15 55 40)"/>
            <ellipse cx="65" cy="30" rx="10" ry="5" fill="#4a6741" transform="rotate(-35 65 30)"/>
            <ellipse cx="35" cy="60" rx="12" ry="6" fill="#4a6741" transform="rotate(-20 35 60)"/>
            <ellipse cx="50" cy="50" rx="10" ry="5" fill="#4a6741" transform="rotate(20 50 50)"/>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg border border-[#8B6914]/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#8B6914]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div className="border-l border-gray-300 pl-4">
            <p className="text-gray-700 text-sm font-medium">We don&apos;t just follow research.</p>
            <p className="text-gray-700 text-sm">We apply it to <strong className="text-[#1B3A2A]">YOUR</strong> labs.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
