import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useReveal from "@/hooks/use-reveal";
import { Link } from "react-router-dom";
import { useLocale } from '@/lib/locale';

const Blog = () => {
  useReveal();
  const { t } = useLocale();
  const topicIndices = [0,1,2,3,4];
  const postIndices = [0,1,2];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t('blog.badge')}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              {t('blog.h1')}
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              {t('blog.intro')}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {topicIndices.map((i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground">
                {t(`blog.topics.${i}`)}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <Card className="border-white/10 bg-card/40 backdrop-blur reveal-on-scroll card-hover-lift">
            <CardHeader>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t('blog.featuredPost.category')}</span>
                <span>{t('blog.featuredPost.date')}</span>
                <span>{t('blog.featuredPost.readTime')}</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl">{t('blog.featuredPost.title')}</CardTitle>
              <CardDescription className="text-base">{t('blog.featuredPost.excerpt')}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link to="/blog/ia-2026" className="inline-block">
                <Button variant="cta" size="sm">{t('blog.featuredPost.readMore')}</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postIndices.map((i) => (
              <Card key={i} className="border-white/10 bg-card/30 reveal-on-scroll card-hover-lift">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t(`blog.posts.${i}.category`)}</span>
                    <span>{t(`blog.posts.${i}.date`)}</span>
                    <span>{t(`blog.posts.${i}.readTime`)}</span>
                  </div>
                  <CardTitle className="text-xl">{t(`blog.posts.${i}.title`)}</CardTitle>
                  <CardDescription>{t(`blog.posts.${i}.excerpt`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">{t('blog.read')}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
