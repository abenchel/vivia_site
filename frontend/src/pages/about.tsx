import { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: 150, suffix: '+', label: 'Clients Satisfaits' },
  { value: 40, suffix: '%', label: 'Temps Économisé' },
  { value: 24, suffix: '/7', label: 'Support Disponible' },
  { value: 98, suffix: '%', label: 'Taux de Réussite' }
];

const features = [
  "Expertise en IA et automatisation",
  "Solutions adaptées aux PME",
  "Accompagnement personnalisé",
  "Résultats mesurables"
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-cyan">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-background overflow-hidden min-h-[100svh]">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 70% 30%, var(--radial-1) 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full aspect-square object-cover"
              >
                <source src="/src/assets/ai_brain.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 border border-primary/30">
              <span className="text-3xl font-bold text-gradient-purple">5+</span>
              <p className="text-muted-foreground text-sm">Années d'expérience</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">À Propos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-foreground">L'évolution continue au </span>
              <span className="text-gradient-purple">cœur de notre vision</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Chez VIVIA, nous accompagnons les PME dans leur transformation digitale en combinant 
              une expertise pointue en automatisation avec une maîtrise des technologies d'IA les plus avancées.
            </p>

            <p className="text-muted-foreground mb-8">
              Notre force réside dans notre capacité à comprendre vos besoins spécifiques et à 
              créer des solutions sur mesure qui s'intègrent parfaitement à votre écosystème existant.
              <span className="text-foreground font-medium"> C'est cette culture de l'excellence qui nous permet 
              d'accompagner au mieux nos clients.</span>
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl overflow-hidden border border-border/40">
                <img
                  src="/services/consulting.jpg"
                  alt="Atelier d'accompagnement et cadrage stratégique."
                  className="w-full h-32 md:h-36 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/40">
                <img
                  src="/services/data.jpg"
                  alt="Visualisation des indicateurs clés et performance data."
                  className="w-full h-32 md:h-36 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/40">
                <img
                  src="/services/training.jpg"
                  alt="Formation et montée en compétence des équipes."
                  className="w-full h-32 md:h-36 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}