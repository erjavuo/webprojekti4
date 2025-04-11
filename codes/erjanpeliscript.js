// Game data - animals with their answers
const animals = [
    { image: '../images/erjanpeli_images/hirvi.jpg', answer: true },
    { image: '../images/erjanpeli_images/susi.jpg', answer: true },
    { image: '../images/erjanpeli_images/gorilla.jpg', answer: false },
    { image: '../images/erjanpeli_images/kettu.jpg', answer: true },
    { image: '../images/erjanpeli_images/orava.jpg', answer: true },
    { image: '../images/erjanpeli_images/leijona.jpg', answer: false },
    { image: '../images/erjanpeli_images/ilves.jpg', answer: true },
    { image: '../images/erjanpeli_images/karhu.jpg', answer: true },
    { image: '../images/erjanpeli_images/janis.jpg', answer: true },
    { image: '../images/erjanpeli_images/kenguru.jpg', answer: false }
];

// Game state
let currentAnimalIndex = 0;
let score = 0;

// DOM elements
const animalImage = document.getElementById('animal-image');
const currentProgress = document.getElementById('current');
const totalProgress = document.getElementById('total');
const pointsDisplay = document.getElementById('points');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const endScreen = document.getElementById('end-screen');
const scoreDisplay = document.getElementById('score-display');

// Initialize game
function initGame() {
    totalProgress.textContent = animals.length;
    pointsDisplay.textContent = score;
    loadAnimal(currentAnimalIndex);
    hideEndScreen();
}

// Load animal image
function loadAnimal(index) {
    animalImage.src = animals[index].image;
    currentProgress.textContent = index + 1;
}

// Check answer
function checkAnswer(userAnswer) {
    const correctAnswer = animals[currentAnimalIndex].answer;
    
    if (userAnswer === correctAnswer) {
        score++;
        pointsDisplay.textContent = score;
    }
    
    // Move to next animal or end game
    currentAnimalIndex++;
    if (currentAnimalIndex < animals.length) {
        loadAnimal(currentAnimalIndex);
    } else {
        endGame();
    }
}

// Save game result
function saveGameResult(score) {
    sessionStorage.setItem('animalGameScore', score);
}

// Show end screen
function showEndScreen() {
    document.querySelector('.game-container').classList.add('hidden');
    endScreen.classList.remove('hidden');
}

// Hide end screen
function hideEndScreen() {
    endScreen.classList.add('hidden');
    document.querySelector('.game-container').classList.remove('hidden');
}

// End game
function endGame() {
    // Update score display
    scoreDisplay.textContent = score;
    
    // Save result
    saveGameResult(score);
    
    // Show end screen
    showEndScreen();
}

// Restart game
function restartGame() {
    // Reset game state
    currentAnimalIndex = 0;
    score = 0;
    pointsDisplay.textContent = score;
    
    // Hide end screen and show game
    hideEndScreen();
    
    // Start new game
    loadAnimal(currentAnimalIndex);
}

// Event listeners
yesBtn.addEventListener('click', () => checkAnswer(true));
noBtn.addEventListener('click', () => checkAnswer(false));
document.getElementById('restart-btn').addEventListener('click', restartGame);
document.getElementById('to-games-btn').addEventListener('click', function() {
    window.location.href = "koostesivu.html"; 
});

// Start the game
initGame();