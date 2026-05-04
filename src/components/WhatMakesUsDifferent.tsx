export default function WhatMakesUsDifferent() {
  const cards = [
    {
      title: "We Look Beyond \u201cNormal\u201d",
      lines: ["We don\u2019t just check ranges.", "We look at how your labs work together."],
    },
    {
      title: "No Guesswork Supplements",
      lines: ["You get targeted support.", "Not random recommendations."],
    },
    {
      title: "Nutrition That Matches Your Labs",
      lines: ["Not trends. Not fads.", "What your body actually needs."],
    },
    {
      title: "Built on Real Science",
      lines: ["Based on research and clinical experience.", "Not opinions. Not trends."],
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
            <div key={card.title} className="bg-[#fdfcfa] rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
              <div className="w-8 h-px bg-[#C9A84C] mb-4" />
              {card.lines.map((line, i) => (
                <p key={i} className="text-gray-500 text-sm leading-relaxed">{line}</p>
              ))}
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
            className="inline-block bg-[#C9A84C] text-[#1B1B1B] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-sm shadow-md"
          >
            Upload Your Labs (Takes 2 Minutes)
          </a>
        </div>

      </div>
    </section>
  );
}
