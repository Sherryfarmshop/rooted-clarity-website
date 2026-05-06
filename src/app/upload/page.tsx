"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const symptoms = [
  "Fatigue / low energy",
  "Brain fog / difficulty concentrating",
  "Weight gain or difficulty losing weight",
  "Poor sleep",
  "Anxiety or mood swings",
  "Digestive issues",
  "Hair thinning or loss",
  "Cold hands or feet",
  "Joint or muscle pain",
  "Low libido",
  "Frequent illness",
  "Skin issues (acne, dryness, rashes)",
  "Heavy or irregular periods",
  "Bloating",
  "Low motivation",
  "Feeling unwell despite 'normal' labs",
];

export default function UploadPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xpwrnqyj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please email us directly at rootedclaritysupport@gmail.com");
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f8f6f1] min-h-screen pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">

          {/* Header */}
          <p className="text-[#8B6914]/60 text-xs uppercase tracking-[0.2em] mb-4">
            Rooted Clarity Health
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B3A2A] leading-tight mb-3">
            Start Your Review
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Upload your labs and tell us what you&apos;re experiencing. We&apos;ll review your results and send you personalized insights within 48 hours.
          </p>

          <div className="w-12 h-px bg-[#C9A84C] mb-10" />

          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#1B3A2A] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1B3A2A] mb-3">We received your submission.</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
                We&apos;ll review your labs and symptoms carefully and send your personalized insights to your email within 48 hours.
              </p>
              <p className="text-[#8B6914]/60 text-sm mt-6 italic">No subscriptions. No overwhelm. Just clarity.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">

              {/* Basic info */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-5">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm"
                      placeholder="Where we'll send your results"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <input
                        type="number"
                        name="age"
                        className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm"
                        placeholder="Age"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Biological Sex</label>
                      <select
                        name="sex"
                        className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm"
                      >
                        <option value="">Select</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lab upload */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">Upload Your Labs</h2>
                <p className="text-gray-400 text-sm mb-5">PDFs, images, or screenshots accepted. Up to 10MB.</p>
                <input
                  type="file"
                  name="labs"
                  accept=".pdf,.jpg,.jpeg,.png,.heic"
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:bg-[#1B3A2A] file:text-white file:text-sm file:font-medium file:cursor-pointer hover:file:bg-[#15301f] transition-colors"
                />
                <p className="text-gray-400 text-xs mt-3 italic">
                  Don&apos;t have a digital copy? Describe your key values in the notes section below.
                </p>
              </div>

              {/* Symptoms */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">What Are You Experiencing?</h2>
                <p className="text-gray-400 text-sm mb-5">Select everything that applies.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {symptoms.map((s) => (
                    <label key={s} className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="symptoms"
                        value={s}
                        className="mt-0.5 w-4 h-4 rounded border-[#e0d8cc] text-[#1B3A2A] focus:ring-[#1B3A2A]/20 accent-[#1B3A2A]"
                      />
                      <span className="text-gray-700 text-sm leading-snug group-hover:text-[#1B3A2A] transition-colors">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How long */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-5">A Few More Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How long have you been experiencing these symptoms?</label>
                    <select
                      name="duration"
                      className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm"
                    >
                      <option value="">Select</option>
                      <option>Less than 3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>1–3 years</option>
                      <option>More than 3 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">What are you most hoping to understand from your labs?</label>
                    <textarea
                      name="goals"
                      rows={3}
                      className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none"
                      placeholder="e.g. Why I'm so tired. Why I can't lose weight. What's causing my brain fog..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know? (medications, diagnoses, notes)</label>
                    <textarea
                      name="notes"
                      rows={3}
                      className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none"
                      placeholder="Optional but helpful"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-12 py-5 rounded-xl text-base uppercase tracking-widest shadow-xl hover:bg-[#b0873a] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit My Labs"}
                </button>
                <p className="text-gray-400 text-sm mt-4 italic">
                  No subscriptions. No overwhelm. Just clarity.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  We&apos;ll respond to your email within 48 hours.
                </p>
              </div>

            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
