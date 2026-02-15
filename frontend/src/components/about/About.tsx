import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import BackgroundEffects from "./sections/BackgroundEffects";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import StorySection from "./sections/StorySection";
import ValuesSection from "./sections/ValuesSection";
import FinalCTASection from "./sections/FinalCTASection";
import AboutAnimations from "./sections/AboutAnimations";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background relative overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      <Navbar />

      <main className="pt-6 md:pt-10 relative z-10 py-0">
        <HeroSection />
        <StatsSection />
        <StorySection />
        <ValuesSection />
        <FinalCTASection />
      </main>

      <Footer />
      <AboutAnimations />
    </div>
  );
}
