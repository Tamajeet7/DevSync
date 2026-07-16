import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TechSection from "../components/TechSection";
import PreviewSection from "../components/PreviewSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-[#090E17]">
      <Navbar />
      <Hero />
      <Features />
      <TechSection />
      <PreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
}