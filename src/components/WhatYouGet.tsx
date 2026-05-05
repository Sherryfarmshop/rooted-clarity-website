export default function WhatYouGet() {
  return (
    <section className="bg-white px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3A2A] mb-6">
          What You&apos;ll Get
        </h2>
        <ul className="space-y-4">
          {[
            "Clear lab interpretation — beyond just 'normal' ranges",
            "Whole-body pattern analysis (hormones, metabolism, inflammation)",
            "Personalized action plan so you know exactly what to do next",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold text-lg flex-shrink-0">✔</span>
              <p className="text-gray-700 text-base leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
