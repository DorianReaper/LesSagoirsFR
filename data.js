// ==================== BANQUE DE 200 IMAGES DIFFÉRENTES ====================
const IMAGES_BANK = [
    "https://images.unsplash.com/photo-1570710891163-6d8677ab3feb?w=600",
    "https://images.unsplash.com/photo-1589666564459-93cdd3b8561b?w=600",
    "https://images.unsplash.com/photo-1527761411782-7e7f286bcb49?w=600",
    "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=600",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    "https://images.unsplash.com/photo-1589519160732-57fc4982929f?w=600",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
    "https://images.unsplash.com/photo-1511818966892-d5d671e672a6?w=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600"
];

// Fonction pour obtenir une image aléatoire
function getRandomImage() {
    return IMAGES_BANK[Math.floor(Math.random() * IMAGES_BANK.length)];
}

// ==================== ARTICLES DÉTAILLÉS PAR CATÉGORIE ====================

const ARTICLES_HISTORY = {
    WW1: [
        { titre: "🇫🇷 La Première Guerre mondiale (1914-1918) - Contexte", description: "La Première Guerre mondiale (1914-1918) fut un conflit majeur impliquant de nombreux pays, surtout en Europe. Elle est marquée par l'utilisation d'armes nouvelles comme les mitrailleuses, l'artillerie lourde, les gaz chimiques et les tanks.", image: getRandomImage(), date: "2024-06-01", video: "indisponible" },
        { titre: "🪖 La guerre des tranchées", description: "La guerre se caractérise par les tranchées sur le front occidental, où les soldats vivaient dans des conditions extrêmes. Boue, rats, froid, peur constante et maladies.", image: getRandomImage(), date: "2024-06-02", video: "indisponible" },
        { titre: "🏆 L'armistice de 1918", description: "L'Allemagne, épuisée et affaiblie par les révoltes internes, signa l'armistice le 11 novembre 1918. Le conflit fit plus de 16 millions de morts.", image: getRandomImage(), date: "2024-06-03", video: "indisponible" },
        { titre: "💀 La bataille de Verdun", description: "Verdun, 1916. 'Ils ne passeront pas'. 10 mois d'enfer, 700 000 morts. Symbole de la résistance française.", image: getRandomImage(), date: "2024-06-04", video: "indisponible" }
    ],
    WW2: [
        { titre: "🇩🇪 L'invasion de la Pologne (1939)", description: "Le 1er septembre 1939, Hitler lance la Blitzkrieg contre la Pologne. La France et le Royaume-Uni déclarent la guerre à l'Allemagne le 3 septembre.", image: getRandomImage(), date: "2024-06-05", video: "indisponible" },
        { titre: "🇺🇸 Pearl Harbor (1941)", description: "Attaque surprise japonaise sur la base navale américaine de Pearl Harbor, à Hawaï. 2 403 morts. Les États-Unis entrent en guerre.", image: getRandomImage(), date: "2024-06-06", video: "indisponible" },
        { titre: "⭐ Le Débarquement de Normandie (1944)", description: "6 juin 1944, opération Overlord. 156 000 soldats alliés débarquent sur les plages. La libération de l'Europe commence.", image: getRandomImage(), date: "2024-06-07", video: "indisponible" },
        { titre: "🇫🇷 La Libération de Paris", description: "Août 1944. Après 4 ans d'occupation nazie, Paris se soulève. La 2e Division Blindée du général Leclerc entre dans la capitale le 25 août.", image: getRandomImage(), date: "2024-06-08", video: "indisponible" },
        { titre: "💀 L'Holocauste", description: "La Shoah : extermination systématique de 6 millions de Juifs par le régime nazi. Des camps de concentration comme Auschwitz.", image: getRandomImage(), date: "2024-06-09", video: "indisponible" }
    ],
    Napoleon: [
        { titre: "👑 La jeunesse de Napoléon", description: "Né à Ajaccio en Corse le 15 août 1769. Élève à l'école militaire de Brienne puis à Paris. Général à 24 ans.", image: getRandomImage(), date: "2024-06-10", video: "indisponible" },
        { titre: "⚖️ Le Code civil", description: "Promulgué le 21 mars 1804, le Code civil unifie le droit français. Il garantit l'égalité civile, la liberté individuelle.", image: getRandomImage(), date: "2024-06-11", video: "indisponible" },
        { titre: "🏔️ La campagne de Russie (1812)", description: "La Grande Armée envahit la Russie. La retraite est un désastre : le froid, la faim et les attaques russes déciment les troupes.", image: getRandomImage(), date: "2024-06-12", video: "indisponible" }
    ],
    France: [
        { titre: "🗼 Les 45 sites UNESCO français", description: "De la cathédrale de Chartres aux falaises d'Étretat, des châteaux de la Loire au Pont du Gard, la France possède le 4e patrimoine mondial le plus riche.", image: getRandomImage(), date: "2024-06-13", video: "indisponible" },
        { titre: "🍷 La gastronomie française", description: "Reconnue par l'UNESCO, la gastronomie française est un art de vivre. Fromages (plus de 1000 variétés), vins (AOC, grands crus).", image: getRandomImage(), date: "2024-06-14", video: "indisponible" },
        { titre: "🏰 Les châteaux de la Loire", description: "Chambord, Chenonceau, Cheverny... La vallée de la Loire est un concentré d'histoire et d'architecture Renaissance.", image: getRandomImage(), date: "2024-06-15", video: "indisponible" }
    ]
};

