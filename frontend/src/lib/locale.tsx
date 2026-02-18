import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

type Lang = 'fr' | 'en' | 'es';

const STORAGE_KEY = 'locale';

const TRANSLATIONS: Record<Lang, Record<string, any>> = {
  fr: {
    seoTitle: "VIVIA fait avancer les organisations en optimisant leur productivité",
    seoDescription:
      "Nous aidons les dirigeants, les équipes terrain et les fonctions support à travailler avec plus de clarté, de fluidité et d'efficacité. Des gains de productivité mesurables sur l'ensemble de votre entreprise.",
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      blog: "Blog",
      news: "Actualités",
      contact: "Contact",
      appointment: "Réserver un rendez-vous"
    },
    hero: {
      badge: "#1 Agence d'Automatisation & Transformation Numérique PME",
      h1: "VIVIA fait avancer les organisations en optimisant leur productivité",
      subtitle:
        "Nous aidons les dirigeants, les équipes terrain et les fonctions support à travailler avec plus de clarté, de fluidité et d'efficacité, grâce à des solutions concrètes et intégrées.",
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
      primaryUrl: "/contact",
      secondary: "Découvrir nos solutions",
      secondaryUrl: "/services",
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
        "Fluidifient l'exécution des tâches quotidiennes",
        "Connecter tous vos outils (Notion, Airtable, Slack, Excel...)"
      ],
      vision: "Notre mission : libérer votre équipe des tâches sans valeur ajoutée pour se concentrer sur la croissance de votre entreprise."
    },
    solutions: {
      title: "Des solutions concrètes pour chaque étape de votre organisation",
      intro: "VIVIA accompagne les organisations autour de quatre grands besoins :",
      result: "Résultat",
      pillars: [
        {
          title: "CONSEILLER : VIVIA Advisory",
          description: "Donner une direction claire et partagée",
          servicesTitle: "Apports clés",
          services: [
            "lecture claire de l'organisation, par un audit",
            "priorités partagées entre direction, terrain et support",
            "feuille de route réaliste"
          ],
          result: "Alignement, lisibilité et dynamique collective."
        },
        {
          title: "PILOTER : Structurer l'information utile et gagner en productivité",
          description: "VIVIA Control : Le site comme point d'entrée",
          servicesTitle: "Services",
          services: [
            "informations claires pour tous",
            "formulaires utiles aux équipes terrain et support",
            "accès rapide aux ressources clés"
          ],
          result: "Moins de friction, plus d'autonomie, meilleure coordination."
        },
        {
          title: "EXÉCUTER : Simplifier le quotidien",
          description: "VIVIA Flow : Automatisation des tâches",
          servicesTitle: "Solutions",
          services: [
            "génération de documents terrain",
            "mises à jour automatiques",
            "notifications claires"
          ],
          result: "Moins de charge mentale, plus de continuité, meilleure fiabilité."
        },
        {
          title: "INTERAGIR : Faciliter les échanges",
          description: "VIVIA Voice : Assistants internes et externes",
          servicesTitle: "Outils",
          services: [
            "réponses aux équipes terrain",
            "support RH accessible",
            "disponibilité continue"
          ],
          result: "Des échanges fluides et utiles à tous."
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
    },
    services: {
      badge: "Solutions",
      titleLine1: "Des services conçus pour le terrain,",
      titleLine2: "les RH et la direction",
      subtitle: "VIVIA intervient à chaque étape, de la décision à l'exécution quotidienne.",
      techNote: "Technologies IA : RAG, LLM, Agents ChatGPT pour l'automatisation intelligente",
      cta: { book: "Demander un diagnostic", method: "Découvrir notre méthode" },
      highlights: {
        speed: { title: "Déploiement rapide", description: "Des premiers résultats visibles en quelques semaines." },
        integrations: { title: "Intégrations natives", description: "Connexion à vos outils actuels sans friction." },
        security: { title: "Sécurité & conformité", description: "Hébergement sécurisé et respect des normes RGPD." }
      },
      featuredImage: {
        alt: "Automatisation robuste des processus métier - élimination des tâches répétitives et amélioration de la fiabilité opérationnelle",
        title: "Automatisation intelligente",
        description: "Optimisez vos processus métiers"
      },
      heroImages: {
        data: {
          title: "Data & Pilotage",
          alt: "Pilotage data et tableaux de bord - visualisation intelligente des données métier en temps réel"
        },
        ai: {
          title: "IA Appliquée",
          alt: "IA appliquée aux opérations - automatisation intelligente des processus métier par algorithmes d'apprentissage machine"
        }
      },
      process: {
        title: "Notre approche",
        stepLabel: "Étape",
        steps: {
          framing: { title: "Cadrage", description: "Audit express et priorisation des quick wins." },
          implementation: { title: "Implémentation", description: "Automatisations, dashboards et IA livrés par itérations." },
          adoption: { title: "Adoption", description: "Formation des équipes et suivi des résultats." }
        }
      },
      benefits: {
        title: "Ce que vos équipes gagnent",
        items: {
          cost: "Réduction des coûts opérationnels",
          time: "Gain de temps immédiat",
          visibility: "Meilleure visibilité sur la performance",
          experience: "Expérience client améliorée"
        }
      },
      quickPlan: {
        title: "Plan d'action rapide",
        description: "Un cadre clair pour avancer en 30 jours.",
        items: {
          audit: "Audit express des processus",
          priorities: "Priorités d'automatisation",
          prototype: "Prototype livré en 2 semaines",
          training: "Formation & adoption terrain"
        }
      },
      finalCta: {
        title: "Prêt à passer à l'action ?",
        description: "Obtenez un plan d'automatisation personnalisé pour votre entreprise.",
        button: "Démarrer maintenant"
      }
    },
    about: {
      badge: "À propos",
      titleLine1: "Une équipe engagée pour",
      titleLine2: "rendre l'IA utile et accessible",
      subtitle: "VIVIA accompagne les PME dans leur transformation digitale avec des solutions d'automatisation, data et IA pensées pour le terrain.",
      cta: { contact: "Parler à un expert", services: "Voir nos services" },
      highlights: {
        vision: { title: "Vision claire", description: "Une stratégie lisible pour guider chaque décision." },
        expertise: { title: "Expertise terrain", description: "Des solutions pensées pour les PME et leurs équipes." },
        impact: { title: "Impact mesurable", description: "Des gains concrets suivis avec des indicateurs précis." }
      },
      method: {
        title1: "Méthode",
        text1: "Co-construction terrain",
        desc1: "Ateliers courts, prototypage rapide et déploiement progressif.",
        title2: "Focus",
        text2: "Impact mesurable",
        desc2: "Gains suivis, adoption validée, ROI mesuré."
      },
      heroImage: {
        badge1Title: "Vision",
        badge1Text: "Stratégie & alignement",
        badge2Title: "Impact",
        badge2Text: "Co-construction terrain",
        alt: "Services de consulting en automatisation - expertise stratégique pour la transformation numérique des processus"
      },
      stats: {
        title: "Nos résultats en chiffres",
        impactLabel: "Impact",
        items: {
          clients: { label: "Clients satisfaits" },
          time: { label: "Temps économisé" },
          support: { label: "Support disponible" },
          success: { label: "Taux de réussite" }
        }
      },
      story: {
        title: "Notre histoire",
        paragraph1: "VIVIA est en création, mais son équipe apporte une expérience solide. Nous avons conçu et déployé des solutions d'automatisation et d'IA pour plusieurs entreprises, transformant leurs opérations et libérant du temps pour l'essentiel.",
        paragraph2: "Avec VIVIA, nous officialisons cette expertise pour aider les PME à accélérer leur transformation digitale, avec une approche simple, utile et axée sur les résultats métier.",
        timeline: {
          "2024": "Accélération avec une offre IA appliquée aux opérations et au support client.",
          "2026": "Consolidation d'une approche complète : cadrage, delivery, adoption."
        },
        image: {
          title: "Co-création terrain",
          description: "Ateliers, tests et itérations rapides",
          alt: "Équipe VIVIA collaborant lors d'un atelier de travail - moment de créativité et d'échange collectif sur les solutions d'automatisation"
        }
      },
      values: {
        title: "Nos valeurs",
        items: {
          human: { title: "Humain d'abord", description: "Nous co-construisons avec vos équipes pour une adoption durable." },
          result: { title: "Orientation résultat", description: "Chaque action est pensée pour générer un impact mesurable." },
          execution: { title: "Exécution rapide", description: "Des itérations courtes pour livrer vite et bien." },
          reliability: { title: "Fiabilité", description: "Des solutions robustes, sécurisées et conformes RGPD." }
        }
      },
      finalCta: {
        title: "Envie d'en savoir plus ?",
        description: "Parlez-nous de vos objectifs, nous vous proposons un plan d'action clair.",
        button: "Nous contacter"
      }
    },
    contact: {
      badge: "Contact",
      h1: "Réserver un diagnostic productivité",
      intro: "Un format court et clair pour identifier les meilleures opportunités d'automatisation et de gains opérationnels.",
      buttons: {
        book: "Réserver un rendez-vous",
        services: "Voir nos services"
      },
      steps: [
        { title: "30 minutes avec un expert", description: "Un échange structuré pour comprendre vos objectifs et vos irritants opérationnels." },
        { title: "Audit express des processus", description: "Identification des 3 gains rapides et des leviers d'automatisation prioritaires." },
        { title: "Plan d'action clair", description: "Une synthèse simple avec priorités, effort estimé et impact attendu." }
      ],
      form: {
        talkTitle: "Parlons de votre contexte",
        talkDesc: "Remplissez ce formulaire, nous revenons vers vous rapidement.",
        labels: { name: "Nom complet", company: "Entreprise", email: "Email professionnel", phone: "Téléphone", message: "Objectif principal" },
        placeholders: { name: "Votre nom", company: "Nom de votre entreprise", email: "vous@entreprise.com", phone: "+33 6 00 00 00 00", message: "Ex: automatiser le support, centraliser la data..." },
        submit: { sending: "Envoi en cours...", send: "Envoyer la demande" },
        success: "Merci, votre demande a bien été envoyée.",
        error: "Impossible d'envoyer pour le moment. Vérifiez la configuration et réessayez."
      },
      whatYouGet: {
        title: "Ce que vous obtenez",
        desc: "Un diagnostic clair, actionnable, sans engagement.",
        bullets: [
          "Priorités d'automatisation adaptées à vos équipes",
          "Estimation des gains de temps et d'impact",
          "Recommandations outils & intégrations",
          "Prochaine étape simple et planifiée"
        ],
        quickReplyTitle: "Besoin d'un créneau rapide ?",
        quickReplyNote: "Nous répondons sous 24h ouvrées."
      },
      contactDirect: {
        title: "Contact direct",
        desc: "Si vous préférez un contact rapide.",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        locationLabel: "Localisation",
        location: "Paris, France"
      }
    },
    blog: {
      badge: "Blog",
      h1: "Insights & guides pour faire grandir votre entreprise",
      intro: "Des articles courts et concrets pour accélérer votre transformation digitale.",
      topics: {"0": "Stratégie", "1": "IA appliquée", "2": "Automatisation", "3": "Data", "4": "Productivité"},
      featuredPost: {
        title: "Comment l'IA transforme les PME en 2026",
        excerpt: "Panorama des usages concrets de l'IA : support client, automatisation des tâches et pilotage des données.",
        readTime: "6 min",
        date: "06 février 2026",
        category: "Tendances",
        readMore: "Lire l'article"
      },
      posts: {
        "0": { title: "Automatiser la facturation sans changer d'outil", excerpt: "Un guide simple pour connecter vos outils actuels et réduire les erreurs de saisie.", readTime: "4 min", date: "02 février 2026", category: "Automatisation" },
        "1": { title: "Chatbots: 5 erreurs à éviter", excerpt: "Les pièges fréquents qui empêchent un chatbot d'apporter de la valeur réelle.", readTime: "5 min", date: "29 janvier 2026", category: "IA appliquée" },
        "2": { title: "KPI: mesurer l'impact d'une nouvelle automatisation", excerpt: "Suivi des gains de temps, qualité et satisfaction client avec des indicateurs clairs.", readTime: "7 min", date: "20 janvier 2026", category: "Data" }
      },
      read: "Lire",
      readArticle: "Lire l'article"
    },
    news: {
      badge: "Actualités",
      h1: "Les dernières nouvelles de VIVIA",
      subtitle: "Suivez nos annonces, événements et mises à jour produit en temps réel.",
      updates: {
        "0": { title: "Nouveau partenariat avec DataPulse", excerpt: "Nous renforçons notre offre analytics pour un pilotage encore plus précis des opérations.", date: "05 février 2026", tag: "Partenariat" },
        "1": { title: "Mise à jour: tableau de bord temps réel", excerpt: "Vos indicateurs clés sont désormais actualisés toutes les 5 minutes.", date: "31 janvier 2026", tag: "Produit" },
        "2": { title: "Webinar: Automatiser le support client", excerpt: "Rejoignez notre session live pour découvrir des scénarios prêts à l'emploi.", date: "25 janvier 2026", tag: "Évènement" },
        "3": { title: "Nouvelle étude: ROI de l'IA en PME", excerpt: "Un rapport synthétique sur les gains de productivité observés en 2025.", date: "18 janvier 2026", tag: "Étude" }
      }
    },
    notFound: {
      code: "404",
      message: "Page non trouvée",
      return: "Retour à l'accueil"
    },
    creatorTools: {
      title: "Creator Tools",
      subtitle: "Accès réservé pour la gestion technique.",
      logout: "Se déconnecter",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Entrez le mot de passe",
      submit: "Accéder",
      invalid: "Mot de passe invalide"
    }
  },
  en: {
    seoTitle: "VIVIA drives organizations forward by optimizing their productivity",
    seoDescription:
      "We help leaders, field teams and support functions work with more clarity, fluidity and efficiency. Measurable productivity gains across your entire enterprise.",
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      blog: "Blog",
      news: "News",
      contact: "Contact",
      appointment: "Book a meeting"
    },
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
      primaryUrl: "/contact",
      secondary: "Discover our solutions",
      secondaryUrl: "/services",
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
      result: "Result",
      pillars: [
        {
          title: "ADVISE: VIVIA Advisory",
          description: "Provide clear and shared direction",
          servicesTitle: "Key contributions",
          services: [
            "clear understanding of the organization through audit",
            "shared priorities between management, field and support",
            "realistic roadmap"
          ],
          result: "Alignment, clarity and collective momentum."
        },
        {
          title: "CONTROL: Structure useful information and boost productivity",
          description: "VIVIA Control: The site as entry point",
          servicesTitle: "Services",
          services: [
            "clear information for everyone",
            "useful forms for field and support teams",
            "quick access to key resources"
          ],
          result: "Less friction, more autonomy, better coordination."
        },
        {
          title: "EXECUTE: Task automation",
          description: "VIVIA Flow: Task automation",
          servicesTitle: "Solutions",
          services: [
            "automated document generation",
            "automatic updates",
            "clear notifications"
          ],
          result: "Less mental load, more continuity, better reliability."
        },
        {
          title: "INTERACT: Facilitate exchanges",
          description: "VIVIA Voice: Internal and external assistants",
          servicesTitle: "Tools",
          services: [
            "responses for field teams",
            "accessible HR support",
            "continuous availability"
          ],
          result: "Smooth and useful exchanges for everyone."
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
    },
    services: {
      badge: "Solutions",
      titleLine1: "Services designed for the field,",
      titleLine2: "HR and management",
      subtitle: "VIVIA intervenes at every stage, from decision to daily execution.",
      techNote: "AI Technologies: RAG, LLM, ChatGPT Agents for intelligent automation",
      cta: { book: "Request a diagnostic", method: "Discover our method" },
      highlights: {
        speed: { title: "Rapid deployment", description: "First results visible within weeks." },
        integrations: { title: "Native integrations", description: "Connect to your existing tools without friction." },
        security: { title: "Security & compliance", description: "Secure hosting and GDPR compliance." }
      },
      featuredImage: {
        alt: "Robust process automation - removing repetitive tasks and improving operational reliability",
        title: "Intelligent automation",
        description: "Optimize your business processes"
      },
      heroImages: {
        data: {
          title: "Data & Control",
          alt: "Data steering and dashboards - real-time visualization of business data"
        },
        ai: {
          title: "Applied AI",
          alt: "AI applied to operations - intelligent process automation with machine learning"
        }
      },
      process: {
        title: "Our approach",
        stepLabel: "Step",
        steps: {
          framing: { title: "Scoping", description: "Rapid audit and prioritization of quick wins." },
          implementation: { title: "Implementation", description: "Automations, dashboards and AI delivered iteratively." },
          adoption: { title: "Adoption", description: "Team training and results monitoring." }
        }
      },
      benefits: {
        title: "What your teams gain",
        items: {
          cost: "Reduced operational costs",
          time: "Immediate time savings",
          visibility: "Better performance visibility",
          experience: "Improved customer experience"
        }
      },
      quickPlan: {
        title: "Fast action plan",
        description: "A clear framework to move forward in 30 days.",
        items: {
          audit: "Rapid process audit",
          priorities: "Automation priorities",
          prototype: "Prototype delivered in 2 weeks",
          training: "Training & field adoption"
        }
      },
      finalCta: {
        title: "Ready to take action?",
        description: "Get a tailored automation plan for your business.",
        button: "Start now"
      }
    },
    about: {
      badge: "About",
      titleLine1: "A committed team to",
      titleLine2: "make AI useful and accessible",
      subtitle: "VIVIA supports SMEs in their digital transformation with automation, data and AI solutions designed for real-world operations.",
      cta: { contact: "Talk with an expert", services: "See our services" },
      highlights: {
        vision: { title: "Clear vision", description: "A readable strategy to guide every decision." },
        expertise: { title: "Field expertise", description: "Solutions designed for SMEs and their teams." },
        impact: { title: "Measurable impact", description: "Concrete gains tracked with precise indicators." }
      },
      method: {
        title1: "Method",
        text1: "Field co-construction",
        desc1: "Short workshops, rapid prototyping and progressive rollout.",
        title2: "Focus",
        text2: "Measurable impact",
        desc2: "Monitored gains, validated adoption, tracked ROI."
      },
      heroImage: {
        badge1Title: "Vision",
        badge1Text: "Strategy & alignment",
        badge2Title: "Impact",
        badge2Text: "Field co-construction",
        alt: "Automation consulting services - strategic expertise for digital process transformation"
      },
      stats: {
        title: "Results at a glance",
        impactLabel: "Impact",
        items: {
          clients: { label: "Satisfied clients" },
          time: { label: "Time saved" },
          support: { label: "Support available" },
          success: { label: "Success rate" }
        }
      },
      story: {
        title: "Our story",
        paragraph1: "VIVIA is in creation, but its team brings solid experience. We have designed and deployed automation and AI solutions for several companies, transforming their operations and freeing time for what matters.",
        paragraph2: "With VIVIA, we formalize this expertise to help SMEs accelerate their digital transformation with a simple, useful and results-driven approach.",
        timeline: {
          "2024": "Acceleration with an AI offer applied to operations and customer support.",
          "2026": "Consolidation of a complete approach: framing, delivery, adoption."
        },
        image: {
          title: "Field co-creation",
          description: "Workshops, tests and rapid iterations",
          alt: "VIVIA team collaborating during a workshop - a moment of creativity and collective exchange on automation solutions"
        }
      },
      values: {
        title: "Our values",
        items: {
          human: { title: "Human first", description: "We co-build with your teams for sustainable adoption." },
          result: { title: "Results-driven", description: "Every action is designed to generate measurable impact." },
          execution: { title: "Fast execution", description: "Short iterations to deliver quickly and well." },
          reliability: { title: "Reliability", description: "Robust, secure and GDPR-compliant solutions." }
        }
      },
      finalCta: {
        title: "Want to learn more?",
        description: "Tell us your goals and we'll propose a clear action plan.",
        button: "Contact us"
      }
    },
    contact: {
      badge: "Contact",
      h1: "Book a productivity diagnostic",
      intro: "A short, focused session to identify the best automation opportunities and operational gains.",
      buttons: { book: "Reserve a meeting", services: "See our services" },
      steps: [
        { title: "30 minutes with an expert", description: "A structured conversation to understand your goals and operational pain points." },
        { title: "Express process audit", description: "Identify 3 quick wins and priority automation levers." },
        { title: "Clear action plan", description: "A concise summary with priorities, estimated effort and expected impact." }
      ],
      form: {
        talkTitle: "Let's talk about your context",
        talkDesc: "Fill in this form and we'll get back to you quickly.",
        labels: { name: "Full name", company: "Company", email: "Work email", phone: "Phone", message: "Main objective" },
        placeholders: { name: "Your name", company: "Company name", email: "you@company.com", phone: "+33 6 00 00 00 00", message: "E.g.: automate support, centralize data..." },
        submit: { sending: "Sending...", send: "Send request" },
        success: "Thanks — your request has been sent.",
        error: "Unable to send at the moment. Check configuration and try again."
      },
      whatYouGet: {
        title: "What you get",
        desc: "A clear, actionable, no-commitment diagnostic.",
        bullets: ["Automation priorities tailored to your teams","Estimated time savings and impact","Tool & integration recommendations","A simple, scheduled next step"],
        quickReplyTitle: "Need a quick slot?",
        quickReplyNote: "We reply within 24 business hours."
      },
      contactDirect: {
        title: "Direct contact",
        desc: "If you prefer a quick contact.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        location: "Paris, France"
      }
    },
    blog: {
      badge: "Blog",
      h1: "Insights & guides to help grow your business",
      intro: "Short, practical articles to accelerate your digital transformation.",
      topics: {"0": "Strategy", "1": "Applied AI", "2": "Automation", "3": "Data", "4": "Productivity"},
      featuredPost: {
        title: "How AI is transforming SMEs in 2026",
        excerpt: "Overview of practical AI use cases: customer support, task automation and data-driven decision making.",
        readTime: "6 min",
        date: "06 February 2026",
        category: "Trends",
        readMore: "Read the article"
      },
      posts: {
        "0": { title: "Automate invoicing without changing tools", excerpt: "A simple guide to connect your existing tools and reduce data entry errors.", readTime: "4 min", date: "02 February 2026", category: "Automation" },
        "1": { title: "Chatbots: 5 mistakes to avoid", excerpt: "Common pitfalls that prevent a chatbot from delivering real value.", readTime: "5 min", date: "29 January 2026", category: "Applied AI" },
        "2": { title: "KPIs: measuring the impact of a new automation", excerpt: "Tracking time savings, quality and customer satisfaction with clear indicators.", readTime: "7 min", date: "20 January 2026", category: "Data" }
      },
      read: "Read",
      readArticle: "Read the article"
    },
    news: {
      badge: "News",
      h1: "Latest VIVIA updates",
      subtitle: "Follow our announcements, events and product updates in real time.",
      updates: {
        "0": { title: "New partnership with DataPulse", excerpt: "We strengthen our analytics offering for even more precise operational monitoring.", date: "05 February 2026", tag: "Partnership" },
        "1": { title: "Update: real-time dashboard", excerpt: "Your key metrics are now refreshed every 5 minutes.", date: "31 January 2026", tag: "Product" },
        "2": { title: "Webinar: Automate customer support", excerpt: "Join our live session to discover ready-to-use scenarios.", date: "25 January 2026", tag: "Event" },
        "3": { title: "New study: AI ROI in SMEs", excerpt: "A concise report on productivity gains observed in 2025.", date: "18 January 2026", tag: "Study" }
      }
    },
    notFound: {
      code: "404",
      message: "Oops! Page not found",
      return: "Return to Home"
    },
    creatorTools: {
      title: "Creator Tools",
      subtitle: "Reserved access for technical management.",
      logout: "Logout",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter the password",
      submit: "Access",
      invalid: "Invalid password"
    }
  },
  es: {
    seoTitle: "VIVIA impulsa a las organizaciones optimizando su productividad",
    seoDescription:
      "Ayudamos a líderes, equipos de campo y funciones de soporte a trabajar con más claridad, fluidez y eficiencia. Ganancias de productividad medibles en toda la empresa.",
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Acerca de",
      blog: "Blog",
      news: "Noticias",
      contact: "Contacto",
      appointment: "Reservar una reunión"
    },
    hero: {
      badge: "#1 Agencia de Automatización para PYMES",
      h1: "VIVIA impulsa a las organizaciones optimizando su productividad",
      subtitle: "Ayudamos a líderes, equipos de campo y funciones de soporte a trabajar con más claridad, fluidez y eficiencia, mediante soluciones concretas e integradas.",
      subtitle2: "Ganancias de productividad medibles en toda la empresa.",
      tagline: "Dirigir con claridad. Ejecutar con eficacia. Interactuar con precisión.",
      benefits: [
        "Implementaciones rápidas",
        "Enfoque de negocio",
        "Soluciones confiables",
        "Resultados medibles"
      ]
    },
    cta: {
      primary: "Iniciar un diagnóstico (30 min)",
      primaryUrl: "/contact",
      secondary: "Descubrir nuestras soluciones",
      secondaryUrl: "/services",
      diagnostic: "Iniciar el diagnóstico (30 min)",
      learnMore: "Descubrir casos de uso",
      discoverMethod: "Conocer nuestro método y equipo"
    },
    targetAudience: {
      title: "Una solución pensada para todos los equipos",
      intro: "VIVIA acompaña a los equipos que hacen vivir la organización cada día:",
      targets: [
        {
          title: "Liderazgo",
          description: "Visión clara, decisiones estructuradas"
        },
        {
          title: "Equipos de campo",
          description: "Herramientas simples, procesos fluidos"
        },
        {
          title: "RR. HH. y soporte",
          description: "Información accesible, tareas simplificadas"
        }
      ],
      conclusion: "Un solo sistema al servicio de todos."
    },
    promise: {
      title: "Haga el trabajo más simple, claro y eficiente",
      intro: "VIVIA diseña sistemas que:",
      points: [
        "Hacen la información accesible para todos",
        "Agilizan la ejecución de tareas diarias",
        "Estructuran los intercambios entre equipos"
      ],
      vision: "Cada intervención busca un objetivo común: ahorrar tiempo, comodidad y visibilidad para toda la organización."
    },
    solutions: {
      title: "Soluciones concretas para cada etapa de su organización",
      intro: "VIVIA acompaña a las organizaciones en cuatro grandes necesidades:",
      result: "Resultado",
      pillars: [
        {
          title: "ASESORAR: VIVIA Advisory",
          description: "Proporcionar una dirección clara y compartida",
          servicesTitle: "Contribuciones clave",
          services: [
            "Comprensión clara de la organización mediante auditoría",
            "Prioridades compartidas entre dirección, campo y soporte",
            "Hoja de ruta realista"
          ],
          result: "Alineación, claridad e impulso colectivo."
        },
        {
          title: "CONTROLAR: Estructurar información útil e impulsar la productividad",
          description: "VIVIA Control: El sitio como punto de entrada",
          servicesTitle: "Servicios",
          services: [
            "Información clara para todos",
            "Formularios útiles para equipos de campo y soporte",
            "Acceso rápido a recursos clave"
          ],
          result: "Menos fricción, más autonomía, mejor coordinación."
        },
        {
          title: "EJECUTAR: Automatización de tareas",
          description: "VIVIA Flow: Automatización de tareas",
          servicesTitle: "Soluciones",
          services: [
            "Generación automática de documentos",
            "Actualizaciones automáticas",
            "Notificaciones claras"
          ],
          result: "Menos carga mental, más continuidad, mayor fiabilidad."
        },
        {
          title: "INTERACTUAR: Facilitar intercambios",
          description: "VIVIA Voice: Asistentes internos y externos",
          servicesTitle: "Herramientas",
          services: [
            "Respuestas para equipos de campo",
            "Soporte de RR.HH. accesible",
            "Disponibilidad continua"
          ],
          result: "Intercambios fluidos y útiles para todos."
        }
      ]
    },
    credibility: {
      title: "Un enfoque probado, llevado por equipos comprometidos",
      intro: "Las soluciones VIVIA se despliegan y usan a diario por:",
      usedBy: [
        "Equipos operativos",
        "Funciones de soporte",
        "Dirección"
      ],
      method: "Se basan en un método claro, elecciones tecnológicas sólidas y un acompañamiento pensado para una adopción sostenible en el terreno.",
      partnersIntro: "VIVIA se apoya en un ecosistema de socios tecnológicos y de negocio reconocidos, seleccionados por su fiabilidad y su capacidad de integrarse en los usos reales de las organizaciones.",
      transition: "Detrás de cada solución, hay un método, un equipo y una forma de trabajar."
    },
    finalCTA: {
      title: "Aclare. Simplifique. Avance.",
      subtitle: "Gane productividad.",
      description: "Una conversación de 30 minutos puede identificar palancas concretas y útiles para cada equipo."
    },
    about: {
      badge: "Acerca de",
      titleLine1: "Un equipo comprometido para",
      titleLine2: "hacer la IA útil y accesible",
      subtitle: "VIVIA acompaña a las PYMES en su transformación digital con soluciones de automatización, datos e IA pensadas para la realidad del terreno.",
      cta: { contact: "Hablar con un experto", services: "Ver nuestros servicios" },
      highlights: {
        vision: { title: "Visión clara", description: "Una estrategia clara para guiar cada decisión." },
        expertise: { title: "Experiencia en terreno", description: "Soluciones pensadas para las PYMES y sus equipos." },
        impact: { title: "Impacto medible", description: "Ganancias concretas con indicadores precisos." }
      },
      method: {
        title1: "Método",
        text1: "Co-construcción en terreno",
        desc1: "Talleres cortos, prototipado rápido y despliegue progresivo.",
        title2: "Enfoque",
        text2: "Impacto medible",
        desc2: "Ganancias monitorizadas, adopción validada, ROI controlado."
      },
      heroImage: {
        badge1Title: "Visión",
        badge1Text: "Estrategia y alineación",
        badge2Title: "Impacto",
        badge2Text: "Co-construcción en terreno",
        alt: "Servicios de consultoría en automatización - experiencia estratégica para la transformación digital de procesos"
      },
      stats: {
        title: "Resultados en cifras",
        impactLabel: "Impacto",
        items: {
          clients: { label: "Clientes satisfechos" },
          time: { label: "Tiempo ahorrado" },
          support: { label: "Soporte disponible" },
          success: { label: "Tasa de éxito" }
        }
      },
      story: {
        title: "Nuestra historia",
        paragraph1: "VIVIA está en creación, pero su equipo aporta una sólida experiencia. Hemos diseñado e implementado soluciones de automatización e IA para varias empresas, transformando sus operaciones y liberando tiempo para lo esencial.",
        paragraph2: "Con VIVIA, formalizamos esta experiencia para ayudar a las PYMES a acelerar su transformación digital con un enfoque simple, útil y orientado a resultados.",
        timeline: {
          "2024": "Aceleración con una oferta de IA aplicada a operaciones y soporte al cliente.",
          "2026": "Consolidación de un enfoque completo: definición, delivery y adopción."
        },
        image: {
          title: "Co-creación en terreno",
          description: "Talleres, pruebas e iteraciones rápidas",
          alt: "Equipo de VIVIA colaborando durante un taller: un momento de creatividad e intercambio colectivo sobre soluciones de automatización"
        }
      },
      values: {
        title: "Nuestros valores",
        items: {
          human: { title: "Humano primero", description: "Co-construimos con sus equipos para una adopción sostenible." },
          result: { title: "Orientación a resultados", description: "Cada acción está diseñada para generar un impacto medible." },
          execution: { title: "Ejecución rápida", description: "Iteraciones cortas para entregar rápido y bien." },
          reliability: { title: "Fiabilidad", description: "Soluciones robustas, seguras y conformes al RGPD." }
        }
      },
      finalCta: {
        title: "¿Quieres saber más?",
        description: "Cuéntanos tus objetivos y te proponemos un plan de acción claro.",
        button: "Contactarnos"
      }
    },
    services: {
      badge: "Servicios Premium",
      titleLine1: "Soluciones concretas para",
      titleLine2: "acelerar a sus equipos",
      subtitle: "Combinamos automatización, datos e IA para transformar sus operaciones sin perturbar su día a día.",
      cta: { book: "Solicitar diagnóstico", method: "Descubrir nuestro método" },
      highlights: {
        speed: { title: "Despliegue rápido", description: "Resultados visibles en pocas semanas." },
        integrations: { title: "Integraciones nativas", description: "Conexión con sus herramientas actuales sin fricción." },
        security: { title: "Seguridad y cumplimiento", description: "Alojamiento seguro y cumplimiento de RGPD." }
      },
      featuredImage: {
        alt: "Automatización robusta de procesos - eliminación de tareas repetitivas y mejora de la fiabilidad operativa",
        title: "Automatización inteligente",
        description: "Optimice sus procesos de negocio"
      },
      heroImages: {
        data: {
          title: "Data y Pilotaje",
          alt: "Pilotaje de datos y cuadros de mando: visualización inteligente de datos de negocio en tiempo real"
        },
        ai: {
          title: "IA Aplicada",
          alt: "IA aplicada a las operaciones: automatización inteligente de procesos con aprendizaje automático"
        }
      },
      process: {
        title: "Nuestro enfoque",
        stepLabel: "Paso",
        steps: {
          framing: { title: "Definición", description: "Auditoría exprés y priorización de quick wins." },
          implementation: { title: "Implementación", description: "Automatizaciones, dashboards e IA entregados por iteraciones." },
          adoption: { title: "Adopción", description: "Formación de equipos y seguimiento de resultados." }
        }
      },
      benefits: {
        title: "Lo que ganan sus equipos",
        items: {
          cost: "Reducción de costos operativos",
          time: "Ahorro de tiempo inmediato",
          visibility: "Mejor visibilidad del rendimiento",
          experience: "Mejora de la experiencia del cliente"
        }
      },
      quickPlan: {
        title: "Plan de acción rápido",
        description: "Un marco claro para avanzar en 30 días.",
        items: {
          audit: "Auditoría exprés de procesos",
          priorities: "Prioridades de automatización",
          prototype: "Prototipo entregado en 2 semanas",
          training: "Formación y adopción en terreno"
        }
      },
      finalCta: {
        title: "¿Listo para pasar a la acción?",
        description: "Obtenga un plan de automatización personalizado para su empresa.",
        button: "Empezar ahora"
      }
    },
    contact: {
      badge: "Contacto",
      h1: "Reservar un diagnóstico de productividad",
      intro: "Una sesión corta y enfocada para identificar las mejores oportunidades de automatización y ganancias operativas.",
      buttons: { book: "Reservar una reunión", services: "Ver nuestros servicios" },
      steps: [
        { title: "30 minutos con un experto", description: "Una conversación estructurada para comprender sus objetivos y puntos críticos operativos." },
        { title: "Auditoría express de procesos", description: "Identificar 3 ganancias rápidas y palancas de automatización prioritarias." },
        { title: "Plan de acción claro", description: "Un resumen conciso con prioridades, esfuerzo estimado e impacto esperado." }
      ],
      form: {
        talkTitle: "Hablemos de su contexto",
        talkDesc: "Complete este formulario y nos pondremos en contacto rápidamente.",
        labels: { name: "Nombre completo", company: "Empresa", email: "Correo electrónico", phone: "Teléfono", message: "Objetivo principal" },
        placeholders: { name: "Su nombre", company: "Nombre de su empresa", email: "usted@empresa.com", phone: "+33 6 00 00 00 00", message: "Ej.: automatizar soporte, centralizar datos..." },
        submit: { sending: "Enviando...", send: "Enviar solicitud" },
        success: "Gracias — su solicitud ha sido enviada.",
        error: "No se puede enviar en este momento. Revise la configuración e inténtelo de nuevo."
      },
      whatYouGet: {
        title: "Lo que obtiene",
        desc: "Un diagnóstico claro, accionable y sin compromiso.",
        bullets: ["Prioridades de automatización adaptadas a sus equipos","Estimación de ahorros de tiempo e impacto","Recomendaciones de herramientas e integraciones","Un siguiente paso simple y programado"],
        quickReplyTitle: "¿Necesita un hueco rápido?",
        quickReplyNote: "Respondemos en 24 horas hábiles."
      },
      contactDirect: {
        title: "Contacto directo",
        desc: "Si prefiere un contacto rápido.",
        emailLabel: "Correo",
        phoneLabel: "Teléfono",
        locationLabel: "Ubicación",
        location: "París, Francia"
      }
    },
    blog: {
      badge: "Blog",
      h1: "Ideas y guías para hacer crecer su empresa",
      intro: "Artículos breves y prácticos para acelerar su transformación digital.",
      topics: {"0": "Estrategia", "1": "IA aplicada", "2": "Automatización", "3": "Data", "4": "Productividad"},
      featuredPost: {
        title: "Cómo la IA transforma a las PYMES en 2026",
        excerpt: "Panorama de casos de uso prácticos de la IA: soporte al cliente, automatización de tareas y pilotaje de datos.",
        readTime: "6 min",
        date: "06 febrero 2026",
        category: "Tendencias",
        readMore: "Leer el artículo"
      },
      posts: {
        "0": { title: "Automatizar la facturación sin cambiar de herramienta", excerpt: "Una guía sencilla para conectar sus herramientas actuales y reducir errores de entrada.", readTime: "4 min", date: "02 febrero 2026", category: "Automatización" },
        "1": { title: "Chatbots: 5 errores a evitar", excerpt: "Trampas frecuentes que impiden que un chatbot aporte valor real.", readTime: "5 min", date: "29 enero 2026", category: "IA aplicada" },
        "2": { title: "KPI: medir el impacto de una nueva automatización", excerpt: "Seguimiento de ahorros de tiempo, calidad y satisfacción del cliente con indicadores claros.", readTime: "7 min", date: "20 enero 2026", category: "Data" }
      },
      read: "Leer",
      readArticle: "Leer el artículo"
    },
    news: {
      badge: "Noticias",
      h1: "Las últimas novedades de VIVIA",
      subtitle: "Sigue nuestros anuncios, eventos y actualizaciones de producto en tiempo real.",
      updates: {
        "0": { title: "Nueva asociación con DataPulse", excerpt: "Reforzamos nuestra oferta de analytics para un seguimiento operativo aún más preciso.", date: "05 febrero 2026", tag: "Asociación" },
        "1": { title: "Actualización: panel en tiempo real", excerpt: "Sus indicadores clave ahora se actualizan cada 5 minutos.", date: "31 enero 2026", tag: "Producto" },
        "2": { title: "Webinar: Automatizar el soporte al cliente", excerpt: "Únase a nuestra sesión en vivo para descubrir escenarios listos para usar.", date: "25 enero 2026", tag: "Evento" },
        "3": { title: "Nuevo estudio: ROI de la IA en PYMES", excerpt: "Un informe sintético sobre las ganancias de productividad observadas en 2025.", date: "18 enero 2026", tag: "Estudio" }
      }
    },
    notFound: {
      code: "404",
      message: "¡Vaya! Página no encontrada",
      return: "Volver al inicio"
    },
    creatorTools: {
      title: "Creator Tools",
      subtitle: "Acceso reservado para gestión técnica.",
      logout: "Cerrar sesión",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Ingrese la contraseña",
      submit: "Acceder",
      invalid: "Contraseña inválida"
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
      if (stored === 'fr' || stored === 'en' || stored === 'es') return stored;
    } catch (e) {}
    return 'fr';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback((key: string, fallback = '') => {
    const parts = key.split('.');
    let cur: any = TRANSLATIONS[lang];
    for (const p of parts) {
      if (!cur) return fallback || key;
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : fallback || key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
