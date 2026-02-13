import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-bg-animated opacity-50" />
        <div className="absolute inset-0 overlay-gradient-violet-cyan" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('finalCTA.title')}
        </h2>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          {t('finalCTA.subtitle')}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('finalCTA.description')}
        </p>

        {/* CTA Button */}
        <Button variant="cta" size="lg" className="group text-lg px-8 py-6">
          {t('cta.diagnostic')}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
