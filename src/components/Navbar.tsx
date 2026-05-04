"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About" },
    { href: "#supplements", label: "Supplements" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Rooted Clarity"
              width={42}
              height={42}
              className="rounded-lg"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-gray-900 text-lg tracking-wide">ROOTED</span>
              <span className="text-[#8B6914] text-xs tracking-widest font-medium">CLARITY HEALTH</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-green-900 transition-colors text-sm font-medium">
                {l.label}
              </a>
            ))}
            <a href="#signup" className="px-5 py-2 bg-[#1B3A2A] text-white text-sm font-semibold rounded-lg hover:bg-[#15301f] transition-colors">
              Upload Your Labs
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#f5f0e8]/98 border-t border-gray-200 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-green-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#signup" className="block mt-2 px-5 py-2 bg-green-900 text-white text-sm font-semibold rounded-lg text-center">
            Upload Your Labs
          </a>
        </div>
      )}
    </nav>
  );
}
