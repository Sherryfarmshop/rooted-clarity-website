"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const symptomGroups = [
  {
    label: "Energy",
    defaultOpen: true,
    symptoms: [
      "Fatigue or Low Energy", "Afternoon Energy Crashes", "Exercise Intolerance",
      "Wired but Tired (Can't Relax)", "Feeling Sluggish in the Morning",
      "Cold Hands and Feet", "Lack of Motivation",
    ],
  },
  {
    label: "Brain / Mood",
    defaultOpen: true,
    symptoms: [
      "Brain Fog", "Memory Issues", "Trouble Concentrating", "Slow Thinking",
      "Anxiety or Excessive Worry", "Low Mood / Depression", "Mood Swings",
      "Irritability", "Easily Overwhelmed",
    ],
  },
  {
    label: "Digestion", defaultOpen: false,
    symptoms: [
      "Bloating", "Gas / Flatulence", "Constipation", "Diarrhea or Loose Stools",
      "Acid Reflux / Heartburn", "Nausea", "Food Sensitivities",
      "Slow Digestion After Meals", "Abdominal Cramping",
    ],
  },
  {
    label: "Hormones", defaultOpen: false,
    symptoms: [
      "Irregular or Painful Periods", "PMS Symptoms", "Hot Flashes or Night Sweats",
      "Low Libido", "Hair Thinning or Loss", "Unexplained Weight Gain",
      "Hormonal Acne", "Breast Tenderness", "Dry Skin or Hair",
    ],
  },
  {
    label: "Immune System", defaultOpen: false,
    symptoms: [
      "Frequent Colds or Infections", "Slow Wound Healing", "Seasonal Allergies",
      "Autoimmune Flares", "Chronic Low-Grade Inflammation",
      "Swollen Lymph Nodes", "Prone to Fever or Infection",
    ],
  },
  {
    label: "Cardiovascular", defaultOpen: false,
    symptoms: [
      "Heart Palpitations", "Chest Tightness", "Shortness of Breath with Activity",
      "Leg or Ankle Swelling", "Dizziness When Standing Up", "High Blood Pressure Awareness",
    ],
  },
  {
    label: "Nervous System", defaultOpen: false,
    symptoms: [
      "Tingling or Numbness", "Tremors or Shaking", "Dizziness / Vertigo",
      "Headaches or Migraines", "Burning or Shooting Nerve Pain", "Light or Sound Sensitivity",
    ],
  },
  {
    label: "Detox / Liver", defaultOpen: false,
    symptoms: [
      "Dark Urine", "Chemical or Fragrance Sensitivities", "Bitter Taste in Mouth",
      "Strong Body Odor", "Skin Yellowing / Jaundice", "Nausea After Fatty Foods",
    ],
  },
  {
    label: "Hydration / Electrolytes", defaultOpen: false,
    symptoms: [
      "Muscle Cramps", "Excessive Thirst", "Dry Mouth or Lips",
      "Frequent Urination", "Low Blood Pressure Symptoms", "Concentrated / Dark Urine",
    ],
  },
  {
    label: "Respiratory", defaultOpen: false,
    symptoms: [
      "Chronic Cough", "Wheezing or Labored Breathing", "Nasal Congestion",
      "Post-Nasal Drip", "Shortness of Breath at Rest",
    ],
  },
  {
    label: "Sleep", defaultOpen: false,
    symptoms: [
      "Trouble Falling Asleep", "Waking During the Night", "Unrefreshing Sleep",
      "Excessive Daytime Sleepiness", "Restless Legs at Night", "Vivid or Disturbing Dreams",
    ],
  },
  {
    label: "Stress", defaultOpen: false,
    symptoms: [
      "High Daily Stress Levels", "Chronic Stress or Burnout", "Panic Attacks",
      "Emotional Reactivity", "Difficulty Unwinding", "Jaw Clenching or Teeth Grinding",
    ],
  },
  {
    label: "Diet & Lifestyle", defaultOpen: false,
    symptoms: [
      "High Sugar or Refined Carb Intake", "Skipping Meals or Fasting Issues",
      "Low Protein Intake", "High Processed Food Consumption",
      "Eating Very Late at Night", "Poor Daily Hydration", "Frequent Sugar or Salt Cravings",
    ],
  },
];

