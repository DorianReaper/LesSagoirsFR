// ==================== GESTION DES FAVORIS ====================
let favorites = JSON.parse(localStorage.getItem('savoirs_favorites') || '[]');

function updateStats() {
    try {
        const totalArticlesEl = document.getElementById('totalArticles');
        const totalCategoriesEl = document.getElementById('totalCategories');
        const favCountEl = document.getElementById('favCount');
        
        if (totalArticlesEl && typeof CATEGORIES_LIST !== 'undefined') {
            totalArticlesEl.innerText = CATEGORIES_LIST.length;
        }
        if (totalCategoriesEl && typeof CATEGORIES_LIST !== 'undefined') {
            totalCategoriesEl.innerText = CATEGORIES_LIST.length;
        }
        if (favCountEl) {
            favCountEl.innerText = favorites.length;
        }
        
        // Mettre à jour les stats du profil
        if (typeof userProfile !== 'undefined' && userProfile) {
            userProfile.data.stats.favoritesCount = favorites.length;
            userProfile.save();
        }
    } catch(e) {
        console.log("updateStats error:", e);
    }
}

function saveFavorites() {
    localStorage.setItem('savoirs_favorites', JSON.stringify(favorites));
    updateStats();
}

function isFavorite(articleTitle) {
    return favorites.includes(articleTitle);
}

function toggleFavorite(articleTitle) {
    if (favorites.includes(articleTitle)) {
        favorites = favorites.filter(f => f !== articleTitle);
        if (typeof showToast !== 'undefined') {
            showToast("⭐ Retiré des favoris");
        }
    } else {
        favorites.push(articleTitle);
        if (typeof showToast !== 'undefined') {
            showToast("⭐ Ajouté aux favoris !");
        }
        // Ajouter 2 XP pour avoir ajouté un favori
        if (typeof userProfile !== 'undefined' && userProfile) {
            userProfile.addXP(2);
        }
    }
    saveFavorites();
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const title = btn.getAttribute('data-title');
        if (title && isFavorite(title)) {
            btn.classList.add('active');
        } else if (title) {
            btn.classList.remove('active');
        }
    });
}

function showToast(message, duration = 2000) {
    let toast = document.getElementById('toastMessage');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMessage';
        toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#F59E0B;color:#0F172A;padding:12px 24px;border-radius:60px;z-index:1100;opacity:0;transition:opacity0.3s;pointer-events:none;font-weight:600';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

// Exporter les fonctions
window.favorites = favorites;
window.updateStats = updateStats;
window.saveFavorites = saveFavorites;
window.isFavorite = isFavorite;
window.toggleFavorite = toggleFavorite;
window.updateFavoriteButtons = updateFavoriteButtons;

console.log('✅ Système de favoris chargé');