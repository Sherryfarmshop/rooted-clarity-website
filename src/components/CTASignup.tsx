"use client";

import { useState } from "react";

export default function CTASignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="signup" className="py-20 sm:py-28 px-6 bg-[#f5f0e8]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#8B6914] text-xs font-semibold uppercase tracking-widest mb-3">Early Access</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Be the First to Know
        </h2>
        <div className="w-8 h-0.5 bg-[#8B6914] mx-auto mb-6" />
        <p className="text-gray-600 mb-10 leading-relaxed text-justify">
          Rooted Clarity is coming soon. Join the waitlist to get early access and be part of a community that believes your health is worth more than &ldquo;normal.&rdquo;
        </p>

        {submitted ? (
          <div className="bg-green-900/10 border border-green-900/20 rounded-2xl p-8">
            <span className="text-4xl block mb-3">🌿</span>
            <p className="text-green-900 text-xl font-semibold mb-1">You&apos;re on the list!</p>
            <p className="text-gray-500 text-sm">We&apos;ll be in touch when Rooted Clarity launches.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-900 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-950 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        )}
        <p className="text-gray-400 text-xs mt-4">No spam. Just updates. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
