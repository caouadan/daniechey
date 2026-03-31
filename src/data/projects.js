// Images imports
import ohmyfoodAccueil from '../../assets/ohmyfood/ohmyfood-page-accueil.jpg';
import ohmyfoodRestaurant from '../../assets/ohmyfood/ohmyfood-page-restaurant.jpg';
import ohmyfoodMobile from '../../assets/ohmyfood/ohmyfood-version-mobile.jpg';
import kasaAccueil from '../../assets/kasa/kasa-page-accueil.jpg';
import kasaLogement from '../../assets/kasa/kasa-page-logement.jpg';
import kasaPropos from '../../assets/kasa/kasa-page-a-propos.jpg';
import sophieAccueil from '../../assets/sophiebluel/sophiebluel-page-accueil.jpg';
import sophieConnexion from '../../assets/sophiebluel/sophiebluel-page-connexion.jpg';
import sophieEdition from '../../assets/sophiebluel/sophiebluel-mode-edition.jpg';
import coachAccueil from '../../assets/coachlinguistique/coachlinguistique-page-accueil.jpg';
import coachFaq from '../../assets/coachlinguistique/coachlinguistique-page-faq.jpg';
import coachMobile from '../../assets/coachlinguistique/coachlinguistique-version-mobile.jpg';
import energiesMenu from '../../assets/energiesrenouvelables/energiesrenouvelables-menu.jpg';
import energiesSlideInteractive from '../../assets/energiesrenouvelables/energiesrenouvelables-slide-interactive.jpg';
import energiesSlideLecon from '../../assets/energiesrenouvelables/energiesrenouvelables-slide-lecon-type.jpg';
import alimentationMenu from '../../assets/alimentation/alimentation-debut-menu.jpg';
import alimentationSlideInteractive from '../../assets/alimentation/alimentation-slide-interactive.jpg';
import alimentationSlideQuizz from '../../assets/alimentation/alimentation-slide-quizz.jpg';
import rechercheMenu from '../../assets/rechercheweb/rechercheweb-menu.jpg';
import rechercheExercice from '../../assets/rechercheweb/rechercheweb-slide-intro-exercice.jpg';
import rechercheSimulation from '../../assets/rechercheweb/rechercheweb-slide-simulation.jpg';
import kampoyAccueil from '../../assets/kampoy/kampoy-page-accueil.jpg';
import kampoyMobile from '../../assets/kampoy/kampoy-page-connexion-version-mobile.jpg';
import kampoyCommandes from '../../assets/kampoy/kampoy-page-marchand-commandes.jpg';
import cubynAffiche from '../../assets/cubyn/cubyn-affiche-campagne-recrutement-cdi.jpg';
import cubynInfographie from '../../assets/cubyn/cubyn-affiche-recrutement-cdi-infographie.jpg';
import cubynBanniere from '../../assets/cubyn/cubyn-banniere-salon-professionnel.jpg';

