export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Labs",
      desc: "Securely upload your bloodwork results in under 2 minutes.",
    },
    {
      number: "02",
      title: "We Analyze Patterns Across Your Body",
      desc: "We look at how your labs work together — hormones, metabolism, inflammation, and more.",
    },
    {
      number: "03",
      title: "Get Personalized Recommendations",
      desc: "Receive clear direction and supplement guidance based on what your body is actually showing.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="border-t-2 border-[#1B3A2A] pt-6">
              <p className="text-[#C9A84C] font-bold text-sm tracking-widest mb-3">{step.number}</p>
              <h3 className="font-serif text-xl font-bold text-[#1B3A2A] mb-3 leading-snug">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
