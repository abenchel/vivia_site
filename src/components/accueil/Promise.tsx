import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Promise() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden py-20">
      
      <div className="absolute top-[-10px] left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32 lg:h-40"
        >
          <path 
            d="M0,60 Q600,0 1200,40" 
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            opacity="0.6"
          />
        </svg>
      </div>
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
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

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left mb-6 "
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {t('promise.title')}
            </motion.h2>

            {/* Intro */}
            <motion.p
              className="text-base md:text-lg text-foreground/75 text-center md:text-left mb-10 max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            >
              {t('promise.intro')}
            </motion.p>

            {/* Points */}
            <div className="mb-10 space-y-4">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-cyan-500/30 bg-card/40 backdrop-blur hover:bg-primary/5 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <div className="w-7 h-7 rounded-full bg-cyan-400/20 flex items-center justify-center mt-1 flex-shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.35)]">
                    <Check className="w-4 h-4 text-cyan-300" />
                  </div>
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    {t(`promise.points.${index}`)}
                  </p>
                </motion.div>
              ))}
            </div>

          {/* Vision Statement */}
            <div className=" relative rounded-2xl p-7 lg:p-9 bg-card/40 backdrop-blur-xl hover:bg-primary/5 transition-all
            shadow-[0_0_30px_rgba(34,211,238,0.2)]">

            {/* Glow */}
            <div className="
              pointer-events-none
              absolute inset-0
              rounded-2xl
              shadow-[0_0_40px_rgba(56,189,248,0.25)]
            " />

            <motion.p
              className="relative text-lg md:text-xl text-foreground font-medium leading-relaxed"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            >
              {t('promise.vision')}
            </motion.p>
          </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative circles */}
            <span className="absolute -left-6 -top-8 w-24 h-24 rounded-full bg-cyan-400/15 blur-[2px] animate-[float_8s_ease-in-out_infinite]" />
            <span className="absolute right-4 -bottom-6 w-12 h-12 rounded-full bg-violet-400/25 animate-[float_9s_ease-in-out_infinite]" />
            <span className="absolute right-20 top-4 w-6 h-6 rounded-full bg-cyan-300/40 animate-[pulse_4s_ease-in-out_infinite]" />
            <span className="absolute left-10 bottom-8 w-3 h-3 rounded-full bg-white/60 animate-[twinkle_3s_ease-in-out_infinite]" />

            {/* Main circular image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <img 
                src="/home/travail-simple-lisible-efficace-flux-donnees.jpg"
                alt="Illustration sombre et réaliste représentant un espace de travail digital ultra-détaillé avec hologrammes, écrans et flux lumineux de données. L’image symbolise la simplification du travail, la lisibilité de l’information, la fluidité des tâches quotidiennes et la structuration des échanges entre équipes, tout en mettant en avant l’efficacité, le gain de temps et la visibilité au sein d’une organisation."
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small circular thumbnails */}
            <div className="absolute -left-4 bottom-6 w-24 h-24 rounded-full overflow-hidden border border-cyan-500/30 shadow-[0_0_16px_rgba(34,211,238,0.25)] animate-[float_7s_ease-in-out_infinite]">
              <img
                src="/home/test.jpg"
                alt="Illustration représentant une équipe travaillant sur des tableaux de bord numériques et des processus automatisés en entreprise."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-6 top-10 w-20 h-20 rounded-full overflow-hidden border border-violet-400/50 shadow-[0_0_24px_rgba(139,92,246,0.45)] animate-[float_6s_ease-in-out_infinite]">
              <img
                src="/home/vivia-approche-eprouvee-equipes-engagees.jpg"
                alt="Image sombre et réaliste montrant des équipes professionnelles collaborant dans un environnement de travail moderne, illustrant une approche éprouvée et une adoption durable sur le terrain."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <Button variant="cta" size="lg" className="px-8">
            {t('cta.learnMore')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
