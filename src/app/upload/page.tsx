"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const systemIcons: Record<string, React.ReactNode> = {
  "Energy": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  "Brain / Mood": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  "Digestion": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
  "Hormones": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
  "Immune System": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  "Cardiovascular": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
  "Nervous System": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="4" y="4" width="16" height="16" rx="2"/><path strokeLinecap="round" d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/></svg>,
  "Detox / Liver": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>,
  "Hydration / Electrolytes": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M19.07 4.22l-.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M19.07 19.78l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>,
  "Respiratory": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
  "Sleep": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>,
  "Stress": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" d="M12 8v4M12 16h.01"/></svg>,
  "Diet & Lifestyle": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2C22 14 6 16 4 20"/></svg>,
};

const symptomGroups = [
  { label: "Energy", defaultOpen: true, symptoms: ["Fatigue or Low Energy","Afternoon Energy Crashes","Exercise Intolerance","Wired but Tired (Can't Relax)","Feeling Sluggish in the Morning","Cold Hands and Feet","Lack of Motivation"] },
  { label: "Brain / Mood", defaultOpen: true, symptoms: ["Brain Fog","Memory Issues","Trouble Concentrating","Slow Thinking","Anxiety or Excessive Worry","Low Mood / Depression","Mood Swings","Irritability","Easily Overwhelmed"] },
  { label: "Digestion", defaultOpen: false, symptoms: ["Bloating","Gas / Flatulence","Constipation","Diarrhea or Loose Stools","Acid Reflux / Heartburn","Nausea","Food Sensitivities","Slow Digestion After Meals","Abdominal Cramping"] },
  { label: "Hormones", defaultOpen: false, symptoms: ["Irregular or Painful Periods","PMS Symptoms","Hot Flashes or Night Sweats","Low Libido","Hair Thinning or Loss","Unexplained Weight Gain","Hormonal Acne","Breast Tenderness","Dry Skin or Hair"] },
  { label: "Immune System", defaultOpen: false, symptoms: ["Frequent Colds or Infections","Slow Wound Healing","Seasonal Allergies","Autoimmune Flares","Chronic Low-Grade Inflammation","Swollen Lymph Nodes","Prone to Fever or Infection"] },
  { label: "Cardiovascular", defaultOpen: false, symptoms: ["Heart Palpitations","Chest Tightness","Shortness of Breath with Activity","Leg or Ankle Swelling","Dizziness When Standing Up","High Blood Pressure Awareness"] },
  { label: "Nervous System", defaultOpen: false, symptoms: ["Tingling or Numbness","Tremors or Shaking","Dizziness / Vertigo","Headaches or Migraines","Burning or Shooting Nerve Pain","Light or Sound Sensitivity"] },
  { label: "Detox / Liver", defaultOpen: false, symptoms: ["Dark Urine","Chemical or Fragrance Sensitivities","Bitter Taste in Mouth","Strong Body Odor","Skin Yellowing / Jaundice","Nausea After Fatty Foods"] },
  { label: "Hydration / Electrolytes", defaultOpen: false, symptoms: ["Muscle Cramps","Excessive Thirst","Dry Mouth or Lips","Frequent Urination","Low Blood Pressure Symptoms","Concentrated / Dark Urine"] },
  { label: "Respiratory", defaultOpen: false, symptoms: ["Chronic Cough","Wheezing or Labored Breathing","Nasal Congestion","Post-Nasal Drip","Shortness of Breath at Rest"] },
  { label: "Sleep", defaultOpen: false, symptoms: ["Trouble Falling Asleep","Waking During the Night","Unrefreshing Sleep","Excessive Daytime Sleepiness","Restless Legs at Night","Vivid or Disturbing Dreams"] },
  { label: "Stress", defaultOpen: false, symptoms: ["High Daily Stress Levels","Chronic Stress or Burnout","Panic Attacks","Emotional Reactivity","Difficulty Unwinding","Jaw Clenching or Teeth Grinding"] },
  { label: "Diet & Lifestyle", defaultOpen: false, symptoms: ["High Sugar or Refined Carb Intake","Skipping Meals or Fasting Issues","Low Protein Intake","High Processed Food Consumption","Eating Very Late at Night","Poor Daily Hydration","Frequent Sugar or Salt Cravings"] },
];

