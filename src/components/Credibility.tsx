import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Credibility() {
  const { t } = useLocale();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(-45deg, hsla(270, 91%, 18%, 0.2) 0%, hsla(186, 100%, 18%, 0.3) 50%, hsla(270, 91%, 18%, 0.2) 100%)`
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t('credibility.title')}
        </h2>

        {/* Intro */}
        <p className="text-lg text-muted-foreground text-center mb-6">
          {t('credibility.intro')}
        </p>

        {/* Used By */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                {t(`credibility.usedBy.${index}`)}
              </span>
            </div>
          ))}
        </div>

        {/* Method */}
        <div className="glass-card rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-center text-foreground">
            {t('credibility.method')}
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
            Nos Partenaires
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            {t('credibility.partnersIntro')}
          </p>

          {/* Partner logos placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-32 h-16 rounded-lg bg-muted border border-border flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition */}
        <p className="text-xl font-medium text-center text-foreground mb-8">
          {t('credibility.transition')}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            {t('cta.discoverMethod')}
          </Button>
        </div>
      </div>
    </section>
  );
}
