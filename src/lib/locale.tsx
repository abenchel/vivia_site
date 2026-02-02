import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Lang = 'fr' | 'en';

const STORAGE_KEY = 'locale';

const TRANSLATIONS: Record<Lang, Record<string, any>> = {
  fr: {
    hero: {
      badge: "#1 Agence d'Automatisation pour PME",
      h1: "VIVIA fait avancer les organisations en optimisant leur productivité",
      subtitle: "Nous aidons les dirigeants, les équipes terrain et les fonctions support à travailler avec plus de clarté, de fluidité et d'efficacité, grâce à des solutions concrètes et intégrées.",
      subtitle2: "Des gains de productivité mesurables sur l'ensemble de votre entreprise.",
      tagline: "Piloter clairement. Exécuter efficacement. Interagir avec justesse.",
      benefits: [
        "Déploiements rapides",
        "Approche métier",
        "Solutions fiables",
        "Résultats mesurables"
      ]
    },
    cta: {
      primary: "Lancer un diagnostic (30 min)",
      secondary: "Découvrir nos solutions",
      diagnostic: "Démarrer le diagnostic (30 min)",
      learnMore: "Découvrir les cas d'usage",
      discoverMethod: "Découvrir notre méthode et notre équipe"
    },
    targetAudience: {
      title: "Une solution pensée pour toutes les équipes",
      intro: "VIVIA s'adresse à toutes les équipes qui font vivre l'organisation au quotidien :",
      targets: [
        {
          title: "Dirigeants",
          description: "Vision claire, décisions structurées"
        },
        {
          title: "Équipes terrain",
          description: "Outils simples, processus fluides"
        },
        {
          title: "RH & fonctions support",
          description: "Information accessible, tâches simplifiées"
        }
      ],
      conclusion: "Un même système, au service de tous."
    },
    promise: {
      title: "Rendre le travail plus simple, plus lisible, plus efficace",
      intro: "VIVIA conçoit des systèmes qui :",
      points: [
        "Rendent l'information accessible à tous",
        "Fluidifient l'exécution des tâches quotidiennes",
        "Structurent les échanges entre équipes"
      ],
      vision: "Chaque intervention vise un objectif partagé : faire gagner du temps, du confort et de la visibilité à l'ensemble de l'organisation."
    },
    solutions: {
      title: "Des solutions concrètes pour chaque étape de votre organisation",
      intro: "VIVIA accompagne les organisations autour de quatre grands besoins :",
      pillars: [
        {
          title: "Conseiller",
          description: "Clarifier la direction et aligner les équipes"
        },
        {
          title: "Piloter",
          description: "Structurer l'information et les actifs"
        },
        {
          title: "Exécuter",
          description: "Automatiser les processus opérationnels"
        },
        {
          title: "Interagir",
          description: "Faciliter la communication interne et externe"
        }
      ]
    },
    credibility: {
      title: "Une approche éprouvée, portée par des équipes engagées",
      intro: "Les solutions VIVIA sont déployées et utilisées au quotidien par :",
      usedBy: [
        "Des équipes opérationnelles",
        "Des fonctions support",
        "Des directions"
      ],
      method: "Elles reposent sur une méthode claire, des choix technologiques assumés et un accompagnement pensé pour une adoption durable sur le terrain.",
      partnersIntro: "VIVIA s'appuie sur un écosystème de partenaires technologiques et métiers reconnus, sélectionnés pour leur fiabilité et leur capacité à s'intégrer aux usages réels des organisations.",
      transition: "Derrière chaque solution, il y a une méthode, une équipe et une façon de travailler."
    },
    finalCTA: {
      title: "Clarifier. Simplifier. Faire avancer.",
      subtitle: "Gagner en productivité.",
      description: "Un échange de 30 minutes permet d'identifier des leviers concrets et utiles pour chaque équipe."
    }
  },
  en: {
    hero: {
      badge: "#1 Automation Agency for SMEs",
      h1: "VIVIA drives organizations forward by optimizing their productivity",
      subtitle: "We help leaders, field teams and support functions work with more clarity, fluidity and efficiency, through concrete and integrated solutions.",
      subtitle2: "Measurable productivity gains across your entire enterprise.",
      tagline: "Lead clearly. Execute effectively. Interact precisely.",
      benefits: [
        "Rapid deployments",
        "Business approach",
        "Reliable solutions",
        "Measurable results"
      ]
    },
    cta: {
      primary: "Launch a diagnostic (30 min)",
      secondary: "Discover our solutions",
      diagnostic: "Start the diagnostic (30 min)",
      learnMore: "Discover use cases",
      discoverMethod: "Discover our method and team"
    },
    targetAudience: {
      title: "A solution designed for all teams",
      intro: "VIVIA addresses all teams that bring the organization to life daily:",
      targets: [
        {
          title: "Leaders",
          description: "Clear vision, structured decisions"
        },
        {
          title: "Field teams",
          description: "Simple tools, fluid processes"
        },
        {
          title: "HR & support functions",
          description: "Accessible information, simplified tasks"
        }
      ],
      conclusion: "One system, serving everyone."
    },
    promise: {
      title: "Make work simpler, clearer, more efficient",
      intro: "VIVIA designs systems that:",
      points: [
        "Make information accessible to all",
        "Streamline daily task execution",
        "Structure exchanges between teams"
      ],
      vision: "Every intervention aims at a shared objective: save time, comfort and visibility for the entire organization."
    },
    solutions: {
      title: "Concrete solutions for every stage of your organization",
      intro: "VIVIA supports organizations around four major needs:",
      pillars: [
        {
          title: "Advise",
          description: "Clarify direction and align teams"
        },
        {
          title: "Control",
          description: "Structure information and assets"
        },
        {
          title: "Execute",
          description: "Automate operational processes"
        },
        {
          title: "Interact",
          description: "Facilitate internal and external communication"
        }
      ]
    },
    credibility: {
      title: "A proven approach, carried by committed teams",
      intro: "VIVIA solutions are deployed and used daily by:",
      usedBy: [
        "Operational teams",
        "Support functions",
        "Management"
      ],
      method: "They are based on a clear method, committed technological choices and support designed for sustainable adoption in the field.",
      partnersIntro: "VIVIA relies on an ecosystem of recognized technological and business partners, selected for their reliability and ability to integrate with the real uses of organizations.",
      transition: "Behind every solution, there is a method, a team and a way of working."
    },
    finalCTA: {
      title: "Clarify. Simplify. Move forward.",
      subtitle: "Gain productivity.",
      description: "A 30-minute conversation can identify concrete and useful levers for each team."
    }
  }
};

type LocaleContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'fr' || stored === 'en') return stored;
    } catch (e) {}
    return 'fr';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: string, fallback = '') => {
    const parts = key.split('.');
    let cur: any = TRANSLATIONS[lang];
    for (const p of parts) {
      if (!cur) return fallback || key;
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : fallback || key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
