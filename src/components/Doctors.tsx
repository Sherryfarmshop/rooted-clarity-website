const doctors = [
  { name: "Dr. Thomas Seyfried", focus: "Cancer as Metabolic Disease", quote: "Cancer is a metabolic disease, not a genetic one." },
  { name: "Dr. Dom D'Agostino", focus: "Ketogenic Research & Fasting", quote: "If medicine wants to focus on prevention, there's no better tool than nutrition." },
  { name: "Dr. Andrew Koutnik", focus: "Metabolic Health & Type 1 Diabetes", quote: "Optimizing metabolic health changes everything — from disease management to performance." },
  { name: "Dr. Eric Berg", focus: "Keto & Nutritional Healing", quote: "Calories are insignificant compared to hormones." },
  { name: "Dr. Ken Berry", focus: "Carnivore / Keto", quote: "No one has more to lose than you when it comes to your health." },
  { name: "Thomas DeLauer", focus: "Fasting & Supplement Science", quote: "You don't want to be a one-trick pony — metabolic flexibility is the goal." },
  { name: "Dr. Anthony Chaffee", focus: "Carnivore Diet & Disease Reversal", quote: "Plants are survival food. Meat is what humans are designed to eat." },
  { name: "Dr. William Makis", focus: "Alternative Cancer Protocols", quote: "Patients deserve access to every tool available, not just the conventional ones." },
  { name: "Dr. Nate Ward", focus: "Functional Medicine", quote: "Functional medicine finds the root cause — not just the symptoms." },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-28 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream mb-4">
          Built on Research, <span className="text-gold">Not Guesswork</span>
        </h2>
        <p className="text-center text-softwhite/70 max-w-2xl mx-auto mb-16 text-lg">
          Rooted Clarity draws from publicly available research and educational
          content from physicians, researchers, and health educators who have
          helped advance conversations around metabolic health, nutrition,
          fasting, and wellness.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-forest/40 border border-sage/20 rounded-xl p-6 hover:border-gold/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <span className="text-gold text-lg font-bold font-[family-name:var(--font-playfair)]">
                  {doc.name.charAt(0) === "D" ? doc.name.split(" ").pop()?.charAt(0) : doc.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-cream mb-1">{doc.name}</h3>
              <p className="text-teal text-sm font-medium mb-3">{doc.focus}</p>
              <p className="text-softwhite/60 text-sm italic">&ldquo;{doc.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
