export default function Supplements() {
  return (
    <section id="supplements" className="bg-[#f7f4ef]">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">

        {/* Header */}
        <p className="text-[#8B6914]/60 text-xs uppercase tracking-[0.2em] mb-4">Tools &amp; Supplements</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] leading-tight mb-4">
          What Actually Moves the Needle
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-2 max-w-xl">
          Supplements aren&apos;t the starting point — they&apos;re the support.
        </p>
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl">
          First we understand what your labs are showing. Then we support what your body actually needs — not guesses, not trends.
        </p>
        <div className="w-12 h-px bg-[#C9A84C] mb-12" />

        {/* Metabolic Testing */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 pb-12 border-b border-[#e5dfd5]">
          <div className="flex-1">
            <p className="text-[#8B6914]/60 text-xs uppercase tracking-widest mb-2">Step 1</p>
            <h3 className="font-serif text-2xl font-bold text-[#1B3A2A] mb-3">
              At-Home Metabolic Testing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Before supplementing, you need to understand what&apos;s actually happening in your body. Blood glucose and ketone levels are two of the most revealing — and most overlooked — metabolic markers.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Tracking these at home gives you real data on how your body responds to food, fasting, sleep, and stress — patterns that rarely show up in annual bloodwork.
            </p>
            <a
              href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B3A2A] text-[#f0ece3] font-semibold px-7 py-3 rounded-lg text-sm hover:bg-[#15301f] transition-colors"
            >
              Learn More →
            </a>
            <p className="text-gray-400 text-xs mt-3 italic">Powered by Keto-Mojo precision testing.</p>
          </div>

          {/* Visual — glucose meter SVG */}
          <div className="w-full md:w-48 flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 160 200" className="w-36 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Device body */}
              <rect x="30" y="20" width="100" height="140" rx="16" fill="#1B3A2A" />
              <rect x="38" y="30" width="84" height="60" rx="8" fill="#f0ece3" />
              {/* Screen content */}
              <text x="80" y="58" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1B3A2A">5.4</text>
              <text x="80" y="72" textAnchor="middle" fontSize="8" fill="#8B6914">mmol/L</text>
              <text x="80" y="82" textAnchor="middle" fontSize="7" fill="#4a6741">KETONES</text>
              {/* Buttons */}
              <circle cx="55" cy="120" r="8" fill="#2a4d36" />
              <circle cx="80" cy="120" r="8" fill="#2a4d36" />
              <circle cx="105" cy="120" r="8" fill="#C9A84C" />
              {/* Test strip slot */}
              <rect x="115" y="85" width="18" height="5" rx="2.5" fill="#C9A84C" opacity="0.6" />
              {/* Drop indicator */}
              <ellipse cx="55" cy="148" rx="10" ry="6" fill="#C9A84C" opacity="0.3" />
              <text x="55" y="151" textAnchor="middle" fontSize="8" fill="#8B6914">●</text>
            </svg>
          </div>
        </div>

        {/* Professional Supplements */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Visual — supplements SVG */}
          <div className="w-full md:w-48 flex-shrink-0 flex items-center justify-center order-2 md:order-1">
            <svg viewBox="0 0 160 200" className="w-36 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bottle */}
              <rect x="50" y="40" width="60" height="120" rx="10" fill="#1B3A2A" />
              <rect x="58" y="28" width="44" height="18" rx="5" fill="#2a4d36" />
              {/* Label */}
              <rect x="58" y="68" width="44" height="60" rx="4" fill="#f0ece3" opacity="0.92" />
              <text x="80" y="86" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1B3A2A">ROOTED</text>
              <text x="80" y="96" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1B3A2A">CLARITY</text>
              <rect x="68" y="100" width="24" height="1" fill="#C9A84C" opacity="0.7" />
              <text x="80" y="112" textAnchor="middle" fontSize="5.5" fill="#4a6741">PROFESSIONAL</text>
              <text x="80" y="121" textAnchor="middle" fontSize="5.5" fill="#4a6741">SUPPLEMENTS</text>
              {/* Pills floating */}
              <ellipse cx="38" cy="100" rx="9" ry="6" fill="#C9A84C" opacity="0.5" transform="rotate(-15 38 100)" />
              <ellipse cx="122" cy="110" rx="9" ry="6" fill="#C9A84C" opacity="0.4" transform="rotate(20 122 110)" />
              <circle cx="130" cy="85" r="5" fill="#C9A84C" opacity="0.3" />
            </svg>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <p className="text-[#8B6914]/60 text-xs uppercase tracking-widest mb-2">Step 2</p>
            <h3 className="font-serif text-2xl font-bold text-[#1B3A2A] mb-3">
              Professional-Grade Supplements
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Once we understand what your body is showing, the next step is targeted, intentional support. Not generic multivitamins — specific nutrients your body may actually need based on your labs.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              These are the supplements I recommend and trust — chosen with purpose, quality-controlled, and available through a professional practitioner platform.
            </p>
            <a
              href="https://us.fullscript.com/welcome/scleland1775530044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-semibold px-7 py-3 rounded-lg text-sm hover:bg-[#b0873a] transition-colors shadow-md"
            >
              View Recommended Supplements →
            </a>
            <p className="text-gray-400 text-xs mt-3 italic">Dispensed through Fullscript — professional supplement platform.</p>
          </div>

        </div>

        {/* Founder note */}
        <div className="mt-14 pt-8 border-t border-[#e5dfd5]">
          <p className="text-gray-400 text-sm italic max-w-lg leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            Every tool I recommend is chosen with intention — backed by research, not trends. These are what I use and trust.
          </p>
          <p className="text-[#8B6914]/50 text-xs mt-1.5 italic" style={{ fontFamily: "Georgia, serif" }}>— Sherry, Founder</p>
        </div>

      </div>
    </section>
  );
}
