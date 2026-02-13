import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Promise() {
  const { t } = useLocale();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-animated opacity-35" />
      <div className="absolute inset-0 overlay-gradient-violet-cyan" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {t('promise.title')}
        </h2>

        {/* Intro */}
        <p className="text-lg text-muted-foreground text-center mb-8">
          {t('promise.intro')}
        </p>

        {/* Points */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-lg text-foreground">
                {t(`promise.points.${index}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto mb-12">
          <p className="text-xl text-center text-foreground font-medium">
            {t('promise.vision')}
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="glass-card rounded-xl p-16 mb-12 max-w-5xl mx-auto flex items-center justify-center">
          <div className="text-center">
            <Check className="w-32 h-32 text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Emplacement image - Notre Promesse</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="cta" size="lg">
            {t('cta.learnMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}
