// ==================== ARTICLES ET MODALE ====================
// Déclaration des variables globales utilisées dans ce fichier
let currentCategory = null;
let currentArticleList = [];
let currentOffset = 0;
let isLoading = false;
const BATCH_SIZE = 9;

function openArticleModal(article) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
        <h2><i class="fas fa-book-open" style="color:var(--accent)"></i> ${escapeHtml(article.titre)}</h2>
        <img src="${article.image}" alt="${article.titre}" style="width:100%; border-radius:16px; margin:16px 0;" onerror="this.src='https://placehold.co/600x400?text=Image+indisponible'">
        <p>${escapeHtml(article.description)}</p>
        <div class="modal-actions">
            <button class="modal-btn" id="modalFavoriteBtn">
                <i class="fas fa-star"></i> ${isFavorite(article.titre) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <button class="modal-btn" id="modalShareBtn">
                <i class="fas fa-share-alt"></i> Partager
            </button>
            <button class="modal-btn" id="modalCloseBtn">
                <i class="fas fa-times"></i> Fermer
            </button>
        </div>
    `;
    
    const favBtn = document.getElementById('modalFavoriteBtn');
    if (favBtn) {
        favBtn.onclick = () => {
            toggleFavorite(article.titre);
            openArticleModal(article);
        };
    }
    
    const shareBtn = document.getElementById('modalShareBtn');
    if (shareBtn) {
        shareBtn.onclick = () => {
            if (navigator.share) {
                navigator.share({ title: article.titre, text: article.description });
            } else {
                showToast("🔗 Lien copié !");
            }
        };
    }
    
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    modal.style.display = 'flex';
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'knowledge-card';
    const isFav = typeof isFavorite !== 'undefined' ? isFavorite(article.titre) : false;
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.titre}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Image+indisponible'">
        <div class="card-header">
            <span class="date">📅 ${article.date || '2024'}</span>
            <button class="favorite-btn ${isFav ? 'active' : ''}" data-title="${article.titre.replace(/"/g, '&quot;')}">
                <i class="fas fa-star"></i>
            </button>
        </div>
        <h4>${escapeHtml(article.titre)}</h4>
        <p>${escapeHtml(article.description.substring(0, 120))}...</p>
        <div class="share-buttons">
            <button class="share-btn" data-platform="twitter" data-title="${article.titre}">
                <i class="fab fa-twitter"></i>
            </button>
            <button class="share-btn" data-platform="facebook" data-title="${article.titre}">
                <i class="fab fa-facebook"></i>
            </button>
            <button class="share-btn" data-platform="whatsapp" data-title="${article.titre}">
                <i class="fab fa-whatsapp"></i>
            </button>
        </div>
    `;
    
    const favBtn = card.querySelector('.favorite-btn');
    if (favBtn) {
        favBtn.onclick = (e) => {
            e.stopPropagation();
            if (typeof toggleFavorite !== 'undefined') {
                toggleFavorite(article.titre);
                favBtn.classList.toggle('active');
            }
        };
    }
    
    card.querySelectorAll('.share-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const platform = btn.getAttribute('data-platform');
            const title = btn.getAttribute('data-title');
            let url = '';
            if (platform === 'twitter') {
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)} - Découvrez cet article sur SavoirsFR !`;
            } else if (platform === 'facebook') {
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
            } else if (platform === 'whatsapp') {
                url = `https://wa.me/?text=${encodeURIComponent(title + ' - ' + window.location.href)}`;
            }
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
            else showToast("🔗 Lien copié !");
        };
    });
    
    card.onclick = () => openArticleModal(article);
    return card;
}

function loadMoreArticles() {
    if (isLoading) return;
    isLoading = true;
    
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.classList.add('active');
    
    setTimeout(() => {
        try {
            const batch = currentArticleList.slice(currentOffset, currentOffset + BATCH_SIZE);
            const container = document.getElementById('genericContainer');
            
            if (container) {
                batch.forEach(article => {
                    container.appendChild(createArticleCard(article));
                });
            }
            
            currentOffset += batch.length;
            
            const loadMoreBtn = document.getElementById('loadMoreGenericBtn');
            if (loadMoreBtn) {
                if (currentOffset >= currentArticleList.length) {
                    loadMoreBtn.innerText = "✨ Tout le savoir est chargé ✨";
                    loadMoreBtn.disabled = true;
                } else {
                    loadMoreBtn.innerText = `Charger plus (${currentArticleList.length - currentOffset} restants)`;
                    loadMoreBtn.disabled = false;
                }
            }
        } catch(e) {
            console.log("loadMoreArticles error:", e);
        }
        
        if (spinner) spinner.classList.remove('active');
        isLoading = false;
    }, 200);
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