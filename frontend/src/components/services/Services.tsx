import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import BackgroundEffects from "./sections/BackgroundEffects";
import HeroSection from "./sections/HeroSection";
import PillarsSection from "./sections/PillarsSection";
import ProcessSection from "./sections/ProcessSection";
import BenefitsSection from "./sections/BenefitsSection";
import FinalCTASection from "./sections/FinalCTASection";
import ServicesAnimations from "./sections/ServicesAnimations";

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className=" bg-background relative overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      <Navbar />

      <main className="pt-6 md:pt-10 relative z-10 py-0">
        <HeroSection isVisible={isVisible} />
        <PillarsSection />
        <ProcessSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>

      <Footer />
      <ServicesAnimations />
    </div>
  );
}