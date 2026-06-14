// ==========================================================================
// Theme Management
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// ==========================================================================
// Quiz Data & State
// ==========================================================================
// quizData is loaded globally from questions.js
const allQuestions = typeof quizData !== 'undefined' ? quizData : [];

// Extract unique topics
const topics = [...new Set(allQuestions.map(q => q.section))];

// State
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = {}; // key: index, value: user selected option
let currentTopic = "";
let isReviewMode = false;

// ==========================================================================
// DOM Elements
// ==========================================================================
// Views
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

// Home Screen Elements
const totalSectionsEl = document.getElementById('total-sections');
const totalQuestionsEl = document.getElementById('total-questions');
const topicsGrid = document.getElementById('topics-grid');
const btnStartFull = document.getElementById('btn-start-full');

// Quiz Screen Elements
const currentTopicLabel = document.getElementById('current-topic-label');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const currentScore = document.getElementById('current-score');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnBackHome = document.getElementById('btn-back-home');

// Results Screen Elements
const resultTopic = document.getElementById('result-topic');
const scorePercentage = document.getElementById('score-percentage');
const scoreCirclePath = document.getElementById('score-circle-path');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const unansweredCount = document.getElementById('unanswered-count');
const btnReview = document.getElementById('btn-review');
const btnHomeFromResults = document.getElementById('btn-home-from-results');

// ==========================================================================
// Initialization
// ==========================================================================
function initApp() {
    totalSectionsEl.textContent = topics.length;
    totalQuestionsEl.textContent = allQuestions.length;

    // Map topics to icons for better visual
    const icons = [
        'fa-brands fa-js', 'fa-solid fa-code', 'fa-brands fa-php', 
        'fa-solid fa-cookie', 'fa-solid fa-database', 'fa-solid fa-shield-halved', 
        'fa-solid fa-layer-group', 'fa-solid fa-cubes'
    ];

    // Generate topic cards
    topics.forEach((topic, index) => {
        const topicQs = allQuestions.filter(q => q.section === topic).length;
        const icon = icons[index % icons.length];
        
        const card = document.createElement('div');
        card.className = 'topic-card glass-panel';
        card.innerHTML = `
            <div class="topic-icon">
                <i class="${icon}"></i>
            </div>
            <div class="topic-info">
                <h3>${topic}</h3>
                <p>${topicQs} Questions</p>
            </div>
        `;
        
        card.addEventListener('click', () => startQuiz(topic));
        topicsGrid.appendChild(card);
    });

    // Event Listeners
    btnStartFull.addEventListener('click', () => startQuiz('Full Practice'));
    btnNext.addEventListener('click', () => {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    });
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });
    btnFinish.addEventListener('click', finishQuiz);
    btnBackHome.addEventListener('click', goHome);
    btnHomeFromResults.addEventListener('click', goHome);
    btnReview.addEventListener('click', startReview);
}

// ==========================================================================
// Core Functions
// ==========================================================================
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById(viewId).classList.add('active-view');
    window.scrollTo(0, 0);
}

function startQuiz(topic) {
    currentTopic = topic;
    isReviewMode = false;
    
    if (topic === 'Full Practice') {
        currentQuestions = [...allQuestions];
    } else {
        currentQuestions = allQuestions.filter(q => q.section === topic);
    }
    
    // Reset state
    currentIndex = 0;
    score = 0;
    userAnswers = {};
    
    currentTopicLabel.textContent = topic;
    totalQNum.textContent = currentQuestions.length;
    
    renderQuestion();
    switchView('quiz-screen');
}

// Check if a string contains code blocks
function formatQuestionText(text) {
    // Basic formatting: handle inline code backticks if any
    let formatted = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Handle markdown code blocks
    if (formatted.includes('```')) {
        const parts = formatted.split('```');
        for (let i = 1; i < parts.length; i += 2) {
            // Remove language identifier (like javascript, php)
            const codeBlock = parts[i].replace(/^[a-z]+\n/, '');
            parts[i] = `<pre><code>${codeBlock}</code></pre>`;
        }
        formatted = parts.join('');
    }
    
    return formatted;
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    
    currentQNum.textContent = currentIndex + 1;
    
    // Calculate and update score dynamically
    updateScoreDisplay();
    
    // Update Progress Bar
    const progressPercent = ((currentIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Set Question Text
    questionText.innerHTML = formatQuestionText(q.question);
    
    // Render Options
    optionsContainer.innerHTML = '';
    
    for (const [key, value] of Object.entries(q.options)) {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.dataset.key = key;
        
        optionEl.innerHTML = `
            <div class="option-letter">${key}</div>
            <div class="option-text">${formatQuestionText(value)}</div>
        `;
        
        // Handle Review Mode OR Already Answered State
        if (isReviewMode || userAnswers[currentIndex]) {
            optionEl.classList.add('answered');
            const isSelected = userAnswers[currentIndex] === key;
            const isCorrect = q.answer === key;
            
            if (isCorrect) {
                optionEl.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                optionEl.classList.add('incorrect');
            }
        } else {
            // Only add click listener if not answered
            optionEl.addEventListener('click', () => selectOption(key));
        }
        
        optionsContainer.appendChild(optionEl);
    }
    
    // Update Controls
    btnPrev.disabled = currentIndex === 0;
    
    if (currentIndex === currentQuestions.length - 1) {
        btnNext.classList.add('hidden');
        if (!isReviewMode) btnFinish.classList.remove('hidden');
        else btnFinish.classList.add('hidden'); // No finish button in review mode
    } else {
        btnNext.classList.remove('hidden');
        btnNext.disabled = !isReviewMode && !userAnswers[currentIndex];
        btnFinish.classList.add('hidden');
    }
}

function selectOption(key) {
    if (userAnswers[currentIndex] || isReviewMode) return; // Prevent changing answer
    
    userAnswers[currentIndex] = key;
    
    // Update score if correct
    if (currentQuestions[currentIndex].answer === key) {
        score++;
    }
    
    // Re-render to show correct/incorrect styling immediately
    renderQuestion();
    
    // Enable Next button if not on last question
    if (currentIndex < currentQuestions.length - 1) {
        btnNext.disabled = false;
        // Optional: Auto-advance after a short delay
        // setTimeout(() => { btnNext.click(); }, 1500);
    }
}

function updateScoreDisplay() {
    currentScore.textContent = score;
}

function finishQuiz() {
    // Calculate final stats
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;
    
    currentQuestions.forEach((q, i) => {
        if (!userAnswers[i]) {
            skipped++;
        } else if (userAnswers[i] === q.answer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    const percentage = Math.round((correct / currentQuestions.length) * 100);
    
    // Update Results UI
    resultTopic.textContent = currentTopic;
    correctCount.textContent = correct;
    incorrectCount.textContent = incorrect;
    unansweredCount.textContent = skipped;
    scorePercentage.textContent = `${percentage}%`;
    
    // Update circular progress chart (stroke-dasharray mapping to 100)
    // small delay for animation effect
    setTimeout(() => {
        scoreCirclePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
        // Color based on performance
        if (percentage >= 80) scoreCirclePath.style.stroke = 'var(--success)';
        else if (percentage >= 60) scoreCirclePath.style.stroke = 'var(--warning)';
        else scoreCirclePath.style.stroke = 'var(--danger)';
    }, 100);
    
    switchView('results-screen');
}

function startReview() {
    isReviewMode = true;
    currentIndex = 0;
    progressBar.style.width = '100%';
    renderQuestion();
    switchView('quiz-screen');
}

function goHome() {
    switchView('home-screen');
}

// Initialize application on load
document.addEventListener('DOMContentLoaded', initApp);
