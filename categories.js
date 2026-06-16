// ==================== GESTION DES CATÉGORIES (VERSION WIKIPEDIA) ====================

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    CATEGORIES_LIST.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        const icon = CATEGORY_ICONS[cat] || 'fa-folder';
        card.innerHTML = `<i class="fas ${icon}"></i><h3>${cat}</h3>`;
        card.onclick = () => openCategoryPage(cat);
        grid.appendChild(card);
    });
}

function openCategoryPage(categoryName) {
    const data = CATEGORIES_DATA[categoryName];
    if (!data) {
        showToast("📚 Cette catégorie sera bientôt disponible !");
        return;
    }
    
    // Cacher la vue des catégories
    document.getElementById('categoriesView').style.display = 'none';
    document.getElementById('genericCategoryView').style.display = 'none';
    
    // Afficher la page de la catégorie
    const view = document.getElementById('categoryPageView');
    view.style.display = 'block';
    
    // Remplir le contenu
    document.getElementById('categoryPageTitle').innerHTML = `<i class="fas ${CATEGORY_ICONS[categoryName] || 'fa-folder'}"></i> ${data.titre}`;
    document.getElementById('categoryPageSubtitle').textContent = data.sousTitre;
    document.getElementById('categoryPageImage').src = data.image;
    document.getElementById('categoryPageImage').alt = data.titre;
    document.getElementById('categoryPageResume').textContent = data.resume;
    document.getElementById('categoryPageContent').innerHTML = data.contenu;
    
    // Scroll en haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackToCategories() {
    document.getElementById('categoriesView').style.display = 'block';
    document.getElementById('genericCategoryView').style.display = 'none';
    document.getElementById('categoryPageView').style.display = 'none';
    document.getElementById('articlesView').style.display = 'none';
    document.getElementById('subHistoryView').style.display = 'none';
}

function showHome() {
    goBackToCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}