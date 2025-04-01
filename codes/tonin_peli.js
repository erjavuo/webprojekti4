const images = [];


function createCards() {
    // Makes copy of each card once.
    for(let i = 0; i < 2; i++) {
        // Creates and adds card objects to the array.
        for(let i = 1; i < 5; i++) {
            const card = {
                id: i,
                frontimg: `../images/tonin_muistipeli/kuva${i}.jpg`,
                backimage: "../images/tonin_muistipeli/backimage.jpg",
                flipped: false,
            };
            images.push(card);
        };        
    };
};
