import Hero from "@/components/Hero";
import TaglineBanner from "@/components/TaglineBanner";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Approach from "@/components/Approach";
import Doctors from "@/components/Doctors";
import FounderStory from "@/components/FounderStory";
import AppFeatures from "@/components/AppFeatures";
import CTASignup from "@/components/CTASignup";
import Supplements from "@/components/Supplements";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TaglineBanner />
        <Problem />
        <HowItWorks />
        <WhatMakesUsDifferent />
        <Approach />
        <Doctors />
        <FounderStory />
        <AppFeatures />
        <Supplements />
        <CTASignup />
      </main>
      <Footer />
    </>
  );
}
