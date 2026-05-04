export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1B3A2A] pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-2 items-end min-h-[70vh]">

          {/* Left — text */}
          <div className="py-16 col-span-2 md:col-span-1">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight mb-5">
              Built on Research.<br />
              Not Guesswork.
            </h1>
            <div className="w-12 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-sm">
              Most lab reviews focus on individual numbers.<br />
              We look at how your body works together.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#1B3A2A] font-bold px-8 py-4 rounded-lg hover:bg-[#b8944c] transition-colors text-lg mb-5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Your Labs
            </a>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span>⏱ Takes 2 minutes</span>
              <span>•</span>
              <span>🔒 Secure &amp; private</span>
            </div>
          </div>

          {/* Right — SVG potted plant */}
          <div className="hidden md:flex items-end justify-center pb-0">
            <svg viewBox="0 0 300 420" className="w-64 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pot */}
              <path d="M105 310 L195 310 L185 390 L115 390 Z" fill="#C9A98D" />
              <rect x="95" y="298" width="110" height="18" rx="4" fill="#B8956E" />
              {/* Soil line */}
              <ellipse cx="150" cy="305" rx="50" ry="8" fill="#5C3D1E" />
              {/* Main stem */}
              <path d="M150 305 L150 200" stroke="#4a6741" strokeWidth="5" strokeLinecap="round"/>
              {/* Left big leaf */}
              <path d="M148 240 C120 220 90 200 80 170 C110 165 138 185 150 215" fill="#3d6b3d" opacity="0.95"/>
              {/* Right big leaf */}
              <path d="M152 220 C180 200 210 180 220 150 C190 145 162 165 150 195" fill="#4a7a4a" opacity="0.95"/>
              {/* Left mid leaf */}
              <path d="M148 260 C115 245 90 230 85 210 C112 208 140 222 150 245" fill="#2d5a2d" opacity="0.9"/>
              {/* Right mid leaf */}
              <path d="M152 250 C185 235 210 220 215 200 C188 198 160 212 150 238" fill="#3d6b3d" opacity="0.9"/>
              {/* Top left leaf */}
              <path d="M147 200 C125 182 108 155 110 130 C133 138 148 165 150 192" fill="#4a7a4a" opacity="0.95"/>
              {/* Top right leaf */}
              <path d="M153 195 C175 177 192 150 190 125 C167 133 152 160 150 188" fill="#3d6b3d" opacity="0.95"/>
              {/* Center top leaf */}
              <path d="M150 190 C145 160 148 130 150 100 C155 130 155 160 150 190" fill="#2d5a2d" opacity="0.95"/>
              {/* Small accent leaves */}
              <path d="M148 275 C128 265 110 255 105 238 C125 237 144 250 150 268" fill="#4a7a4a" opacity="0.85"/>
              <path d="M152 270 C172 260 190 250 195 233 C175 232 156 245 150 263" fill="#3d6b3d" opacity="0.85"/>
            </svg>
          </div>

        </div>
      </section>

      {/* "Where most stop" — ivory */}
      <section className="bg-[#f0ece3] px-6 py-20 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-5 italic">
          Where most stop<br />
          at &ldquo;normal,&rdquo;<br />
          we go further.
        </h2>
        <div className="w-8 h-0.5 bg-[#C9A84C] mx-auto mb-5" />
        <p className="text-gray-500 text-lg">We look for patterns, not just numbers.</p>
      </section>
    </>
  );
}
