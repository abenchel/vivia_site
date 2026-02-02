import { useLocale } from '@/lib/locale';
import { MessageSquareCode, Database, Zap, Users } from 'lucide-react';
import { GlassCard } from './GlassCard';

export default function Services() {
  const { t } = useLocale();

  const icons = [MessageSquareCode, Database, Zap, Users];
  const accents = ['cyan', 'purple', 'cyan', 'purple'] as const;

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, hsla(186, 100%, 15%, 0.3) 0%, hsla(270, 91%, 20%, 0.3) 50%, hsla(186, 100%, 15%, 0.3) 100%)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('solutions.intro')}
          </p>
        </div>

        {/* Services Grid - 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((index) => {
            const Icon = icons[index];
            return (
              <ServiceCard 
                key={index} 
                icon={<Icon className="w-8 h-8" />}
                title={t(`solutions.pillars.${index}.title`)}
                description={t(`solutions.pillars.${index}.description`)}
                accent={accents[index]}
                delay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description,
  accent,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  accent: 'cyan' | 'purple';
  delay?: number;
}) {
  const accentClasses = accent === 'cyan' 
    ? 'text-primary' 
    : 'text-secondary';

  return (
    <GlassCard 
      glowColor={accent === 'cyan' ? 'cyan' : 'violet'}
      delay={delay}
      className="hover:border-primary/50 cursor-pointer h-full"
    >
      <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 transition-all duration-400 ${accentClasses}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
}
