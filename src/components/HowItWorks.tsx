const steps = [
  {
    num: "01",
    title: "Upload Your Labs",
    desc: "Snap a photo or upload your bloodwork results. We accept all standard lab panels.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get Your Analysis",
    desc: "Our AI reads your labs the way a metabolic-focused doctor would — connecting the dots, not just checking boxes.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Follow Your Protocol",
    desc: "Get a personalized plan — supplements with real dosages, diet guidance, fasting protocols, and questions to bring to your doctor.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream mb-16">
          How It <span className="text-gold">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-forest/50 border border-sage/20 rounded-2xl p-8 text-center hover:border-gold/40 transition-colors"
            >
              <div className="text-gold mb-4 flex justify-center">{step.icon}</div>
              <span className="text-gold/40 text-5xl font-bold absolute top-4 right-6 font-[family-name:var(--font-playfair)]">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3">
                {step.title}
              </h3>
              <p className="text-softwhite/75 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
