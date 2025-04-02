const gameContainer = document.querySelector("#game-container");
const startScreen = document.querySelector("#start-game-screen");
const endScreen = document.querySelector(".end-screen");
const playerScore = document.querySelector(".score");
const playButton = document.querySelector(".play-button");
const resetButton = document.querySelector(".play-again")
const playerTries = document.querySelector(".tries");
const divs = gameContainer.getElementsByTagName("div");
let cards = [];
let cardElements = [];
let firstCard, secondCard;
let lockTheGame = false;
let score = 0;
let tries = 15;
document.querySelector(".score").textContent = score;
document.querySelector(".tries").textContent = tries;


createCards();
shuffleCards();
generateCards();

playButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameContainer.style.display = "grid";
});

resetButton.addEventListener("click", resetGame);

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

    // Makes array of card div elements for index cheking.
    for (let i = 0; i < divs.length; i++) {
        cardElements.push(divs[i]);
    };
};


function flipCard(e) {
    if (lockTheGame) return; // If lockTheGame is true, the game does not let player to flip the cards.
    if (this === firstCard) return; // The game wont let player to flip same card twice.
    e.target.src = cards[cardElements.indexOf(this)].frontimg; // Changes cards image to frontimg when clicked

    // The first card player clicks is added to firstCard variable.
    if (!firstCard) {
        firstCard = this;
        return
    };
    secondCard = this;
    lockTheGame = true;
    checkIfMatching();
    endGame();
};

function checkIfMatching() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    if (isMatch) {
        score+=2;
        tries--;
        document.querySelector(".tries").textContent = tries;
        document.querySelector(".score").textContent = score;
        sessionStorage.setItem("memoryGamePoints", score) // Add points to session storage.
        disableCards();
    } else {
        tries--;
        document.querySelector(".tries").textContent = tries;
        unflipCards();
    };
};

// When the player gets same pair of cards, the function disables the click event of the cards.
function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetCards();
};

// After 1 second when the cards didnt match, the function flips the cards back.
function unflipCards() {
    const firstCardimg = firstCard.getElementsByTagName("img")
    const secondCardimg = secondCard.getElementsByTagName("img")

    setTimeout(() => {
        firstCardimg[0].src = cards[cardElements.indexOf(firstCard)].backimg;
        secondCardimg[0].src = cards[cardElements.indexOf(secondCard)].backimg;
        resetCards()
    }, 1000);
};

function resetCards() {
    firstCard = null;
    secondCard = null;
    lockTheGame = false;
};

// Cleans everything and starts game again.
function resetGame() {
    score = 0;
    tries = 15;
    cards = [];
    cardElements = [];
    sessionStorage.removeItem("memoryGamePoints")
    document.querySelector(".tries").textContent = tries;
    document.querySelector(".score").textContent = score;
    endScreen.style.display = "none"
    gameContainer.style.display = "grid";
    gameContainer.innerHTML = "";
    resetCards();
    createCards()
    shuffleCards();
    generateCards();
};

// Game ends after 1 second when player has 10 points or 0 tries left.
function endGame() {
    if (score === 10 || tries === 0) {
        setTimeout(() => {
            gameContainer.style.display = "none";
            endScreen.style.display = "block";
        },1000);
    };
};