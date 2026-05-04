export default function Doctors() {
  return (
    <section id="doctors">

      {/* Top — "Built on Research" with vase image */}
      <div className="bg-[#f5f0e8] px-6 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Built on<br />Research.<br />
              <span className="text-[#8B6914] italic">Not Guesswork.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              Most systems look at numbers.<br />
              We look at how your body works together.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=500&q=80"
              alt="Ceramic vase with olive branches"
              className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Middle — "Where most stop at normal" + 3 pillars */}
      <div className="bg-[#f5f0e8] px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Where most stop at &ldquo;normal,&rdquo;
          </h3>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#8B6914] italic mb-10">
            we go further.
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {/* Patterns */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#4a6741]/30 flex items-center justify-center mb-3 bg-white/50">
                <svg className="w-7 h-7 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <circle cx="11" cy="11" r="6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h6M11 8v6" />
                </svg>
              </div>
              <p className="text-gray-800 font-semibold text-sm">Patterns,</p>
              <p className="text-gray-500 text-sm">not just numbers.</p>
            </div>

            {/* Whole-body */}
            <div className="flex flex-col items-center text-center border-x border-gray-300">
              <div className="w-16 h-16 rounded-full border-2 border-[#4a6741]/30 flex items-center justify-center mb-3 bg-white/50">
                <svg className="w-7 h-7 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <circle cx="12" cy="7" r="3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4m-3 3l3-3 3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <p className="text-gray-800 font-semibold text-sm">Whole-body</p>
              <p className="text-gray-500 text-sm">insight</p>
            </div>

            {/* Research-driven */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#4a6741]/30 flex items-center justify-center mb-3 bg-white/50">
                <svg className="w-7 h-7 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v8H9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8" />
                  <circle cx="12" cy="15" r="1.5" />
                </svg>
              </div>
              <p className="text-gray-800 font-semibold text-sm">Research-driven</p>
              <p className="text-gray-500 text-sm">approach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors — initials */}
      <div className="bg-white px-6 py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
            Built on Leading Metabolic Health Research
          </h3>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {[
              { initials: "DD", name: "Dr. Dom D\u2019Agostino" },
              { initials: "AK", name: "Dr. Andrew Koutnik" },
              { initials: "TS", name: "Dr. Thomas Seyfried" },
            ].map((doc) => (
              <div key={doc.initials} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
                  <span className="text-gray-700 font-bold text-sm">{doc.initials}</span>
                </div>
                <p className="text-gray-700 text-xs font-medium">{doc.name}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs italic">
            We draw from the work of leading researchers advancing metabolic health.
          </p>
        </div>
      </div>

      {/* Dark green CTA */}
      <div className="bg-[#1B3A2A] px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-[#C9A84C]/40 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
              See What Your Labs<br className="hidden sm:block" /> Are Really Saying
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-green-300/50 text-xs">
              <span className="flex items-center gap-1">🔒 Secure</span>
              <span>|</span>
              <span className="flex items-center gap-1">🛡️ Private</span>
              <span>|</span>
              <span className="flex items-center gap-1">♡ No subscription</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="#signup"
              className="inline-block bg-[#C9A84C] text-[#1B1B1B] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-sm shadow-md whitespace-nowrap"
            >
              Upload Your Labs (Takes 2 Minutes)
            </a>
            <span className="text-green-300/50 text-xs flex items-center gap-1">
              🔒 100% Secure & HIPAA Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="bg-[#f5f0e8] border-t border-gray-200 px-6 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-gray-800 text-xs font-bold">100% Secure</p>
            <p className="text-gray-400 text-[10px]">Your data is always protected.</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-gray-800 text-xs font-bold">HIPAA Compliant</p>
            <p className="text-gray-400 text-[10px]">We take your privacy seriously.</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-800 text-xs font-bold">Trusted by Patients</p>
            <p className="text-gray-400 text-[10px]">Real results. Real stories.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
