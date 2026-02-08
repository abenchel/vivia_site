import React from 'react';
import Hero from './Hero';
import TargetAudience from './TargetAudience';
import Promise from './Promise';
import Services from './Services';
import Credibility from './Credibility';
import FinalCTA from './FinalCTA';

export default function AccueilLayout() {
  return (
    <div className="relative">
      
      <div className="relative">
        <section className="relative lg:sticky lg:top-0 min-h-[100svh] lg:h-screen z-0">
          <Hero />
        </section>
        
        <div className="relative z-10 bg-gradient-to-b from-black/90 via-black/95 to-black">
          <section className="py-0">
            <TargetAudience />
          </section>

          <section className="py-0">
            <Promise />
          </section>
          
          <section className="flex items-center justify-center py-12">
            <div className="relative w-full max-w-4xl h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 via-30% to-transparent" />
            </div>
          </section>

          <section className="py-20">
            <Services />
          </section >
        
          
          <section className="py-0">
            <Credibility />
          </section>
          
        <section className="relative overflow-hidden pt-40">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-72 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.55),transparent_10%)] blur-3xl"
        />
        <div
          className=" absolute top-20 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/100 to-transparent rounded-full"
        />
      </section>

          <section className="py-8">
            <FinalCTA />
          </section>
          
        </div>
      </div>
    </div>
  );
}