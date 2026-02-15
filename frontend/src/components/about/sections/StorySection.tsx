import { aboutTimeline } from "../data";

export default function StorySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Notre histoire
          </h2>
          <p className="text-muted-foreground">
            Nous construisons des solutions utiles, simples à adopter et alignées sur les objectifs métier. Notre approche
            combine stratégie, delivery et accompagnement terrain.
          </p>
          <ul className="space-y-4">
            {aboutTimeline.map((item, index) => (
              <li
                key={item.title}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-violet-500/40 transition-all duration-700 hover:scale-[1.03] hover:border-violet-400/50">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src="/services/automation.jpg"
              alt="Équipe VIVIA en atelier"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-bold mb-1">Co-création terrain</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Ateliers, tests et itérations rapides
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
