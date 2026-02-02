import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Promise() {
  const { t } = useLocale();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(45deg, hsla(186, 100%, 15%, 0.25) 0%, hsla(270, 91%, 18%, 0.25) 100%)`
      }} />
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
        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto mb-8">
          <p className="text-xl text-center text-foreground font-medium">
            {t('promise.vision')}
          </p>
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
