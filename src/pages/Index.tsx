import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import Promise from '@/components/Promise';
import Services from '@/components/Services';
import Credibility from '@/components/Credibility';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { WaveDivider, DotsDivider, DiamondDivider, RippleDivider } from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TargetAudience />
      <Promise />
      <Services />
      <Credibility />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;