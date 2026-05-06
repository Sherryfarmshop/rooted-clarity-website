export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Labs",
      desc: "Securely upload your bloodwork in just a few minutes.",
      detail: "PDFs, screenshots, or lab portals accepted.",
      bg: "from-[#e8f2e8] to-[#f0f7f0]",
      svg: (
        <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone */}
          <rect x="72" y="20" width="56" height="100" rx="8" fill="#1B3A2A" />
          <rect x="76" y="28" width="48" height="72" rx="4" fill="#f0ece3" />
          <circle cx="100" cy="112" r="5" fill="#C9A84C" opacity="0.6" />
          {/* Lab report on screen */}
          <rect x="82" y="34" width="36" height="4" rx="2" fill="#1B3A2A" opacity="0.3" />
          <rect x="82" y="42" width="28" height="2" rx="1" fill="#1B3A2A" opacity="0.2" />
          <rect x="82" y="48" width="30" height="2" rx="1" fill="#1B3A2A" opacity="0.2" />
          <rect x="82" y="54" width="24" height="2" rx="1" fill="#1B3A2A" opacity="0.2" />
          {/* Upload arrow */}
          <circle cx="100" cy="80" r="12" fill="#C9A84C" opacity="0.9" />
          <path d="M100 74 L100 84 M96 78 L100 74 L104 78" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Floating document */}
          <rect x="30" y="40" width="35" height="46" rx="4" fill="white" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8" />
          <rect x="36" y="50" width="23" height="2" rx="1" fill="#1B3A2A" opacity="0.25" />
          <rect x="36" y="56" width="20" height="2" rx="1" fill="#1B3A2A" opacity="0.2" />
          <rect x="36" y="62" width="22" height="2" rx="1" fill="#1B3A2A" opacity="0.2" />
          <rect x="36" y="68" width="18" height="2" rx="1" fill="#C9A84C" opacity="0.4" />
          {/* Arrow from doc to phone */}
          <path d="M65 63 Q70 60 72 63" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We Analyze Patterns Across Your Body",
      desc: "We look at how your hormones, metabolism, inflammation, nutrients, and symptoms work together.",
      detail: "Because your body doesn't function in isolated numbers.",
      bg: "from-[#fdf8ee] to-[#faf4e5]",
      svg: (
        <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central body silhouette */}
          <ellipse cx="100" cy="60" rx="22" ry="30" fill="#1B3A2A" opacity="0.08" />
          <ellipse cx="100" cy="40" rx="13" ry="13" fill="#1B3A2A" opacity="0.12" />
          {/* Connecting nodes */}
          {[
            { x: 44, y: 50, label: "Hormones" },
            { x: 156, y: 50, label: "Metabolism" },
            { x: 44, y: 100, label: "Inflammation" },
            { x: 156, y: 100, label: "Nutrients" },
            { x: 100, y: 130, label: "Energy" },
          ].map((node, i) => (
            <g key={i}>
              <line x1={node.x} y1={node.y} x2="100" y2="72" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              <circle cx={node.x} cy={node.y} r="16" fill="white" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9" />
              <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="6" fill="#1B3A2A" opacity="0.8">{node.label}</text>
            </g>
          ))}
          {/* Center hub */}
          <circle cx="100" cy="72" r="14" fill="#1B3A2A" opacity="0.9" />
          <circle cx="100" cy="72" r="8" fill="#C9A84C" opacity="0.7" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Get Personalized Recommendations",
      desc: "Receive clear guidance tailored to your body — including nutrition, supplements, recovery, lifestyle, and wellness support.",
      detail: "No guessing. Just a clear direction forward.",
      bg: "from-[#f0f7f0] to-[#e8f2e8]",
      svg: (
        <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wellness plan document */}
          <rect x="50" y="20" width="100" height="120" rx="8" fill="white" stroke="#C9A84C" strokeWidth="1.5" opacity="0.9" />
          {/* Header line */}
          <rect x="62" y="32" width="76" height="5" rx="2.5" fill="#1B3A2A" opacity="0.3" />
          {/* Checkmark items */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx="68" cy={52 + i * 16} r="5" fill="#1B3A2A" opacity="0.8" />
              <path d={`M65 ${52 + i * 16} L68 ${55 + i * 16} L72 ${49 + i * 16}`} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="78" y={48 + i * 16} width={30 + (i % 3) * 10} height="3" rx="1.5" fill="#1B3A2A" opacity="0.2" />
            </g>
          ))}
          {/* Gold accent dot */}
          <circle cx="138" cy="125" r="8" fill="#C9A84C" opacity="0.7" />
          <path d="M135 125 L138 128 L143 121" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Small supplement pills floating */}
          <ellipse cx="160" cy="55" rx="8" ry="5" fill="#C9A84C" opacity="0.4" transform="rotate(-20 160 55)" />
          <ellipse cx="40" cy="80" rx="8" ry="5" fill="#1B3A2A" opacity="0.2" transform="rotate(15 40 80)" />
          <circle cx="165" cy="90" r="5" fill="#C9A84C" opacity="0.3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f7f4ef] px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3A2A] mb-2">
          How It Works
        </h2>
        <p className="text-gray-500 text-base mb-12">
          A simple process designed to help you finally connect the dots.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl overflow-hidden shadow-sm border border-[#e0d8cc] bg-gradient-to-br ${step.bg}`}
            >
              {/* Illustration */}
              <div className="px-6 pt-6 pb-2 h-40">
                {step.svg}
              </div>

              {/* Text */}
              <div className="px-6 pb-6">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest mb-2">{step.number}</p>
                <h3 className="font-serif text-lg font-bold text-[#1B3A2A] mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.desc}</p>
                <p className="text-gray-400 text-xs italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
