import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLocale } from '@/lib/locale';

const designImage = '/Gemini_Generated_Image_lddqgelddqgelddq-removebg-preview 1.svg';

export default function Hero() {
  const { t } = useLocale();

  const jsonLd = useMemo(() => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t('seoTitle', t('hero.h1')),
      description: t('seoDescription', t('hero.subtitle'))
    });
  }, [t]);

  return (
    <section className="relative min-h-[100svh] md:min-h-screen overflow-hidden p-10">
      <div className="absolute inset-0 z-0">
        <video 
          src="/video1-optimized.mp4"
          poster="/video1-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[100svh] md:min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center min-h-[100svh] md:min-h-screen py-10 sm:py-12 lg:py-16">
            
            {/* Center Content */}
            <div className="space-y-6 max-w-4xl text-center">
              {/* Badge */}
              <div className="flex justify-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                  <span className="text-foreground/90 text-sm font-semibold tracking-wide">{t('hero.badge')}</span>
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                </div>
              </div>
              
              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent animate-fade-in-up drop-shadow-2xl">
                {t('hero.h1')}
              </h1>
              
              {/* Subtitles */}
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed font-light">
                  {t('hero.subtitle')}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed font-light">
                  {t('hero.subtitle2')}
                </p>
              </div>

              {/* Tagline */}
              <div className="py-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="inline-block px-4 sm:px-5 py-2 rounded-2xl bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/40 backdrop-blur-sm">
                  <strong className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-bold">
                    {t('hero.tagline')}
                  </strong>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center pt-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button asChild variant="cta" size="lg" className="group px-5 sm:px-6 py-4 sm:py-5 text-base font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                  <a href={t('cta.primaryUrl', '/contact')} aria-label={t('cta.primary')}> 
                    {t('cta.primary')}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="px-5 sm:px-6 py-4 sm:py-5 text-base font-semibold backdrop-blur-md border-2 hover:bg-card/50 hover:scale-105 transition-all duration-300">
                  <a href={t('cta.secondaryUrl', '/services')} aria-label={t('cta.secondary')}>
                    {t('cta.secondary')}
                  </a>
                </Button>
              </div>

        <div className="flex justify-center items-center pt-6">
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <BenefitBadge text={t('hero.benefits.0')} />
              <BenefitBadge text={t('hero.benefits.1')} />
              <BenefitBadge text={t('hero.benefits.2')} />
              <BenefitBadge text={t('hero.benefits.3')} />
            </div>
          </div>
          </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}



  function BenefitBadge({ text }: { text: string }) {
    return (
    <div className="flex-shrink-0 px-4 py-2 rounded-lg bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
}


// import { useMemo } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import { useLocale } from '@/lib/locale';
// const designImage = '/Gemini_Generated_Image_lddqgelddqgelddq-removebg-preview 1.svg';

// export default function Hero() {
//   const { t } = useLocale();

//   const jsonLd = useMemo(() => {
//     return JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "WebPage",
//       name: t('seoTitle', t('hero.h1')),
//       description: t('seoDescription', t('hero.subtitle'))
//     });
//   }, [t]);

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video 
//           src="/video1.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />

//               <div
//         className="absolute inset-0 z-0 bg-cover bg-center"

//       ></div>
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen">
//         <div className="max-w-7xl mx-auto px-10 lg:px-12">
//           <div className="flex items-center justify-center min-h-screen py-20">
            
//             {/* Left Content */}
//             <div className="space-y-6 max-w-3xl text-center">
//               {/* Badge */}
//               <div className="flex justify-center">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
//                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//                   <span className="text-muted-foreground text-sm font-medium">{t('hero.badge')}</span>
//                 </div>
//               </div>
              
//               {/* H1 */}
//               <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
//                 {t('hero.h1')}
//               </h1>
              
//               {/* Subtitles */}
//               <div className="space-y-3">
//                 <p className="text-lg md:text-xl text-foreground/80">
//                   {t('hero.subtitle')}
//                 </p>
//                 <p className="text-lg md:text-xl text-foreground/80">
//                   {t('hero.subtitle2')}
//                 </p>
//               </div>

//               {/* Tagline */}
//               <div className="py-2">
//                 <strong className="text-xl md:text-2xl text-primary">
//                   {t('hero.tagline')}
//                 </strong>
//               </div>

//               {/* CTAs rendered as crawlable anchors via Button `asChild` */}
//               <div className="flex flex-wrap gap-4 justify-center pt-2">
//                 <Button asChild variant="cta" size="lg" className="group">
//                   <a href={t('cta.primaryUrl', '/diagnostic')} aria-label={t('cta.primary')}> 
//                     {t('cta.primary')}
//                     <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//                   </a>
//                 </Button>

//                 <Button asChild variant="outline" size="lg">
//                   <a href={t('cta.secondaryUrl', '/solutions')} aria-label={t('cta.secondary')}>
//                     {t('cta.secondary')}
//                   </a>
//                 </Button>
//               </div>

//               {/* Benefits */}
//               <div className="flex justify-center pt-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <BenefitBadge text={t('hero.benefits.0')} />
//                   <BenefitBadge text={t('hero.benefits.1')} />
//                   <BenefitBadge text={t('hero.benefits.2')} />
//                   <BenefitBadge text={t('hero.benefits.3')} />
//                 </div>
//               </div>
//             </div>


//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BenefitBadge({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-lg">
//       <div className="w-2 h-2 rounded-full bg-primary glow-cyan" />
//       <span className="text-sm font-medium text-foreground">{text}</span>
//     </div>
//   );
// }


// import { useMemo } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import { useLocale } from '@/lib/locale';

// const designImage =
//   '/Gemini_Generated_Image_lddqgelddqgelddq-removebg-preview 1.svg';

// export default function Hero() {
//   const { t } = useLocale();

//   const jsonLd = useMemo(() => {
//     return JSON.stringify({
//       '@context': 'https://schema.org',
//       '@type': 'WebPage',
//       name: t('seoTitle', t('hero.h1')),
//       description: t('seoDescription', t('hero.subtitle')),
//     });
//   }, [t]);

//   return (
//     <section className="relative min-h-screen overflow-hidden pt-10">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background_automatisation.png')` }}
//         />
//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/50" />
//         {/* Extra gradient on left for text */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             {/* LEFT — TEXT */}
//             <div className="space-y-8 text-center lg:text-left max-w-xl">
//               {/* Badge */}
//               <div className="flex justify-center lg:justify-start">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
//                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//                   <span className="text-muted-foreground text-sm font-medium">
//                     {t('hero.badge')}
//                   </span>
//                 </div>
//               </div>

//               {/* H1 */}
//               <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
//                 {t('hero.h1')}
//               </h1>

//               {/* Subtitles */}
//               <div className="space-y-4">
//                 <p className="text-lg text-foreground/80">
//                   {t('hero.subtitle')}
//                 </p>
//                 <p className="text-lg text-foreground/80">
//                   {t('hero.subtitle2')}
//                 </p>
//               </div>

//               {/* Tagline */}
//               <strong className="block text-xl md:text-2xl text-primary">
//                 {t('hero.tagline')}
//               </strong>

//               {/* CTAs */}
// w              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
//                 <Button asChild variant="cta" size="lg" className="group">
//                   <a href={t('cta.primaryUrl', '/diagnostic')} aria-label={t('cta.primary')}> 
//                     {t('cta.primary')}
//                     <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//                   </a>
//                 </Button>

//                 <Button asChild variant="outline" size="lg">
//                   <a href={t('cta.secondaryUrl', '/solutions')} aria-label={t('cta.secondary')}>
//                     {t('cta.secondary')}
//                   </a>
//                 </Button>
//               </div>

//               {/* Benefits */}
//               <div className="grid grid-cols-2 gap-3 pt-6 justify-center lg:justify-start">
//                 <BenefitBadge text={t('hero.benefits.0')} />
//                 <BenefitBadge text={t('hero.benefits.1')} />
//                 <BenefitBadge text={t('hero.benefits.2')} />
//                 <BenefitBadge text={t('hero.benefits.3')} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BenefitBadge({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-2 glass-card px-3 py-2 rounded-lg">
//       <div className="w-2 h-2 rounded-full bg-primary glow-cyan" />
//       <span className="text-sm font-medium">{text}</span>
//     </div>
//   );
// }
