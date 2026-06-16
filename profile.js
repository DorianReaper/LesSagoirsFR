// ==================== SYSTÈME DE PROFIL UTILISATEUR ====================

class UserProfile {
    constructor() {
        this.data = this.load();
        this.badges = this.calculateBadges();
        this.level = this.calculateLevel();
    }

    // Charger ou créer le profil
    load() {
        const saved = localStorage.getItem('savoirs_user_profile');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch(e) {
                console.log('Erreur chargement profil, création nouveau');
            }
        }
        return this.createDefaultProfile();
    }

    createDefaultProfile() {
        return {
            id: 'user_' + Date.now(),
            username: this.generateUsername(),
            createdAt: new Date().toISOString(),
            level: 'beginner',
            xp: 0,
            xpToNextLevel: 100,
            streak: 0,
            lastVisit: new Date().toISOString(),
            interests: [],
            masteredTopics: [],
            weakTopics: [],
            learningStyle: 'visual',
            badges: [],
            stats: {
                totalVisits: 1,
                totalTimeSpent: 0,
                articlesRead: 0,
                quizzesTaken: 0,
                quizzesPassed: 0,
                categoriesVisited: [],
                favoritesCount: 0
            },
            learningHistory: [],
            preferences: {
                theme: 'light',
                language: 'fr',
                fontSize: 'medium',
                notifications: true,
                dailyGoal: 15
            }
        };
    }

    generateUsername() {
        const adjectives = ['Savant', 'Explorateur', 'Philosophe', 'Astronome', 'Poète', 'Historien', 'Géographe', 'Chimiste'];
        const nouns = ['duSavoir', 'desLumières', 'deLaConnaissance', 'desÉtoiles', 'deLHistoire', 'duMonde', 'desMots'];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return adj + noun + Math.floor(Math.random() * 100);
    }

    // Sauvegarder le profil
    save() {
        localStorage.setItem('savoirs_user_profile', JSON.stringify(this.data));
        this.updateUI();
    }

    // Mettre à jour l'XP
    addXP(amount) {
        this.data.xp += amount;
        while (this.data.xp >= this.data.xpToNextLevel) {
            this.levelUp();
        }
        this.save();
    }

    // Monter de niveau
    levelUp() {
        this.data.xp -= this.data.xpToNextLevel;
        this.data.xpToNextLevel = Math.floor(this.data.xpToNextLevel * 1.5);
        const levels = ['beginner', 'intermediate', 'advanced', 'expert', 'master'];
        const currentIndex = levels.indexOf(this.data.level);
        if (currentIndex < levels.length - 1) {
            this.data.level = levels[currentIndex + 1];
            this.addBadge('level_' + this.data.level);
            if (typeof showToast !== 'undefined') {
                showToast(`🎉 Niveau ${this.data.level} atteint !`);
            }
        }
        this.save();
    }

    // Calculer le niveau
    calculateLevel() {
        const levels = ['beginner', 'intermediate', 'advanced', 'expert', 'master'];
        const levelMap = {
            beginner: 0,
            intermediate: 100,
            advanced: 300,
            expert: 600,
            master: 1000
        };
        let currentLevel = 'beginner';
        for (let level of levels) {
            if (this.data.xp >= levelMap[level]) {
                currentLevel = level;
            }
        }
        return currentLevel;
    }

    // Ajouter un badge
    addBadge(badgeId) {
        const badge = BADGES[badgeId];
        if (!badge) return;
        if (!this.data.badges.includes(badgeId)) {
            this.data.badges.push(badgeId);
            if (typeof showToast !== 'undefined') {
                showToast(`🏅 Badge débloqué : ${badge.name}`);
            }
            this.save();
        }
    }

    // Calculer les badges disponibles
    calculateBadges() {
        const unlocked = [];
        const stats = this.data.stats;

        if (stats.categoriesVisited.length >= 3) unlocked.push('explorateur');
        if (stats.quizzesPassed >= 10) unlocked.push('savant');
        if (stats.totalTimeSpent >= 3600) unlocked.push('chroniqueur');
        if (stats.articlesRead >= 20) unlocked.push('bibliophile');
        if (stats.categoriesVisited.length >= 5) unlocked.push('polymathe');
        if (this.data.streak >= 7) unlocked.push('streak_7');
        if (this.data.streak >= 30) unlocked.push('streak_30');

        // Vérifier les badges de niveau
        const levels = ['intermediate', 'advanced', 'expert', 'master'];
        levels.forEach(level => {
            if (this.data.level === level) {
                unlocked.push('level_' + level);
            }
        });

        return unlocked;
    }

    // Enregistrer une visite
    recordVisit(category) {
        const today = new Date().toISOString().split('T')[0];
        const lastVisit = this.data.lastVisit.split('T')[0];

        // Mettre à jour le streak
        if (today === lastVisit) {
            // Déjà visité aujourd'hui
        } else if (this.isConsecutiveDay(lastVisit, today)) {
            this.data.streak += 1;
        } else {
            this.data.streak = 1;
        }

        this.data.lastVisit = new Date().toISOString();
        this.data.stats.totalVisits += 1;

        if (category && !this.data.stats.categoriesVisited.includes(category)) {
            this.data.stats.categoriesVisited.push(category);
        }

        // Ajouter 2 XP par visite
        this.addXP(2);

        this.save();
        this.checkBadges();
    }

    // Enregistrer un article lu
    recordArticleRead(articleTitle) {
        this.data.stats.articlesRead += 1;
        this.addXP(5);
        this.save();
        this.checkBadges();
    }

    // Enregistrer un quiz
    recordQuizTaken(passed) {
        this.data.stats.quizzesTaken += 1;
        if (passed) {
            this.data.stats.quizzesPassed += 1;
            this.addXP(10);
        } else {
            this.addXP(3);
        }
        this.save();
        this.checkBadges();
    }

    // Vérifier si deux jours sont consécutifs
    isConsecutiveDay(day1, day2) {
        const d1 = new Date(day1);
        const d2 = new Date(day2);
        const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
        return diff === 1;
    }

    // Vérifier les badges
    checkBadges() {
        const stats = this.data.stats;
        if (stats.categoriesVisited.length >= 3 && !this.data.badges.includes('explorateur')) {
            this.addBadge('explorateur');
        }
        if (stats.quizzesPassed >= 10 && !this.data.badges.includes('savant')) {
            this.addBadge('savant');
        }
        if (stats.totalTimeSpent >= 3600 && !this.data.badges.includes('chroniqueur')) {
            this.addBadge('chroniqueur');
        }
        if (stats.articlesRead >= 20 && !this.data.badges.includes('bibliophile')) {
            this.addBadge('bibliophile');
        }
        if (stats.categoriesVisited.length >= 5 && !this.data.badges.includes('polymathe')) {
            this.addBadge('polymathe');
        }
        if (this.data.streak >= 7 && !this.data.badges.includes('streak_7')) {
            this.addBadge('streak_7');
        }
        if (this.data.streak >= 30 && !this.data.badges.includes('streak_30')) {
            this.addBadge('streak_30');
        }
    }

    // Mettre à jour l'interface
    updateUI() {
        const badgeCount = document.getElementById('badgeCount');
        if (badgeCount) {
            badgeCount.textContent = this.data.badges.length;
        }

        const userLevelDisplay = document.getElementById('userLevelDisplay');
        if (userLevelDisplay) {
            const levelNames = {
                beginner: 'Débutant',
                intermediate: 'Intermédiaire',
                advanced: 'Avancé',
                expert: 'Expert',
                master: 'Maître'
            };
            userLevelDisplay.textContent = levelNames[this.data.level] || this.data.level;
        }

        const streakDisplay = document.getElementById('streakDisplay');
        if (streakDisplay) {
            streakDisplay.textContent = this.data.streak;
        }

        // Mettre à jour les stats dans le footer
        const totalArticlesEl = document.getElementById('totalArticles');
        if (totalArticlesEl && typeof CATEGORIES_LIST !== 'undefined') {
            totalArticlesEl.innerText = CATEGORIES_LIST.length;
        }
        const totalCategoriesEl = document.getElementById('totalCategories');
        if (totalCategoriesEl && typeof CATEGORIES_LIST !== 'undefined') {
            totalCategoriesEl.innerText = CATEGORIES_LIST.length;
        }
        const favCountEl = document.getElementById('favCount');
        if (favCountEl && typeof favorites !== 'undefined') {
            favCountEl.innerText = favorites.length;
        }
    }

    // Générer le profil HTML
    renderProfile() {
        const badgesList = this.data.badges.map(id => {
            const badge = BADGES[id];
            return badge ? `
                <div class="badge-item" title="${badge.description}">
                    <div class="badge-icon">${badge.icon}</div>
                    <span>${badge.name}</span>
                </div>
            ` : '';
        }).join('');

        const interestsList = this.data.interests.map(interest => `
            <span class="interest-tag">${interest}</span>
        `).join('');

        const levelNames = {
            beginner: 'Débutant',
            intermediate: 'Intermédiaire',
            advanced: 'Avancé',
            expert: 'Expert',
            master: 'Maître'
        };

        return `
            <div class="user-profile-container">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="profile-info">
                        <h2>${this.data.username}</h2>
                        <span class="level-badge">Niveau ${levelNames[this.data.level] || this.data.level}</span>
                        <div class="xp-container">
                            <div class="xp-bar">
                                <div class="xp-fill" style="width: ${Math.min(100, (this.data.xp / this.data.xpToNextLevel) * 100)}%"></div>
                            </div>
                            <span class="xp-text">${this.data.xp} / ${this.data.xpToNextLevel} XP</span>
                        </div>
                    </div>
                    <div class="streak-display">
                        🔥 ${this.data.streak} jours
                    </div>
                </div>

                <div class="profile-stats">
                    <div class="stat-card">
                        <i class="fas fa-book"></i>
                        <span class="stat-value">${this.data.stats.articlesRead}</span>
                        <span class="stat-label">Articles lus</span>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-question-circle"></i>
                        <span class="stat-value">${this.data.stats.quizzesTaken}</span>
                        <span class="stat-label">Quiz tentés</span>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-check-circle"></i>
                        <span class="stat-value">${this.data.stats.quizzesPassed}</span>
                        <span class="stat-label">Quiz réussis</span>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-clock"></i>
                        <span class="stat-value">${Math.floor(this.data.stats.totalTimeSpent / 60)}</span>
                        <span class="stat-label">Minutes apprises</span>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-compass"></i>
                        <span class="stat-value">${this.data.stats.categoriesVisited.length}</span>
                        <span class="stat-label">Domaines explorés</span>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star"></i>
                        <span class="stat-value">${this.data.badges.length}</span>
                        <span class="stat-label">Badges</span>
                    </div>
                </div>

                <div class="profile-interests">
                    <h3>🎯 Centres d'intérêt</h3>
                    <div class="interests-container">
                        ${interestsList || '<span class="no-interests">Aucun intérêt sélectionné</span>'}
                        <button class="edit-interests-btn" onclick="editInterests()">Modifier</button>
                    </div>
                </div>

                <div class="profile-badges">
                    <h3>🏅 Badges (${this.data.badges.length})</h3>
                    <div class="badges-grid">
                        ${badgesList || '<span class="no-badges">Aucun badge débloqué</span>'}
                    </div>
                </div>

                <div class="profile-preferences">
                    <h3>⚙️ Préférences</h3>
                    <div class="preference-item">
                        <label>Thème</label>
                        <select onchange="updatePreference('theme', this.value)">
                            <option value="light" ${this.data.preferences.theme === 'light' ? 'selected' : ''}>Clair</option>
                            <option value="dark" ${this.data.preferences.theme === 'dark' ? 'selected' : ''}>Sombre</option>
                        </select>
                    </div>
                    <div class="preference-item">
                        <label>Langue</label>
                        <select onchange="updatePreference('language', this.value)">
                            <option value="fr" ${this.data.preferences.language === 'fr' ? 'selected' : ''}>Français</option>
                            <option value="en" ${this.data.preferences.language === 'en' ? 'selected' : ''}>English</option>
                        </select>
                    </div>
                    <div class="preference-item">
                        <label>Taille de police</label>
                        <select onchange="updatePreference('fontSize', this.value)">
                            <option value="small" ${this.data.preferences.fontSize === 'small' ? 'selected' : ''}>Petite</option>
                            <option value="medium" ${this.data.preferences.fontSize === 'medium' ? 'selected' : ''}>Moyenne</option>
                            <option value="large" ${this.data.preferences.fontSize === 'large' ? 'selected' : ''}>Grande</option>
                        </select>
                    </div>
                    <div class="preference-item">
                        <label>Objectif quotidien</label>
                        <select onchange="updatePreference('dailyGoal', parseInt(this.value))">
                            <option value="5" ${this.data.preferences.dailyGoal === 5 ? 'selected' : ''}>5 min</option>
                            <option value="15" ${this.data.preferences.dailyGoal === 15 ? 'selected' : ''}>15 min</option>
                            <option value="30" ${this.data.preferences.dailyGoal === 30 ? 'selected' : ''}>30 min</option>
                            <option value="60" ${this.data.preferences.dailyGoal === 60 ? 'selected' : ''}>60 min</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
    }
}

// ==================== BADGES DISPONIBLES ====================

const BADGES = {
    'explorateur': {
        id: 'explorateur',
        name: 'Explorateur',
        icon: '🧭',
        description: 'Visiter 3 catégories différentes'
    },
    'savant': {
        id: 'savant',
        name: 'Savant',
        icon: '🎓',
        description: 'Réussir 10 quiz'
    },
    'chroniqueur': {
        id: 'chroniqueur',
        name: 'Chroniqueur',
        icon: '📝',
        description: 'Passer 1 heure à apprendre'
    },
    'bibliophile': {
        id: 'bibliophile',
        name: 'Bibliophile',
        icon: '📚',
        description: 'Lire 20 articles'
    },
    'polymathe': {
        id: 'polymathe',
        name: 'Polymathe',
        icon: '🧠',
        description: 'Explorer 5 domaines différents'
    },
    'streak_7': {
        id: 'streak_7',
        name: 'Persévérant',
        icon: '🔥',
        description: 'Apprendre 7 jours consécutifs'
    },
    'streak_30': {
        id: 'streak_30',
        name: 'Dévoué',
        icon: '⚡',
        description: 'Apprendre 30 jours consécutifs'
    },
    'level_intermediate': {
        id: 'level_intermediate',
        name: 'Intermédiaire',
        icon: '🌟',
        description: 'Atteindre le niveau intermédiaire'
    },
    'level_advanced': {
        id: 'level_advanced',
        name: 'Avancé',
        icon: '💎',
        description: 'Atteindre le niveau avancé'
    },
    'level_expert': {
        id: 'level_expert',
        name: 'Expert',
        icon: '🏆',
        description: 'Atteindre le niveau expert'
    },
    'level_master': {
        id: 'level_master',
        name: 'Maître du Savoir',
        icon: '👑',
        description: 'Atteindre le niveau maître'
    }
};

// ==================== FONCTIONS GLOBALES ====================

// Initialiser le profil
let userProfile = new UserProfile();

// Fonction pour afficher le profil
function showProfile() {
    document.getElementById('categoriesView').style.display = 'none';
    document.getElementById('categoryPageView').style.display = 'none';
    document.getElementById('genericCategoryView').style.display = 'none';
    document.getElementById('subHistoryView').style.display = 'none';
    document.getElementById('articlesView').style.display = 'none';
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileContent').innerHTML = userProfile.renderProfile();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonction pour retourner des catégories depuis le profil
document.addEventListener('DOMContentLoaded', function() {
    const backFromProfileBtn = document.getElementById('backFromProfileBtn');
    if (backFromProfileBtn) {
        backFromProfileBtn.addEventListener('click', function() {
            if (typeof goBackToCategories !== 'undefined') {
                goBackToCategories();
            }
        });
    }
});

// Fonction pour modifier les intérêts
function editInterests() {
    const allCategories = typeof CATEGORIES_LIST !== 'undefined' ? CATEGORIES_LIST : [];
    const currentInterests = userProfile.data.interests;
    
    let options = allCategories.map(cat => `
        <label style="display:inline-block;margin:4px 8px;cursor:pointer;">
            <input type="checkbox" value="${cat}" ${currentInterests.includes(cat) ? 'checked' : ''}>
            ${cat}
        </label>
    `).join('');

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>🎯 Choisis tes centres d'intérêt</h2>
            <p style="margin:12px 0;color:var(--text-dim);">Sélectionne les domaines qui t'intéressent :</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;padding:8px 0;">
                ${options}
            </div>
            <div class="modal-actions">
                <button class="modal-btn" id="saveInterestsBtn">✅ Valider</button>
                <button class="modal-btn" id="closeInterestsBtn" style="background:var(--text-dim);">✖ Fermer</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('saveInterestsBtn').onclick = function() {
        const checked = modal.querySelectorAll('input[type="checkbox"]:checked');
        userProfile.data.interests = Array.from(checked).map(el => el.value);
        userProfile.save();
        showProfile();
        modal.remove();
        if (typeof showToast !== 'undefined') {
            showToast('✅ Intérêts mis à jour !');
        }
    };

    document.getElementById('closeInterestsBtn').onclick = function() {
        modal.remove();
    };
}

// Fonction pour mettre à jour les préférences
function updatePreference(key, value) {
    userProfile.data.preferences[key] = value;
    userProfile.save();
    if (typeof showToast !== 'undefined') {
        showToast('✅ Préférence mise à jour');
    }
    
    // Appliquer le thème
    if (key === 'theme') {
        if (value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
    
    // Appliquer la taille de police
    if (key === 'fontSize') {
        const sizes = {
            small: '14px',
            medium: '16px',
            large: '18px'
        };
        document.body.style.fontSize = sizes[value] || '16px';
    }
}

// Exporter les fonctions globales
window.userProfile = userProfile;
window.showProfile = showProfile;
window.editInterests = editInterests;
window.updatePreference = updatePreference;

console.log('✅ Profil utilisateur chargé');