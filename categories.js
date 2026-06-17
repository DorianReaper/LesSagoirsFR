// ==================== GESTION DES CATÉGORIES ====================

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) {
        console.warn("⚠️ categoriesGrid non trouvé");
        return;
    }
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
    
    // Vérifier que tous les éléments existent avant de les manipuler
    const categoriesView = document.getElementById('categoriesView');
    const genericCategoryView = document.getElementById('genericCategoryView');
    const subHistoryView = document.getElementById('subHistoryView');
    const articlesView = document.getElementById('articlesView');
    const categoryPageView = document.getElementById('categoryPageView');
    
    // Cacher toutes les vues avec vérification
    if (categoriesView) categoriesView.style.display = 'none';
    if (genericCategoryView) genericCategoryView.style.display = 'none';
    if (subHistoryView) subHistoryView.style.display = 'none';
    if (articlesView) articlesView.style.display = 'none';
    
    // Afficher la page de catégorie
    if (categoryPageView) {
        categoryPageView.style.display = 'block';
    } else {
        console.warn("⚠️ categoryPageView non trouvé");
        return;
    }
    
    // Mettre à jour les éléments de la page
    const titleEl = document.getElementById('categoryPageTitle');
    const subtitleEl = document.getElementById('categoryPageSubtitle');
    const imageEl = document.getElementById('categoryPageImage');
    const resumeEl = document.getElementById('categoryPageResume');
    const contentEl = document.getElementById('categoryPageContent');
    
    if (titleEl) {
        titleEl.innerHTML = `<i class="fas ${CATEGORY_ICONS[categoryName] || 'fa-folder'}"></i> ${data.titre}`;
    }
    if (subtitleEl) subtitleEl.textContent = data.sousTitre;
    if (imageEl) {
        imageEl.src = data.image;
        imageEl.alt = data.titre;
    }
    if (resumeEl) resumeEl.textContent = data.resume;
    if (contentEl) contentEl.innerHTML = data.contenu;
    
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
    // Vérifier que les éléments existent avant de les manipuler
    const categoriesView = document.getElementById('categoriesView');
    const categoryPageView = document.getElementById('categoryPageView');
    const genericCategoryView = document.getElementById('genericCategoryView');
    const subHistoryView = document.getElementById('subHistoryView');
    const articlesView = document.getElementById('articlesView');
    
    // Afficher les catégories
    if (categoriesView) categoriesView.style.display = 'block';
    
    // Cacher les autres vues
    if (categoryPageView) categoryPageView.style.display = 'none';
    if (genericCategoryView) genericCategoryView.style.display = 'none';
    if (subHistoryView) subHistoryView.style.display = 'none';
    if (articlesView) articlesView.style.display = 'none';
}

function showHome() {
    goBackToCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exporter les fonctions pour les rendre globales
window.renderCategories = renderCategories;
window.openCategoryPage = openCategoryPage;
window.goBackToCategories = goBackToCategories;
window.showHome = showHome;

console.log('✅ Gestion des catégories chargée');