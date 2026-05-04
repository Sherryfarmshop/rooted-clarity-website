export default function FounderStory() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 bg-[#1B3A2A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Why I Built Rooted Clarity</h2>
          <div className="w-8 h-0.5 bg-[#C9A84C] mx-auto" />
        </div>

        <div className="bg-white/10 rounded-2xl p-8 sm:p-12 border border-white/10">
          <div className="space-y-5 text-green-100 text-base sm:text-lg leading-relaxed italic">
            <p>
              When I was diagnosed with cancer, I began looking more closely at the bigger picture of my health — my metabolic health, my nutrition, and the patterns in my bloodwork that I felt deserved more attention.
            </p>
            <p>
              That search led me into a deeper world of research. I began learning from physicians, researchers, and educators who were exploring the connections between metabolism, nutrition, and disease in a way that made more sense to me.
            </p>
            <p className="text-white font-medium not-italic">
              Rooted Clarity grew from that journey. It is the resource I wish I had when I was trying to connect the dots and better understand what my body was telling me.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <p className="text-white font-semibold">Sherry</p>
              <p className="text-green-300 text-xs">Founder of Rooted Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
