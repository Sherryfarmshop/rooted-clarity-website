export default function FounderStory() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-forest">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-12">
          Why I Built <span className="text-gold">Rooted Clarity</span>
        </h2>

        <blockquote className="relative">
          <span className="absolute -top-8 -left-2 text-gold/20 text-8xl font-[family-name:var(--font-playfair)]">
            &ldquo;
          </span>
          <div className="space-y-6 text-softwhite/85 text-lg leading-relaxed italic">
            <p>
              When I was diagnosed with cancer, I began looking more closely at the
              bigger picture of my health — my metabolic health, my nutrition, and
              the patterns in my bloodwork that I felt deserved more attention.
            </p>
            <p>
              That search led me into a deeper world of research. I began learning
              from physicians, researchers, and educators who were exploring the
              connections between metabolism, nutrition, and disease in a way that
              made more sense to me.
            </p>
            <p className="text-cream font-medium">
              Rooted Clarity grew from that journey. It is the resource I wish I
              had when I was trying to connect the dots and better understand what
              my body was telling me.
            </p>
          </div>

          <footer className="mt-10">
            <div className="w-16 h-0.5 bg-gold/40 mx-auto mb-4" />
            <p className="text-gold font-[family-name:var(--font-playfair)] text-xl">
              — Sherry
            </p>
            <p className="text-softwhite/60 text-sm mt-1">
              Founder of Rooted Clarity
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
