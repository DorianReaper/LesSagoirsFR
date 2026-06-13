// ==================== QUIZ ALÉATOIRE (VRAI/FAUX INSTANTANÉ) ====================

function openRandomQuiz() {
    const randomHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SavoirsFR · Quiz aléatoire</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#0F172A;font-family:'Inter',sans-serif;padding:40px 20px;color:#F1F5F9}
        .container{max-width:800px;margin:0 auto}
        h1{color:#F59E0B;text-align:center;margin-bottom:10px}
        .sub{text-align:center;color:#94A3B8;margin-bottom:30px}
        .question-card{background:#1E293B;border-radius:24px;padding:30px;margin-bottom:20px;border-left:4px solid #F59E0B}
        .question-text{font-size:1.3rem;font-weight:600;margin-bottom:20px}
        .option{background:#334155;padding:14px 18px;border-radius:12px;margin:8px 0;cursor:pointer;transition:.2s}
        .option:hover{background:#F59E0B;color:#0F172A;transform:translateX(5px)}
        .option.selected{background:#F59E0B;color:#0F172A}
        .feedback{margin-top:15px;padding:12px;border-radius:12px;font-weight:500;animation:fadeIn .3s}
        .feedback.correct{background:#10B981;color:#fff}
        .feedback.wrong{background:#EF4444;color:#fff}
        .next-btn{background:#F59E0B;color:#0F172A;border:none;padding:14px 32px;border-radius:40px;font-weight:600;cursor:pointer;margin-top:20px;width:100%;transition:.2s}
        .next-btn:hover{background:#D97706;transform:scale(1.02)}
        .result{text-align:center;margin-top:20px;padding:20px;background:#F59E0B20;border-radius:20px}
        .back-link{display:inline-block;background:#F59E0B;color:#0F172A;text-decoration:none;padding:10px 24px;border-radius:40px;margin-bottom:20px;font-weight:600;transition:.2s}
        .back-link:hover{background:#D97706;transform:translateX(-4px)}
        .back-link i{margin-right:8px}
        @keyframes fadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
    </style>
</head>
<body>
<div class="container">
    <a href="javascript:window.location.href='index.html'" class="back-link"><i class="fas fa-arrow-left"></i> Retour au menu principal</a>
    <h1><i class="fas fa-dice-d6"></i> Quiz aléatoire</h1>
    <div class="sub" id="status">Question 1 / 5</div>
    <div id="quizContainer"></div>
</div>
<script>
    const baseQuestions = ${JSON.stringify(QUIZ_QUESTIONS_BASE)};
    let shuffled = [...baseQuestions];
    for(let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let questions = shuffled.slice(0, 5);
    let currentIndex = 0;
    let userAnswers = [];
    let quizFinished = false;
    
    function renderQuestion() {
        if (quizFinished) {
            let score = 0;
            questions.forEach((q, i) => { if (userAnswers[i] === q.correct) score++; });
            let percent = Math.round((score / questions.length) * 100);
            let message = percent === 100 ? '🎉 PARFAIT !' : (percent >= 80 ? '🌟 Excellent !' : (percent >= 60 ? '📚 Bien joué !' : '💪 Rejouez !'));
            let html = '<div class="result"><h3><i class="fas fa-trophy"></i> Résultat final</h3><p style="font-size:2rem;">' + score + ' / ' + questions.length + '</p><p>' + message + '</p><button class="next-btn" onclick="location.reload()"><i class="fas fa-redo-alt"></i> Rejouer</button></div>';
            questions.forEach((q, i) => {
                let isOk = (userAnswers[i] === q.correct);
                html += '<div style="margin:12px 0;padding:12px;background:#1E293B;border-radius:16px;">';
                html += '<strong>' + (i+1) + '. ' + q.question + '</strong><br>';
                html += '<span style="color:#10B981"><i class="fas fa-check-circle"></i> Bonne réponse : ' + q.options[q.correct] + '</span><br>';
                html += '<span style="color:#F59E0B"><i class="fas fa-book-open"></i> ' + q.explication + '</span><br>';
                if (!isOk) {
                    html += '<span style="color:#ef4444"><i class="fas fa-times-circle"></i> Ta réponse : ' + (userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'rien') + '</span><br>';
                } else {
                    html += '<span style="color:#10b981"><i class="fas fa-star"></i> Bravo !</span>';
                }
                html += '</div>';
            });
            document.getElementById('quizContainer').innerHTML = html;
            document.getElementById('status').innerHTML = '🎉 Quiz terminé';
            return;
        }
        
        let q = questions[currentIndex];
        let html = '<div class="question-card"><div class="question-text">' + (currentIndex+1) + '. ' + q.question + '</div><div class="options">';
        q.options.forEach((opt, idx) => {
            let isSelected = (userAnswers[currentIndex] === idx);
            html += '<div class="option ' + (isSelected ? 'selected' : '') + '" data-opt="' + idx + '">' + opt + '</div>';
        });
        html += '</div>';
        if (userAnswers[currentIndex] !== undefined) {
            let isCorrect = (userAnswers[currentIndex] === q.correct);
            html += '<div class="feedback ' + (isCorrect ? 'correct' : 'wrong') + '">';
            html += isCorrect ? '<i class="fas fa-check-circle"></i> Bonne réponse !' : '<i class="fas fa-times-circle"></i> Mauvaise réponse. La bonne réponse était : ' + q.options[q.correct];
            html += '</div>';
        }
        html += '<button class="next-btn" id="nextBtn">' + (currentIndex === questions.length-1 ? '<i class="fas fa-flag-checkered"></i> Voir mon score' : '<i class="fas fa-arrow-right"></i> Question suivante') + '</button></div>';
        
        document.getElementById('quizContainer').innerHTML = html;
        
        document.querySelectorAll('.option').forEach(opt => {
            opt.onclick = function() {
                if (userAnswers[currentIndex] !== undefined) return;
                userAnswers[currentIndex] = parseInt(this.dataset.opt);
                renderQuestion();
            };
        });
        
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.onclick = () => {
                if (userAnswers[currentIndex] === undefined) { alert("Choisis une réponse avant de continuer !"); return; }
                if (currentIndex === questions.length - 1) quizFinished = true;
                else currentIndex++;
                renderQuestion();
            };
        }
        document.getElementById('status').innerHTML = 'Question ' + (currentIndex+1) + ' / ' + questions.length;
    }
    renderQuestion();
</script>
</body></html>`;
    const blob = new Blob([randomHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 100);
}