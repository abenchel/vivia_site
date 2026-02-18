import { aboutStats } from "../data";
import { useLocale } from '@/lib/locale';

export default function StatsSection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 md:p-10 shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('about.stats.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {aboutStats.map((stat) => (
            <div
              key={stat.id}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-5 text-center hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-cyan-500/0 to-violet-500/0 group-hover:from-violet-500/10 group-hover:via-cyan-500/5 group-hover:to-violet-500/10 transition-all duration-500 rounded-2xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t('about.stats.impactLabel')}</p>
                <div className="text-3xl md:text-4xl font-bold text-foreground mt-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground mt-2">{t(`about.stats.items.${stat.id}.label`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
