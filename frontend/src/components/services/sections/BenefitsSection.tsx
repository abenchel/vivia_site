import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";
import { benefits, quickPlanItems } from "../data";
import { useLocale } from '@/lib/locale';

export default function BenefitsSection() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('services.benefits.title')}
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  {t(`services.benefits.items.${benefit}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="border-white/20 bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-violet-500/10 backdrop-blur-md shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <CardTitle className="text-2xl">{t('services.quickPlan.title')}</CardTitle>
            </div>
            <CardDescription className="text-base">{t('services.quickPlan.description')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 relative">
            {quickPlanItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-muted-foreground p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 group-hover/item:scale-150 transition-transform duration-300" />
                <span className="group-hover/item:text-foreground transition-colors duration-300">{t(`services.quickPlan.items.${item}`)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
