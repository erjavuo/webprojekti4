const spanForSumOfPoints = document.getElementById("pisteet-yhteensa");
let sumOfPoints = 0;

//Points of Toni's game
const memoryGamePointsSpan = document.querySelector("#muistipeli-pisteet");
const memoryGamePoints = sessionStorage.getItem("memoryGamePoints");

// Points of Erjas' game
const animalGamePointsSpan = document.querySelector("#elainpeli-pisteet");
const animalGamePoints = sessionStorage.getItem("animalGameScore");

// Points of Liisa's game
const wordmixGamePointsSpan = document.querySelector("#sanasekoitus-pisteet");
const wordmixGamePoints = sessionStorage.getItem("wordmixGamePoints");

// Points of Rasmus's game
const whatanimalGamePointsSpan = document.querySelector("#mikaelain-pisteet");
const whatanimalGamePoints = sessionStorage.getItem("whatanimalgamepoints");

// If points in session storage are not null, adds points from session storage to website 
if (memoryGamePoints !== null) {
    memoryGamePointsSpan.textContent = memoryGamePoints
    sumOfPoints+=Number(memoryGamePoints)
    spanForSumOfPoints.textContent = sumOfPoints;
}

// Jos eläinpelissä on pisteitä, näytä ne
if (animalGamePoints !== null) {
    animalGamePointsSpan.textContent = animalGamePoints;
    sumOfPoints+=Number(animalGamePoints)
    spanForSumOfPoints.textContent = sumOfPoints;
}

// Sanasekoitus: If points in session storage are not null, adds points from session storage to website 
if (wordmixGamePoints !== null) {
    wordmixGamePointsSpan.textContent = wordmixGamePoints;
    sumOfPoints+=Number(wordmixGamePoints)
    spanForSumOfPoints.textContent = sumOfPoints;
}

//If points in session storage are not null, add points from whatanimalgame
if (whatanimalGamePoints !== null) {
    whatanimalGamePointsSpan.textContent = whatanimalGamePoints;
    sumOfPoints+=Number(whatanimalGamePoints)
    spanForSumOfPoints.textContent = sumOfPoints;
}
