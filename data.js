// ==================== DONNÉES WIKIPEDIA-LIKE COMPLÈTES ====================

const CATEGORIES_DATA = {
    Histoire: {
        titre: "📜 Histoire",
        sousTitre: "L'histoire de l'humanité, des origines à nos jours",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600",
        resume: "L'histoire est l'étude du passé humain à travers les écrits, les vestiges et les traditions. Elle nous permet de comprendre comment les sociétés ont évolué.",
        contenu: `
            <p><strong>L'histoire</strong> est une discipline qui étudie les événements passés et leurs impacts sur les sociétés présentes. Elle s'appuie sur des sources écrites, archéologiques, orales et iconographiques.</p>
            <h3>Les périodes historiques</h3>
            <ul>
                <li><strong>Préhistoire</strong> : apparition de l'homme, maîtrise du feu, outils en pierre. (-3 millions à -3500)</li>
                <li><strong>Antiquité</strong> : Égypte, Grèce, Rome, naissance de l'écriture. (-3500 à 476)</li>
                <li><strong>Moyen Âge</strong> : féodalité, croisades, cathédrales gothiques. (476 à 1492)</li>
                <li><strong>Renaissance</strong> : humanisme, découvertes, réforme protestante. (1492 à 1789)</li>
                <li><strong>Époque moderne</strong> : absolutisme, Lumières, révolutions. (1789 à 1914)</li>
                <li><strong>Époque contemporaine</strong> : guerres mondiales, mondialisation, numérique. (1914 à aujourd'hui)</li>
            </ul>
            <h3>Les grandes figures</h3>
            <ul>
                <li>Jules César, Charlemagne, Napoléon Bonaparte, Gandhi, Nelson Mandela</li>
            </ul>
            <h3>Chiffres clés</h3>
            <table class="wiki-table">
                <tr><th>Période</th><th>Dates</th><th>Événement majeur</th></tr>
                <tr><td>Préhistoire</td><td>-3 millions à -3500</td><td>Apparition de l'homme</td></tr>
                <tr><td>Antiquité</td><td>-3500 à 476</td><td>Chute de l'Empire romain</td></tr>
                <tr><td>Moyen Âge</td><td>476 à 1492</td><td>Découverte de l'Amérique</td></tr>
                <tr><td>Renaissance</td><td>1492 à 1789</td><td>Révolution française</td></tr>
                <tr><td>Époque moderne</td><td>1789 à 1914</td><td>Première Guerre mondiale</td></tr>
                <tr><td>Contemporaine</td><td>1914 à aujourd'hui</td><td>Seconde Guerre mondiale</td></tr>
            </table>
            <h3>Citations</h3>
            <blockquote>"L'histoire est le témoin des temps, la lumière de la vérité." — Cicéron</blockquote>
        `
    },
    Géographie: {
        titre: "🌍 Géographie",
        sousTitre: "La Terre, ses espaces, ses paysages et ses hommes",
        image: "https://images.unsplash.com/photo-1589519160732-57fc4982929f?w=600",
        resume: "La géographie est la science qui étudie la Terre, ses reliefs, ses climats, ses populations et leurs interactions.",
        contenu: `
            <p><strong>La géographie</strong> est une discipline qui étudie la surface de la Terre, ses paysages, ses climats, ses populations et les interactions entre les hommes et leur environnement.</p>
            <h3>Les continents</h3>
            <ul>
                <li><strong>Afrique</strong> : 1,3 milliard d'habitants, riche en biodiversité.</li>
                <li><strong>Asie</strong> : 4,6 milliards, le plus peuplé.</li>
                <li><strong>Europe</strong> : 750 millions, berceau de la civilisation occidentale.</li>
                <li><strong>Amérique du Nord</strong> : 600 millions, grandes plaines et montagnes.</li>
                <li><strong>Amérique du Sud</strong> : 430 millions, Amazonie, Andes.</li>
                <li><strong>Océanie</strong> : 42 millions, îles et climats tropicaux.</li>
                <li><strong>Antarctique</strong> : 0 habitant permanent, réservé à la science.</li>
            </ul>
            <h3>Les océans</h3>
            <ul>
                <li>Pacifique (168 millions km²), Atlantique (85 millions), Indien (70 millions)</li>
            </ul>
            <h3>Les plus hauts sommets</h3>
            <table class="wiki-table">
                <tr><th>Sommet</th><th>Altitude</th><th>Continent</th></tr>
                <tr><td>Everest</td><td>8 848 m</td><td>Asie</td></tr>
                <tr><td>K2</td><td>8 611 m</td><td>Asie</td></tr>
                <tr><td>Mont Blanc</td><td>4 807 m</td><td>Europe</td></tr>
                <tr><td>Aconcagua</td><td>6 961 m</td><td>Amérique du Sud</td></tr>
                <tr><td>Denali</td><td>6 190 m</td><td>Amérique du Nord</td></tr>
            </table>
            <h3>Citations</h3>
            <blockquote>"La Terre est notre maison, protégeons-la."</blockquote>
        `
    },
    Médecine: {
        titre: "🏥 Médecine",
        sousTitre: "La science du corps humain et de ses maladies",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
        resume: "La médecine est une science qui étudie le corps humain, ses maladies et les moyens de les traiter.",
        contenu: `
            <p><strong>La médecine</strong> est la science de la santé. Elle a pour but de prévenir, diagnostiquer et traiter les maladies du corps humain.</p>
            <h3>Les grandes branches</h3>
            <ul>
                <li><strong>Chirurgie</strong> : interventions sur le corps.</li>
                <li><strong>Pédiatrie</strong> : médecine des enfants.</li>
                <li><strong>Gynécologie</strong> : santé des femmes.</li>
                <li><strong>Cardiologie</strong> : cœur et vaisseaux.</li>
                <li><strong>Neurologie</strong> : système nerveux.</li>
                <li><strong>Oncologie</strong> : cancer.</li>
            </ul>
            <h3>Maladies courantes</h3>
            <ul>
                <li>Cancer, diabète, grippe, rhume, hypertension.</li>
            </ul>
            <h3>Les découvertes majeures</h3>
            <table class="wiki-table">
                <tr><th>Découverte</th><th>Date</th><th>Inventeur</th></tr>
                <tr><td>Pénicilline</td><td>1928</td><td>Alexander Fleming</td></tr>
                <tr><td>Vaccin contre la rage</td><td>1885</td><td>Louis Pasteur</td></tr>
                <tr><td>Radioactivité</td><td>1898</td><td>Marie Curie</td></tr>
                <tr><td>IRM</td><td>1977</td><td>Paul Lauterbur</td></tr>
            </table>
            <h3>Conseils santé</h3>
            <ul>
                <li>Manger équilibré, faire du sport, dormir 8h, consulter régulièrement.</li>
            </ul>
        `
    },
    Littérature: {
        titre: "📖 Littérature",
        sousTitre: "L'art d'écrire, de raconter et d'émouvoir",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
        resume: "La littérature est l'ensemble des œuvres écrites qui expriment la pensée, l'émotion et l'imagination humaines.",
        contenu: `
            <p><strong>La littérature</strong> est l'art d'écrire des œuvres qui expriment la beauté, l'émotion ou la pensée. Elle regroupe des œuvres de fiction, de poésie, de théâtre, de philosophie et de critique.</p>
            <h3>Les genres littéraires</h3>
            <ul>
                <li><strong>Roman</strong> : récit fictif long.</li>
                <li><strong>Poésie</strong> : art du vers.</li>
                <li><strong>Théâtre</strong> : texte destiné à être joué.</li>
                <li><strong>Essai</strong> : réflexion argumentée.</li>
                <li><strong>Nouvelle</strong> : récit court.</li>
                <li><strong>Conte</strong> : récit merveilleux.</li>
            </ul>
            <h3>Les grands auteurs français</h3>
            <ul>
                <li>Victor Hugo, Molière, Marcel Proust, Albert Camus, Simone de Beauvoir</li>
            </ul>
            <h3>Les chefs-d'œuvre</h3>
            <table class="wiki-table">
                <tr><th>Œuvre</th><th>Auteur</th><th>Siècle</th></tr>
                <tr><td>Les Misérables</td><td>Victor Hugo</td><td>XIXe</td></tr>
                <tr><td>Le Petit Prince</td><td>Saint-Exupéry</td><td>XXe</td></tr>
                <tr><td>À la recherche du temps perdu</td><td>Marcel Proust</td><td>XXe</td></tr>
                <tr><td>L'Étranger</td><td>Albert Camus</td><td>XXe</td></tr>
            </table>
            <h3>Citations</h3>
            <blockquote>"La littérature est la mémoire du monde."</blockquote>
        `
    },
    Sciences: {
        titre: "🔬 Sciences",
        sousTitre: "L'exploration du monde et de ses lois",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
        resume: "La science est l'ensemble des connaissances et des méthodes qui permettent de comprendre l'univers.",
        contenu: `
            <p><strong>La science</strong> est l'ensemble des connaissances et des méthodes qui permettent de comprendre l'univers. Elle se divise en plusieurs branches.</p>
            <h3>Les branches principales</h3>
            <ul>
                <li><strong>Physique</strong> : étude de la matière et de l'énergie.</li>
                <li><strong>Chimie</strong> : étude des éléments et des réactions.</li>
                <li><strong>Biologie</strong> : étude du vivant.</li>
                <li><strong>Astronomie</strong> : étude de l'univers.</li>
                <li><strong>Mathématiques</strong> : science des nombres et des formes.</li>
            </ul>
            <h3>Les grands scientifiques</h3>
            <ul>
                <li>Einstein, Newton, Marie Curie, Pasteur, Darwin</li>
            </ul>
            <h3>Les découvertes majeures</h3>
            <table class="wiki-table">
                <tr><th>Découverte</th><th>Date</th><th>Scientifique</th></tr>
                <tr><td>Loi de la gravitation</td><td>1687</td><td>Newton</td></tr>
                <tr><td>Théorie de la relativité</td><td>1905</td><td>Einstein</td></tr>
                <tr><td>Radioactivité</td><td>1898</td><td>Marie Curie</td></tr>
                <tr><td>Évolution des espèces</td><td>1859</td><td>Darwin</td></tr>
            </table>
            <h3>Citations</h3>
            <blockquote>"La science sans conscience n'est que ruine de l'âme." — Rabelais</blockquote>
        `
    },
    Philosophie: {
        titre: "💭 Philosophie",
        sousTitre: "La recherche de la sagesse et de la vérité",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
        resume: "La philosophie est la recherche de la sagesse et de la vérité. Elle interroge le sens de la vie, la morale, la connaissance.",
        contenu: `
            <p><strong>La philosophie</strong> est la recherche de la sagesse et de la vérité. Elle interroge le sens de la vie, la morale, la connaissance.</p>
            <h3>Les grands philosophes</h3>
            <ul>
                <li>Socrate, Platon, Aristote, Descartes, Kant, Nietzsche, Sartre</li>
            </ul>
            <h3>Les grandes questions</h3>
            <ul>
                <li>Quel est le sens de la vie ?</li>
                <li>Qu'est-ce que la liberté ?</li>
                <li>D'où vient la connaissance ?</li>
                <li>Qu'est-ce que la justice ?</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"Je pense donc je suis." — René Descartes</blockquote>
            <blockquote>"L'homme est condamné à être libre." — Jean-Paul Sartre</blockquote>
        `
    },
    Arts: {
        titre: "🎨 Arts",
        sousTitre: "L'expression de la beauté et de l'émotion",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600",
        resume: "L'art est une forme d'expression qui traverse les siècles. Peinture, sculpture, photographie, découvrez les mouvements artistiques.",
        contenu: `
            <p><strong>L'art</strong> est une forme d'expression qui traverse les siècles. Peinture, sculpture, photographie, découvrez les mouvements artistiques.</p>
            <h3>Les mouvements artistiques</h3>
            <ul>
                <li><strong>Renaissance</strong> : Da Vinci, Michel-Ange</li>
                <li><strong>Baroque</strong> : Caravage, Bernin</li>
                <li><strong>Impressionnisme</strong> : Monet, Renoir</li>
                <li><strong>Surréalisme</strong> : Dalí, Magritte</li>
                <li><strong>Art contemporain</strong> : Warhol, Hirst</li>
            </ul>
            <h3>Les chefs-d'œuvre</h3>
            <ul>
                <li>La Joconde, La Nuit étoilée, Guernica, Le Penseur</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"L'art est le miroir de l'âme."</blockquote>
        `
    },
    Architecture: {
        titre: "🏛️ Architecture",
        sousTitre: "L'art de bâtir le monde",
        image: "https://images.unsplash.com/photo-1511818966892-d5d671e672a6?w=600",
        resume: "L'architecture reflète l'histoire et la culture des sociétés. Des pyramides aux gratte-ciels, explorez les merveilles architecturales.",
        contenu: `
            <p><strong>L'architecture</strong> reflète l'histoire et la culture des sociétés. Des pyramides aux gratte-ciels, explorez les merveilles architecturales.</p>
            <h3>Les styles architecturaux</h3>
            <ul>
                <li><strong>Antique</strong> : temples grecs, Colisée</li>
                <li><strong>Gothique</strong> : cathédrales Notre-Dame</li>
                <li><strong>Renaissance</strong> : châteaux de la Loire</li>
                <li><strong>Moderne</strong> : Tour Eiffel, Centre Pompidou</li>
                <li><strong>Contemporain</strong> : Burj Khalifa, Tour Triangle</li>
            </ul>
            <h3>Architectes célèbres</h3>
            <ul>
                <li>Le Corbusier, Frank Gehry, Zaha Hadid</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"L'architecture est le jeu savant, correct et magnifique des volumes." — Le Corbusier</blockquote>
        `
    },
    Musique: {
        titre: "🎵 Musique",
        sousTitre: "L'art des sons et des émotions",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
        resume: "La musique est un langage universel qui traverse les cultures. Des symphonies classiques aux hits actuels.",
        contenu: `
            <p><strong>La musique</strong> est un langage universel qui traverse les cultures. Des symphonies classiques aux hits actuels.</p>
            <h3>Les genres musicaux</h3>
            <ul>
                <li><strong>Classique</strong> : Mozart, Beethoven</li>
                <li><strong>Jazz</strong> : Louis Armstrong, Miles Davis</li>
                <li><strong>Rock</strong> : The Beatles, Led Zeppelin</li>
                <li><strong>Pop</strong> : Michael Jackson, Taylor Swift</li>
                <li><strong>Rap/Hip-hop</strong> : Eminem, Niska</li>
                <li><strong>Électro</strong> : Daft Punk, David Guetta</li>
            </ul>
            <h3>Instruments célèbres</h3>
            <ul>
                <li>Piano, guitare, violon, batterie, synthétiseur</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"La musique adoucit les mœurs."</blockquote>
        `
    },
    Astronomie: {
        titre: "⭐ Astronomie",
        sousTitre: "L'exploration de l'univers",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
        resume: "L'astronomie étudie l'univers, les étoiles, les planètes et les galaxies. Explorez les mystères du cosmos.",
        contenu: `
            <p><strong>L'astronomie</strong> étudie l'univers, les étoiles, les planètes et les galaxies. Explorez les mystères du cosmos.</p>
            <h3>Les planètes du système solaire</h3>
            <ul>
                <li>Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune</li>
            </ul>
            <h3>Les phénomènes célestes</h3>
            <ul>
                <li>Trous noirs, supernovas, étoiles filantes, aurores boréales</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"L'univers est un livre écrit en langage mathématique." — Galilée</blockquote>
        `
    },
    Cinéma: {
        titre: "🎬 Cinéma",
        sousTitre: "Le septième art",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
        resume: "Le cinéma est le septième art, art du mouvement et de l'émotion. Des grands classiques aux blockbusters modernes.",
        contenu: `
            <p><strong>Le cinéma</strong> est le septième art, art du mouvement et de l'émotion.</p>
            <h3>Les grands réalisateurs</h3>
            <ul>
                <li>Steven Spielberg, Martin Scorsese, Jean-Luc Godard, François Truffaut</li>
            </ul>
            <h3>Les films cultes</h3>
            <ul>
                <li>La Haine, Amélie Poulain, Les Intouchables, Le Parrain, Star Wars</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"Le cinéma est une question de regard."</blockquote>
        `
    },
    Droit: {
        titre: "⚖️ Droit",
        sousTitre: "Les règles qui organisent la société",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
        resume: "Le droit est l'ensemble des règles qui organisent la société. Découvrez les principes fondamentaux de la justice.",
        contenu: `
            <p><strong>Le droit</strong> est l'ensemble des règles qui organisent la société.</p>
            <h3>Les branches du droit</h3>
            <ul>
                <li><strong>Droit civil</strong> : relations entre personnes</li>
                <li><strong>Droit pénal</strong> : infractions et sanctions</li>
                <li><strong>Droit du travail</strong> : relations professionnelles</li>
                <li><strong>Droit commercial</strong> : affaires et entreprises</li>
            </ul>
            <h3>Les principes fondamentaux</h3>
            <ul>
                <li>Égalité devant la loi, présomption d'innocence, droit à un procès équitable</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"La loi est la volonté générale." — Rousseau</blockquote>
        `
    },
    Économie: {
        titre: "📊 Économie",
        sousTitre: "La production, la distribution et la consommation des richesses",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600",
        resume: "L'économie étudie la production, la distribution et la consommation des richesses. Plongez dans ce domaine essentiel.",
        contenu: `
            <p><strong>L'économie</strong> étudie la production, la distribution et la consommation des richesses.</p>
            <h3>Les concepts clés</h3>
            <ul>
                <li><strong>Offre et demande</strong> : prix et quantité</li>
                <li><strong>PIB</strong> : richesse d'un pays</li>
                <li><strong>Inflation</strong> : hausse des prix</li>
                <li><strong>Chômage</strong> : population active sans emploi</li>
            </ul>
            <h3>Les grands économistes</h3>
            <ul>
                <li>Adam Smith, Karl Marx, John Maynard Keynes</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"L'économie est la science de la rareté."</blockquote>
        `
    },
    Religion: {
        titre: "⛪ Religion",
        sousTitre: "Les croyances qui ont façonné les civilisations",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
        resume: "Les religions ont façonné les civilisations. Christianisme, islam, bouddhisme, hindouisme, judaïsme...",
        contenu: `
            <p><strong>Les religions</strong> ont façonné les civilisations.</p>
            <h3>Les grandes religions</h3>
            <ul>
                <li><strong>Christianisme</strong> : 2,4 milliards de fidèles</li>
                <li><strong>Islam</strong> : 1,9 milliard</li>
                <li><strong>Hindouisme</strong> : 1,2 milliard</li>
                <li><strong>Bouddhisme</strong> : 500 millions</li>
                <li><strong>Judaïsme</strong> : 14 millions</li>
            </ul>
            <h3>Les symboles religieux</h3>
            <ul>
                <li>Croix, croissant, étoile de David, Om, roue du Dharma</li>
            </ul>
            <h3>Citations</h3>
            <blockquote>"La religion est l'opium du peuple." — Karl Marx</blockquote>
        `
    }
};

