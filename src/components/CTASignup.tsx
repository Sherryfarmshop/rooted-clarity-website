"use client";

import { useState } from "react";

export default function CTASignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="signup" className="py-20 sm:py-28 px-4 bg-forest relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
          Be the First to <span className="text-gold">Know</span>
        </h2>
        <p className="text-softwhite/80 text-lg mb-10 leading-relaxed">
          Rooted Clarity is coming soon. Join the waitlist to get early access
          and be part of a community that believes your health is worth more
          than &ldquo;normal.&rdquo;
        </p>

        {submitted ? (
          <div className="bg-teal/20 border border-teal/40 rounded-xl p-8">
            <span className="text-4xl block mb-3">🌿</span>
            <p className="text-cream text-xl font-semibold mb-1">
              You&apos;re on the list!
            </p>
            <p className="text-softwhite/70">
              We&apos;ll be in touch when Rooted Clarity launches.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-lg bg-dark/80 border border-sage/30 text-softwhite placeholder-softwhite/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold/90 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        )}

        <p className="text-softwhite/40 text-xs mt-6">
          No spam. Just updates on Rooted Clarity. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
