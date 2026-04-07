"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#problem", label: "The Problem" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#different", label: "Why Us" },
    { href: "#doctors", label: "Doctors" },
    { href: "#features", label: "Features" },
    { href: "#signup", label: "Get Early Access" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-forest/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Rooted Clarity"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="font-[family-name:var(--font-playfair)] text-gold text-xl sm:text-2xl font-semibold hidden sm:inline">
              Rooted Clarity
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-softwhite/70 hover:text-gold transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-softwhite p-2"
            aria-label="Toggle menu"
          >
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-forest/50 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-softwhite/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
