export default function Supplements() {
  return (
    <section id="supplements" className="bg-[#f5f2ec]">
      <div className="max-w-4xl mx-auto px-6 py-14 sm:py-16">

        {/* Header — centered */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <p className="text-[#7a6020]/60 text-xs uppercase tracking-[0.2em] mb-3">Tools &amp; Supplements</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a3325] leading-tight mb-3">
            What Actually Moves the Needle
          </h2>
          <p className="text-[#5a5a5a] text-base leading-relaxed">
            Supplements aren&apos;t the starting point — they&apos;re the support. First we understand your labs. Then we support what your body actually needs.
          </p>
        </div>

        {/* Two equal cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Card 1 — Metabolic Testing */}
          <div className="bg-[#fdfaf5] rounded-2xl border border-[#ddd8ce] shadow-sm p-7 flex flex-col">
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <svg viewBox="0 0 160 140" className="w-32 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="10" width="100" height="110" rx="14" fill="#1a3325" />
                <rect x="40" y="22" width="80" height="50" rx="8" fill="#f0ece3" />
                <text x="80" y="46" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1B3A2A">5.4</text>
                <text x="80" y="58" textAnchor="middle" fontSize="7" fill="#8B6914">mmol/L  KETONES</text>
                <circle cx="55" cy="95" r="7" fill="#2a4d36" />
                <circle cx="80" cy="95" r="7" fill="#2a4d36" />
                <circle cx="105" cy="95" r="7" fill="#C9A84C" />
                <rect x="115" y="62" width="16" height="5" rx="2.5" fill="#C9A84C" opacity="0.6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">At-Home Metabolic Testing</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-2">
              Blood glucose and ketone tracking reveals how your body responds to food, sleep, stress, and fasting — patterns that never show up in annual bloodwork.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Real data. Real patterns. Real direction.
            </p>
            <div className="mt-auto">
              <a
                href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#1a3325] text-[#f5f0e8] font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-[#122519] transition-colors mb-2"
              >
                Learn More
              </a>
              <p className="text-gray-400 text-xs italic text-center">Powered by Keto-Mojo precision testing.</p>
            </div>
          </div>

          {/* Card 2 — Professional Supplements */}
          <div className="bg-[#fdfaf5] rounded-2xl border border-[#ddd8ce] shadow-sm p-7 flex flex-col">
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <svg viewBox="0 0 160 140" className="w-32 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="48" y="28" width="64" height="102" rx="10" fill="#1a3325" />
                <rect x="58" y="16" width="44" height="16" rx="5" fill="#2a4d36" />
                <rect x="56" y="52" width="48" height="52" rx="4" fill="#f0ece3" opacity="0.92" />
                <text x="80" y="70" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1B3A2A">ROOTED</text>
                <text x="80" y="80" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1B3A2A">CLARITY</text>
                <rect x="68" y="84" width="24" height="1" fill="#C9A84C" opacity="0.7" />
                <text x="80" y="94" textAnchor="middle" fontSize="5.5" fill="#4a6741">PROFESSIONAL</text>
                <text x="80" y="103" textAnchor="middle" fontSize="5.5" fill="#4a6741">SUPPLEMENTS</text>
                <ellipse cx="36" cy="85" rx="8" ry="5" fill="#C9A84C" opacity="0.4" transform="rotate(-15 36 85)" />
                <ellipse cx="124" cy="90" rx="8" ry="5" fill="#C9A84C" opacity="0.35" transform="rotate(20 124 90)" />
                <circle cx="128" cy="68" r="5" fill="#C9A84C" opacity="0.3" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">Professional-Grade Supplements</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-2">
              Not generic multivitamins — targeted nutrients your body may actually need based on your labs. Chosen with purpose, quality-controlled, and evidence-informed.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              These are what I recommend and trust.
            </p>
            <div className="mt-auto">
              <a
                href="https://us.fullscript.com/welcome/scleland1775530044"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#b8893a] text-[#fdfaf5] font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-[#9e7530] transition-colors shadow-md mb-2"
              >
                View Recommended Supplements
              </a>
              <p className="text-gray-400 text-xs italic text-center">Dispensed through Fullscript — professional supplement platform.</p>
            </div>
          </div>

        </div>

        {/* Founder note */}
        <div className="border-t border-[#e5dfd5] pt-7">
          <p className="text-gray-400 text-sm italic leading-relaxed max-w-lg" style={{ fontFamily: "Georgia, serif" }}>
            Every tool I recommend is chosen with intention — backed by research, not trends. These are what I use and trust.
          </p>
          <p className="text-[#8B6914]/50 text-xs mt-1.5 italic" style={{ fontFamily: "Georgia, serif" }}>— Sherry, Founder</p>
        </div>

      </div>
    </section>
  );
}
