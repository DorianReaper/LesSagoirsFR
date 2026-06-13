// ==================== GESTION DES CATÉGORIES ====================

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    CATEGORIES_LIST.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        const icon = CATEGORY_ICONS[cat] || 'fa-folder';
        
        card.innerHTML = `<i class="fas ${icon}"></i><h3>${cat}</h3>`;
        card.onclick = () => openCategory(cat);
        grid.appendChild(card);
    });
}

function openCategory(categoryName) {
    const categoriesView = document.getElementById('categoriesView');
    if (categoriesView) categoriesView.style.display = 'none';
    
    if (categoryName === 'Histoire') {
        openHistorySubcategories();
        return;
    }
    
    let filteredArticles = [];
    
    if (categoryName === 'Géographie') {
        filteredArticles = GEOGRAPHIE_ARTICLES;
    } else if (categoryName === 'Médecine') {
        filteredArticles = MEDECINE_ARTICLES;
    } else if (categoryName === 'Littérature') {
        filteredArticles = LITTERATURE_ARTICLES;
    } else if (categoryName === 'Sciences') {
        filteredArticles = SCIENCES_ARTICLES;
    } else if (categoryName === 'Philosophie') {
        filteredArticles = PHILOSOPHIE_ARTICLES;
    } else if (categoryName === 'Arts') {
        filteredArticles = ARTS_ARTICLES;
    } else if (categoryName === 'Musique') {
        filteredArticles = AUTRES_CATEGORIES.Musique || [];
    } else if (categoryName === 'Astronomie') {
        filteredArticles = AUTRES_CATEGORIES.Astronomie || [];
    } else if (categoryName === 'Cinéma') {
        filteredArticles = AUTRES_CATEGORIES.Cinema || [];
    } else if (categoryName === 'Droit') {
        filteredArticles = AUTRES_CATEGORIES.Droit || [];
    } else if (categoryName === 'Économie') {
        filteredArticles = AUTRES_CATEGORIES.Economie || [];
    } else if (categoryName === 'Religion') {
        filteredArticles = AUTRES_CATEGORIES.Religion || [];
    } else {
        filteredArticles = allArticles.filter(a => a.theme === categoryName);
    }
    
    if (filteredArticles.length === 0) {
        showToast("📚 Cette catégorie sera bientôt enrichie !");
        if (categoriesView) categoriesView.style.display = 'block';
        return;
    }
    
    currentCategory = categoryName;
    currentArticleList = filteredArticles;
    currentOffset = 0;
    
    const genericTitle = document.getElementById('genericCatTitle');
    if (genericTitle) {
        const icon = CATEGORY_ICONS[categoryName] || 'fa-folder';
        genericTitle.innerHTML = `<i class="fas ${icon}"></i> ${categoryName}`;
    }
    
    const container = document.getElementById('genericContainer');
    if (container) container.innerHTML = '';
    
    const genericView = document.getElementById('genericCategoryView');
    if (genericView) genericView.style.display = 'block';
    loadMoreArticles();
}

function openHistorySubcategories() {
    const categoriesView = document.getElementById('categoriesView');
    if (categoriesView) categoriesView.style.display = 'none';
    
    const subHistoryView = document.getElementById('subHistoryView');
    if (subHistoryView) subHistoryView.style.display = 'block';
    
    const subGrid = document.getElementById('subHistoryGrid');
    if (!subGrid) return;
    subGrid.innerHTML = '';
    
    const periods = [
        { id: "WW1", name: "Première Guerre mondiale", icon: "fa-bomb" },
        { id: "WW2", name: "Seconde Guerre mondiale", icon: "fa-fighter-jet" },
        { id: "Napoleon", name: "Napoléon Bonaparte", icon: "fa-crown" },
        { id: "France", name: "La France", icon: "fa-flag" }
    ];
    
    periods.forEach(period => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `<i class="fas ${period.icon}" style="font-size: 2rem;"></i><h3 style="margin-top: 8px;">${period.name}</h3>`;
        card.onclick = () => showHistoryArticles(period.id, period.name);
        subGrid.appendChild(card);
    });
}

function showHistoryArticles(subId, subName) {
    const articles = ARTICLES_HISTORY[subId] || [];
    
    if (articles.length === 0) {
        showToast("📚 Aucun article trouvé pour cette période");
        return;
    }
    
    const subHistoryView = document.getElementById('subHistoryView');
    if (subHistoryView) subHistoryView.style.display = 'none';
    
    const articlesView = document.getElementById('articlesView');
    if (articlesView) articlesView.style.display = 'block';
    
    const articlesTitle = document.getElementById('articlesTitle');
    if (articlesTitle) articlesTitle.innerHTML = `📖 ${subName}`;
    
    const container = document.getElementById('articlesContainer');
    if (container) container.innerHTML = '';
    
    articles.forEach(article => {
        container.appendChild(createArticleCard(article));
    });
}

function goBackToCategories() {
    const categoriesView = document.getElementById('categoriesView');
    if (categoriesView) categoriesView.style.display = 'block';
    
    const subHistoryView = document.getElementById('subHistoryView');
    if (subHistoryView) subHistoryView.style.display = 'none';
    
    const articlesView = document.getElementById('articlesView');
    if (articlesView) articlesView.style.display = 'none';
    
    const genericView = document.getElementById('genericCategoryView');
    if (genericView) genericView.style.display = 'none';
    
    const quizView = document.getElementById('quizView');
    if (quizView) quizView.style.display = 'none';
    
    const timelineView = document.getElementById('timelineView');
    if (timelineView) timelineView.style.display = 'none';
    
    const randomQuizView = document.getElementById('randomQuizView');
    if (randomQuizView) randomQuizView.style.display = 'none';
    
    currentCategory = null;
    currentArticleList = [];
    currentOffset = 0;
}

function showHome() {
    goBackToCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}