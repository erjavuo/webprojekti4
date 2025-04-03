// Game data - animals with their answers (true = found in Finland, false = not found)
const animals = [
    { image: 'images/erjanpeli_images/hirvi.jpg', answer: true },
    { image: 'images/erjanpeli_images/susi.jpg', answer: true },
    { image: 'images/erjanpeli_images/gorilla.jpg', answer: false },
    { image: 'images/erjanpeli_images/kettu.jpg', answer: true },
    { image: 'images/erjanpeli_images/orava.jpg', answer: true },
    { image: 'images/erjanpeli_images/leijona.jpg', answer: false },
    { image: 'images/erjanpeli_images/ilves.jpg', answer: true },
    { image: 'images/erjanpeli_images/karhu.jpg', answer: true },
    { image: 'images/erjanpeli_images/janis.jpg', answer: true },
    { image: 'images/erjanpeli_images/kenguru.jpg', answer: false }
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

// Initialize game
function initGame() {
    totalProgress.textContent = animals.length;
    loadAnimal(currentAnimalIndex);
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

// End game
function endGame() {
    alert(`Peli päättyi! Sait ${score}/${animals.length} pistettä!`);
    // Reset game
    currentAnimalIndex = 0;
    score = 0;
    pointsDisplay.textContent = score;
    loadAnimal(currentAnimalIndex);
}

// Event listeners
yesBtn.addEventListener('click', () => checkAnswer(true));
noBtn.addEventListener('click', () => checkAnswer(false));

// Start game
initGame();