export default function Approach() {
  return (
    <section id="approach" style={{ background: "linear-gradient(160deg, #eee8dc 0%, #f0ece3 50%, #e8e2d5 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10 pb-16 sm:pt-12 sm:pb-20">

        {/* HEADLINE + supporting copy */}
        <div className="max-w-2xl mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] leading-tight mb-4">
            Why Most Lab Interpretations Fail
          </h2>
          <p className="text-gray-800 text-base leading-relaxed mb-2">
            Your labs aren&apos;t &ldquo;fine.&rdquo; They&apos;re being interpreted in isolation.
          </p>
          <p className="text-gray-800 text-base leading-relaxed">
            Your body works as a system — and your labs reflect that.
          </p>
        </div>

        {/* IMAGE + emotional text — two column */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center mb-6">

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

        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b8ad98] to-transparent mb-8" />

        {/* THREE PILLARS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
            <div key={p.title} className="border-t-[3px] border-[#1B3A2A] pt-5 bg-[#e8e2d5]/40 rounded-b-lg px-4 pb-5">
              <h3 className="font-serif text-2xl font-extrabold text-[#1B3A2A] mb-2">{p.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
