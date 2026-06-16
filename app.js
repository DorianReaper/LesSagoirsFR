// ==================== APPLICATION PRINCIPALE ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🟢 DOM chargé, initialisation...");
    
    if (typeof renderCategories !== 'undefined') {
        renderCategories();
        console.log("✅ Catégories rendues");
    } else {
        console.error("❌ renderCategories non défini !");
    }
    
    if (typeof updateStats !== 'undefined') {
        updateStats();
        console.log("✅ Stats mises à jour");
    } else {
        console.error("❌ updateStats non défini !");
    }
    
    // Navigation
    const navAccueil = document.getElementById('navAccueil');
    if (navAccueil) {
        navAccueil.addEventListener('click', function() {
            if (typeof showHome !== 'undefined') showHome();
            else window.location.href = 'index.html';
        });
    }
    
    const navCategories = document.getElementById('navCategoriesBtn');
    if (navCategories) {
        navCategories.addEventListener('click', function() {
            if (typeof showHome !== 'undefined') showHome();
            else window.location.href = 'index.html';
        });
    }
    
    const navQuiz = document.getElementById('navQuizBtn');
    if (navQuiz) {
        navQuiz.addEventListener('click', function() {
            if (typeof openQuizNewTab !== 'undefined') openQuizNewTab();
            else alert("Fonction Quiz non disponible");
        });
    }
    
    const navTimeline = document.getElementById('navTimelineBtn');
    if (navTimeline) {
        navTimeline.addEventListener('click', function() {
            if (typeof openTimelineNewTab !== 'undefined') openTimelineNewTab();
            else alert("Fonction Frise non disponible");
        });
    }
    
    const navRandom = document.getElementById('navRandomQuizBtn');
    if (navRandom) {
        navRandom.addEventListener('click', function() {
            if (typeof openRandomQuiz !== 'undefined') openRandomQuiz();
            else alert("Fonction Quiz aléatoire non disponible");
        });
    }
    
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            if (typeof showHome !== 'undefined') showHome();
            else window.location.href = 'index.html';
        });
    }
    
    // Boutons retour
    const backSub = document.getElementById('backFromSubBtn');
    if (backSub) {
        backSub.addEventListener('click', function() {
            if (typeof goBackToCategories !== 'undefined') goBackToCategories();
            else window.location.href = 'index.html';
        });
    }
    
    const backArticles = document.getElementById('backFromArticlesBtn');
    if (backArticles) {
        backArticles.addEventListener('click', function() {
            if (typeof goBackToCategories !== 'undefined') goBackToCategories();
            else window.location.href = 'index.html';
        });
    }
    
    const backGeneric = document.getElementById('backFromGenericBtn');
    if (backGeneric) {
        backGeneric.addEventListener('click', function() {
            if (typeof goBackToCategories !== 'undefined') goBackToCategories();
            else window.location.href = 'index.html';
        });
    }
    
    const backCategory = document.getElementById('backFromCategoryBtn');
    if (backCategory) {
        backCategory.addEventListener('click', function() {
            if (typeof goBackToCategories !== 'undefined') goBackToCategories();
            else window.location.href = 'index.html';
        });
    }
    
    // Recherche
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (!query) {
                showToast("🔎 Entrez un mot-clé");
                return;
            }
            
            // Recherche dans les catégories
            const results = CATEGORIES_LIST.filter(cat => 
                cat.toLowerCase().includes(query.toLowerCase())
            );
            
            if (results.length > 0) {
                showToast("🔎 " + results.length + " résultat(s) trouvé(s) !");
                // Ouvrir la première catégorie trouvée
                if (typeof openCategoryPage !== 'undefined') {
                    openCategoryPage(results[0]);
                }
            } else {
                showToast("😕 Aucune catégorie trouvée pour \"" + query + "\"");
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchBtn.click();
        });
    }
    
    // Mode sombre
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('savoirs_theme', isDark ? 'dark' : 'light');
            this.innerHTML = isDark ? '☀️ Jour' : '🌙 Nuit';
            showToast(isDark ? "🌙 Mode nuit activé" : "☀️ Mode jour activé");
        });
    }
    
    // Raccourci clavier Ctrl+K
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                showToast("🔍 Recherche activée (Ctrl+K)");
            }
        }
    });
    
    // Citation aléatoire
    const randomQuote = document.getElementById('randomQuote');
    if (randomQuote && typeof QUOTES !== 'undefined') {
        randomQuote.innerText = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    }
    
    // Appliquer le thème sauvegardé
    if (localStorage.getItem('savoirs_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '☀️ Jour';
    }
    
    // Menu burger
    const burger = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    if (burger && mobileNav) {
        burger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
    
    // Boutons mobile
    const mobileAccueil = document.getElementById('mobileAccueil');
    if (mobileAccueil) {
        mobileAccueil.addEventListener('click', function() {
            if (typeof showHome !== 'undefined') showHome();
            else window.location.href = 'index.html';
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    const mobileCategories = document.getElementById('mobileCategories');
    if (mobileCategories) {
        mobileCategories.addEventListener('click', function() {
            if (typeof showHome !== 'undefined') showHome();
            else window.location.href = 'index.html';
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    const mobileQuiz = document.getElementById('mobileQuiz');
    if (mobileQuiz) {
        mobileQuiz.addEventListener('click', function() {
            if (typeof openQuizNewTab !== 'undefined') openQuizNewTab();
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    const mobileTimeline = document.getElementById('mobileTimeline');
    if (mobileTimeline) {
        mobileTimeline.addEventListener('click', function() {
            if (typeof openTimelineNewTab !== 'undefined') openTimelineNewTab();
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    const mobileRandom = document.getElementById('mobileRandomQuiz');
    if (mobileRandom) {
        mobileRandom.addEventListener('click', function() {
            if (typeof openRandomQuiz !== 'undefined') openRandomQuiz();
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    const mobileTheme = document.getElementById('mobileTheme');
    if (mobileTheme) {
        mobileTheme.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('savoirs_theme', isDark ? 'dark' : 'light');
            if (themeToggle) themeToggle.innerHTML = isDark ? '☀️ Jour' : '🌙 Nuit';
            if (mobileNav) mobileNav.classList.remove('active');
        });
    }
    
    showToast("✅ SavoirsFR prêt !");
    console.log("✅ Application initialisée avec succès");
});