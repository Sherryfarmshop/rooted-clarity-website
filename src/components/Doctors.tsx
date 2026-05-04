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
    <section id="doctors" className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">Research Foundation</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Built on Research, Not Guesswork</h2>
          <div className="w-8 h-0.5 bg-[#8B6914] mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Rooted Clarity draws from publicly available research and educational content from physicians, researchers, and health educators advancing conversations around metabolic health and wellness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doc) => (
            <div key={doc.name} className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:border-green-900/20 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">
                  {doc.name.split(" ").pop()?.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">{doc.name}</h3>
                <p className="text-[#8B6914] text-xs">{doc.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
