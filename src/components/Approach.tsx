export default function Approach() {
  const pillars = [
    {
      title: "Patterns, Not Just Numbers",
      body: "We don\u2019t stop at ranges. We look at how your labs interact.",
    },
    {
      title: "Whole-Body Insight",
      body: "Your symptoms, labs, and lifestyle are connected.",
    },
    {
      title: "Clarity You Can Act On",
      body: "Clear, personalized direction based on what your body is actually telling you.",
    },
  ];

  const doctors = [
    "Dr. Dom D\u2019Agostino",
    "Dr. Andrew Koutnik",
    "Dr. Thomas Seyfried",
    "Dr. Ben Bikman",
    "Dr. Casey Means",
    "Dr. Mark Hyman",
  ];

  return (
    <section id="approach" className="bg-[#f7f4ef]">
      <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
          This Is Where Most Approaches Fall Short
        </h2>

        {/* Intro */}
        <div className="mb-10 space-y-1">
          <p className="text-gray-700 text-lg font-semibold">You&apos;re not crazy.</p>
          <p className="text-gray-700 text-lg font-semibold">Your labs aren&apos;t &ldquo;fine.&rdquo;</p>
          <p className="text-gray-700 text-lg font-semibold">They&apos;re just being looked at the wrong way.</p>
        </div>

        {/* Core paragraphs */}
        <div className="space-y-5 mb-14 max-w-2xl">
          <p className="text-gray-600 text-base leading-relaxed text-justify">
            Most providers look at numbers. We look at what they mean together.
          </p>
          <p className="text-gray-600 text-base leading-relaxed text-justify">
            Your body doesn&apos;t operate in isolated markers. It works as a system — and your labs reflect that.
          </p>
          <p className="text-gray-600 text-base leading-relaxed text-justify">
            When you only look at individual values, you miss the bigger picture. That&apos;s why people are told everything is &ldquo;normal&rdquo;&hellip; and still don&apos;t feel like themselves.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-200/80">
              <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
              <div className="w-6 h-px bg-[#C9A84C] mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Credibility */}
        <div className="bg-[#1B3A2A] rounded-2xl px-8 py-10 mb-14 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-6">
            Where This Approach Comes From
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {doctors.map((doc) => (
              <div key={doc} className="bg-white/10 rounded-lg px-4 py-3">
                <p className="text-[#f0ece3] text-sm font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <p className="text-green-300/70 text-sm">
            We draw from leading work in metabolic health and clinical research.
          </p>
        </div>

        {/* Closing lines */}
        <div className="text-center mb-10 space-y-2">
          <p className="font-serif text-2xl sm:text-3xl text-gray-900 font-semibold">You stop guessing.</p>
          <p className="font-serif text-2xl sm:text-3xl text-gray-900 font-semibold">
            You finally understand what&apos;s going on — and what to do next.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#signup"
            className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-base shadow-xl ring-1 ring-[#a8893d]/40 hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200"
          >
            Upload Your Labs (Takes 2 Minutes)
          </a>
        </div>

      </div>
    </section>
  );
}
