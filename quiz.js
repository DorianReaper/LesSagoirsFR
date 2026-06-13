// ==================== QUIZ CLASSIQUE ====================

function openQuizNewTab() {
    const quizHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SavoirsFR · Quiz classique</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#0F172A;font-family:'Inter',sans-serif;padding:40px 20px;color:#F1F5F9}
        .container{max-width:800px;margin:0 auto}
        h1{color:#F59E0B;text-align:center;margin-bottom:20px}
        .quiz-question{background:#1E293B;border-radius:24px;padding:25px;margin-bottom:25px;border-left:4px solid #F59E0B}
        .quiz-option{background:#334155;padding:14px;margin:10px 0;border-radius:12px;cursor:pointer;transition:.2s}
        .quiz-option:hover{background:#F59E0B;color:#0F172A;transform:translateX(5px)}
        .selected{background:#F59E0B;color:#0F172A}
        .submit-btn{background:#F59E0B;color:#0F172A;border:none;padding:14px 28px;border-radius:40px;font-weight:600;cursor:pointer;margin-top:20px}
        .result{background:#F59E0B20;border-radius:20px;padding:25px;margin-top:30px}
        .back-link{display:inline-block;background:#F59E0B;color:#0F172A;text-decoration:none;padding:10px 24px;border-radius:40px;margin-bottom:20px;font-weight:600}
        .back-link:hover{background:#D97706;transform:translateX(-4px)}
        .back-link i{margin-right:8px}
    </style>
</head>
<body>
<div class="container">
    <a href="javascript:window.location.href='index.html'" class="back-link"><i class="fas fa-arrow-left"></i> Retour au menu principal</a>
    <h1><i class="fas fa-question-circle"></i> Quiz SavoirsFR</h1>
    <div id="quizArea"></div>
    <div id="finalResult"></div>
</div>
<script>
    const baseQuestions = ${JSON.stringify(QUIZ_QUESTIONS_BASE)};
    let shuffled = [...baseQuestions];
    for(let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let questions = shuffled.slice(0, 8);
    let answers = new Array(questions.length).fill(null);
    
    function render() {
        let html = '';
        questions.forEach((q, i) => {
            html += '<div class="quiz-question">';
            html += '<p><strong>' + (i+1) + '. ' + q.question + '</strong></p>';
            q.options.forEach((opt, oi) => {
                let cls = (answers[i] === oi) ? 'selected' : '';
                html += '<div class="quiz-option ' + cls + '" data-q="' + i + '" data-opt="' + oi + '">' + opt + '</div>';
            });
            html += '</div>';
        });
        html += '<button class="submit-btn" id="submitQuiz"><i class="fas fa-check-circle"></i> Voir mes résultats</button>';
        document.getElementById('quizArea').innerHTML = html;
        
        document.querySelectorAll('.quiz-option').forEach(el => {
            el.onclick = function() {
                let qi = parseInt(this.dataset.q);
                let oi = parseInt(this.dataset.opt);
                answers[qi] = oi;
                render();
            };
        });
        
        document.getElementById('submitQuiz').onclick = () => {
            let score = 0;
            let resultHtml = '<div class="result"><h3><i class="fas fa-trophy"></i> Correction détaillée</h3>';
            questions.forEach((q, i) => {
                let isOk = (answers[i] === q.correct);
                if(isOk) score++;
                resultHtml += '<div style="margin:15px 0;padding:15px;background:#1E293B;border-radius:16px;">';
                resultHtml += '<strong>' + (i+1) + '. ' + q.question + '</strong><br>';
                resultHtml += '<span style="color:#10B981"><i class="fas fa-check-circle"></i> Bonne réponse : ' + q.options[q.correct] + '</span><br>';
                resultHtml += '<span style="color:#F59E0B"><i class="fas fa-book-open"></i> ' + q.explication + '</span><br>';
                if(!isOk) {
                    resultHtml += '<span style="color:#ef4444"><i class="fas fa-times-circle"></i> Ta réponse : ' + (answers[i] !== undefined ? q.options[answers[i]] : 'rien') + '</span><br>';
                } else {
                    resultHtml += '<span style="color:#10b981"><i class="fas fa-star"></i> Bravo !</span>';
                }
                resultHtml += '</div>';
            });
            resultHtml += '<p style="font-size:1.5rem;text-align:center;margin-top:20px">🎉 Score : ' + score + '/' + questions.length + ' (' + Math.round(score/questions.length*100) + '%)</p>';
            resultHtml += '<button class="submit-btn" onclick="location.reload()"><i class="fas fa-redo-alt"></i> Recommencer</button>';
            document.getElementById('finalResult').innerHTML = resultHtml;
            document.getElementById('quizArea').style.display = 'none';
        };
    }
    render();
</script>
</body></html>`;
    const blob = new Blob([quizHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 100);
}