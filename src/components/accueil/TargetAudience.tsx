import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, UserCog } from 'lucide-react';

export default function TargetAudience() {
  const { t } = useLocale();

  const icons = [Users, Briefcase, UserCog];

  return (
    <section className="relative overflow-hidden py-20">


      
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          {t('targetAudience.title')}
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-foreground/80 text-center mb-16 max-w-3xl mx-auto">
          {t('targetAudience.intro')}
        </p>

        {/* Light Streak */}
        <div className="absolute left-0 top-[340px] h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent animate-[sweep_10s_linear_infinite]" />

        {/* Image Placeholder */}
        <div className="rounded-xl overflow-hidden mb-12 max-w-5xl mx-auto">
          <img 
            src="/home/automatisation-pme-equipes-tableaux-bord.jpg"
            alt="Illustration représentant une équipe travaillant sur des tableaux de bord numériques et des processus automatisés en entreprise."
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Target Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {[0, 1, 2].map((index) => {
            const Icon = icons[index];
            return (
              <TargetCard
                key={index}
                icon={<Icon className="w-8 h-8" />}
                title={t(`targetAudience.targets.${index}.title`)}
                description={t(`targetAudience.targets.${index}.description`)}
              />
            );
          })}
        </div>


        {/* Conclusion */}
        <p className="text-xl md:text-2xl font-semibold text-center text-foreground mb-10 mt-8">
          {t('targetAudience.conclusion')}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="px-8">
            {t('cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}

function TargetCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="glass-card rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group text-center">
      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center mb-6 text-primary group-hover:glow-cyan transition-all duration-300 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
