export default function ResearchFoundation() {
  const experts = [
    { name: "Dr. Dom D\u2019Agostino", initials: "DD", title: "Metabolic Physiology" },
    { name: "Dr. Thomas Seyfried", initials: "TS", title: "Cancer Metabolism" },
    { name: "Dr. Ben Bikman", initials: "BB", title: "Insulin & Metabolic Health" },
    { name: "Dr. Casey Means", initials: "CM", title: "Metabolic Medicine" },
    { name: "Dr. Jason Fung", initials: "JF", title: "Fasting & Insulin Resistance" },
    { name: "Dr. Mark Hyman", initials: "MH", title: "Functional Medicine" },
  ];

  return (
    <section className="px-6 py-16 sm:py-20" style={{ background: "linear-gradient(160deg, #e6e2d8 0%, #ece8de 60%, #e4dfd4 100%)" }}>
      <div className="max-w-5xl mx-auto">

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-3">
          Built from Real Metabolic Research
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-12">
          The philosophy behind Rooted Clarity draws from leading thinkers in metabolism, nutrition, and clinical practice — researchers who changed how we understand chronic disease, energy, and health at the cellular level.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {experts.map((doc) => (
            <div
              key={doc.name}
              className="bg-[#f0ece3] rounded-2xl px-4 py-6 flex flex-col items-center gap-3 shadow-sm border border-[#d8d2c6] hover:shadow-[0_6px_20px_rgba(27,58,42,0.15)] hover:-translate-y-1 hover:ring-1 hover:ring-[#C9A84C]/40 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-[#1B3A2A] flex items-center justify-center flex-shrink-0">
                <span className="text-[#C9A84C] font-bold text-base tracking-wide">{doc.initials}</span>
              </div>
              <div className="text-center">
                <p className="text-[#1B3A2A] font-bold text-xs leading-tight mb-1">{doc.name}</p>
                <p className="text-gray-500 text-[11px] leading-tight">{doc.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