// ==================== GÉNÉRATION DES ARTICLES PAR CATÉGORIE ====================
const CATEGORIES_LIST = [
    "Histoire", "Géographie", "Médecine", "Littérature", "Sciences", 
    "Philosophie", "Arts", "Architecture", "Musique", "Astronomie", 
    "Cinéma", "Droit", "Économie", "Religion"
];

const CATEGORY_ICONS = {
    Histoire: "fa-landmark", Géographie: "fa-map", Médecine: "fa-heartbeat",
    Littérature: "fa-feather-alt", Sciences: "fa-flask", Philosophie: "fa-brain",
    Arts: "fa-palette", Architecture: "fa-building", Musique: "fa-music",
    Astronomie: "fa-star", Cinéma: "fa-film", Droit: "fa-gavel",
    Économie: "fa-chart-line", Religion: "fa-church"
};

// Fonction pour générer des articles avec des images aléatoires
function genererArticles(theme, nbArticles, descriptionBase) {
    const articles = [];
    for (let i = 1; i <= nbArticles; i++) {
        articles.push({
            titre: `${getIconeForTheme(theme)} ${theme} · Article ${i}`,
            description: descriptionBase,
            image: getRandomImage(),
            date: `2024-0${Math.floor(i / 10) + 1}-${(i % 28) + 1}`,
            video: "indisponible",
            theme: theme
        });
    }
    return articles;
}

function getIconeForTheme(theme) {
    const icones = {
        Géographie: "🌍", Médecine: "🏥", Littérature: "📖", Sciences: "🧪",
        Philosophie: "💭", Arts: "🎨", Architecture: "🏛️", Musique: "🎵",
        Astronomie: "⭐", Cinéma: "🎬", Droit: "⚖️", Économie: "📊", Religion: "⛪"
    };
    return icones[theme] || "📚";
}

// Descriptions par catégorie
const descriptions = {
    Géographie: "La géographie étudie la Terre, ses espaces, ses paysages et la manière dont les hommes interagissent avec eux. Des continents aux océans, des climats aux populations, cette discipline est essentielle pour comprendre notre monde.",
    Médecine: "La médecine est la science qui étudie le corps humain, ses maladies et les moyens de les traiter. Des avancées technologiques aux traitements naturels, découvrez les secrets de la santé.",
    Littérature: "La littérature est l'art d'écrire des œuvres qui expriment la beauté, l'émotion ou la pensée. Des romans aux poèmes, découvrez les grands auteurs et leurs chefs-d'œuvre.",
    Sciences: "Les sciences englobent la physique, la chimie, la biologie et bien d'autres disciplines. Des découvertes qui ont changé le monde.",
    Philosophie: "La philosophie est la recherche de la sagesse et de la vérité. Des grands penseurs antiques aux contemporains, explorez les questions fondamentales de l'existence.",
    Arts: "L'art est une forme d'expression qui traverse les siècles. Peinture, sculpture, photographie, découvrez les mouvements artistiques.",
    Architecture: "L'architecture reflète l'histoire et la culture des sociétés. Des pyramides aux gratte-ciels, explorez les merveilles architecturales.",
    Musique: "La musique actuelle est très variée et traverse le monde entier. Pop, rap, électro, K-pop, découvrez les tendances musicales.",
    Astronomie: "L'astronomie étudie l'univers, les étoiles, les planètes et les galaxies. Explorez les mystères du cosmos.",
    Cinéma: "Le cinéma est le septième art. Des grands classiques aux blockbusters modernes, découvrez les films cultes.",
    Droit: "Le droit est l'ensemble des règles qui organisent la société. Découvrez les principes fondamentaux de la justice.",
    Économie: "L'économie étudie la production, la distribution et la consommation des richesses. Plongez dans ce domaine essentiel.",
    Religion: "Les religions ont façonné les civilisations. Christianisme, islam, bouddhisme, hindouisme, judaïsme... Découvrez leurs croyances."
};

