import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { WaveDivider, DotsDivider, DiamondDivider, RippleDivider } from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WaveDivider />
      <Services />
      <DotsDivider />
      <About />
      <DiamondDivider />
      <Process />
      <RippleDivider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;