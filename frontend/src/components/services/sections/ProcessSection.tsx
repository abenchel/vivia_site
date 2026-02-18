import React from "react";
import { processSteps } from "../data";
import { useLocale } from '@/lib/locale';

export default function ProcessSection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 md:p-10 shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('services.process.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3 relative">

          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative rounded-2xl border ${step.color} backdrop-blur-sm p-6 hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl z-10`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <p className="text-sm text-primary mb-3 font-semibold mt-2">{t('services.process.stepLabel')} {index + 1}</p>
              <p className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{t(`services.process.steps.${step.id}.title`)}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`services.process.steps.${step.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
