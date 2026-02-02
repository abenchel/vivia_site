import { Suspense } from 'react';
import Scene3D from './Scene3D';
import Particles from './Particles';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Target, Shield, TrendingUp } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import designImage from '@/assets/hero-design.svg';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-animated opacity-40" />
      <div className="absolute inset-0 overlay-gradient-violet-cyan z-10" />
      
      {/* Particles */}
      <div className="absolute inset-0 z-15">
        <Particles />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground text-sm font-medium">{t('hero.badge')}</span>
              </div>
              
              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.h1')}
              </h1>
              
              {/* Subtitles */}
              <div className="space-y-3">
                <p className="text-lg md:text-xl text-muted-foreground">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {t('hero.subtitle2')}
                </p>
              </div>

              {/* Tagline */}
              <div className="py-4">
                <strong className="text-xl md:text-2xl text-gradient-cyan">
                  {t('hero.tagline')}
                </strong>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" className="group">
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  {t('cta.secondary')}
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <BenefitBadge text={t('hero.benefits.0')} />
                <BenefitBadge text={t('hero.benefits.1')} />
                <BenefitBadge text={t('hero.benefits.2')} />
                <BenefitBadge text={t('hero.benefits.3')} />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[600px] lg:h-[900px]">
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden group">
                {/* Hero Image */}
                <img 
                  src="/Design%20sans%20titre%20(6).svg"
                  alt="VIVIA Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-lg">
      <div className="w-2 h-2 rounded-full bg-primary glow-cyan" />
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
}
