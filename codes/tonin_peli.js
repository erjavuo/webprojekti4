const gameContainer = document.querySelector("#game-container");
const startScreen = document.querySelector("#start-game-screen");
const playerScore = document.querySelector(".score");
const playButton = document.querySelector(".play-button");
const cards = [];
let firstCard, secondCard;
let score = 0;
document.querySelector(".score").textContent = score;

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
                flipped: false,
            };
            cards.push(card);
        };        
    };
};

// Shuffles cards array.
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
};


function flipCard(e) {
    const cardElements = gameContainer.getElementsByTagName("div")
    console.log(this);
    // When clicking a card, this checks if div's data-name is same as cards id.
    // If it is, then flip the card.
    for (let i = 0; i < cards.length; i++) {
        if (this.dataset.name == cards[i].id)
            e.target.src = cards[i].frontimg;
    };
};
