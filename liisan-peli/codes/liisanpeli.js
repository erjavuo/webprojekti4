// lakes, rivers and mixed versions of their names
const finnishWaters = [
    { name: 'Kemijoki', mixed: 'Keijo kim', image: '../images/keijokim.jpg' },
    { name: 'Tornionjoki', mixed: 'Trikoo jonni', image: '../images/trikoojonni.jpg' },
    { name: 'Kalajoki', mixed: 'laKki ajo', image: '../images/lakkiajo.jpg' },
    { name: 'Aurajoki', mixed: 'Aika rujo', image: '../images/aikarujo.jpg' },
    { name: 'Muonionjoki', mixed: 'kiMono jouni', image: '../images/kimonojouni.jpg' },
    { name: 'Saimaa', mixed: 'maaSai', image: '../images/maasai.jpg' },
    { name: 'Päijänne', mixed: 'Penni jää', image: '../images/pennijää.jpg' },
    { name: 'Oulujärvi', mixed: 'väli juOru', image: '../images/välijuoru.jpg' },
    { name: 'Keitele', mixed: 'ele itKe', image: '../images/eleitke.jpg' },
    { name: 'Pielinen', mixed: 'Pinni ele', image: '../images/pinniele.jpg' }
];

let currentWater = {};
let gameOver = false;
let currentIndex = 0; // index for the next word
let score = 0; // the player's score

// function that chooses the next lake or river
function getNextWater() {
    if (currentIndex < finnishWaters.length) {
        currentWater = finnishWaters[currentIndex];
        currentIndex++;

        // finds the correct image and makes it visible on the page
        const imageElement = document.getElementById("water-image");
        imageElement.src = currentWater.image;
        imageElement.classList.remove("hidden");

    } else {
        gameOver = true;
    }
}

function showPopup(message, correctAnswer = "") {
    const popupMessage = document.getElementById("popup-message");

    // shows a message
    if (message.startsWith('Peli päättyi')) {
        popupMessage.textContent = message;
    } else if (message === 'Oikein!') {
        popupMessage.textContent = message;
    } else {
        popupMessage.textContent = `${message}, oikea vastaus on ${correctAnswer}.`;
    }

    document.getElementById("popup").classList.remove("hidden");

    // shows or hides "seuraava sana" -button
    if (message.startsWith("Peli päättyi")) {
        document.getElementById("next-word-button").classList.add("hidden");
    } else {
        document.getElementById("next-word-button").classList.remove("hidden");
    }
}

// hides the popup
function hidePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("next-word-button").classList.add("hidden"); // hides the "Seuraava sana" -button
}

// checks if the player's answer is correct
function checkAnswer() {
    const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
    if (userAnswer === currentWater.name.toLowerCase()) {
        score++;
        showPopup('Oikein!', currentWater.name); // player guessed right
    } else {
        showPopup('Väärin', currentWater.name); // reveals the correct answer if the player guessed wrong
    }

    document.getElementById("score").textContent = `Pisteet: ${score}/10`; // updates the score
}

// moves over to the next word
function nextWord() {
    if (!gameOver) {
        hidePopup();
        getNextWater();

        if (!gameOver) {
            document.getElementById("user-input").value = '';
            document.getElementById("water-image").src = currentWater.image;
        } else {
            // game over
            showPopup(`Peli päättyi. Kiitos pelaamisesta! Sait ${score}/10 pistettä.`);
            document.getElementById("new-game-button").classList.remove("hidden");
        }
    }
}

// sets up a new game
function startNewGame() {
    currentIndex = 0;
    score = 0;
    gameOver = false;
    getNextWater();
    document.getElementById("user-input").value = '';
    document.getElementById("feedback").textContent = '';
    document.getElementById("score").textContent = `Pisteet: ${score}/10`;
    document.getElementById("new-game-button").classList.add("hidden");
    hidePopup();
}

// event listeners
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("next-word-button").addEventListener("click", nextWord); 
document.getElementById("new-game-button").addEventListener("click", startNewGame);

// 
startNewGame();

