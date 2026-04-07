const features = [
  { title: "Lab Upload & Analysis", icon: "📊" },
  { title: "AI-Powered Metabolic Insights", icon: "🤖" },
  { title: "Personalized Wellness Plans", icon: "📋" },
  { title: "Supplement Protocols with Dosages", icon: "💊" },
  { title: "Diet & Fasting Recommendations", icon: "🍽️" },
  { title: "Medication Interaction Checker", icon: "⚠️" },
  { title: "Symptom Tracker", icon: "📈" },
  { title: "Questions for Your Doctor", icon: "❓" },
];

export default function AppFeatures() {
  return (
    <section id="features" className="py-20 sm:py-28 px-4 bg-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream mb-4">
          Everything You Need in <span className="text-gold">One App</span>
        </h2>
        <p className="text-center text-softwhite/70 max-w-2xl mx-auto mb-16 text-lg">
          Rooted Clarity puts the power of metabolic health analysis in your hands.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-forest/30 border border-sage/15 rounded-xl p-5 text-center hover:border-teal/30 hover:bg-forest/50 transition-all"
            >
              <span className="text-3xl block mb-3">{f.icon}</span>
              <h3 className="text-sm sm:text-base font-semibold text-cream">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
