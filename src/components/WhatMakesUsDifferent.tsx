import React from "react";

export default function WhatMakesUsDifferent() {
  const cards = [
    {
      title: "We Look Beyond \u201cNormal\u201d",
      bold: "We don\u2019t just check ranges.",
      rest: "We look at how your labs work together.",
      accent: "green",
    },
    {
      title: "No Guesswork Supplements",
      bold: "You get targeted support.",
      rest: "Not random recommendations.",
      accent: "gold",
    },
    {
      title: "Nutrition That Matches Your Labs",
      bold: "Not trends. Not fads.",
      rest: "What your body actually needs.",
      accent: "swirl",
    },
    {
      title: "Built on Real Science",
      bold: "Based on research and clinical experience.",
      rest: "Not opinions. Not trends.",
      accent: "texture",
    },
  ];

  const cardStyles: Record<string, string> = {
    green: "bg-gradient-to-br from-[#f0f7f0] via-white to-[#e8f4e8] shadow-[0_4px_24px_rgba(27,58,42,0.12)] hover:shadow-[0_8px_32px_rgba(27,58,42,0.18)]",
    gold: "bg-gradient-to-br from-[#fdf8ee] via-white to-[#f7edcc] shadow-[0_4px_24px_rgba(201,168,76,0.15)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.22)]",
    swirl: "bg-gradient-to-br from-[#f5f2ee] via-white to-[#ece6da] shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]",
    texture: "bg-gradient-to-br from-[#f0f4f0] via-white to-[#e6ede6] shadow-[0_4px_24px_rgba(27,58,42,0.10)] hover:shadow-[0_8px_32px_rgba(27,58,42,0.16)]",
  };

  const accentEl: Record<string, React.ReactNode> = {
    green: (
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#1B3A2A]/5 -translate-x-8 -translate-y-8 pointer-events-none" />
    ),
    gold: (
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C9A84C]/40 rounded-tr-2xl pointer-events-none" />
    ),
    swirl: (
      <svg className="absolute bottom-2 right-2 w-16 h-16 text-[#C9A84C]/10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M80 50C80 66 66 80 50 80C34 80 20 66 20 50C20 34 34 20 50 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        <path d="M65 20C72 27 80 38 80 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    texture: (
      <svg className="absolute top-2 left-2 w-12 h-12 text-[#1B3A2A]/8 pointer-events-none" viewBox="0 0 60 60" fill="none">
        <circle cx="10" cy="10" r="3" fill="currentColor"/>
        <circle cx="30" cy="10" r="3" fill="currentColor"/>
        <circle cx="50" cy="10" r="3" fill="currentColor"/>
        <circle cx="10" cy="30" r="3" fill="currentColor"/>
        <circle cx="30" cy="30" r="3" fill="currentColor"/>
        <circle cx="50" cy="30" r="3" fill="currentColor"/>
        <circle cx="10" cy="50" r="3" fill="currentColor"/>
        <circle cx="30" cy="50" r="3" fill="currentColor"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
      </svg>
    ),
  };

  return (
    <section id="different" className="bg-[#f7f4ef]">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">

        {/* Headline */}
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Why You Still Don&apos;t Have Answers
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-14">
          You&apos;re not crazy. Your labs are missing the full picture.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-2xl p-7 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] ${cardStyles[card.accent]}`}
            >
              {accentEl[card.accent]}
              <h3 className="font-bold text-gray-900 text-lg mb-3 relative z-10">{card.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed font-semibold relative z-10">{card.bold}</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-1 relative z-10">{card.rest}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl px-8 py-12"
          style={{ background: "linear-gradient(135deg, #1B3A2A 0%, #254d35 60%, #1a3626 100%)" }}
        >
          <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
            We connect the dots so you can finally get{" "}
            <span className="text-[#C9A84C] font-bold" style={{ textShadow: "0 0 20px rgba(201,168,76,0.4)" }}>clear answers</span>
            {" "}and{" "}
            <span className="text-[#C9A84C] font-bold italic" style={{ textShadow: "0 0 20px rgba(201,168,76,0.4)" }}>feel like yourself again.</span>
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
