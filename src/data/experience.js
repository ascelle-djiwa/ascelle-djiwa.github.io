export const EXPERIENCES = [
  {
    id: "henddu-2026",
    role: "Assistante Data & IA (Stage)",
    company: "HENDDU",
    date: "04/2026 - 08/2026 (05 mois)", // À ajuster avec les mois précis
    logo: "/images/logo-henddu.png", // Remplace par le chemin réel si tu as le logo
    brief: "Travaux concentrés sur l'intersection entre le traitement des données et l'optimisation des réseaux de capteurs, appliqués à la surveillance de la qualité de l'air en Afrique.",
    tags: ["Traitement de données", "IoT", "Optimisation"],
    missions: [
      "Automatisation de l'acquisition et de la consolidation de données environnementales pour un stockage <strong>AWS S3</strong>.",
      "Réalisation d'analyses exploratoires et développement d'algorithmes d'optimisation au service d'équipements terrain.",
      "Conception d'un tableau de bord sous <strong>Power BI</strong> (Power Query) pour le suivi de maintenance d'un parc de capteurs.",
      "Restitution des résultats et indicateurs de performance aux décideurs et création de synthèses d'activité via l'IA Générative.",
      "Versioning, documentation technique et travail collaboratif au sein de l'équipe Data."
    ]
  },
  {
    id: "winsoft-2024",
    role: "Data Analyst (Stage)",
    company: "Winsoft Informatique",
    date: "05/2024 - 08/2024 (03 mois)",
    logo: "/images/logo-winsoft.png",
    brief: "Analyse exploratoire, exploitation de jeux de données et création de rapports d'aide à la décision pour le suivi des performances métiers.",
    tags: ["Analyse de données", "SQL", "Power BI"],
    missions: [
      "Recueil et analyse des besoins métiers afin de définir les <strong>KPI</strong> nécessaires au suivi des clients et aux services.",
      "Extraction, consolidation, préparation et contrôle des données issues de bases SQL avec l'équipe informatique pour fiabiliser les données exploitées.",
      "Analyse des données d'activité pour suivre les performances, identifier les tendances et l'amélioration des processus.",
      "Conception de <strong>tableaux de bord interactifs sous Power BI</strong> permettant d’accompagner la prise de décision.",
      "Automatisation de la diffusion hebdomadaire des rapports via <strong>Power Automate</strong> et des tableaux en collaboration avec les équipes métiers et techniques."
    ]
  }
];

export const PROJECTS = [
  {
    id: "fraud-detection",
    category: "Data Science & ML",
    title: "Système décisionnel de détection de fraudes bancaires par IA",
    description: "Développement d'une solution d'identification de transactions frauduleuses (Kaggle). Pipeline ETL avec RobustScaler et application Web sous Streamlit. Création d'un modèle Random Forest expert (30 variables, rappel de 83%) et d'un modèle simplifié de simulation. Traitement du déséquilibre des classes.",
    image: "/images/creditcardfrauddetection.png",
    link: "https://github.com/ascelle-djiwa/Detection-De-Fraudes-Bancaires-par-IA",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Random Forest"]
  },
  {
    id: "dakar-pollution",
    category: "Data Science & ML",
    title: "Prédiction de la qualité de l'air par Machine Learning : ville de Dakar",
    description: "Anticipation des pics de pollution aux particules fines (PM2.5). Conception d'un pipeline complet : récupération automatisée via l'API OpenAQ (données nov-déc 2025) jusqu'à la modélisation prédictive.",
    image: "/images/projetpollution.jpg",
    link: "https://github.com/ascelle-djiwa/Pr-diction-de-la-pollution-ville-de-Dakar-Senegal",
    tags: ["Machine Learning", "API OpenAQ", "Data Pipeline"]
  },
  {
    id: "power-bi",
    category: "Data Analysis & BI",
    title: "Analyse d'une enquête - Professionnels des données",
    description: "Projet Power BI : nettoyage de données et création d'un tableau de bord analysant les salaires, les compétences techniques, les tendances sectorielles et l'analyse géographique.",
    image: "/images/projet-analyse-enquete.jpg",
    link: "https://github.com/ascelle-djiwa/Analyse-des-resultats-d-une-enquete-aupres-de-professionnels-de-donnees",
    tags: ["Power BI", "Data Cleaning", "Dataviz"]
  },
  {
    id: "mnist",
    category: "Data Science & ML",
    title: "Réseau de neurones pour la reconnaissance de chiffres (MNIST)",
    description: "Construction d'un réseau de neurones artificiels capable de reconnaître des chiffres manuscrits à partir des fichiers IDX du dataset MNIST, manipulation d'images avec Pillow.",
    image: "/images/projet-detection-chiffres.png",
    link: "https://github.com/ascelle-djiwa/Reconnaissance-Chiffres-MNIST",
    tags: ["Neural Networks", "NumPy", "Pillow"]
  },
  {
    id: "fake-news",
    category: "Data Science & ML",
    title: "Détection de fake news avec le Machine Learning",
    description: "Classification d'articles (réels ou faux) à l'aide de techniques NLP et de modèles prédictifs (Régression Logistique, Arbre de Décision).",
    image: "/images/projet-fake-news-detection.jpg",
    link: "https://github.com/ascelle-djiwa/Detection-de-fake-news-avec-du-Machine-learning",
    tags: ["NLP", "Classification", "Python"]
  },
  {
    id: "ckc-web",
    category: "Développement Web",
    title: "Application Web pour le Canoë Kayak Club St Junien",
    description: "Développement en groupe d'un outil de gestion des épreuves et inscriptions. Front-end en HTML/CSS, back-end Java avec Spring Boot et Thymeleaf.",
    image: "/images/logo-ckc-junien.png",
    link: "https://github.com/ascelle-djiwa/Application-web-pour-le-CKC-St-Junien",
    tags: ["Java", "Spring Boot", "HTML/CSS"]
  }
];