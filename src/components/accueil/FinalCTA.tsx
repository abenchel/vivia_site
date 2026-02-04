import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {t('finalCTA.title')}
        </h2>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-10">
          {t('finalCTA.subtitle')}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('finalCTA.description')}
        </p>

        {/* CTA Button */}
        <Button variant="cta" size="lg" className="group mb-16 text-lg px-10 py-7">
          {t('cta.diagnostic')}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
