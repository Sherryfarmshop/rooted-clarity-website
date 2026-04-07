const cards = [
  {
    title: "Metabolic-First Thinking",
    desc: "We don't just check if your numbers are 'in range.' We analyze how your markers interact — insulin, glucose, inflammation, thyroid, lipids — to reveal the metabolic story your labs are telling.",
    icon: "🧬",
  },
  {
    title: "Real Supplements, Real Dosages",
    desc: "No vague advice like 'take some vitamin D.' We give you specific supplements, specific dosages, and the science behind why — based on your actual lab results.",
    icon: "💊",
  },
  {
    title: "Diet & Fasting Protocols",
    desc: "Personalized dietary recommendations including ketogenic, carnivore, and fasting protocols tailored to your metabolic profile and health goals.",
    icon: "🥩",
  },
  {
    title: "Backed by Real Doctors",
    desc: "Our protocols are informed by the research and clinical work of leading metabolic health physicians and researchers who are changing medicine.",
    icon: "🩺",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section id="different" className="py-20 sm:py-28 px-4 bg-forest">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream mb-16">
          What Makes Us <span className="text-gold">Different</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-dark/60 border border-sage/20 rounded-2xl p-8 hover:border-teal/40 transition-colors"
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3">
                {card.title}
              </h3>
              <p className="text-softwhite/75 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
