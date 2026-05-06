import Hero from "@/components/Hero";
import TaglineBanner from "@/components/TaglineBanner";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Approach from "@/components/Approach";
import Supplements from "@/components/Supplements";
import FounderStory from "@/components/FounderStory";
import ResearchFoundation from "@/components/ResearchFoundation";
import CTASignup from "@/components/CTASignup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TaglineBanner />
        <HowItWorks />
        <Problem />
        <div className="bg-[#f5f0e8] flex justify-center py-6">
          <div className="w-24 h-px bg-[#b5a690]/50 rounded-full" />
        </div>
        <WhatMakesUsDifferent />
        <Approach />
        <Supplements />
        <FounderStory />
        <ResearchFoundation />
        <CTASignup />
      </main>
      <Footer />
    </>
  );
}
