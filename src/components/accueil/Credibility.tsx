// import { useLocale } from '@/lib/locale';
// import { Button } from '@/components/ui/button';
// import { Check } from 'lucide-react';

// export default function Credibility() {
//   const { t } = useLocale();

//   return (
//     <section className="relative overflow-hidden">
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
//           {t('credibility.title')}
//         </h2>

//         {/* Intro */}
//         <p className="text-lg md:text-xl text-foreground/80 text-center mb-10">
//           {t('credibility.intro')}
//         </p>

//         {/* Used By */}
//         <div className="flex flex-wrap justify-center gap-8 mb-12">
//           {[0, 1, 2].map((index) => (
//             <div key={index} className="flex items-center gap-3">
//               <Check className="w-5 h-5 text-primary" />
//               <span className="text-foreground font-medium">
//                 {t(`credibility.usedBy.${index}`)}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Method */}
//         <div className="glass-card rounded-xl p-8 lg:p-10 mb-16 max-w-4xl mx-auto">
//           <p className="text-lg md:text-xl text-center text-foreground leading-relaxed">
//             {t('credibility.method')}
//           </p>
//         </div>

//         {/* Image Placeholder */}
//         <div className="rounded-xl overflow-hidden mb-12 max-w-5xl mx-auto">
//           <img 
//             src="/home/vivia-approche-eprouvee-equipes-engagees.jpg"
//             alt="Image sombre et réaliste montrant des équipes professionnelles collaborant dans un environnement de travail moderne, illustrant une approche éprouvée et une adoption durable sur le terrain."            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
//           />
//         </div>

//         {/* Partners Section */}
//         <div className="mb-16">
//           <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">
//             Nos Partenaires
//           </h3>
//           <p className="text-foreground/70 text-center mb-10 max-w-3xl mx-auto text-lg">
//             {t('credibility.partnersIntro')}
//           </p>
          
//           {/* Partner logos placeholder */}
//           <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10 opacity-60">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div 
//                 key={i} 
//                 className="w-32 h-16 rounded-lg bg-muted border border-border flex items-center justify-center"
//               >
//                 <span className="text-xs text-muted-foreground">Logo {i}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Transition */}
//         <p className="text-xl md:text-2xl font-medium text-center text-foreground mb-10">
//           {t('credibility.transition')}
//         </p>

//         {/* CTA */}
//         <div className="flex justify-center">
//           <Button variant="outline" size="lg" className="px-8">
//             {t('cta.discoverMethod')}
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Credibility() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        {/* Soft gradient sweep */}
        <div className="absolute inset-x-0 top-12 h-40 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
        {/* Diagonal light streaks */}
        <div className="absolute -left-10 top-1/2 h-px w-[120%] rotate-[-8deg] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-[sweep_8s_linear_infinite]" />
        <div className="absolute -right-10 top-[60%] h-px w-[120%] rotate-[6deg] bg-gradient-to-r from-transparent via-violet-300/40 to-transparent animate-[sweep_10s_linear_infinite]" />
        {/* Tech grid dots */}
       <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:28px_28px] animate-[twinkle_5s_ease-in-out_infinite]" />
        {/* Scanline overlay */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_6px] animate-[scan_6s_linear_infinite]" />
      </div>

      {/* Curved Lightning Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-20 md:h-24 lg:h-28"
        >
          <path 
            d="M0,60 Q300,120 600,60 T1200,60" 
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content Container with top padding to account for the curve */}
      <div className="relative pt-16 md:pt-20 lg:pt-24 pb-10 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {t('credibility.title')}
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-base md:text-lg text-foreground/80 text-center mb-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            {t('credibility.intro')}
          </motion.p>

          {/* Used By */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
              >
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  {t(`credibility.usedBy.${index}`)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Method */}
          <motion.div
            className="glass-card rounded-xl p-5 lg:p-6 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-base md:text-lg text-center text-foreground leading-relaxed">
              {t('credibility.method')}
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            className="rounded-xl overflow-hidden mb-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          >
            <img 
              src="/home/vivia-approche-eprouvee-equipes-engagees.webp"
              alt="Image sombre et réaliste montrant des équipes professionnelles collaborant dans un environnement de travail moderne, illustrant une approche éprouvée et une adoption durable sur le terrain."
              loading="lazy"
              className="w-full h-44 md:h-52 lg:h-60 object-cover rounded-xl"
            />
          </motion.div>

          {/* Partners Section */}
          <div className="mb-8">
            <motion.h3
              className="text-xl md:text-2xl font-semibold text-center mb-4 text-foreground"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Nos Partenaires
            </motion.h3>
            <motion.p
              className="text-foreground/70 text-center mb-6 max-w-3xl mx-auto text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            >
              {t('credibility.partnersIntro')}
            </motion.p>
            
            {/* Partner logos placeholder */}
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-24 h-12 rounded-lg bg-muted border border-border flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition */}
          <motion.p
            className="text-base md:text-lg font-medium text-center text-foreground mb-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            {t('credibility.transition')}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <Button variant="outline" size="lg" className="px-6 hover:bg-purple-500/10 hover:border-purple-400">
              {t('cta.discoverMethod')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}