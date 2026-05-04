export default function Approach() {
  return (
    <section id="approach" className="bg-[#f0ece3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 sm:py-32">

        {/* 1. HEADLINE */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#1B3A2A] leading-tight mb-6">
            Most Approaches Miss the Point
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            Your labs aren&apos;t &ldquo;fine.&rdquo; They&apos;re being interpreted in isolation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your body works as a system — and your labs reflect that.
          </p>
        </div>

        {/* 2. FEATURE IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">

          {/* Image — cinematic crop */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/founder-story.jpg"
              alt="Woman on dock at sunrise"
              className="w-full h-[420px] object-cover object-center scale-105"
            />
          </div>

          {/* Right text */}
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#1B3A2A] font-semibold leading-snug mb-6">
              When everything looks normal&hellip; but you still don&apos;t feel right &mdash;
              that&apos;s not in your head.
            </p>
            <div className="w-10 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              It means no one has connected the dots yet.
            </p>
          </div>

        </div>

        {/* 3. THREE PILLARS — no boxes */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
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
            <div key={p.title} className="border-t-2 border-[#1B3A2A] pt-6">
              <h3 className="font-serif text-3xl font-bold text-[#1B3A2A] mb-3">{p.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* 4. DOCTOR / RESEARCH SECTION */}
        <div className="border-t border-gray-300 pt-16">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-4">
            Built from Real Metabolic Research
          </h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mb-8">
            We draw from leading work in metabolism, nutrition, and clinical practice — and translate it into something you can actually use.
          </p>
          <div className="flex flex-wrap gap-6">
            {["Dr. Dom D\u2019Agostino", "Dr. Thomas Seyfried", "Dr. Ben Bikman", "Dr. Casey Means"].map((name) => (
              <span key={name} className="text-[#1B3A2A] font-semibold text-sm border-b border-[#C9A84C] pb-0.5">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
