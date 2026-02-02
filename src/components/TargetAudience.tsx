import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, UserCog } from 'lucide-react';

export default function TargetAudience() {
  const { t } = useLocale();

  const icons = [Users, Briefcase, UserCog];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, hsla(270, 91%, 20%, 0.2) 0%, transparent 50%, hsla(186, 100%, 20%, 0.2) 100%)`
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('targetAudience.title')}
        </h2>

        {/* Intro */}
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t('targetAudience.intro')}
        </p>

        {/* Target Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
        <p className="text-xl font-semibold text-center text-foreground mb-8">
          {t('targetAudience.conclusion')}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
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
