import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutValues } from "../data";
import { useLocale } from '@/lib/locale';

export default function ValuesSection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 md:p-10 shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('about.values.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {aboutValues.map((value, index) => (
            <Card
              key={value.id}
              className="group border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <CardHeader className="relative">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {t(`about.values.items.${value.id}.title`)}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      {t(`about.values.items.${value.id}.description`)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
