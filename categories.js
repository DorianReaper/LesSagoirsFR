// ==================== GESTION DES CATÉGORIES ====================

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // N'afficher que les catégories principales (pas les sous-catégories)
    const mainCategories = CATEGORIES_LIST.filter(key => 
        !['WW1', 'WW2', 'Napoleon', 'France'].includes(key)
    );
    
    mainCategories.forEach(cat => {
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
        if (typeof showToast !== 'undefined') {
            showToast("📚 Cette catégorie sera bientôt disponible !");
        }
        return;
    }
    
    // Cacher toutes les vues
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('categoriesView').style.display = 'none';
    document.getElementById('genericCategoryView').style.display = 'none';
    document.getElementById('subHistoryView').style.display = 'none';
    document.getElementById('articlesView').style.display = 'none';
    
    const view = document.getElementById('categoryPageView');
    view.style.display = 'block';
    
    document.getElementById('categoryPageTitle').innerHTML = `<i class="fas ${CATEGORY_ICONS[categoryName] || 'fa-folder'}"></i> ${data.titre}`;
    document.getElementById('categoryPageSubtitle').textContent = data.sousTitre;
    document.getElementById('categoryPageImage').src = data.image;
    document.getElementById('categoryPageImage').alt = data.titre;
    document.getElementById('categoryPageResume').textContent = data.resume;
    document.getElementById('categoryPageContent').innerHTML = data.contenu;
    
    // Reset du bouton retour vers les catégories
    const backBtn = document.getElementById('backFromCategoryBtn');
    if (backBtn) {
        backBtn.onclick = function() {
            goBackToCategories();
        };
    }
    
    // Enregistrer la visite dans le profil
    if (typeof userProfile !== 'undefined' && userProfile) {
        userProfile.recordVisit(categoryName);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackToCategories() {
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('categoriesView').style.display = 'block';
    document.getElementById('categoryPageView').style.display = 'none';
    document.getElementById('genericCategoryView').style.display = 'none';
    document.getElementById('subHistoryView').style.display = 'none';
    document.getElementById('articlesView').style.display = 'none';
}

function showHome() {
    goBackToCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exporter les fonctions
window.renderCategories = renderCategories;
window.openCategoryPage = openCategoryPage;
window.goBackToCategories = goBackToCategories;
window.showHome = showHome;

console.log('✅ Gestion des catégories chargée');