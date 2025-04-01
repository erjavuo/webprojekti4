const gameContainer = document.querySelector("#game-container");
const startScreen = document.querySelector("#start-game-screen");
const playerScore = document.querySelector(".score");
const playButton = document.querySelector(".play-button");
const cards = [];
let firstCard, secondCard;
let lockTheGame = false;
let score = 0;
document.querySelector(".score").textContent = score;

const divs = gameContainer.getElementsByTagName("div");
const cardElements = [];

createCards();
shuffleCards();
generateCards();

playButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameContainer.style.display = "grid";
});

function createCards() {
    // Makes copy of each card once.
    for(let i = 0; i < 2; i++) {
        // Creates and adds card objects to the cards array.
        for(let i = 1; i < 6; i++) {
            const card = {
                id: i,
                frontimg: `../images/tonin_muistipeli/kuva${i}.jpg`,
                backimg: "../images/tonin_muistipeli/backimage.jpg",
            };
            cards.push(card);
        };        
    };
};

// Shuffles the cards array.
function shuffleCards() {
    cards.sort(() => Math.random() - 0.5);
};

// Creates card images, card elements and adds them to HTML.
function generateCards() {
    for (let card of cards) {
        const cardImage = document.createElement("img");
        const cardElement = document.createElement("div");

        cardImage.src = card.backimg;
        cardElement.setAttribute("data-name", card.id)
        cardElement.classList.add("card");
        cardElement.appendChild(cardImage);
        gameContainer.appendChild(cardElement);
        // Adds click event to the card element so it flips when clicked.
        cardElement.addEventListener("click", flipCard);
    };

    for (let i = 0; i < divs.length; i++) {
        cardElements.push(divs[i]);
    };
};


function flipCard(e) {
    // If lockTheGame is true, the game does not let player to flip the cards.
    if (lockTheGame) return;
    // The game wont let player to flip same card twice.
    if (this === firstCard) return;
    e.target.src = cards[cardElements.indexOf(this)].frontimg;
    if (!firstCard) {
        firstCard = this;
        console.log(firstCard);
        return
    }

    secondCard = this;
    lockTheGame = true;
    checkIfMatching();
};

function checkIfMatching() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    if (isMatch) {
        score+=2
        document.querySelector(".score").textContent = score;
        disableCards();
    } else {
        unflipCards();
    };
};

// When the player gets same pair of cards, the function disables the click event of the cards.
function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetCards();
};

// After 2 seconds when the cards didnt match, the function flips the cards back.
function unflipCards() {
    const firstCardimg = firstCard.getElementsByTagName("img")
    const secondCardimg = secondCard.getElementsByTagName("img")

    setTimeout(() => {
        firstCardimg[0].src = cards[cardElements.indexOf(firstCard)].backimg;
        secondCardimg[0].src = cards[cardElements.indexOf(secondCard)].backimg;
        resetCards()
    }, 2000);
};

function resetCards() {
    firstCard = null;
    secondCard = null;
    lockTheGame = false;
};