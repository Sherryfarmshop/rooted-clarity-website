export default function Supplements() {
  return (
    <section id="supplements" className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">Trusted Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Tools & Supplements We Trust</h2>
          <div className="w-8 h-0.5 bg-[#8B6914] mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            These are the products used by real people focused on metabolic health. We only recommend what aligns with our philosophy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow bg-gray-50">
            <div className="w-14 h-14 rounded-full bg-green-900/10 flex items-center justify-center mb-4 text-2xl">🩸</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Keto-Mojo</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The gold standard for tracking blood glucose and ketones at home. Know your numbers — metabolic health starts with data you can see.
            </p>
            <a
              href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-900 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-green-950 transition-colors text-sm"
            >
              Shop Keto-Mojo →
            </a>
          </div>

          <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow bg-gray-50">
            <div className="w-14 h-14 rounded-full bg-green-900/10 flex items-center justify-center mb-4 text-2xl">💊</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fullscript</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional-grade supplements through a trusted platform. Get access to high-quality brands with practitioner-level guidance built in.
            </p>
            <a
              href="https://us.fullscript.com/welcome/scleland1775530044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-900 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-green-950 transition-colors text-sm"
            >
              Shop Fullscript →
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Rooted Clarity may earn a commission when you purchase through these links, at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
