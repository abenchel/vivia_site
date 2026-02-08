import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useReveal from "@/hooks/use-reveal";

const updates = [
  {
    title: "Nouveau partenariat avec DataPulse",
    excerpt: "Nous renforçons notre offre analytics pour un pilotage encore plus précis des opérations.",
    date: "05 février 2026",
    tag: "Partenariat",
  },
  {
    title: "Mise à jour: tableau de bord temps réel",
    excerpt: "Vos indicateurs clés sont désormais actualisés toutes les 5 minutes.",
    date: "31 janvier 2026",
    tag: "Produit",
  },
  {
    title: "Webinar: Automatiser le support client",
    excerpt: "Rejoignez notre session live pour découvrir des scénarios prêts à l'emploi.",
    date: "25 janvier 2026",
    tag: "Évènement",
  },
  {
    title: "Nouvelle étude: ROI de l'IA en PME",
    excerpt: "Un rapport synthétique sur les gains de productivité observés en 2025.",
    date: "18 janvier 2026",
    tag: "Étude",
  },
];

const Actualite = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28">
        {/* Hero section avec image en haut */}
        <section className="relative mx-auto max-w-6xl px-6">
          {/* Image rectangle en haut */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10" />
            <img 
              src="/public/actualite/actualite_image.png" 
              alt="Actualités VIVIA"
              className="h-full w-full object-cover opacity-60"
            />
            {/* Overlay pour le texte */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground w-fit">
                Actualités
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
                Les dernières nouvelles de VIVIA
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Suivez nos annonces, événements et mises à jour produit en temps réel.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {updates.map((update) => (
              <Card key={update.title} className="border-white/10 bg-card/30 reveal-on-scroll card-hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{update.tag}</span>
                    <span>{update.date}</span>
                  </div>
                  <CardTitle className="text-xl">{update.title}</CardTitle>
                  <CardDescription>{update.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-20 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Actualite;