// ==================== LISTE DES CATÉGORIES ====================
const CATEGORIES_LIST = Object.keys(CATEGORIES_DATA);

// ==================== ICÔNES PAR CATÉGORIE ====================
const CATEGORY_ICONS = {
    Histoire: "fa-landmark", Géographie: "fa-map", Médecine: "fa-heartbeat",
    Littérature: "fa-feather-alt", Sciences: "fa-flask", Philosophie: "fa-brain",
    Arts: "fa-palette", Architecture: "fa-building", Musique: "fa-music",
    Astronomie: "fa-star", Cinéma: "fa-film", Droit: "fa-gavel",
    Économie: "fa-chart-line", Religion: "fa-church"
};

// ==================== QUIZ ====================
const QUIZ_QUESTIONS_BASE = [
    { question: "Quand a commencé la Première Guerre mondiale ?", options: ["1914","1939","1815"], correct: 0, explication: "L'assassinat de François-Ferdinand a eu lieu en 1914." },
    { question: "Quel empereur a créé le Code civil ?", options: ["Louis XIV","Napoléon","Charlemagne"], correct: 1, explication: "Napoléon en 1804." },
    { question: "Où se trouve la Tour Eiffel ?", options: ["Lyon","Marseille","Paris"], correct: 2, explication: "À Paris, construite pour l'Exposition universelle de 1889." },
    { question: "Qui a écrit 'Les Misérables' ?", options: ["Zola","Hugo","Flaubert"], correct: 1, explication: "Victor Hugo en 1862." },
    { question: "Quel est le symbole chimique de l'or ?", options: ["Au","Ag","Fe"], correct: 0, explication: "Au vient du latin 'aurum'." },
    { question: "Quelle est la capitale du Japon ?", options: ["Tokyo","Kyoto","Osaka"], correct: 0, explication: "Tokyo est la capitale du Japon depuis 1868." },
    { question: "Qui a découvert la pénicilline ?", options: ["Pasteur","Fleming","Curie"], correct: 1, explication: "Alexander Fleming a découvert la pénicilline en 1928." }
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

console.log("✅ " + CATEGORIES_LIST.length + " catégories chargées !");