import { Bot, Workflow, BarChart3, MessageSquareCode, Database, Sparkles } from 'lucide-react';
import dashboardImg from '@/assets/dashboard-hologram.jpg';

const services = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Automatisation des Processus",
    description: "Éliminez les tâches répétitives et gagnez jusqu'à 40% de temps sur vos opérations quotidiennes.",
    accent: "cyan"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Chatbots Intelligents",
    description: "Déployez des assistants virtuels qui répondent à vos clients 24h/24, 7j/7.",
    accent: "purple"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analyse Prédictive",
    description: "Anticipez les tendances et prenez des décisions éclairées grâce à l'IA.",
    accent: "cyan"
  },
  {
    icon: <MessageSquareCode className="w-8 h-8" />,
    title: "Intégrations sur Mesure",
    description: "Connectez tous vos outils et créez un écosystème fluide et performant.",
    accent: "purple"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Gestion des Données",
    description: "Centralisez et exploitez vos données pour une vision 360° de votre activité.",
    accent: "cyan"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "IA Générative",
    description: "Créez du contenu, des rapports et des analyses automatiquement.",
    accent: "purple"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, hsl(186 50% 10% / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(270 50% 10% / 0.3) 0%, transparent 40%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Solutions d'</span>
            <span className="text-gradient-cyan">Automatisation</span>
            <br />
            <span className="text-foreground">& d'</span>
            <span className="text-gradient-purple">Intelligence Artificielle</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions adaptées à votre PME pour optimiser vos processus et booster votre productivité.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon}
              title={service.title}
              description={service.description}
              accent={service.accent as 'cyan' | 'purple'}
            />
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border/50">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
          <img 
            src={dashboardImg} 
            alt="Dashboard d'automatisation" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Un tableau de bord intelligent
            </h3>
            <p className="text-muted-foreground">
              Visualisez vos KPIs en temps réel et prenez des décisions data-driven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description,
  accent 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  accent: 'cyan' | 'purple';
}) {
  const accentClasses = accent === 'cyan' 
    ? 'text-primary group-hover:glow-cyan' 
    : 'text-secondary group-hover:glow-purple';

  return (
    <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
      <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 transition-all duration-300 ${accentClasses}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}