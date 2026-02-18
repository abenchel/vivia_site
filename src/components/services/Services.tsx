import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import BackgroundEffects from "./sections/BackgroundEffects";
import HeroSection from "./sections/HeroSection";
import PillarsCarousel from "./sections/PillarsCarousel";
import ProcessSection from "./sections/ProcessSection";
import BenefitsSection from "./sections/BenefitsSection";
import FinalCTASection from "./sections/FinalCTASection";
import ServicesAnimations from "./sections/ServicesAnimations";

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Preload first carousel image for better LCP
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/services/piloter.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className=" bg-background relative overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      <Navbar />

      <main className="pt-6 md:pt-10 relative z-10 py-0">
        {/* <HeroSection isVisible={isVisible} /> */}
        <PillarsCarousel />
        <ProcessSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>

      <Footer />
      <ServicesAnimations />
    </div>
  );
}