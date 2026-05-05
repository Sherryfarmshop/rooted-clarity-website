export default function WhatYouGet() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-10">
          What You Actually Get
        </h2>
        <ul className="space-y-6">
          {[
            "A clear breakdown of your labs (beyond \"normal\")",
            "Patterns across your entire body (not isolated numbers)",
            "A step-by-step plan so you know exactly what to do next",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <div className="w-8 h-8 rounded-full bg-[#1B3A2A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#C9A84C] text-sm font-bold">{i + 1}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
