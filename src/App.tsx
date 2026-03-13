import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import Products3DSection from "@/components/Products3DSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StorytellingSection />
      <Products3DSection />
      <DifferentialsSection />
      <B2BSection />
      <Footer />
    </div>
  );
}
