export default function WhatMakesUsDifferent() {
  const cards = [
    {
      title: "We Look Beyond \u201cNormal\u201d",
      bold: "We don\u2019t just check ranges.",
      rest: "We look at how your labs work together.",
    },
    {
      title: "No Guesswork Supplements",
      bold: "You get targeted support.",
      rest: "Not random recommendations.",
    },
    {
      title: "Nutrition That Matches Your Labs",
      bold: "Not trends. Not fads.",
      rest: "What your body actually needs.",
    },
    {
      title: "Built on Real Science",
      bold: "Based on research and clinical experience.",
      rest: "Not opinions. Not trends.",
    },
  ];

  return (
    <section id="different" className="bg-[#f7f4ef]">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Headline */}
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Why You Still Don&apos;t Have Answers
        </h2>

        {/* Subline */}
        <p className="text-center text-gray-600 text-base sm:text-lg mb-14">
          You&apos;re not crazy. Your labs are missing the full picture.
        </p>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="bg-[#edeae4] rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-semibold">{card.bold}</p>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">{card.rest}</p>
            </div>
          ))}
        </div>

        {/* Dark CTA banner */}
        <div className="bg-[#1B3A2A] rounded-2xl px-8 py-10 text-center sm:text-left">
          <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
            We connect the dots so you can finally get{" "}
            <span className="text-[#C9A84C] font-bold">clear answers</span> and{" "}
            <span className="text-[#C9A84C] font-bold italic">feel like yourself again.</span>
          </p>
          <a
            href="#signup"
            className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
          >
            Upload Your Labs (Takes 2 Minutes)
          </a>
        </div>

      </div>
    </section>
  );
}
