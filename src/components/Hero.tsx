import { Suspense } from 'react';
import Scene3D from './Scene3D';
import Particles from './Particles';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_lddqgelddqgelddq-removebg-preview\ 1.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, hsl(270 50% 15% / 0.5) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, hsl(186 50% 15% / 0.4) 0%, transparent 40%), linear-gradient(to bottom, hsl(240 10% 4% / 0.7), hsl(240 10% 4% / 0.9))'
        }}
      />
      
      {/* Particles */}
        <Particles />
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-60"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

      {/* Gradient overlay on top of video - darker at bottom */}
      <div 
        className="absolute inset-0"
        style={{
          zIndex: 15,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground text-sm">#1 Agence d'Automatisation pour PME</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient-cyan">AUTOMATISATION</span>
            <br />
            <span className="text-gradient-purple">& IA POUR PME</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Réduisez les tâches répétitives, accélérez vos processus, 
            améliorez vos résultats avec nos solutions d'intelligence artificielle.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <Button variant="cta" size="lg" className="group">
              Découvrir nos services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Réserver un appel
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-foreground font-semibold">150+</span> clients satisfaits
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Rapidité"
            description="Automatisez vos processus et gagnez du temps précieux chaque jour."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Fiabilité"
            description="Des solutions robustes et sécurisées pour votre entreprise."
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Performance"
            description="Améliorez vos résultats grâce à l'intelligence artificielle."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-primary group-hover:glow-cyan transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}