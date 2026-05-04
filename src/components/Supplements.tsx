export default function Supplements() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tools & Supplements We Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the products and tools used by real people focused on metabolic health. We only recommend what aligns with our philosophy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Keto-Mojo */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🩸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Keto-Mojo</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              The gold standard for tracking blood glucose and ketones at home. Know your numbers — metabolic health starts with data you can actually see.
            </p>
            <a
              href="https://keto-mojo.com/affiliate-link/?rfsn=9065371.4e0112&utm_source=refersion&utm_medium=affiliate&utm_campaign=9065371.4e0112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors text-sm"
            >
              Shop Keto-Mojo
            </a>
          </div>

          {/* Fullscript */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fullscript</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Professional-grade supplements dispensed through a trusted platform. Get access to high-quality brands with practitioner-level guidance built in.
            </p>
            <a
              href="https://us.fullscript.com/welcome/scleland1775530044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors text-sm"
            >
              Shop Fullscript
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Rooted Clarity may earn a commission when you purchase through these links, at no extra cost to you. We only recommend products we believe in.
        </p>
      </div>
    </section>
  );
}
