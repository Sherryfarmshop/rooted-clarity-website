export default function FounderStory() {
  return (
    <section id="about" className="bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="max-w-[620px]">
            <p className="text-[#8B6914]/70 text-xs font-normal uppercase tracking-widest mb-5">
              Founder&apos;s Story
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1B3A2A] leading-tight mb-5">
              Why I Built<br />Rooted Clarity
            </h2>
            <div className="w-10 h-0.5 bg-[#8B6914] mb-8" />

            <div className="space-y-6 text-gray-700 text-base leading-[1.85]">
              <p className="text-justify">
                When I was diagnosed with cancer, I started looking deeper at my health — my metabolism, my nutrition, and the patterns in my bloodwork that felt like they were being overlooked.
              </p>
              <p className="text-justify">
                That search led me into a deeper world of research. I began learning from physicians and researchers exploring the connections between metabolism, nutrition, and disease — in a way that finally made sense.
              </p>
              <p className="text-justify">
                <strong>Rooted Clarity</strong> grew from that journey. It&apos;s the resource I wish I had when I was trying to connect the dots and understand what my body was telling me.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-300/50">
              <p className="text-gray-500 text-sm font-medium">Sherry</p>
              <p className="text-gray-400 text-xs tracking-wide">Founder, Rooted Clarity</p>
            </div>
          </div>

          {/* Right — photo with warm overlay */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/founder-story.jpg"
              alt="Woman sitting on dock at sunrise"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/12 rounded-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