function Accordion({ group }: { group: typeof symptomGroups[0] }) {
  const [open, setOpen] = useState(group.defaultOpen);

  return (
    <div className="border border-[#e5dfd5] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#fdfaf6] hover:bg-[#f8f4ed] transition-colors"
      >
        <span className="text-[#1B3A2A] text-sm font-bold uppercase tracking-widest">{group.label}</span>
        <svg
          className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white">
          {group.symptoms.map((s) => (
            <label key={s} className="flex items-start gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                name="symptoms"
                value={s}
                className="mt-0.5 w-4 h-4 rounded border-[#e0d8cc] accent-[#1B3A2A]"
              />
              <span className="text-gray-700 text-sm leading-snug group-hover:text-[#1B3A2A] transition-colors">{s}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    if (res.ok) setSubmitted(true);
    else alert("Something went wrong. Please email us at rootedclaritysupport@gmail.com");
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f8f6f1] min-h-screen pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">

          <p className="text-[#8B6914]/60 text-xs uppercase tracking-[0.2em] mb-4">Rooted Clarity Health</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B3A2A] leading-tight mb-3">
            Start My Review
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
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* 1. Your Information */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-5">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="name" required className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" name="email" required className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Where we'll send your results" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <input type="number" name="age" className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Age" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Biological Sex</label>
                      <select name="sex" className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm">
                        <option value="">Select</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Upload Labs */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">Upload Your Labs</h2>
                <p className="text-gray-400 text-sm mb-5">PDFs, images, or screenshots accepted. Up to 10MB.</p>
                <input type="file" name="labs" accept=".pdf,.jpg,.jpeg,.png,.heic" className="w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:bg-[#1B3A2A] file:text-white file:text-sm file:font-medium file:cursor-pointer hover:file:bg-[#15301f] transition-colors" />
                <p className="text-[#8B6914]/50 text-xs mt-4 italic">
                  🔒 HIPAA-conscious. Your information is kept private and never shared.
                </p>
                <p className="text-gray-400 text-xs mt-1 italic">Don&apos;t have a digital copy? Describe your key values in the notes section below.</p>
              </div>

              {/* 3. Symptoms */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-2">What Are You Experiencing?</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">
                  Your symptoms are patterns — not random problems. This helps us see the bigger picture behind your energy, metabolism, hormones, inflammation, and overall health.
                </p>
                <div className="space-y-3">
                  {symptomGroups.map((group) => (
                    <Accordion key={group.label} group={group} />
                  ))}
                </div>
              </div>

              {/* 4. What's Been Going On */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-5">What&apos;s Been Going On?</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How long have you been experiencing these symptoms?</label>
                    <select name="duration" className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm">
                      <option value="">Select</option>
                      <option>Less than 3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>1–3 years</option>
                      <option>More than 3 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">What feels most off in your body right now?</label>
                    <textarea name="goals" rows={3} className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none" placeholder="e.g. Why I'm so tired. Why I can't lose weight. What's causing my brain fog..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know? (medications, diagnoses, notes)</label>
                    <textarea name="notes" rows={3} className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none" placeholder="Optional but helpful" />
                  </div>
                </div>
              </div>

              {/* 5. Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-12 py-5 rounded-xl text-base uppercase tracking-widest shadow-xl hover:bg-[#b0873a] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Start My Review"}
                </button>
                <p className="text-gray-400 text-sm mt-4 italic">No subscriptions. No overwhelm. Just clarity.</p>
                <p className="text-gray-400 text-xs mt-2">We&apos;ll respond to your email within 48 hours.</p>
              </div>

            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
