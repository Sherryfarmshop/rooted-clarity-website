import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.webp" alt="Rooted Clarity" width={36} height={36} className="rounded-lg" />
          <span className="text-[#8B6914] text-sm tracking-widest font-medium">❤</span>
        </div>
        <p className="text-gray-600 text-sm font-medium italic">
          Clarity in your labs. Confidence in your health.
        </p>
        <p className="text-gray-400 text-xs max-w-2xl text-center leading-relaxed">
          Rooted Clarity provides educational summaries of health data to support wellness tracking and more informed conversations with licensed healthcare professionals. It does not diagnose, treat, cure, or prevent disease and is not a substitute for medical advice.
        </p>
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Rooted Clarity Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
