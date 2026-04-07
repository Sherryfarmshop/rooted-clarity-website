const doctors = [
  { name: "Dr. Thomas Seyfried", focus: "Cancer as Metabolic Disease" },
  { name: "Dr. Dom D'Agostino", focus: "Ketogenic Research & Fasting" },
  { name: "Dr. Andrew Koutnik", focus: "Metabolic Health & Type 1 Diabetes" },
  { name: "Dr. Eric Berg", focus: "Keto & Nutritional Healing" },
  { name: "Dr. Ken Berry", focus: "Carnivore / Keto" },
  { name: "Thomas DeLauer", focus: "Fasting & Supplement Science" },
  { name: "Dr. Anthony Chaffee", focus: "Carnivore Diet & Disease Reversal" },
  { name: "Dr. William Makis", focus: "Alternative Cancer Protocols" },
  { name: "Dr. Nate Ward", focus: "Functional Medicine" },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-28 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream mb-4">
          Informed by <span className="text-gold">Real Doctors</span>
        </h2>
        <p className="text-center text-softwhite/70 max-w-2xl mx-auto mb-16 text-lg">
          Our protocols are shaped by the research and clinical work of physicians
          and scientists who are redefining health.
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
              <p className="text-teal text-sm font-medium">{doc.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