export const projects = [
  // Dev projects
  {
    id: 1,
    title: "Ohmyfood",
    accroche: "Intégration mobile-first avec animations avancées pour une expérience utilisateur fluide et moderne",
    contexte: "Projet de formation consistant à intégrer l'interface d'une application de réservation de restaurants à partir d'une maquette Figma.",
    objectifs: "Développer un site mobile-first avec des animations fluides, tout en respectant fidèlement le design fourni.",
    stack: "HTML, CSS, Responsive, Git, Figma",
    competences: "Intégration responsive mobile-first, structuration des styles avec Sass et création d'animations CSS avancées.",
    resultats: "Interface responsive et dynamique, offrant une expérience utilisateur fluide et conforme aux standards UI modernes.",
    perspectives: "Ajouter des fonctionnalités dynamiques en JavaScript pour enrichir l'interactivité.",
    link: "https://caouadan.github.io/Ohmyfood/",
    categories: ["dev"],
    images: [
      ohmyfoodAccueil,
      ohmyfoodRestaurant,
      ohmyfoodMobile
    ]
  },
  {
    id: 2,
    title: "Kasa",
    accroche: "Application React de location immobilière basée sur une architecture en composants réutilisables",
    contexte: "Projet de formation visant à développer une application web de location immobilière avec React.",
    objectifs: "Construire une application en composants réutilisables avec navigation dynamique entre les pages.",
    stack: "React, JavaScript, CSS, Git",
    competences: "Création de composants React, gestion du routing et structuration d'une application frontend moderne.",
    resultats: "Application fluide et modulaire, permettant une navigation rapide et une bonne maintenabilité du code.",
    perspectives: "Mettre en place une gestion d'état globale (Redux ou Context API) pour améliorer la scalabilité.",
    link: "https://caouadan.github.io/kasa/",
    categories: ["dev"],
    images: [
      kasaAccueil,
      kasaLogement,
      kasaPropos
    ]
  },
  {
    id: 3,
    title: "Sophie Bluel",
    accroche: "Interface dynamique connectée à une API permettant la gestion de contenus en temps réel",
    contexte: "Projet de formation axé sur le développement d'une interface dynamique connectée à une API.",
    objectifs: "Permettre l'affichage et la gestion de contenus via des appels API et des interactions utilisateur.",
    stack: "JavaScript, HTML, CSS, API REST, Git",
    competences: "Manipulation du DOM, gestion des événements, intégration d'API et création de formulaires interactifs.",
    resultats: "Application dynamique permettant l'ajout, la modification et la suppression de contenus en temps réel.",
    perspectives: "Sécuriser davantage les échanges avec l'API et améliorer la gestion des erreurs côté utilisateur.",
    link: "https://caouadan.github.io/Portfolio-sophie-bluel-demo/",
    categories: ["dev"],
    images: [
      sophieAccueil,
      sophieConnexion,
      sophieEdition
    ]
  },
  {
    id: 4,
    title: "Coach linguistique",
    accroche: "Site vitrine conçu sur mesure pour développer la visibilité et l'image de marque d'une professionnelle",
    contexte: "Réalisation d'un site vitrine pour une cliente dans le cadre d'une mission freelance, afin de développer sa présence en ligne.",
    objectifs: "Concevoir un site moderne, responsive et fidèle à son image de marque, tout en valorisant ses services.",
    stack: "HTML, CSS, JavaScript, Figma, Git, Responsive, SEO",
    competences: "Gestion de projet client, adaptation aux besoins métiers, intégration responsive et communication professionnelle.",
    resultats: "Livraison d'un site fonctionnel et esthétique, permettant à la cliente de présenter ses services et d'améliorer sa visibilité.",
    perspectives: "Optimiser le SEO et ajouter des fonctionnalités interactives (formulaire avancé, prise de contact simplifiée).",
    link: "https://caouadan.github.io/veronica-coaching/",
    categories: ["dev", "graphisme"],
    images: [
      coachAccueil,
      coachFaq,
      coachMobile
    ]
  },
  // E-learning projects
  {
    id: 5,
    title: "Énergies renouvelables",
    accroche: "Module e-learning interactif pour sensibiliser aux enjeux du développement durable",
    contexte: "Découvrez les solutions d'énergies renouvelables et leur impact sur le développement durable. Formation sur l'écologie et l'environnement.",
    objectifs: "Apprendre aux utilisateurs à connaître la définition d'énergie renouvelable et les différentes énergies renouvelables connues.",
    stack: "Articulate Storyline, Moodle (LMS), Illustrator, Storyboard, Interactivité, Quiz, Ressources",
    competences: "Conception pédagogique, création d'interactions, scénarisation et intégration sur LMS.",
    resultats: "Module interactif publié sur Moodle, permettant un apprentissage autonome avec contenus visuels et activités engageantes.",
    perspectives: "Ajouter davantage de scénarios immersifs et de feedbacks personnalisés pour renforcer l'engagement.",
    link: "https://learn-in.fr/_SiteInfans/_ExtraitsFormations/MIPPER/Extrait_EnergiesRenouvelables/story.html?username=guest",
    categories: ["elearning", "graphisme"],
    images: [
      energiesMenu,
      energiesSlideInteractive,
      energiesSlideLecon
    ]
  },
  {
    id: 6,
    title: "Alimentation",
    accroche: "Expérience pédagogique interactive autour des bases d'une alimentation équilibrée",
    contexte: "Formation interactive explorant les principes d'une alimentation saine et équilibrée, les nutriments essentiels et les bonnes pratiques au quotidien.",
    objectifs: "Apprendre aux utilisateurs à connaître les catégories d'aliments et les besoins.",
    stack: "Articulate Storyline, Illustrator, Interactivité, Quiz, Ressources",
    competences: "UX pédagogique, design d'interfaces e-learning, création de supports visuels et gestion de projet collaborative.",
    resultats: "Prototype interactif structuré, mettant en avant une navigation intuitive et des contenus visuels engageants.",
    perspectives: "Optimiser l'accessibilité et ajouter des éléments audio pour diversifier les modes d'apprentissage.",
    link: "https://caouadan.github.io/portfolio-learning/soin%20alimentation%20danie%20chey%20export%20web/story.html",
    categories: ["elearning", "graphisme"],
    images: [
      alimentationMenu,
      alimentationSlideInteractive,
      alimentationSlideQuizz
    ]
  },
  {
    id: 7,
    title: "Recherche web",
    accroche: "Formation digitale pour apprendre à rechercher efficacement et évaluer la fiabilité des informations en ligne",
    contexte: "Maîtrisez les techniques et stratégies pour effectuer des recherches efficaces sur internet. Développez vos compétences numériques essentielles.",
    objectifs: "Apprendre aux utilisateurs à effectuer des recherches efficaces et à évaluer la fiabilité des sources.",
    stack: "Articulate Storyline, Moodle (LMS), Illustrator, Storyboard, Interactivité, Quiz",
    competences: "Structuration de contenu pédagogique, création d'exercices interactifs et vulgarisation de notions numériques.",
    resultats: "Formation accessible en ligne via Moodle, proposant des activités pratiques et des mises en situation concrètes.",
    perspectives: "Intégrer des cas réels et des parcours adaptatifs selon le niveau des apprenants.",
    link: "https://learn-in.fr/_SiteInfans/_ExtraitsFormations/PIX/Extrait_EffectuerUneRechercheInternet/story.html?username=guest",
    categories: ["elearning", "graphisme"],
    images: [
      rechercheMenu,
      rechercheExercice,
      rechercheSimulation
    ]
  },
  // Graphisme projects
  {
    id: 8,
    title: "Kampoy",
    accroche: "Création d'une identité visuelle complète et déclinée pour une marque de e-commerce engagée",
    contexte: "Projet de création d'une marque e-commerce dédiée aux circuits courts, avec un besoin de cohérence visuelle sur tous les supports.",
    objectifs: "Développer une identité visuelle forte et déclinable, tout en assurant une communication engageante sur le web et les supports print.",
    stack: "Illustrator, Figma, After Effect, Infographie, Print, Réseaux sociaux",
    competences: "Branding complet, direction artistique, contenu réseaux sociaux multi-supports et cohérence visuelle globale.",
    resultats: "Création d'un univers de marque complet (logo, supports print, réseaux sociaux, visuels web) renforçant l'image et la visibilité du projet.",
    perspectives: "Développer une stratégie marketing plus poussée et analyser les performances des contenus digitaux.",
    link: "https://kampoy.com/home",
    categories: ["graphisme"],
    images: [
      kampoyAccueil,
      kampoyMobile,
      kampoyCommandes
    ]
  },
  {
    id: 9,
    title: "Cubyn",
    accroche: "Supports visuels inclusifs conçus pour s'adapter à des publics variés en environnement professionnel",
    contexte: "Création de supports de communication pour une entreprise de logistique, avec des besoins adaptés à différents publics (siège et intérimaires).",
    objectifs: "Concevoir des visuels accessibles et compréhensibles par tous, en tenant compte des barrières linguistiques.",
    stack: "Illustrator, Infographie, Canva, Print",
    competences: "Communication visuelle inclusive, hiérarchisation de l'information et adaptation du design selon les cibles.",
    resultats: "Création de posters déclinés selon les publics et de visuels pour un stand professionnel, améliorant la clarté des messages et l'attractivité.",
    perspectives: "Tester les supports auprès des utilisateurs pour affiner encore la compréhension visuelle.",
    link: "#",
    categories: ["graphisme"],
    images: [
      cubynAffiche,
      cubynInfographie,
      cubynBanniere
    ]
  }
];

export const categories = [
  { key: "all", label: "Tous" },
  { key: "dev", label: "Développement" },
  { key: "elearning", label: "E-learning" },
  { key: "graphisme", label: "Graphisme" }
];
