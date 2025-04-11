const memoryGamePointsSpan = document.querySelector("#muistipeli-pisteet");
const memoryGamePoints = sessionStorage.getItem("memoryGamePoints");

// If points in session storage are not null, adds points from session storage to website 
if (memoryGamePoints !== null) {
    memoryGamePointsSpan.textContent = memoryGamePoints
}
