import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useReveal from "@/hooks/use-reveal";
import { Link } from "react-router-dom";

const featuredPost = {
  title: "Comment l’IA transforme les PME en 2026",
  excerpt:
    "Panorama des usages concrets de l’IA : support client, automatisation des tâches et pilotage des données.",
  readTime: "6 min",
  date: "06 février 2026",
  category: "Tendances",
};

const posts = [
  {
    title: "Automatiser la facturation sans changer d’outil",
    excerpt: "Un guide simple pour connecter vos outils actuels et réduire les erreurs de saisie.",
    readTime: "4 min",
    date: "02 février 2026",
    category: "Automatisation",
  },
  {
    title: "Chatbots: 5 erreurs à éviter",
    excerpt: "Les pièges fréquents qui empêchent un chatbot d’apporter de la valeur réelle.",
    readTime: "5 min",
    date: "29 janvier 2026",
    category: "IA appliquée",
  },
  {
    title: "KPI: mesurer l’impact d’une nouvelle automatisation",
    excerpt: "Suivi des gains de temps, qualité et satisfaction client avec des indicateurs clairs.",
    readTime: "7 min",
    date: "20 janvier 2026",
    category: "Data",
  },
];

const topics = ["Stratégie", "IA appliquée", "Automatisation", "Data", "Productivité"];

const Blog = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Blog
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              Insights & guides pour faire grandir votre entreprise
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Des articles courts et concrets pour accélérer votre transformation digitale.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <Card className="border-white/10 bg-card/40 backdrop-blur reveal-on-scroll card-hover-lift">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
              <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to="/blog/ia-2026" className="inline-block">
                <Button variant="cta" size="sm">Lire l’article</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="border-white/10 bg-card/30 reveal-on-scroll card-hover-lift">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">Lire</Button>
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
