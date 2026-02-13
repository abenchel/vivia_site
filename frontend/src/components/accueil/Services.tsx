import { useLocale } from '@/lib/locale';
import { MessageSquareCode, Database, Zap, Users } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useLocale();

  const icons = [MessageSquareCode, Database, Zap, Users];
  const accents = ['cyan', 'purple', 'cyan', 'purple'] as const;

  return (
    <section className="relative overflow-hidden py-10 md:py-12 min-h-[100svh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {t('solutions.title')}
          </motion.h2>
          <motion.p
            className="text-foreground/80 text-base md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            {t('solutions.intro')}
          </motion.p>
        </div>

        {/* Services Grid - 4 Pillars */}
        <div className="grid mb-8 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[0, 1, 2, 3].map((index) => {
            const Icon = icons[index];
            return (
              <ServiceCard 
                key={index} 
                icon={<Icon className="w-8 h-8" />}
                title={t(`solutions.pillars.${index}.title`)}
                description={t(`solutions.pillars.${index}.description`)}
                accent={accents[index]}
                delay={index * 0.2}
              />
            );
          })}
        </div>

        {/* Image Showcase */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <img
              src="/services/automation.jpg"
              alt="Automatisation des processus métiers et workflows intelligents."
              className="w-full h-32 md:h-40 lg:h-44 object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <img
              src="/services/data.jpg"
              alt="Analyse de données et visualisation en temps réel."
              className="w-full h-32 md:h-40 lg:h-44 object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <img
              src="/services/training.jpg"
              alt="Formation des équipes et montée en compétences."
              className="w-full h-32 md:h-40 lg:h-44 object-cover"
              loading="lazy"
            />
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
    ? 'text-cyan-400' 
    : 'text-purple-400';
  
  const borderClasses = accent === 'cyan'
    ? 'hover:border-cyan-400/50'
    : 'hover:border-purple-400/50';

  return (
    <GlassCard 
      glowColor={accent === 'cyan' ? 'cyan' : 'violet'}
      delay={delay}
      className={`${borderClasses} cursor-pointer h-full`}
    >
      <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 transition-all duration-400 ${accentClasses}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </GlassCard>
  );
}
