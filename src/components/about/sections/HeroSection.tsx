import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { aboutHighlights } from "../data";
import { useLocale } from '@/lib/locale';

export default function HeroSection() {
  const { t } = useLocale();
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-0 min-h-[100svh] w-full flex items-center">
      <div className="relative z-10 w-full grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex self-start items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-md px-5 py-2 text-xs uppercase tracking-[0.25em] text-violet-300 font-semibold shadow-lg shadow-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            {t('about.badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
            <span className="block text-foreground mb-2">{t('about.titleLine1')}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400">{t('about.titleLine2')}</span>
          </h1>

          <p className="max-w-xl text-xl text-muted-foreground/90 leading-relaxed">{t('about.subtitle')}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-5 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-cyan-500/0 to-violet-500/0 group-hover:from-violet-500/10 group-hover:via-cyan-500/5 group-hover:to-violet-500/10 transition-all duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>
                  <p className="text-foreground font-bold mb-2 text-base">{t(`about.highlights.${item.id}.title`)}</p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">{t(`about.highlights.${item.id}.description`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold px-8 py-6 text-base rounded-xl shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all duration-500 hover:scale-105 border-0"
            >
              <a href="/contact" className="flex items-center gap-3">
                <span className="relative z-10">{t('about.cta.contact')}</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-violet-400/50 text-foreground font-semibold px-8 py-6 text-base rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <a href="/services">{t('about.cta.services')}</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-3xl" />
          <div className="relative grid gap-5">
            <div className="rounded-[2.5rem] border border-white/15 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src="/services/consulting.webp"
                  alt={t('about.heroImage.alt')}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('about.heroImage.badge1Title')}</p>
                    <p className="text-sm text-white font-semibold">{t('about.heroImage.badge1Text')}</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('about.heroImage.badge2Title')}</p>
                    <p className="text-sm text-white font-semibold">{t('about.heroImage.badge2Text')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t('about.method.title1')}</p>
                <p className="text-lg font-semibold text-foreground mt-2">{t('about.method.text1')}</p>
                <p className="text-sm text-muted-foreground mt-2">{t('about.method.desc1')}</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t('about.method.title2')}</p>
                <p className="text-lg font-semibold text-foreground mt-2">{t('about.method.text2')}</p>
                <p className="text-sm text-muted-foreground mt-2">{t('about.method.desc2')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
