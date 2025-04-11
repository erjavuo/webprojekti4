// Alkuperäiset vesistöt ja niiden sekoitukset
const finnishWaters = [
    { name: 'Kemijoki', mixed: 'Keijo kim' },
    { name: 'Tornionjoki', mixed: 'Trikoo jonni' },
    { name: 'Kalajoki', mixed: 'laKki ajo' },
    { name: 'Aurajoki', mixed: 'Aika rujo' },
    { name: 'Muonionjoki', mixed: 'kiMono jouni' },
    { name: 'Saimaa', mixed: 'maaSai' },
    { name: 'Päijänne', mixed: 'Penni jää' },
    { name: 'Oulujärvi', mixed: 'väli juOru' },
    { name: 'Keitele', mixed: 'ele itKe' },
    { name: 'Pielinen', mixed: 'Pinni ele' }
];

let currentWater = {};
let gameOver = false;
let currentIndex = 0; // Seuraavan sanan index
let score = 0; // Pelaajan pistemäärä

// Funktio valitsee seuraavan vesistön
function getNextWater() {
    if (currentIndex < finnishWaters.length) {
        currentWater = finnishWaters[currentIndex];
        currentIndex++;
    } else {
        gameOver = true; // Peli päättyy, kun kaikki sanat on käyty läpi
    }
}

// Funktio näyttää ponnahdusikkunan
function showPopup(message, correctAnswer) {
    const popupMessage = document.getElementById("popup-message");
    if (correctAnswer) {
        popupMessage.textContent = `Oikein!`;
    } else {
        popupMessage.textContent = `Väärin, oikea vastaus on ${correctAnswer}.`;
    }

    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("next-word-button").classList.remove("hidden"); // Näytetään "Seuraava sana" -nappi
}

// Funktio piilottaa ponnahdusikkunan
function hidePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("next-word-button").classList.add("hidden"); // Piilotetaan "Seuraava sana" -nappi
}

// Tarkistetaan, onko käyttäjän vastaus oikea
function checkAnswer() {
    const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();
    if (userAnswer === currentWater.name.toLowerCase()) {
        score++;
        showPopup('Oikein!', true);
    } else {
        showPopup('Väärin', false);
    }

    // Päivitä pistemäärä
    document.getElementById("score").textContent = `Pisteet: ${score}/10`;
}

// Siirry seuraavaan sanaan
function nextWord() {
    if (!gameOver) {
        hidePopup();
        getNextWater();
        document.getElementById("mixed-word").textContent = currentWater.mixed;
        document.getElementById("user-input").value = '';
    } else {
        document.getElementById("new-game-button").classList.remove("hidden");
    }
}

// Asetetaan uusi peli
function startNewGame() {
    currentIndex = 0;
    score = 0;
    gameOver = false;
    getNextWater();
    document.getElementById("mixed-word").textContent = currentWater.mixed;
    document.getElementById("user-input").value = '';
    document.getElementById("feedback").textContent = '';
    document.getElementById("score").textContent = `Pisteet: ${score}/10`;
    document.getElementById("new-game-button").classList.add("hidden");
    hidePopup();
}

// Tapahtumankuuntelijat
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("next-word-button").addEventListener("click", nextWord); // "Seuraava sana" -nappi
document.getElementById("new-game-button").addEventListener("click", startNewGame);

// Aloitetaan peli
startNewGame();