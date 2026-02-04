import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Lang = 'fr' | 'en';

const STORAGE_KEY = 'locale';

const TRANSLATIONS: Record<Lang, Record<string, any>> = {
  fr: {
    seoTitle: "VIVIA fait avancer les organisations en optimisant leur productivité",
    seoDescription:
      "Nous aidons les dirigeants, les équipes terrain et les fonctions support à travailler avec plus de clarté, de fluidité et d’efficacité. Des gains de productivité mesurables sur l’ensemble de votre entreprise.",
    hero: {
      badge: "#1 Agence d'Automatisation & Transformation Numérique PME",
      h1: "VIVIA fait avancer les organisations en optimisant leur productivité",
      subtitle:
        "Nous aidons les dirigeants, les équipes terrain et les fonctions support à travailler avec plus de clarté, de fluidité et d’efficacité, grâce à des solutions concrètes et intégrées.",
      subtitle2: "Des gains de productivité mesurables sur l’ensemble de votre entreprise.",
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
      primaryUrl: "/diagnostic",
      secondary: "Découvrir nos solutions",
      secondaryUrl: "/solutions",
      diagnostic: "Réserver mon audit productivité gratuit",
      learnMore: "Exemples concrets d'automatisation",
      discoverMethod: "Notre méthodologie éprouvée"
    },
    targetAudience: {
      title: "Automatisation PME adaptée à chaque département",
      intro: "VIVIA digitalise et automatise les processus de toutes vos équipes :",
      targets: [
        {
          title: "Dirigeants & CEO",
          description: "Tableaux de bord temps réel, décisions data-driven"
        },
        {
          title: "Équipes opérationnelles",
          description: "Workflows automatisés, 0 tâche manuelle"
        },
        {
          title: "RH & Administration",
          description: "Automatisation RH, gestion documentaire intelligente"
        }
      ],
      conclusion: "Une plateforme unifiée. Tous vos outils connectés."
    },
    promise: {
      title: "Automatisation & Digitalisation : Transformez votre PME",
      intro: "Nos solutions d'automatisation permettent de :",
      points: [
        "Éliminer 80% des tâches répétitives grâce à l'IA et l'automatisation",
        "Fluidifient l’exécution des tâches quotidiennes",
        "Connecter tous vos outils (Notion, Airtable, Slack, Excel...)"
      ],
      vision: "Notre mission : libérer votre équipe des tâches sans valeur ajoutée pour se concentrer sur la croissance de votre entreprise."
    },
    solutions: {
      title: "4 Piliers de l'Automatisation & Transformation Digitale PME",
      intro: "VIVIA automatise et optimise chaque aspect de votre organisation :",
      pillars: [
        {
          title: "Conseil Digital",
          description: "Audit automatisation, stratégie de transformation numérique"
        },
        {
          title: "Gestion Intelligente",
          description: "CRM, ERP, base de données centralisée et automatisée"
        },
        {
          title: "Automatisation Process",
          description: "Automatiser les processus opérationnels"
        },
        {
          title: "Communication Unifiée",
          description: "Chatbots IA, portails clients, support automatisé"
        }
      ]
    },
    credibility: {
      title: "Expert Automatisation PME | +50 Entreprises Accompagnées",
      intro: "Nos solutions d'automatisation sont utilisées quotidiennement par :",
      usedBy: [
        "+50 PME françaises",
        "Secteurs : Tech, Services, Retail",
        "Taille : 10 à 500 employés"
      ],
      method: "Méthodologie agile certifiée. Technologies leaders : Make, Zapier, Airtable, n8n. Formation équipe incluse pour une adoption à 100%.",
      partnersIntro: "Partenaires certifiés : Make, Airtable, Notion, Microsoft, Google Workspace. Technologies éprouvées et sécurisées pour votre transformation digitale.",
      transition: "Une expertise reconnue. Des résultats mesurables. Un accompagnement sur-mesure."
    },
    finalCTA: {
      title: "Automatisez. Optimisez. Accélérez.",
      subtitle: "+40% de productivité garantie.",
      description: "Audit gratuit de 30 minutes : identifiez vos opportunités d'automatisation et estimez vos gains de temps et d'argent."
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
