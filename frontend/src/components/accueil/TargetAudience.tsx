import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, UserCog } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TargetAudience() {
  const { t } = useLocale();

  const icons = [Users, Briefcase, UserCog];

  return (
    <section className="relative overflow-hidden py-10 md:py-12 min-h-[100svh] flex items-center">


      
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 top-12 h-40 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute -left-10 top-1/2 h-px w-[120%] rotate-[-8deg] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-[sweep_8s_linear_infinite]" />
        <div className="absolute -right-10 top-[60%] h-px w-[120%] rotate-[6deg] bg-gradient-to-r from-transparent via-violet-300/40 to-transparent animate-[sweep_10s_linear_infinite]" />
       <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:28px_28px] animate-[twinkle_5s_ease-in-out_infinite]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_6px] animate-[scan_6s_linear_infinite]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {t('targetAudience.title')}
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-base md:text-lg text-foreground/80 text-center mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.07 }}
        >
          {t('targetAudience.intro')}
        </motion.p>

        {/* Light Streak */}
        <div className="absolute left-0 top-[340px] h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent animate-[sweep_10s_linear_infinite]" />

        {/* Image Placeholder */}
        <motion.div
          className="rounded-xl overflow-hidden mb-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <img 
            src="/home/automatisation-pme-equipes-tableaux-bord.webp"
            alt="Illustration représentant une équipe travaillant sur des tableaux de bord numériques et des processus automatisés en entreprise."
            loading="lazy"
            className="w-full h-44 md:h-52 lg:h-60 object-cover rounded-xl"
          />
        </motion.div>

        {/* Target Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {[0, 1, 2].map((index) => {
            const Icon = icons[index];
            return (
              <TargetCard
                key={index}
                icon={<Icon className="w-8 h-8" />}
                title={t(`targetAudience.targets.${index}.title`)}
                description={t(`targetAudience.targets.${index}.description`)}
                delay={index * 0.3}
              />
            );
          })}
        </div>


        {/* Conclusion */}
        <motion.p
          className="text-lg md:text-xl font-semibold text-center text-foreground mb-6 mt-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {t('targetAudience.conclusion')}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-6 hover:bg-purple-500/10 hover:border-purple-400"
          >
            {t('cta.secondary')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function TargetCard({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="glass-card rounded-xl p-6 hover:border-purple-400/50 transition-all duration-200 group text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-primary group-hover:glow-violet transition-all duration-200 mx-auto">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
