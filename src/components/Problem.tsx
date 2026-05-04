export default function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Told Your Labs Are Normal — But Something Still Feels Off?
            </h2>
            <div className="w-8 h-0.5 bg-[#8B6914] mb-6" />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>You get your bloodwork back and are told <span className="font-semibold text-gray-800">everything looks normal.</span></p>
              <p>But you still feel tired. Foggy. Off.</p>
              <p>Real insight comes from understanding how your labs work together — and what they reveal about the bigger metabolic picture.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Fatigue & low energy", icon: "⚡" },
              { label: "Brain fog & poor focus", icon: "🧠" },
              { label: "Unexplained weight gain", icon: "⚖️" },
              { label: "Told 'results are normal'", icon: "📋" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
