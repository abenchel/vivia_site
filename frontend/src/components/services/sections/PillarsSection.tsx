import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pillars } from "../data";
import { useLocale } from '@/lib/locale';

export default function PillarsSection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <Card
            key={pillar.id}
            className={`group border-white/20 bg-gradient-to-br ${pillar.gradient} backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden relative`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm ${pillar.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{t(`solutions.pillars.${index}.title`)}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">{t(`solutions.pillars.${index}.description`)}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
