// ==================== APPLICATION PRINCIPALE ====================

// ==================== OPTIMISATION DES PERFORMANCES ====================

// Debounce pour la recherche
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Memoization pour les calculs coûteux
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("🟢 DOM chargé, initialisation...");
    
    if (typeof renderCategories !== 'undefined') {
        renderCategories();
        console.log("✅ Catégories rendues");
    }
    
    if (typeof updateStats !== 'undefined') {
        updateStats();
        console.log("✅ Stats mises à jour");
    }

    // Mettre à jour l'interface du profil
    if (typeof userProfile !== 'undefined' && userProfile) {
        userProfile.updateUI();
        console.log("✅ Profil utilisateur initialisé");
    }

    // Lazy loading des images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ====== RECHERCHE ======
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.querySelector('.search-wrapper');
    
    let suggestionsDiv = document.getElementById('searchSuggestions');
    if (!suggestionsDiv && searchContainer) {
        suggestionsDiv = document.createElement('div');
        suggestionsDiv.id = 'searchSuggestions';
        suggestionsDiv.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 20px;
            margin-top: 8px;
            max-height: 400px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            padding: 8px 0;
        `;
        searchContainer.appendChild(suggestionsDiv);
    }

    function performSearch(query) {
        if (!query || query.length < 1 || typeof CATEGORIES_DATA === 'undefined') {
            return [];
        }

        const lowerQuery = query.toLowerCase();
        const results = [];

        for (let key in CATEGORIES_DATA) {
            const data = CATEGORIES_DATA[key];
            if (!data) continue;

            let score = 0;
            let matches = [];

            if (data.titre && data.titre.toLowerCase().includes(lowerQuery)) {
                score += 10;
                matches.push({ field: 'titre', text: data.titre });
            }
            if (data.sousTitre && data.sousTitre.toLowerCase().includes(lowerQuery)) {
                score += 8;
                matches.push({ field: 'sousTitre', text: data.sousTitre });
            }
            if (data.resume && data.resume.toLowerCase().includes(lowerQuery)) {
                score += 6;
                matches.push({ field: 'resume', text: data.resume });
            }
            if (data.contenu && data.contenu.toLowerCase().includes(lowerQuery)) {
                score += 5;
                const index = data.contenu.toLowerCase().indexOf(lowerQuery);
                const start = Math.max(0, index - 60);
                const end = Math.min(data.contenu.length, index + 120);
                matches.push({ field: 'contenu', text: data.contenu.substring(start, end) + '...' });
            }

            if (key === 'Histoire') {
                const subKeys = ['WW1', 'WW2', 'Napoleon', 'France'];
                subKeys.forEach(subKey => {
                    const subData = CATEGORIES_DATA[subKey];
                    if (subData) {
                        if (subData.titre && subData.titre.toLowerCase().includes(lowerQuery)) {
                            score += 7;
                            matches.push({ field: 'sous-categorie', text: subData.titre });
                        }
                        if (subData.resume && subData.resume.toLowerCase().includes(lowerQuery)) {
                            score += 5;
                            matches.push({ field: 'sous-categorie', text: subData.resume });
                        }
                        if (subData.contenu && subData.contenu.toLowerCase().includes(lowerQuery)) {
                            score += 3;
                            const index = subData.contenu.toLowerCase().indexOf(lowerQuery);
                            const start = Math.max(0, index - 40);
                            const end = Math.min(subData.contenu.length, index + 80);
                            matches.push({ field: 'sous-categorie', text: subData.contenu.substring(start, end) + '...' });
                        }
                    }
                });
            }

            const keywords = {
                'Histoire': ['histoire', 'passé', 'civilisation', 'époque', 'guerre', 'roi', 'révolution'],
                'WW1': ['guerre', 'tranchée', '1914', '1918', 'grande guerre', 'verdun', 'somme'],
                'WW2': ['guerre', '1939', '1945', 'hitler', 'stalingrad', 'normandie', 'débarquement'],
                'Napoleon': ['napoléon', 'bonaparte', 'waterloo', 'austerlitz', 'empereur', 'code civil'],
                'France': ['france', 'paris', 'tour eiffel', 'république', 'gaulle', 'roi'],
                'Sciences': ['science', 'physique', 'chimie', 'biologie', 'recherche', 'laboratoire'],
                'Philosophie': ['philosophie', 'sagesse', 'pensée', 'socrate', 'platon', 'descartes'],
                'Littérature': ['littérature', 'roman', 'poésie', 'livre', 'auteur', 'écrivain'],
                'Arts': ['art', 'peinture', 'sculpture', 'musée', 'monet', 'picasso'],
                'Astronomie': ['astronomie', 'étoile', 'planète', 'galaxie', 'cosmos', 'univers'],
                'Musique': ['musique', 'chanson', 'orchestre', 'instrument', 'symphonie'],
                'Géographie': ['géographie', 'carte', 'continent', 'pays', 'ville', 'océan'],
                'Médecine': ['médecine', 'santé', 'maladie', 'hôpital', 'docteur'],
                'Architecture': ['architecture', 'bâtiment', 'monument', 'construction'],
                'Cinéma': ['cinéma', 'film', 'réalisateur', 'acteur', 'blockbuster'],
                'Droit': ['droit', 'loi', 'justice', 'procès', 'avocat'],
                'Économie': ['économie', 'bourse', 'entreprise', 'marché', 'finance'],
                'Religion': ['religion', 'dieu', 'église', 'mosquée', 'bible', 'coran']
            };

            if (keywords[key]) {
                keywords[key].forEach(kw => {
                    if (kw.toLowerCase().includes(lowerQuery) || lowerQuery.includes(kw.toLowerCase())) {
                        score += 4;
                        matches.push({ field: 'mot-clé', text: kw });
                    }
                });
            }

            if (score > 0) {
                results.push({
                    key: key,
                    data: data,
                    score: score,
                    matches: matches
                });
            }
        }

        results.sort((a, b) => b.score - a.score);
        return results;
    }

    const memoizedPerformSearch = memoize(performSearch);

    function showSuggestions(query) {
        if (!suggestionsDiv) return;
        const results = memoizedPerformSearch(query);

        if (results.length === 0) {
            suggestionsDiv.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    Aucun résultat pour "<strong>${escapeHtml(query)}</strong>"
                </div>
            `;
            suggestionsDiv.style.display = 'block';
            return;
        }

        let html = '';
        const maxResults = 8;

        results.slice(0, maxResults).forEach((result) => {
            const data = result.data;
            const icon = (typeof CATEGORY_ICONS !== 'undefined' && CATEGORY_ICONS[result.key]) ? CATEGORY_ICONS[result.key] : 'fa-folder';
            
            let displayTitle = data.titre || result.key;
            const lowerQuery = query.toLowerCase();
            if (displayTitle.toLowerCase().includes(lowerQuery)) {
                const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
                displayTitle = displayTitle.replace(regex, '<mark>$1</mark>');
            }

            let preview = '';
            if (data.resume) {
                const idx = data.resume.toLowerCase().indexOf(lowerQuery);
                if (idx !== -1) {
                    const start = Math.max(0, idx - 40);
                    const end = Math.min(data.resume.length, idx + 60);
                    preview = '...' + data.resume.substring(start, end) + '...';
                } else {
                    preview = data.resume.substring(0, 80) + '...';
                }
                const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
                preview = preview.replace(regex, '<mark>$1</mark>');
            }

            html += `
                <div class="suggestion-item" data-key="${result.key}">
                    <div class="suggestion-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="suggestion-content">
                        <div class="suggestion-title">${displayTitle}</div>
                        ${preview ? `<div class="suggestion-preview">${preview}</div>` : ''}
                        <div class="suggestion-meta">
                            <span class="badge">${result.key}</span>
                            ${result.matches.length > 1 ? `<span>${result.matches.length} correspondances</span>` : ''}
                        </div>
                    </div>
                    <div class="suggestion-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });

        if (results.length > maxResults) {
            html += `
                <div style="padding: 12px 20px; text-align: center; color: var(--text-dim); font-size: 0.8rem; border-top: 1px solid var(--border);">
                    + ${results.length - maxResults} autres résultats...
                </div>
            `;
        }

        suggestionsDiv.innerHTML = html;
        suggestionsDiv.style.display = 'block';

        document.querySelectorAll('.suggestion-item').forEach(el => {
            el.addEventListener('click', function() {
                const key = this.dataset.key;
                if (typeof openCategoryPage !== 'undefined') {
                    openCategoryPage(key);
                    suggestionsDiv.style.display = 'none';
                    if (searchInput) {
                        const data = typeof CATEGORIES_DATA !== 'undefined' ? CATEGORIES_DATA[key] : null;
                        searchInput.value = data?.titre || key;
                    }
                }
            });
        });
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    // Événements de recherche avec debounce
    if (searchInput) {
        let searchTimeout;
        const debouncedShowSuggestions = debounce(showSuggestions, 200);
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            if (query.length < 2) {
                if (suggestionsDiv) suggestionsDiv.style.display = 'none';
                return;
            }
            searchTimeout = setTimeout(() => debouncedShowSuggestions(query), 200);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (suggestionsDiv) suggestionsDiv.style.display = 'none';
                this.blur();
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query) {
                    const results = performSearch(query);
                    if (results.length > 0 && typeof openCategoryPage !== 'undefined') {
                        openCategoryPage(results[0].key);
                        if (suggestionsDiv) suggestionsDiv.style.display = 'none';
                    } else {
                        showToast("😕 Aucune catégorie trouvée");
                    }
                }
            }
        });

        document.addEventListener('click', function(e) {
            if (searchContainer && !searchContainer.contains(e.target)) {
                if (suggestionsDiv) suggestionsDiv.style.display = 'none';
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput ? searchInput.value.trim() : '';
            if (!query) {
                showToast("🔎 Entrez un mot-clé");
                return;
            }
            const results = performSearch(query);
            if (results.length > 0 && typeof openCategoryPage !== 'undefined') {
                openCategoryPage(results[0].key);
                if (suggestionsDiv) suggestionsDiv.style.display = 'none';
            } else {
                showToast("😕 Aucune catégorie trouvée");
            }
        });
    }

    // ====== NAVIGATION ======
    // Accueil - affiche les catégories
    document.getElementById('navAccueil').addEventListener('click', showHome);
    document.getElementById('navCategoriesBtn').addEventListener('click', showHome);
    document.getElementById('homeBtn').addEventListener('click', showHome);
    
    // Quiz
    document.getElementById('navQuizBtn').addEventListener('click', function() {
        if (typeof openQuizNewTab !== 'undefined') openQuizNewTab();
        else window.location.href = 'quiz.html';
    });
    
    // Frise
    document.getElementById('navTimelineBtn').addEventListener('click', function() {
        if (typeof openTimelineNewTab !== 'undefined') openTimelineNewTab();
        else window.location.href = 'timeline.html';
    });
    
    // Aléatoire
    document.getElementById('navRandomQuizBtn').addEventListener('click', function() {
        if (typeof openRandomQuiz !== 'undefined') openRandomQuiz();
        else window.location.href = 'random.html';
    });
    
    // Profil
    document.getElementById('navProfileBtn').addEventListener('click', function() {
        window.location.href = 'profile.html';
    });
    
    // Boutons retour
    document.getElementById('backFromSubBtn').addEventListener('click', goBackToCategories);
    document.getElementById('backFromArticlesBtn').addEventListener('click', goBackToCategories);
    document.getElementById('backFromGenericBtn').addEventListener('click', goBackToCategories);
    document.getElementById('backFromCategoryBtn').addEventListener('click', goBackToCategories);

    // ====== MODE SOMBRE ======
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('savoirs_theme', isDark ? 'dark' : 'light');
            this.innerHTML = isDark ? '☀️ Jour' : '🌙 Nuit';
            
            if (typeof userProfile !== 'undefined' && userProfile) {
                userProfile.data.preferences.theme = isDark ? 'dark' : 'light';
                userProfile.save();
            }
            
            showToast(isDark ? "🌙 Mode nuit activé" : "☀️ Mode jour activé");
        });
    }

    // ====== RACCOURCI Ctrl+K ======
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                showToast("🔍 Recherche activée (Ctrl+K)");
            }
        }
    });

    // ====== CITATION ALÉATOIRE ======
    const randomQuote = document.getElementById('randomQuote');
    if (randomQuote && typeof QUOTES !== 'undefined') {
        randomQuote.innerText = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    }

    // ====== APPLIQUER LE THÈME ======
    if (localStorage.getItem('savoirs_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '☀️ Jour';
    }

    // ====== MENU BURGER ======
    const burger = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    if (burger && mobileNav) {
        burger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // ====== BOUTONS MOBILE ======
    const mobileItems = ['mobileAccueil', 'mobileCategories', 'mobileQuiz', 'mobileTimeline', 'mobileRandomQuiz', 'mobileTheme', 'mobileProfile'];
    mobileItems.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', function() {
                if (mobileNav) mobileNav.classList.remove('active');
                if (id === 'mobileAccueil' || id === 'mobileCategories') {
                    showHome();
                } else if (id === 'mobileQuiz') {
                    window.location.href = 'quiz.html';
                } else if (id === 'mobileTimeline') {
                    window.location.href = 'timeline.html';
                } else if (id === 'mobileRandomQuiz') {
                    window.location.href = 'random.html';
                } else if (id === 'mobileProfile') {
                    window.location.href = 'profile.html';
                }
            });
        }
    });

    // ====== FONCTIONS GLOBALES ======
    window.showToast = function(message, duration = 2000) {
        let toast = document.getElementById('toastMessage');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toastMessage';
            toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#F59E0B;color:#0F172A;padding:12px 24px;border-radius:60px;z-index:1100;opacity:0;transition:opacity0.3s;pointer-events:none;font-weight:600;font-size:0.95rem;min-height:44px;box-shadow:0 8px 30px rgba(0,0,0,0.2);';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), duration);
    };

    window.showHome = function() {
        if (typeof goBackToCategories !== 'undefined') {
            goBackToCategories();
        } else {
            window.location.href = 'index.html';
        }
    };

    window.goBackToCategories = function() {
        document.getElementById('categoriesView').style.display = 'block';
        document.getElementById('categoryPageView').style.display = 'none';
        document.getElementById('genericCategoryView').style.display = 'none';
        document.getElementById('subHistoryView').style.display = 'none';
        document.getElementById('articlesView').style.display = 'none';
    };

    showToast("✅ SavoirsFR prêt !");
    console.log("✅ Application initialisée avec succès");
});