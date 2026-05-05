export default function Approach() {
  return (
    <section id="approach" className="bg-[#f0ece3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 sm:py-20">

        {/* HEADLINE + supporting copy */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B3A2A] leading-tight mb-5">
            Why Most Lab Interpretations Fail
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-2">
            Your labs aren&apos;t &ldquo;fine.&rdquo; They&apos;re being interpreted in isolation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your body works as a system — and your labs reflect that.
          </p>
        </div>

        {/* IMAGE + emotional text — two column */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/lab-results.jpg"
              alt="Hands reviewing lab results with handwritten notes"
              className="w-full h-auto object-contain"
              style={{ maxHeight: "460px" }}
            />
          </div>

          <div>
            <p className="font-serif text-2xl sm:text-3xl text-[#1B3A2A] font-semibold leading-snug mb-5">
              When everything looks normal&hellip; but you still don&apos;t feel right &mdash;
              that&apos;s not in your head.
            </p>
            <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
            <p className="text-gray-600 text-lg leading-relaxed">
              It means no one has connected the dots yet.
            </p>
          </div>

        </div>

        {/* Subtle divider fade */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5bda8] to-transparent mb-10" />

        {/* THREE PILLARS — flows directly from above */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Patterns",
              body: "We don\u2019t stop at ranges. We look at how everything interacts.",
            },
            {
              title: "Whole-Body Insight",
              body: "Your labs, symptoms, and lifestyle are connected.",
            },
            {
              title: "Clear Direction",
              body: "You leave knowing exactly what to do next.",
            },
          ].map((p) => (
            <div key={p.title} className="border-t-2 border-[#1B3A2A] pt-5">
              <h3 className="font-serif text-2xl font-bold text-[#1B3A2A] mb-2">{p.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* DOCTOR / RESEARCH SECTION */}
        <div className="border-t border-gray-300 pt-14 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-4">
            Built from Real Metabolic Research
          </h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-12">
            We draw from leading work in metabolism, nutrition, and clinical practice — and translate it into something you can actually use.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Dr. Dom D\u2019Agostino", initials: "DD", title: "Metabolic Physiology" },
              { name: "Dr. Thomas Seyfried", initials: "TS", title: "Cancer Metabolism" },
              { name: "Dr. Ben Bikman", initials: "BB", title: "Insulin & Metabolic Health" },
              { name: "Dr. Casey Means", initials: "CM", title: "Metabolic Medicine" },
            ].map((doc) => (
              <div key={doc.name} className="bg-[#edeae3] rounded-2xl px-5 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.07)] flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#1B3A2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] font-bold text-xl tracking-wide">{doc.initials}</span>
                </div>
                <div>
                  <p className="text-[#1B3A2A] font-bold text-sm leading-tight mb-1">{doc.name}</p>
                  <p className="text-gray-500 text-xs">{doc.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