function SystemCard({ group, selected, onToggle, onSelectSymptom }: {
  group: typeof symptomGroups[0];
  selected: Set<string>;
  onToggle: () => void;
  onSelectSymptom: (s: string) => void;
}) {
  const count = group.symptoms.filter(s => selected.has(s)).length;
  const [open, setOpen] = useState(group.defaultOpen);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${open ? "border-[#b8893a]/40 shadow-md" : "border-[#ddd8ce] hover:border-[#b8893a]/30"} bg-[#fdfaf5]`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 gap-3"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[#1a3325]/60">{systemIcons[group.label]}</span>
          <span className="font-semibold text-[#1a3325] text-sm">{group.label}</span>
        </div>
        <div className="flex items-center gap-2">
          {count > 0 && (
            <span className="bg-[#b8893a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
          {count === 0 && (
            <span className="text-gray-400 text-[10px]">0</span>
          )}
          <svg
            className={`w-4 h-4 text-[#b8893a] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </button>

      {/* Expanded checkbox list */}
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-[#e8e2d8]">
          {group.symptoms.map((s) => (
            <label key={s} className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="symptoms"
                value={s}
                checked={selected.has(s)}
                onChange={() => onSelectSymptom(s)}
                className="mt-0.5 w-4 h-4 rounded accent-[#1a3325] flex-shrink-0"
              />
              <span className="text-gray-700 text-xs leading-snug group-hover:text-[#1a3325] transition-colors">{s}</span>
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
  const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(new Set());

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms(prev => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s); else next.add(s);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    selectedSymptoms.forEach(s => data.append("symptoms", s));
    const res = await fetch("https://formspree.io/f/xpwrnqyj", {
      method: "POST", body: data, headers: { Accept: "application/json" },
    });
    setLoading(false);
    if (res.ok) setSubmitted(true);
    else alert("Something went wrong. Please email rootedclaritysupport@gmail.com");
  };

  const totalSelected = selectedSymptoms.size;

  return (
    <>
      <Navbar />
      <main className="bg-[#f8f6f1] min-h-screen pt-28 pb-20">
        <div className="max-w-xl mx-auto px-6">

          <p className="text-[#8B6914]/60 text-xs uppercase tracking-[0.2em] mb-4">Rooted Clarity Health</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B3A2A] leading-tight mb-3">Start My Review</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-3">
            Upload your labs and tell us what you&apos;re experiencing. We&apos;ll review your results and send you personalized insights within 48 hours.
          </p>
          <p className="text-gray-400 text-sm italic leading-relaxed mb-10">
            No guessing. No generic advice. Just a deeper look at what your body may be trying to tell you.
          </p>
          <div className="w-12 h-px bg-[#C9A84C] mb-10" />

          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#1B3A2A] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#1B3A2A] mb-3">We received your submission.</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">We&apos;ll review your labs and symptoms carefully and send your personalized insights to your email within 48 hours.</p>
              <p className="text-[#8B6914]/60 text-sm mt-6 italic">No subscriptions. No overwhelm. Just clarity.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* 1. Your Information */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <h2 className="font-serif text-xl font-bold text-[#1B3A2A] mb-5">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="name" required className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Your name"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" name="email" required className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Where we'll send your results"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <input type="number" name="age" className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm" placeholder="Age"/>
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
                <input type="file" name="labs" accept=".pdf,.jpg,.jpeg,.png,.heic" className="w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:bg-[#1B3A2A] file:text-white file:text-sm file:font-medium file:cursor-pointer hover:file:bg-[#15301f] transition-colors"/>
                <p className="text-[#8B6914]/50 text-xs mt-4 italic">🔒 HIPAA-conscious. Your information is kept private and never shared.</p>
                <p className="text-gray-400 text-xs mt-1 italic">Don&apos;t have a digital copy? Describe your key values in the notes section below.</p>
              </div>

              {/* 3. Review of Systems */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#e5dfd5]">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-xl font-bold text-[#1B3A2A]">Review of Systems</h2>
                  {totalSelected > 0 && (
                    <span className="text-[#b8893a] text-xs font-semibold">{totalSelected} selected</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Your symptoms are patterns — not random problems. This helps us see the bigger picture behind your energy, metabolism, hormones, inflammation, and overall health.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {symptomGroups.map((group) => (
                    <SystemCard
                      key={group.label}
                      group={group}
                      selected={selectedSymptoms}
                      onToggle={() => {}}
                      onSelectSymptom={toggleSymptom}
                    />
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
                    <textarea name="goals" rows={3} className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none" placeholder="e.g. Why I'm so tired. Why I can't lose weight. What's causing my brain fog..."/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know? (medications, diagnoses, notes)</label>
                    <textarea name="notes" rows={3} className="w-full border border-[#e0d8cc] rounded-lg px-4 py-3 text-gray-800 bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#1B3A2A]/20 text-sm resize-none" placeholder="Optional but helpful"/>
                  </div>
                </div>
              </div>

              {/* 5. Submit */}
              <div className="text-center">
                <button type="submit" disabled={loading} className="inline-block bg-[#C9A84C] text-[#1a1a1a] font-bold px-14 py-6 rounded-2xl text-base uppercase tracking-widest shadow-[0_4px_20px_rgba(201,168,76,0.2)] hover:bg-[#b0873a] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(201,168,76,0.28)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
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
