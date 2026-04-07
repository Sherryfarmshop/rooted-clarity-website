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
              I was diagnosed with cancer — and my doctor never once mentioned how
              my metabolic health, my diet, or my bloodwork connected to what was
              happening in my body.
            </p>
            <p>
              I started researching on my own. I found doctors like Seyfried, Berg,
              and D&apos;Agostino who were connecting the dots that mainstream
              medicine refuses to.
            </p>
            <p className="text-cream font-medium">
              Rooted Clarity is the tool I wish I had.
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