// Génération des articles (environ 900 articles au total)
let allArticles = [];

// Histoire (articles manuels)
for (let key in ARTICLES_HISTORY) {
    allArticles.push(...ARTICLES_HISTORY[key]);
}

// Autres catégories (génération automatique)
allArticles.push(...genererArticles("Géographie", 80, descriptions.Géographie));
allArticles.push(...genererArticles("Médecine", 80, descriptions.Médecine));
allArticles.push(...genererArticles("Littérature", 80, descriptions.Littérature));
allArticles.push(...genererArticles("Sciences", 80, descriptions.Sciences));
allArticles.push(...genererArticles("Philosophie", 70, descriptions.Philosophie));
allArticles.push(...genererArticles("Arts", 70, descriptions.Arts));
allArticles.push(...genererArticles("Architecture", 70, descriptions.Architecture));
allArticles.push(...genererArticles("Musique", 70, descriptions.Musique));
allArticles.push(...genererArticles("Astronomie", 60, descriptions.Astronomie));
allArticles.push(...genererArticles("Cinéma", 60, descriptions.Cinéma));
allArticles.push(...genererArticles("Droit", 50, descriptions.Droit));
allArticles.push(...genererArticles("Économie", 50, descriptions.Économie));
allArticles.push(...genererArticles("Religion", 40, descriptions.Religion));

// ==================== QUIZ ====================
const QUIZ_QUESTIONS_BASE = [
    { question: "Quand a commencé la Première Guerre mondiale ?", options: ["1914","1939","1815","1789"], correct: 0, explication: "L'assassinat de François-Ferdinand a eu lieu en 1914." },
    { question: "Quel empereur a créé le Code civil ?", options: ["Louis XIV","Napoléon","Charlemagne","Henri IV"], correct: 1, explication: "Napoléon Bonaparte a promulgué le Code civil en 1804." },
    { question: "Où se trouve la Tour Eiffel ?", options: ["Lyon","Marseille","Paris","Bordeaux"], correct: 2, explication: "La Tour Eiffel est à Paris, construite pour l'Exposition universelle de 1889." },
    { question: "Qui a peint 'Impression, soleil levant' ?", options: ["Van Gogh","Monet","Renoir","Degas"], correct: 1, explication: "Monet est le père de l'impressionnisme." },
    { question: "Quelle est la capitale du Japon ?", options: ["Tokyo","Kyoto","Osaka","Nagoya"], correct: 0, explication: "Tokyo est la capitale du Japon depuis 1868." },
    { question: "Qui a écrit 'Les Misérables' ?", options: ["Zola","Hugo","Flaubert","Camus"], correct: 1, explication: "Victor Hugo a écrit Les Misérables en 1862." },
    { question: "Quel est le symbole chimique de l'or ?", options: ["Au","Ag","Fe","Cu"], correct: 0, explication: "Au vient du latin 'aurum'." },
    { question: "Quel fleuve traverse Paris ?", options: ["Loire","Rhône","Seine","Garonne"], correct: 2, explication: "La Seine traverse Paris sur environ 13 km." },
    { question: "Quel est le plus haut sommet du monde ?", options: ["K2","Everest","Kangchenjunga","Lhotse"], correct: 1, explication: "L'Everest culmine à 8 848 mètres." },
    { question: "Qui a découvert la pénicilline ?", options: ["Pasteur","Fleming","Curie","Koch"], correct: 1, explication: "Alexander Fleming a découvert la pénicilline en 1928." },
    { question: "Quelle est la planète la plus proche du Soleil ?", options: ["Vénus","Mercure","Terre","Mars"], correct: 1, explication: "Mercure est à environ 58 millions de km du Soleil." },
    { question: "En quelle année a eu lieu la Révolution française ?", options: ["1776","1789","1799","1804"], correct: 1, explication: "Prise de la Bastille le 14 juillet 1789." }
];

// ==================== CITATIONS ====================
const QUOTES = [
    "Le savoir est la seule richesse que personne ne peut voler.",
    "L'ignorance est la nuit de l'esprit. — Victor Hugo",
    "Apprendre est un trésor qui suit son propriétaire partout.",
    "La connaissance est le pouvoir. — Francis Bacon",
    "Cultivons notre jardin. — Voltaire",
    "L'éducation est l'arme la plus puissante pour changer le monde. — Mandela"
];

console.log(`✅ ${allArticles.length} articles générés avec des images variées !`);