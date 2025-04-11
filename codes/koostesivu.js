//Tonin pelin pisteet
const memoryGamePointsSpan = document.querySelector("#muistipeli-pisteet");
const memoryGamePoints = sessionStorage.getItem("memoryGamePoints");

// Erjan pelin pisteet
const animalGamePointsSpan = document.querySelector("#elainpeli-pisteet");
const animalGamePoints = sessionStorage.getItem("animalGameScore");

// If points in session storage are not null, adds points from session storage to website 
if (memoryGamePoints !== null) {
    memoryGamePointsSpan.textContent = memoryGamePoints
}

// Jos eläinpelissä on pisteitä, näytä ne
if (animalGamePoints !== null) {
    animalGamePointsSpan.textContent = animalGamePoints;
}
