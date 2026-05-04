import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
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
        <Problem />
        <HowItWorks />
        <WhatMakesUsDifferent />
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
