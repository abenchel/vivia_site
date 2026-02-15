import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { highlights } from "../data";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  isVisible: boolean;
};

const heroImages = [
  { src: "/services/data.jpg", alt: "Pilotage data et tableaux de bord", title: "Data & Pilotage" },
  { src: "/services/ai.jpg", alt: "IA appliquée aux opérations", title: "IA Appliquée" },
];

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-0 min-h-[100svh] w-full flex items-center ">
      {/* Enhanced Animated Background */}
      <div className="pointer-events-none absolute inset-0">

        <div 
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-600/25 blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-r from-violet-400/15 via-cyan-400/15 to-purple-400/15 blur-3xl animate-pulse" />
        <div className="absolute inset-x-0 top-20 h-60 bg-gradient-to-r from-transparent via-violet-400/10 to-transparent blur-2xl animate-shimmer" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div
        className={`relative z-10 w-full grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="flex flex-col gap-8">
          <div 
            className={`inline-flex self-start items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-md px-5 py-2 text-xs uppercase tracking-[0.25em] text-violet-300 font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-500 hover:scale-105 hover:border-violet-400/50 cursor-pointer group ${
              isVisible ? "animate-fade-in-down" : ""
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:animate-spin" />
            Services Premium
          </div>

          <h1 
            className={`text-5xl md:text-7xl font-black leading-[1.1] ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <span className="block text-foreground mb-2">
              Des solutions concrètes pour
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 animate-gradient bg-[length:200%_auto]">
              accélérer vos équipes
            </span>
          </h1>

          <p 
            className={`max-w-xl text-xl text-muted-foreground/90 leading-relaxed ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "400ms" }}
          >
            Nous combinons automatisation, data et IA pour transformer vos opérations sans perturber votre quotidien.
          </p>

          <div 
            className={`grid gap-4 sm:grid-cols-3 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "500ms" }}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-5 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-cyan-500/0 to-violet-500/0 group-hover:from-violet-500/10 group-hover:via-cyan-500/5 group-hover:to-violet-500/10 transition-all duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>
                  <p className="text-foreground font-bold mb-2 text-base">{item.title}</p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`flex flex-wrap gap-4 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "900ms" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold px-8 py-6 text-base rounded-xl shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all duration-500 hover:scale-105 border-0"
            >
              <a href="/contact" className="flex items-center gap-3">
                <span className="relative z-10">Demander un diagnostic</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-violet-400/50 text-foreground font-semibold px-8 py-6 text-base rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <a href="/About">
                Découvrir notre méthode
              </a>
            </Button>
          </div>
        </div>

        <div 
          className={`grid gap-4 ${
            isVisible ? "animate-fade-in-left" : ""
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="group relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-violet-500/40 transition-all duration-700 hover:scale-[1.03] hover:border-violet-400/50">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="/services/automation.jpg"
                alt="Automatisation des processus métiers"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-bold mb-1">Automatisation intelligente</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Optimisez vos processus métiers
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroImages.map((img, index) => (
              <div
                key={img.title}
                className="group relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl hover:shadow-cyan-500/40 transition-all duration-700 hover:scale-[1.05] hover:border-cyan-400/50"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-transparent to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-base font-bold">{img.title}</h4>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 mt-2 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}