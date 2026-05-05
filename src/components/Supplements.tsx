export default function Supplements() {
  return (
    <section id="supplements" className="bg-[#f7f4ef]">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">

        {/* TOP — headline + copy + illustration */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <p className="text-[#8B6914]/70 text-xs font-normal uppercase tracking-widest mb-3">
              Start with your labs. Then we decide what you actually need.
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              What Actually<br />Moves the Needle
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-2">
              Supplements aren&apos;t the starting point — they&apos;re the support.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              First we understand your labs. Then we support what your body actually needs.
            </p>
          </div>

          {/* Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-64 h-52">
              <div className="absolute left-4 top-4 w-40 h-32 bg-[#d4c4a8] rounded-full opacity-80 flex items-end justify-center">
                <div className="w-28 h-18 bg-[#c8b48e] rounded-full mb-2 flex items-center justify-center">
                  <div className="flex flex-wrap gap-1 p-3">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-3 h-2 bg-[#8B7355] rounded-full opacity-80" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-20 h-40 bg-[#2d2416] rounded-lg flex flex-col items-center justify-center shadow-xl">
                <div className="w-14 h-4 bg-[#3d3020] rounded-t-sm mb-1" />
                <div className="text-center px-1">
                  <p className="text-[#f0ece3] text-[7px] font-bold leading-tight">ROOTED</p>
                  <p className="text-[#f0ece3] text-[7px] font-bold">CLARITY</p>
                  <p className="text-[#C9A84C] text-[5px] tracking-widest">HEALTH</p>
                  <div className="w-6 h-px bg-[#C9A84C] mx-auto my-1" />
                  <p className="text-[#f0ece3] text-[5px]">DIETARY</p>
                  <p className="text-[#f0ece3] text-[5px]">SUPPLEMENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b8ad98] to-transparent mb-10" />

        {/* TWO PARTS — inline, no separate section */}
        <div className="mb-6">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">Two Parts. One Goal.</h3>
          <p className="text-gray-500 text-sm mb-8">Understand your numbers. Support what your body needs.</p>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#1B3A2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900">Understand Your Numbers</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Labs tell a story — if you know how to read it. These tools help you measure, track, and understand what&apos;s really going on in your body.
              </p>
              <ul className="space-y-1.5 mb-5">
                {["At-Home Lab Tests", "Tracking & Monitoring Tools", "Health Questionnaires", "Educational Resources"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#1B3A2A] font-bold">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#C9A84C] text-[#1a1a1a] font-bold py-4 rounded-lg text-sm shadow-md ring-1 ring-[#a8893d]/30 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Tools
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#8B6914]">Support Your Body</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Once you understand your body, the next step is support that works. These are the supplements I trust and recommend.
              </p>
              <ul className="space-y-1.5 mb-5">
                {["High-Quality Supplements", "Targeted Support", "Evidence-Informed Choices", "Available Through Fullscript"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#C9A84C] font-bold">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://us.fullscript.com/welcome/scleland1775530044"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#C9A84C] text-[#1a1a1a] font-bold py-4 rounded-lg text-sm shadow-md ring-1 ring-[#a8893d]/30 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Recommended Supplements
              </a>
            </div>

          </div>
        </div>

        {/* Trust strip */}
        <div className="border border-gray-200 rounded-2xl grid md:grid-cols-2 overflow-hidden bg-white">
          <div className="flex items-center gap-4 p-5 border-b md:border-b-0 md:border-r border-gray-200">
            <svg className="w-8 h-8 text-[#4a6741] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20" />
            </svg>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every tool and supplement I recommend is chosen with purpose, backed by research, and focused on what actually helps.
            </p>
          </div>
          <div className="flex items-center justify-center p-5">
            <p className="font-serif text-lg sm:text-xl text-gray-900 font-bold text-center leading-tight">
              Clarity leads to action.<br />Action leads to change.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
