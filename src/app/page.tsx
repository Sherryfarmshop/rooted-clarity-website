import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import CTASignup from "@/components/CTASignup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <CTASignup />
      </main>
      <Footer />
    </>
  );
}
