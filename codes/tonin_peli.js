const gameContainer = document.querySelector("#game-container");
const startScreen = document.querySelector("#start-game-screen");
const playerScore = document.querySelector(".score");
const playButton = document.querySelector(".play-button");
const cards = [];
let score = 0;

createCards()
generateCards()

playButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameContainer.style.display = "grid";

})

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
// Creates card images, card elements and adds them to HTML.
function generateCards() {
    for (let card of cards) {
        const cardImage = document.createElement("img")
        const cardElement = document.createElement("div");

        cardImage.src = card.frontimg
        cardElement.classList.add("card");
        cardElement.appendChild(cardImage)
        gameContainer.appendChild(cardElement)
    }
}