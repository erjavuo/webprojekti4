// Alkuperäiset vesistöt ja niiden sekoitukset
const finnishWaters = [
    { name: 'Kemijoki', mixed: 'Keijo kim', image: '../images/kemijoki.jpg' },
    { name: 'Tornionjoki', mixed: 'Trikoo jonni', image: '../images/Tornionjoki_wikimedia_commons_mainitse_kuvaaja_ym_lahteet.jpg' },
    { name: 'Kalajoki', mixed: 'laKki ajo', image: '../images/kalajoki.jpg' },
    { name: 'Aurajoki', mixed: 'Aika rujo', image: '../images/aurajoki.jpg' },
    { name: 'Muonionjoki', mixed: 'kiMono jouni', image: '../images/muonionjoki_wikimedia_commons_mainitse_kuvaaja_ym_lahteet.jpg' },
    { name: 'Saimaa', mixed: 'maaSai', image: '../images/saimaa.jpg' },
    { name: 'Päijänne', mixed: 'Penni jää', image: '../images/lake-paijanne-7366872_640.jpg' },
    { name: 'Oulujärvi', mixed: 'väli juOru', image: '../images/lake-oulu.jpg' },
    { name: 'Keitele', mixed: 'ele itKe', image: '../images/lake-keitele_goodfreephotos_mainitse.jpg' },
    { name: 'Pielinen', mixed: 'Pinni ele', image: '../images/pielinen.jpg' }
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

        // Päivitä kuva tähän!
        const imageElement = document.getElementById("water-image");
        imageElement.src = currentWater.image;
        imageElement.classList.remove("hidden");

    } else {
        gameOver = true;
    }
}

// Funktio näyttää ponnahdusikkunan
 function showPopup(message, correctAnswer) {
    const popupMessage = document.getElementById("popup-message");

    if (message === 'Oikein!') {
        popupMessage.textContent = message;
    } else if (message === 'Peli päättyi. Kiitos!') {
        popupMessage.textContent = message;
    } else {
        popupMessage.textContent = `${message}, oikea vastaus on ${correctAnswer}.`;
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
        showPopup('Oikein!', currentWater.name); // annetaan oikea vastaus merkkijonona
    } else {
        showPopup('Väärin', currentWater.name); // annetaan oikea vastaus vaikka meni väärin
    }

    document.getElementById("score").textContent = `Pisteet: ${score}/10`; // päivitä pistemäärä
}

// Siirry seuraavaan sanaan
function nextWord() {
    if (!gameOver) {
        hidePopup();
        getNextWater();

        if (!gameOver) {
            document.getElementById("mixed-word").textContent = currentWater.mixed;
            document.getElementById("user-input").value = '';
        } else {
            showPopup("Peli päättyi. Kiitos!", ""); // näyttää lopetusviestin popupissa
            document.getElementById("new-game-button").classList.remove("hidden");
        }
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

