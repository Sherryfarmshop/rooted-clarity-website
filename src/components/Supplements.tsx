export default function Supplements() {
  return (
    <section id="supplements" className="bg-[#f7f4ef]">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">

        {/* Header */}
        <p className="text-[#8B6914]/60 text-xs uppercase tracking-[0.2em] mb-4">
          Tools &amp; Supplements
        </p>
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

        {/* Keto-Mojo */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 pb-12 border-b border-[#e5dfd5]">
          <div>
            <p className="text-[#8B6914]/60 text-xs uppercase tracking-widest mb-2">Metabolic Monitoring</p>
            <h3 className="font-serif text-2xl font-bold text-[#1B3A2A] mb-3">Keto-Mojo</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Precision at-home testing for blood glucose and ketones. Understanding your metabolic state is foundational — and Keto-Mojo makes it simple, accurate, and actionable.
            </p>
            <a
              href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B3A2A] text-[#f0ece3] font-semibold px-7 py-3 rounded-lg text-sm hover:bg-[#15301f] transition-colors"
            >
              Learn More →
            </a>
          </div>
          <div className="bg-[#edeae3] rounded-2xl p-8 flex items-center justify-center h-36">
            <p className="font-serif text-2xl font-bold text-[#1B3A2A] tracking-wide">Keto-Mojo</p>
          </div>
        </div>

        {/* Fullscript */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-[#edeae3] rounded-2xl p-8 flex items-center justify-center h-36">
            <p className="font-serif text-2xl font-bold text-[#1B3A2A] tracking-wide">Fullscript</p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[#8B6914]/60 text-xs uppercase tracking-widest mb-2">Professional Supplements</p>
            <h3 className="font-serif text-2xl font-bold text-[#1B3A2A] mb-3">Fullscript</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Professional-grade supplements, dispensed through a trusted practitioner platform. What I recommend to people I work with — evidence-informed, quality-controlled, and chosen with intention.
            </p>
            <a
              href="https://us.fullscript.com/welcome/scleland1775530044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-semibold px-7 py-3 rounded-lg text-sm hover:bg-[#b0873a] transition-colors shadow-md"
            >
              View Recommended Supplements →
            </a>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-14 pt-8 border-t border-[#e5dfd5]">
          <p className="text-gray-400 text-sm italic max-w-lg leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            Every tool and supplement I recommend is chosen with purpose — backed by research, not trends. These are what I use and trust.
          </p>
          <p className="text-[#8B6914]/50 text-xs mt-2 italic" style={{ fontFamily: "Georgia, serif" }}>— Sherry, Founder</p>
        </div>

      </div>
    </section>
  );
}
