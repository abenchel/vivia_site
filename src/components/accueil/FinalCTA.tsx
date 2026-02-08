import { useLocale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t('finalCTA.title')}
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          {t('finalCTA.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-foreground/80 mb-16 max-w-2xl mx-auto leading-relaxed"
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
          <Button variant="cta" size="lg" className="group mb-16 text-lg px-10 py-7">
            {t('cta.diagnostic')}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
