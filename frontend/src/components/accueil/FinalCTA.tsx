import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden flex items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center w-full">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t('finalCTA.title')}
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          {t('finalCTA.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {t('finalCTA.description')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <Button asChild variant="cta" size="lg" className="group mb-8 text-base px-8 py-5">
            <a href="/diagnostic">
              {t('cta.diagnostic')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-border/40"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <img
            src="/services/automation.jpg"
            alt="Illustration d'une équipe utilisant des outils d'automatisation." 
            className="w-full h-40 md:h-48 object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
