// ==================== ARTICLES ET MODALE ====================

function shareArticle(title, desc, platform) {
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
}

function toggleReadingMode(btn) {
    btn.parentElement.classList.toggle('reading-mode');
}

function openArticleModal(article) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    article.views = (article.views || 0) + 1;
    
    modalContent.innerHTML = `
        <h2><i class="fas fa-book-open" style="color:var(--accent)"></i> ${escapeHtml(article.titre)}</h2>
        <img src="${article.image}" alt="${article.titre}" style="width:100%; border-radius:16px; margin:16px 0;">
        <p>${escapeHtml(article.description)}</p>
        ${article.video ? `<div class="video-container"><iframe src="${article.video}" frameborder="0" allowfullscreen></iframe></div>` : ''}
        ${article.audio ? `<audio class="audio-player" controls src="${article.audio}"></audio>` : ''}
        <div class="modal-actions">
            <button class="modal-btn" id="modalFavoriteBtn">
                <i class="fas fa-star"></i> ${isFavorite(article.titre) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <button class="modal-btn" id="modalShareBtn">
                <i class="fas fa-share-alt"></i> Partager
            </button>
            <button class="modal-btn" id="modalListenBtn">
                <i class="fas fa-headphones"></i> Écouter
            </button>
            <button class="modal-btn reading-mode-btn" onclick="toggleReadingMode(this)">
                <i class="fas fa-glasses"></i> Mode lecture
            </button>
            <button class="modal-btn" id="modalCloseBtn">
                <i class="fas fa-times"></i> Fermer
            </button>
        </div>
    `;
    
    document.getElementById('modalFavoriteBtn').onclick = () => {
        toggleFavorite(article.titre);
        openArticleModal(article);
    };
    
    document.getElementById('modalShareBtn').onclick = () => {
        if (navigator.share) {
            navigator.share({ title: article.titre, text: article.description });
        } else {
            showToast("🔗 Lien copié !");
        }
    };
    
    document.getElementById('modalListenBtn').onclick = () => {
        const utterance = new SpeechSynthesisUtterance(article.description);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };
    
    document.getElementById('modalCloseBtn').onclick = () => {
        modal.style.display = 'none';
    };
    
    modal.style.display = 'flex';
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'knowledge-card';
    const isFav = isFavorite(article.titre);
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.titre}" loading="lazy">
        <div class="card-header">
            <span class="date">📅 ${article.date || '2024'}</span>
            <span class="views">👁️ ${article.views || 0} vues</span>
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
    favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(article.titre);
        favBtn.classList.toggle('active');
    };
    
    card.querySelectorAll('.share-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const platform = btn.getAttribute('data-platform');
            const title = btn.getAttribute('data-title');
            shareArticle(title, article.description, platform);
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
        const batch = currentArticleList.slice(currentOffset, currentOffset + BATCH_SIZE);
        const container = document.getElementById('genericContainer');
        
        batch.forEach(article => {
            container.appendChild(createArticleCard(article));
        });
        
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
        
        if (spinner) spinner.classList.remove('active');
        isLoading = false;
    }, 200);
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

let currentCategory = null;
let currentArticleList = [];
let currentOffset = 0;
let isLoading = false;
const BATCH_SIZE = 9;