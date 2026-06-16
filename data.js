// ==================== DONNÉES WIKIPEDIA-LIKE AVEC TOUTES LES CATÉGORIES ====================

const CATEGORIES_DATA = {
    // ==================== HISTOIRE (avec sous-catégories) ====================
    Histoire: {
        titre: "📜 Histoire",
        sousTitre: "L'histoire de l'humanité, des origines à nos jours",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600",
        resume: "L'histoire est l'étude du passé humain à travers les écrits, les vestiges et les traditions.",
        contenu: `
            <p><strong>L'histoire</strong> est une discipline qui étudie les événements passés et leurs impacts sur les sociétés présentes.</p>
            
            <h3>Les périodes de l'Histoire</h3>
            <ul>
                <li><strong>Préhistoire</strong> : apparition de l'homme, maîtrise du feu</li>
                <li><strong>Antiquité</strong> : Égypte, Grèce, Rome, naissance de l'écriture</li>
                <li><strong>Moyen Âge</strong> : féodalité, croisades, cathédrales</li>
                <li><strong>Renaissance</strong> : humanisme, découvertes</li>
                <li><strong>Époque moderne</strong> : absolutisme, Lumières</li>
                <li><strong>Époque contemporaine</strong> : guerres mondiales, mondialisation</li>
            </ul>
            
            <h3>Les grandes figures</h3>
            <ul>
                <li>Jules César, Charlemagne, Napoléon Bonaparte, Gandhi, Nelson Mandela</li>
            </ul>
            
            <h3>Les sous-thèmes</h3>
            <div class="subcategory-grid">
                <a href="javascript:void(0)" onclick="openSubCategory('WW1')" class="subcategory-link">
                    <div class="subcategory-card">
                        <div class="subcategory-emoji">🎖️</div>
                        <h4>Première Guerre mondiale</h4>
                        <p>1914-1918</p>
                    </div>
                </a>
                <a href="javascript:void(0)" onclick="openSubCategory('WW2')" class="subcategory-link">
                    <div class="subcategory-card">
                        <div class="subcategory-emoji">🔥</div>
                        <h4>Seconde Guerre mondiale</h4>
                        <p>1939-1945</p>
                    </div>
                </a>
                <a href="javascript:void(0)" onclick="openSubCategory('Napoleon')" class="subcategory-link">
                    <div class="subcategory-card">
                        <div class="subcategory-emoji">👑</div>
                        <h4>Napoléon Bonaparte</h4>
                        <p>1769-1821</p>
                    </div>
                </a>
                <a href="javascript:void(0)" onclick="openSubCategory('France')" class="subcategory-link">
                    <div class="subcategory-card">
                        <div class="subcategory-emoji">🗼</div>
                        <h4>La France</h4>
                        <p>Patrimoine et histoire</p>
                    </div>
                </a>
            </div>
            
            <h3>Citations</h3>
            <blockquote>"L'histoire est le témoin des temps, la lumière de la vérité." — Cicéron</blockquote>
        `
    },
    
    // ==================== SOUS-CATÉGORIES HISTOIRE ====================
    WW1: {
        titre: "🎖️ La Première Guerre mondiale (1914-1918)",
        sousTitre: "La Grande Guerre",
        image: "https://images.unsplash.com/photo-1570710891163-6d8677ab3feb?w=600",
        resume: "La Première Guerre mondiale (1914-1918) fut un conflit majeur impliquant de nombreux pays, surtout en Europe.",
        contenu: `
            <p><strong>La Première Guerre mondiale (1914-1918)</strong> fut un conflit majeur impliquant de nombreux pays, surtout en Europe. Elle est marquée par l'utilisation d'armes nouvelles comme les mitrailleuses, l'artillerie lourde, les gaz chimiques et les tanks.</p>
            
            <h3>Le déclenchement</h3>
            <p>L'assassinat de l'archiduc François-Ferdinand en 1914 à Sarajevo fut l'étincelle. L'Autriche-Hongrie déclara la guerre à la Serbie, entraînant rapidement l'Allemagne, la Russie, la France et le Royaume-Uni dans le conflit.</p>
            
            <h3>Les tranchées : enfer quotidien</h3>
            <p>La guerre se caractérise par les tranchées sur le front occidental, où les soldats vivaient dans des conditions extrêmes. Boue, rats, froid, peur constante et maladies.</p>
            
            <h3>Les grandes batailles</h3>
            <ul>
                <li><strong>Verdun (1916)</strong> : 'Ils ne passeront pas'. 700 000 morts.</li>
                <li><strong>La Somme (1916)</strong> : 1 million de morts et blessés.</li>
                <li><strong>Chemin des Dames (1917)</strong> : offensive française meurtrière.</li>
            </ul>
            
            <h3>Chiffres clés</h3>
            <table class="wiki-table">
                <tr><th>Pays</th><th>Morts</th><th>Blessés</th></tr>
                <tr><td>Allemagne</td><td>2 037 000</td><td>4 216 000</td></tr>
                <tr><td>France</td><td>1 397 000</td><td>4 266 000</td></tr>
                <tr><td>Royaume-Uni</td><td>886 000</td><td>1 663 000</td></tr>
                <tr><td>Russie</td><td>1 811 000</td><td>4 950 000</td></tr>
            </table>
            
            <h3>L'armistice du 11 novembre 1918</h3>
            <p>L'Allemagne, épuisée, signe l'armistice. Le conflit fait plus de 16 millions de morts. Le traité de Versailles impose de lourdes sanctions à l'Allemagne.</p>
            
            <h3>Citations</h3>
            <blockquote>"Ils ne passeront pas." — Général Pétain, Verdun 1916</blockquote>
        `
    },
    WW2: {
        titre: "🔥 La Seconde Guerre mondiale (1939-1945)",
        sousTitre: "Le conflit planétaire",
        image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=600",
        resume: "La Seconde Guerre mondiale (1939-1945) fut un conflit planétaire opposant les Alliés aux puissances de l'Axe.",
        contenu: `
            <p><strong>La Seconde Guerre mondiale (1939-1945)</strong> fut un conflit planétaire opposant les Alliés (Royaume-Uni, France, URSS, États-Unis) aux puissances de l'Axe (Allemagne, Italie, Japon).</p>
            
            <h3>Le déclenchement</h3>
            <p>Le 1er septembre 1939, Hitler lance la Blitzkrieg contre la Pologne. La France et le Royaume-Uni déclarent la guerre à l'Allemagne.</p>
            
            <h3>Les grandes batailles</h3>
            <ul>
                <li><strong>Stalingrad (1942-1943)</strong> : tournant de la guerre sur le front de l'Est</li>
                <li><strong>El Alamein (1942)</strong> : victoire britannique en Afrique du Nord</li>
                <li><strong>Débarquement de Normandie (1944)</strong> : libération de l'Europe</li>
                <li><strong>Bataille des Ardennes (1944-1945)</strong> : dernière offensive allemande</li>
            </ul>
            
            <h3>L'Holocauste</h3>
            <p>Extermination systématique de 6 millions de Juifs par le régime nazi. Des camps de concentration comme Auschwitz, Treblinka et Dachau.</p>
            
            <h3>Chiffres clés</h3>
            <table class="wiki-table">
                <tr><th>Pays</th><th>Morts militaires</th><th>Morts civils</th></tr>
                <tr><td>URSS</td><td>10 700 000</td><td>15 700 000</td></tr>
                <tr><td>Allemagne</td><td>5 533 000</td><td>1 500 000</td></tr>
                <tr><td>France</td><td>217 600</td><td>350 000</td></tr>
                <tr><td>États-Unis</td><td>416 800</td><td>2 000</td></tr>
            </table>
            
            <h3>La capitulation et l'ONU</h3>
            <p>L'Allemagne capitule en mai 1945. Le Japon se rend en août après les bombardements d'Hiroshima et Nagasaki. L'ONU est créée pour maintenir la paix.</p>
            
            <h3>Citations</h3>
            <blockquote>"Plus jamais ça." — Survivants de l'Holocauste</blockquote>
        `
    },
    Napoleon: {
        titre: "👑 Napoléon Bonaparte (1769-1821)",
        sousTitre: "L'Empereur des Français",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600",
        resume: "Napoléon Bonaparte (1769-1821) fut un militaire et homme politique français qui devint empereur des Français.",
        contenu: `
            <p><strong>Napoléon Bonaparte (1769-1821)</strong> fut un militaire et homme politique français qui devint empereur des Français. Il transforma l'Europe au début du XIXᵉ siècle.</p>
            
            <h3>La jeunesse</h3>
            <p>Né à Ajaccio en Corse le 15 août 1769. Élève à l'école militaire de Brienne puis à Paris. Général à 24 ans après la prise de Toulon.</p>
            
            <h3>L'ascension</h3>
            <ul>
                <li><strong>1796-1797</strong> : Campagne d'Italie, victoires éclatantes</li>
                <li><strong>1799</strong> : Coup d'État du 18 Brumaire, devient Premier Consul</li>
                <li><strong>1804</strong> : Sacre à Notre-Dame de Paris, devient Empereur</li>
            </ul>
            
            <h3>Le Code civil</h3>
            <p>Promulgué en 1804, le Code civil unifie le droit français. Il garantit l'égalité civile, la liberté individuelle, la laïcité de l'État.</p>
            
            <h3>Les grandes batailles</h3>
            <table class="wiki-table">
                <tr><th>Bataille</th><th>Date</th><th>Résultat</th></tr>
                <tr><td>Austerlitz</td><td>1805</td><td>Victoire décisive</td></tr>
                <tr><td>Iéna</td><td>1806</td><td>Victoire</td></tr>
                <tr><td>Wagram</td><td>1809</td><td>Victoire</td></tr>
                <tr><td>La Bérézina</td><td>1812</td><td>Défaite (retraite de Russie)</td></tr>
                <tr><td>Waterloo</td><td>1815</td><td>Défaite finale</td></tr>
            </table>
            
            <h3>La campagne de Russie (1812)</h3>
            <p>La Grande Armée (600 000 hommes) envahit la Russie. La retraite est un désastre : le froid, la faim et les attaques russes déciment les troupes. Seuls 40 000 soldats reviendront.</p>
            
            <h3>L'exil et la mort</h3>
            <p>Exilé à Sainte-Hélène, une île perdue dans l'Atlantique Sud. Il y meurt le 5 mai 1821.</p>
            
            <h3>Citations</h3>
            <blockquote>"Je suis la révolution." — Napoléon Bonaparte</blockquote>
        `
    },
    France: {
        titre: "🗼 La France - Patrimoine exceptionnel",
        sousTitre: "Histoire, culture et gastronomie",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
        resume: "La France est un pays magnifique, riche d'histoire, de paysages variés et de cultures uniques.",
        contenu: `
            <p><strong>La France</strong> est un pays magnifique, riche d'histoire, de paysages variés et de cultures uniques. Du littoral breton aux plages de la Côte d'Azur, des montagnes des Alpes et des Pyrénées aux vallées de la Loire, chaque région possède son charme.</p>
            
            <h3>Les régions françaises</h3>
            <ul>
                <li><strong>Bretagne</strong> : fest-noz, crêpes, littoral sauvage</li>
                <li><strong>Alsace</strong> : marchés de Noël, choucroute, vins</li>
                <li><strong>Provence</strong> : champs de lavande, calanques</li>
                <li><strong>Corse</strong> : chants polyphoniques, spécialités locales</li>
                <li><strong>Normandie</strong> : plages du Débarquement, Mont-Saint-Michel</li>
                <li><strong>Pays Basque</strong> : culture basque, gastronomie</li>
            </ul>
            
            <h3>La gastronomie française</h3>
            <p>Reconnue par l'UNESCO, la gastronomie française est un art de vivre. Fromages (plus de 1000 variétés), vins (AOC, grands crus), pains, pâtisseries.</p>
            
            <h3>Les monuments emblématiques</h3>
            <table class="wiki-table">
                <tr><th>Monument</th><th>Ville</th><th>Époque</th></tr>
                <tr><td>Tour Eiffel</td><td>Paris</td><td>1889</td></tr>
                <tr><td>Louvre</td><td>Paris</td><td>XIIIe-XXe</td></tr>
                <tr><td>Chambord</td><td>Loire</td><td>XVIe</td></tr>
                <tr><td>Mont-Saint-Michel</td><td>Normandie</td><td>VIIIe</td></tr>
                <tr><td>Notre-Dame</td><td>Paris</td><td>XIIe-XIVe</td></tr>
            </table>
            
            <h3>Les 45 sites UNESCO</h3>
            <p>La France possède le 4e patrimoine mondial le plus riche. Des cathédrales gothiques aux falaises d'Étretat, des châteaux de la Loire au Pont du Gard.</p>
            
            <h3>Citations</h3>
            <blockquote>"La France est une vieille dame qui a vu beaucoup de choses." — Charles de Gaulle</blockquote>
        `
    },
    
    // ==================== GÉOGRAPHIE ====================
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
    
    // ==================== MÉDECINE ====================
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
    
    // ==================== LITTÉRATURE ====================
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
    
    // ==================== SCIENCES (ENRICHIE) ====================
    Sciences: {
        titre: "🔬 Sciences",
        sousTitre: "L'exploration du monde et de ses lois",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
        resume: "La science est l'ensemble des connaissances et des méthodes qui permettent de comprendre l'univers.",
        contenu: `
            <p><strong>La science</strong> est l'ensemble des connaissances et des méthodes qui permettent de comprendre l'univers. Elle se divise en plusieurs branches : physique, chimie, biologie, astronomie, mathématiques, et bien d'autres.</p>
            
            <h3>Les branches principales</h3>
            <ul>
                <li><strong>Physique</strong> : étude de la matière et de l'énergie. Elle explore les lois fondamentales de l'univers, de la mécanique quantique à la relativité générale.</li>
                <li><strong>Chimie</strong> : étude des éléments, des molécules et des réactions chimiques. Elle est au cœur de la médecine, des matériaux et de l'industrie.</li>
                <li><strong>Biologie</strong> : étude du vivant, des cellules aux écosystèmes. Elle comprend la génétique, l'évolution, l'écologie et la médecine.</li>
                <li><strong>Astronomie</strong> : étude de l'univers, des étoiles, des planètes, des galaxies et des phénomènes cosmiques.</li>
                <li><strong>Mathématiques</strong> : science des nombres, des formes, des structures et des transformations. Elle est le langage commun de toutes les sciences.</li>
                <li><strong>Géologie</strong> : étude de la Terre, de sa structure, de son histoire et des phénomènes qui la façonnent.</li>
            </ul>
            
            <h3>Les grands scientifiques</h3>
            <ul>
                <li><strong>Albert Einstein</strong> (1879-1955) : théorie de la relativité, E=mc², prix Nobel de physique 1921.</li>
                <li><strong>Isaac Newton</strong> (1643-1727) : lois de la gravitation, calcul infinitésimal, optique.</li>
                <li><strong>Marie Curie</strong> (1867-1934) : radioactivité, prix Nobel de physique et de chimie.</li>
                <li><strong>Louis Pasteur</strong> (1822-1895) : vaccination, pasteurisation, microbiologie.</li>
                <li><strong>Charles Darwin</strong> (1809-1882) : théorie de l'évolution des espèces.</li>
                <li><strong>Galilée</strong> (1564-1642) : père de l'astronomie moderne, télescope, lois du mouvement.</li>
            </ul>
            
            <h3>Les découvertes majeures</h3>
            <table class="wiki-table">
                <tr><th>Découverte</th><th>Date</th><th>Scientifique</th></tr>
                <tr><td>Loi de la gravitation</td><td>1687</td><td>Newton</td></tr>
                <tr><td>Théorie de la relativité</td><td>1905</td><td>Einstein</td></tr>
                <tr><td>Radioactivité</td><td>1898</td><td>Marie Curie</td></tr>
                <tr><td>Évolution des espèces</td><td>1859</td><td>Darwin</td></tr>
                <tr><td>Structure de l'ADN</td><td>1953</td><td>Watson & Crick</td></tr>
            </table>
            
            <h3>Les enjeux contemporains</h3>
            <ul>
                <li><strong>Changement climatique</strong> : les sciences de l'environnement et les énergies renouvelables.</li>
                <li><strong>Intelligence artificielle</strong> : l'informatique et les algorithmes au service de la recherche.</li>
                <li><strong>Médecine personnalisée</strong> : la génomique et les thérapies ciblées.</li>
                <li><strong>Exploration spatiale</strong> : Mars, les exoplanètes, les trous noirs.</li>
            </ul>
            
            <h3>Citations</h3>
            <blockquote>"La science sans conscience n'est que ruine de l'âme." — Rabelais</blockquote>
            <blockquote>"La science est une magnifique conquête de l'esprit humain." — Marie Curie</blockquote>
        `
    },
    
    // ==================== PHILOSOPHIE ====================
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
        `
    },
    
    // ==================== ARTS ====================
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
    
    // ==================== ARCHITECTURE ====================
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
    
    // ==================== MUSIQUE ====================
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
    
    // ==================== ASTRONOMIE ====================
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
    
    // ==================== CINÉMA ====================
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
    
    // ==================== DROIT ====================
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
    
    // ==================== ÉCONOMIE ====================
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
    
    // ==================== RELIGION ====================
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

// ==================== LISTE DES CATÉGORIES (sans les sous-catégories) ====================
const CATEGORIES_LIST = Object.keys(CATEGORIES_DATA).filter(key => 
    !['WW1', 'WW2', 'Napoleon', 'France'].includes(key)
);

// ==================== ICÔNES PAR CATÉGORIE ====================
const CATEGORY_ICONS = {
    Histoire: "fa-landmark", Géographie: "fa-map", Médecine: "fa-heartbeat",
    Littérature: "fa-feather-alt", Sciences: "fa-flask", Philosophie: "fa-brain",
    Arts: "fa-palette", Architecture: "fa-building", Musique: "fa-music",
    Astronomie: "fa-star", Cinéma: "fa-film", Droit: "fa-gavel",
    Économie: "fa-chart-line", Religion: "fa-church"
};

// ==================== FONCTION POUR OUVRIR UNE SOUS-CATÉGORIE ====================
function openSubCategory(subId) {
    const data = CATEGORIES_DATA[subId];
    if (!data) {
        if (typeof showToast !== 'undefined') showToast("📚 Contenu en préparation...");
        return;
    }
    
    const categoryPageView = document.getElementById('categoryPageView');
    if (categoryPageView) {
        categoryPageView.style.display = 'block';
    }
    
    document.getElementById('categoryPageTitle').innerHTML = data.titre;
    document.getElementById('categoryPageSubtitle').textContent = data.sousTitre;
    document.getElementById('categoryPageImage').src = data.image;
    document.getElementById('categoryPageImage').alt = data.titre;
    document.getElementById('categoryPageResume').textContent = data.resume;
    document.getElementById('categoryPageContent').innerHTML = data.contenu;
    
    // Bouton retour vers Histoire
    const backBtn = document.getElementById('backFromCategoryBtn');
    if (backBtn) {
        backBtn.onclick = function() {
            if (typeof openCategoryPage !== 'undefined') {
                openCategoryPage('Histoire');
            }
        };
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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