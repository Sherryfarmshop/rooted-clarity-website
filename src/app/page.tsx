import Hero from "@/components/Hero";
import TaglineBanner from "@/components/TaglineBanner";
import Problem from "@/components/Problem";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Approach from "@/components/Approach";
import FounderStory from "@/components/FounderStory";
import Supplements from "@/components/Supplements";
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
        <Problem />
        <WhatMakesUsDifferent />
        <Approach />
        <FounderStory />
        <Supplements />
        <CTASignup />
      </main>
      <Footer />
    </>
  );
}
