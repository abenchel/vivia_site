import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocale } from '@/lib/locale';

export default function FinalCTASection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-violet-500/20 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden group hover:shadow-violet-500/30 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">{t('services.finalCta.title')}</h3>
            <p className="text-muted-foreground text-lg max-w-xl">
              {t('services.finalCta.description')}
            </p>
          </div>
          <Button asChild variant="cta" size="lg" className="group/btn shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
            <a href="/contact" className="flex items-center gap-2">
              {t('services.finalCta.button')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
