export default function FounderStory() {
  return (
    <section id="about">

      {/* Dark green hero with title + plant photo top right */}
      <div className="relative bg-[#1B3A2A] overflow-hidden">
        {/* Plant photo top right */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-64 sm:h-80 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1B3A2A]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2A] to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">My Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 italic">
            Why I Built<br />Rooted Clarity
          </h2>
          <div className="w-10 h-px bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      {/* Story card on dark green bg */}
      <div className="bg-[#1B3A2A] px-6 pb-16">
        <div className="relative max-w-3xl mx-auto">
          {/* Vase with plant — right side */}
          <div className="hidden md:block absolute -right-20 top-8 w-40 h-64 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&q=80"
              alt=""
              className="w-full h-full object-cover rounded-xl opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2A]/80 to-transparent rounded-xl" />
          </div>

          <div className="bg-[#223d28] border border-white/10 rounded-2xl p-8 sm:p-10 relative z-10">

            {/* Paragraph 1 — heart icon */}
            <div className="flex gap-5 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2d4f35] border border-[#C9A84C]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-green-100/90 text-base leading-relaxed text-justify">
                <strong className="text-white">When I was diagnosed with cancer,</strong> I started looking deeper at my health — my metabolism, my nutrition, and the patterns in my bloodwork that felt like they were being overlooked.
              </p>
            </div>

            {/* Paragraph 2 — search icon */}
            <div className="flex gap-5 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2d4f35] border border-[#C9A84C]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-green-100/90 text-base leading-relaxed text-justify">
                <strong className="text-white">That search led me into a deeper world of research.</strong> I began learning from physicians and researchers exploring the connections between metabolism, nutrition, and disease — in a way that finally made sense.
              </p>
            </div>

            {/* Paragraph 3 — leaf icon */}
            <div className="flex gap-5 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2d4f35] border border-[#C9A84C]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-green-100/90 text-base leading-relaxed text-justify">
                <strong className="text-white">Rooted Clarity grew from that journey.</strong> It&apos;s the resource I wish I had when I was trying to connect the dots and understand what my body was telling me.
              </p>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-[#C9A84C]/40 mx-auto mb-6" />

            {/* Founder */}
            <div className="text-center">
              <p className="text-white text-2xl font-bold mb-1">Sherry</p>
              <p className="text-[#C9A84C] text-sm italic">Founder, Rooted Clarity</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA — cream with coffee/journal image */}
      <div className="bg-[#f5f0e8] px-6 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              You deserve clarity.<br />Let&apos;s get started.
            </h3>
            <p className="text-gray-600 text-base mb-6 text-justify">
              Real answers come from understanding the whole picture of your health.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 bg-[#1B3A2A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#15301f] transition-colors text-sm"
            >
              See What Your Labs Are Really Saying
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
              alt="Journal with coffee and pen"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
