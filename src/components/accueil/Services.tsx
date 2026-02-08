import { useLocale } from '@/lib/locale';
import { MessageSquareCode, Database, Zap, Users } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useLocale();

  const icons = [MessageSquareCode, Database, Zap, Users];
  const accents = ['cyan', 'purple', 'cyan', 'purple'] as const;

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {t('solutions.title')}
          </motion.h2>
          <motion.p
            className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            {t('solutions.intro')}
          </motion.p>
        </div>

        {/* Services Grid - 4 Pillars */}
        <div className="grid mb-12  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
      <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 transition-all duration-400 ${accentClasses}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
}
