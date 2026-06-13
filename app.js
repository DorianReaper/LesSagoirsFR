document.addEventListener('DOMContentLoaded', function() {
    renderCategories(); updateStats();
    document.getElementById('navAccueil').addEventListener('click', showHome);
    document.getElementById('navCategoriesBtn').addEventListener('click', showHome);
    document.getElementById('navQuizBtn').addEventListener('click', openQuizNewTab);
    document.getElementById('navTimelineBtn').addEventListener('click', openTimelineNewTab);
    document.getElementById('navRandomQuizBtn').addEventListener('click', openRandomQuiz);
    document.getElementById('homeBtn').addEventListener('click', showHome);
    document.getElementById('backFromGenericBtn').addEventListener('click', goBackToCategories);
    document.getElementById('loadMoreGenericBtn').addEventListener('click', loadMoreArticles);
    document.getElementById('searchBtn').addEventListener('click', () => showToast(`🔎 Recherche de "${document.getElementById('searchInput').value}"...`));
    document.getElementById('searchInput').addEventListener('keypress', e => { if (e.key === 'Enter') showToast(`🔎 Recherche de "${e.target.value}"...`); });
    document.getElementById('themeToggle').addEventListener('click', () => { document.body.classList.toggle('dark-mode'); showToast(document.body.classList.contains('dark-mode') ? "🌙 Mode nuit" : "☀️ Mode jour"); });
    const backSubBtn = document.getElementById('backFromSubBtn'); if (backSubBtn) backSubBtn.addEventListener('click', goBackToCategories);
    const backArticlesBtn = document.getElementById('backFromArticlesBtn'); if (backArticlesBtn) backArticlesBtn.addEventListener('click', goBackToCategories);
    document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); document.getElementById('searchInput').focus(); showToast("🔍 Recherche activée"); } });
    const randomQuote = document.getElementById('randomQuote'); if (randomQuote) randomQuote.innerText = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    if (localStorage.getItem('savoirs_theme') === 'dark') { document.body.classList.add('dark-mode'); const themeBtn = document.getElementById('themeToggle'); if (themeBtn) themeBtn.innerHTML = '☀️ Jour'; }
    const burger = document.getElementById('burgerMenu'); const mobileNav = document.getElementById('mobileNav');
    if (burger && mobileNav) { burger.addEventListener('click', () => mobileNav.classList.toggle('active')); }
    const mobileAccueil = document.getElementById('mobileAccueil'); if (mobileAccueil) mobileAccueil.addEventListener('click', () => { showHome(); mobileNav.classList.remove('active'); });
    const mobileCategories = document.getElementById('mobileCategories'); if (mobileCategories) mobileCategories.addEventListener('click', () => { showHome(); mobileNav.classList.remove('active'); });
    const mobileQuiz = document.getElementById('mobileQuiz'); if (mobileQuiz) mobileQuiz.addEventListener('click', () => { openQuizNewTab(); mobileNav.classList.remove('active'); });
    const mobileTimeline = document.getElementById('mobileTimeline'); if (mobileTimeline) mobileTimeline.addEventListener('click', () => { openTimelineNewTab(); mobileNav.classList.remove('active'); });
    const mobileRandomQuiz = document.getElementById('mobileRandomQuiz'); if (mobileRandomQuiz) mobileRandomQuiz.addEventListener('click', () => { openRandomQuiz(); mobileNav.classList.remove('active'); });
    const mobileTheme = document.getElementById('mobileTheme'); if (mobileTheme) mobileTheme.addEventListener('click', () => { document.body.classList.toggle('dark-mode'); mobileNav.classList.remove('active'); });
});