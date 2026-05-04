const cards = [
  {
    title: "Metabolic-First Thinking",
    desc: "We don't just check if your numbers are 'in range.' We analyze how your markers interact — insulin, glucose, inflammation, thyroid, lipids — to reveal the metabolic story your labs are telling.",
    icon: "🧬",
  },
  {
    title: "Real Supplements, Real Dosages",
    desc: "No vague advice. We give you specific supplements, specific dosages, and the science behind why — based on your actual lab results.",
    icon: "💊",
  },
  {
    title: "Diet & Fasting Protocols",
    desc: "Personalized dietary recommendations including ketogenic, carnivore, and fasting protocols tailored to your metabolic profile.",
    icon: "🥩",
  },
  {
    title: "Backed by Real Research",
    desc: "Our protocols are informed by leading metabolic health physicians and researchers who are changing medicine.",
    icon: "🩺",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="py-20 sm:py-28 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">Why Rooted Clarity</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Makes Us Different</h2>
          <div className="w-8 h-0.5 bg-[#8B6914] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
