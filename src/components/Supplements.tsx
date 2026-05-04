export default function Supplements() {
  return (
    <section id="supplements">

      {/* Hero banner */}
      <div className="bg-[#f0ece3] px-6 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#8B6914]/70 text-xs font-normal uppercase tracking-widest mb-4">
              Start with your labs. Then we decide what you actually need.
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Tools I Trust —<br />When Your Body Needs Support
            </h2>
            <p className="text-gray-600 text-base leading-relaxed text-justify max-w-sm">
              Supplements aren&apos;t the starting point — they&apos;re the support.
            </p>
            <p className="text-gray-600 text-base leading-relaxed text-justify max-w-sm mt-3">
              Once we understand what your labs are actually showing, these are the tools I use to help move things in the right direction.
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-72 h-56">
              {/* Bowl of supplements illustration */}
              <div className="absolute left-4 top-4 w-44 h-36 bg-[#d4c4a8] rounded-full opacity-80 flex items-end justify-center">
                <div className="w-32 h-20 bg-[#c8b48e] rounded-full mb-2 flex items-center justify-center">
                  <div className="flex flex-wrap gap-1 p-3">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-3 h-2 bg-[#8B7355] rounded-full opacity-80" />
                    ))}
                  </div>
                </div>
              </div>
              {/* Supplement bottle */}
              <div className="absolute right-0 top-0 w-24 h-44 bg-[#2d2416] rounded-lg flex flex-col items-center justify-center shadow-xl">
                <div className="w-16 h-5 bg-[#3d3020] rounded-t-sm mb-1" />
                <div className="text-center px-2">
                  <p className="text-[#f0ece3] text-[8px] font-bold leading-tight">ROOTED</p>
                  <p className="text-[#f0ece3] text-[8px] font-bold">CLARITY</p>
                  <p className="text-[#C9A84C] text-[6px] tracking-widest">HEALTH</p>
                  <div className="w-8 h-px bg-[#C9A84C] mx-auto my-1" />
                  <p className="text-[#f0ece3] text-[6px]">DIETARY</p>
                  <p className="text-[#f0ece3] text-[6px]">SUPPLEMENT</p>
                  <p className="text-[#f0ece3] text-[6px]">60 CAPSULES</p>
                </div>
              </div>
              {/* Leaf branch */}
              <div className="absolute right-16 -top-4">
                <svg viewBox="0 0 80 60" className="w-20 h-16" fill="none">
                  <path d="M40 55 C40 40 35 20 20 5" stroke="#4a6741" strokeWidth="1.5" fill="none"/>
                  <path d="M20 5 C30 15 38 30 40 45" stroke="#4a6741" strokeWidth="1.5" fill="none"/>
                  <path d="M35 20 C25 15 15 18 10 28 C20 30 32 26 35 20" fill="#4a6741" opacity="0.8"/>
                  <path d="M30 35 C20 30 10 33 5 43 C15 45 27 41 30 35" fill="#3d6b3d" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Parts. One Goal. */}
      <div className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Two Parts. One Goal.</h3>
            <p className="text-gray-500">Understand your numbers. Take action that moves the needle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 — Understand Your Numbers */}
            <div className="bg-[#f9f7f4] border border-gray-200 rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A2A] flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <svg className="w-16 h-16 text-[#4a6741]" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="10" y="8" width="34" height="42" rx="3" />
                    <path strokeLinecap="round" d="M17 20h20M17 28h20M17 36h12" />
                    <circle cx="46" cy="42" r="10" />
                    <path strokeLinecap="round" d="M53 49l5 5" />
                    <path strokeLinecap="round" d="M40 42l3 3 5-5" />
                  </svg>
                </div>
              </div>
              <h4 className="font-serif text-2xl font-bold text-gray-900 text-center mb-2">Understand Your Numbers</h4>
              <div className="w-8 h-px bg-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed text-justify mb-5">
                Labs tell a story—if you know how to read it. These tools help you measure, track, and understand what&apos;s really going on in your body.
              </p>
              <ul className="space-y-2 mb-6">
                {["At-Home Lab Tests", "Tracking & Monitoring Tools", "Health Questionnaires", "Educational Resources"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#1B3A2A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#C9A84C] text-[#1a1a1a] font-bold py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Tools
              </a>
            </div>

            {/* Card 2 — Take Action */}
            <div className="bg-[#f9f7f4] border border-gray-200 rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <svg className="w-16 h-16 text-[#C9A84C]" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="22" y="10" width="20" height="30" rx="4" />
                    <path strokeLinecap="round" d="M25 15h14M25 20h14M25 25h8" />
                    <path strokeLinecap="round" d="M20 42c0 6 24 6 24 0" />
                    <path strokeLinecap="round" d="M26 42v6M38 42v6" />
                    <path d="M18 50 C14 44 18 38 24 40 C24 34 32 30 36 36 C40 30 48 34 46 40 C52 38 56 44 50 50Z" fill="#4a6741" opacity="0.7" strokeWidth="0"/>
                  </svg>
                </div>
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#C9A84C] text-center mb-2">Support Your Body</h4>
              <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed text-justify mb-5">
                Once you understand your body, the next step is support that works. These are the supplements I trust and recommend.
              </p>
              <ul className="space-y-2 mb-6">
                {["High-Quality Supplements", "Targeted Support", "Evidence-Informed Choices", "Available Through Fullscript"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://us.fullscript.com/welcome/scleland1775530044"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#C9A84C] text-[#1a1a1a] font-bold py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Recommended Supplements
              </a>
            </div>

          </div>

          {/* Bottom trust strip */}
          <div className="mt-6 border border-gray-200 rounded-2xl grid md:grid-cols-2 overflow-hidden">
            <div className="flex items-center gap-4 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <svg className="w-10 h-10 text-[#4a6741] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
              </svg>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                Every tool and supplement I recommend is chosen with purpose, backed by research, and focused on what actually helps.
              </p>
            </div>
            <div className="flex items-center justify-center p-6">
              <p className="font-serif text-xl sm:text-2xl text-gray-900 font-bold text-center leading-tight">
                Clarity leads to action.<br />Action leads to change.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#1B3A2A] px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Ready to Get Clear Answers About Your Health?</p>
            <p className="text-green-300/70 text-sm">Upload your labs and let&apos;s find the root cause—together.</p>
          </div>
          <a
            href="#signup"
            className="flex-shrink-0 inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Upload Your Labs (Takes 2 Minutes)
          </a>
        </div>
      </div>

    </section>
  );
}
