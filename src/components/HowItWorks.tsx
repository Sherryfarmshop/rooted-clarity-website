export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Labs",
      desc: "Securely upload your bloodwork in just a few minutes.",
      detail: "PDFs, screenshots, or lab portals accepted.",
      img: "/images/how-step1.jpg",
      alt: "Person scanning lab results with phone",
    },
    {
      number: "02",
      title: "We Analyze Patterns Across Your Body",
      desc: "We look at how your hormones, metabolism, inflammation, nutrients, and symptoms work together.",
      detail: "Because your body doesn't function in isolated numbers.",
      img: "/images/how-step2.jpg",
      alt: "Pattern analysis connecting lab markers across body systems",
    },
    {
      number: "03",
      title: "Get Personalized Recommendations",
      desc: "Receive clear guidance tailored to your body — including nutrition, supplements, recovery, lifestyle, and wellness support.",
      detail: "No guessing. Just a clear direction forward.",
      img: "/images/how-step3.jpg",
      alt: "Personal wellness plan with supplement and lifestyle recommendations",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f8f6f1] px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-2">
          How It Works
        </h2>
        <p className="text-gray-500 text-base mb-8">
          A simple process designed to help you finally connect the dots.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl overflow-hidden border border-[#e0d8cc] bg-[#fdfaf6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="overflow-hidden h-52">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="px-6 py-5">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest mb-2">{step.number}</p>
                <h3 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{step.desc}</p>
                <p className="text-gray-500 text-xs italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
