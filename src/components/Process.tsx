const steps = [
  {
    number: "01",
    title: "Audit & Analyse",
    description: "Nous analysons votre entreprise pour identifier les processus à optimiser et les opportunités d'automatisation."
  },
  {
    number: "02",
    title: "Stratégie sur Mesure",
    description: "Nous concevons une solution personnalisée adaptée à vos besoins spécifiques et à votre budget."
  },
  {
    number: "03",
    title: "Implémentation",
    description: "Nous déployons les outils d'automatisation et d'IA en moins d'une semaine, avec un accompagnement dédié."
  },
  {
    number: "04",
    title: "Suivi & Optimisation",
    description: "Nous mesurons les résultats et optimisons continuellement pour maximiser votre ROI."
  }
];

export default function Process() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, hsl(186 50% 8% / 0.4) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Notre Processus</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">L'expérience </span>
            <span className="text-gradient-cyan">VIVIA</span>
            <span className="text-foreground">...</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="relative z-10 flex flex-col items-start md:items-center">
                  <div className="w-24 h-24 rounded-full bg-muted border-2 border-primary/50 flex items-center justify-center mb-6 glow-cyan">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 md:text-center">{step.title}</h3>
                  <p className="text-muted-foreground md:text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom progress bar */}
          <div className="mt-12 h-1 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}