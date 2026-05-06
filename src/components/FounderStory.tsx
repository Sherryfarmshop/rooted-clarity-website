export default function FounderStory() {
  return (
    <section id="about" className="bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — editorial text */}
          <div className="max-w-[520px]">

            <p className="text-[#8B6914]/60 text-xs font-normal uppercase tracking-[0.2em] mb-5">
              Founder&apos;s Story
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] leading-[1.1] mb-7">
              Why I Built<br />Rooted Clarity
            </h2>

            <div className="space-y-5" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>

              <p className="text-[#3a3530] text-base leading-[1.8]">
                When I was diagnosed with cancer, I started looking deeper at my health — my metabolism, nutrition, and the patterns in my bloodwork that felt overlooked.
              </p>

              <div className="border-l-2 border-[#C9A84C] pl-4 py-0.5">
                <p className="text-[#1B3A2A] text-base font-semibold leading-relaxed italic">
                  Every test came back normal.<br />
                  But I knew something was off.
                </p>
              </div>

              <p className="text-[#3a3530] text-base leading-[1.8]">
                That search led me into a deeper world of metabolic research and pattern-based health.
              </p>

              <p className="text-[#1B3A2A] text-base font-semibold leading-[1.8] italic">
                Rooted Clarity{" "}became the resource I wish I had when I was trying to understand what my body was telling me.
              </p>

            </div>

            <div className="flex items-center gap-4 mt-7 mb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-[#C9A84C]/50 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
            </div>

            <div>
              <p className="text-[#3a3530] text-sm italic" style={{ fontFamily: "Georgia, serif" }}>
                — Sherry
              </p>
              <p className="text-[#8B6914]/60 text-xs tracking-wide mt-0.5" style={{ fontFamily: "Georgia, serif" }}>
                Founder, Rooted Clarity
              </p>
            </div>

          </div>

          {/* RIGHT — cinematic image */}
          <div className="md:sticky md:top-28">
            <div className="relative overflow-hidden rounded-2xl" style={{ maxHeight: "420px" }}>
              {/* Vignette overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 60px rgba(15,25,18,0.35)",
                  background: "radial-gradient(ellipse at center, transparent 50%, rgba(15,25,18,0.25) 100%)",
                }}
              />
              {/* Warm tone overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                style={{ background: "rgba(180,130,60,0.06)" }}
              />
              <img
                src="/images/founder-story.jpg"
                alt="Sherry — founder of Rooted Clarity"
                className="w-full h-auto object-cover"
                style={{ filter: "contrast(1.03) saturate(1.08)" }}
              />
            </div>
            {/* Caption */}
            <p className="text-[#8B6914]/50 text-xs italic text-right mt-3 pr-1" style={{ fontFamily: "Georgia, serif" }}>
              Charlevoix, Michigan
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
