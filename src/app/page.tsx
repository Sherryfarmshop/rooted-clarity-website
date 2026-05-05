import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import TaglineBanner from "@/components/TaglineBanner";
import Problem from "@/components/Problem";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Approach from "@/components/Approach";
import Supplements from "@/components/Supplements";
import FounderStory from "@/components/FounderStory";
import CTASignup from "@/components/CTASignup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatYouGet />
        <TaglineBanner />
        <Problem />
        <WhatMakesUsDifferent />
        <Approach />
        <Supplements />
        <FounderStory />
        <CTASignup />
      </main>
      <Footer />
    </>
  );
}
