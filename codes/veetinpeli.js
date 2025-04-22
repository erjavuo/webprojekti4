const words = [
    "Vuori", "Tunturi", "Föhntuuli", "Aavikko", "Kaupunki", "Maaseutu", "Niagara",
    "Tulivuori", "Rotko", "Mannerlaatta", "Venetsia", "Eroosio", "Laava", "Tasanko",
    "Jääkausi", "Kraateri", "Joki", "Lämpövyöhyke", "Koli", "Manner"
  ];

const button = document.getElementById('startButton');
const buttonNext = document.getElementById('showNextWord');
const buttonCorrect = document.getElementById('correctGuess');

button.addEventListener("click", startGame);
buttonNext.addEventListener("click", showNextWord);
buttonCorrect.addEventListener("click", correctGuess);

  let availableWords = []; // Tyhjenee sitä mukaa kun sanoja näytetään
  let currentWord = '';
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
 
  // Function that starts the game
  function startGame(){
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("showNextWord").style.display = "inline-block";
    document.getElementById("correctGuess").style.display = "inline-block";

    score = 0;
    timeLeft = 60;
    document.getElementById("score").textContent = "Pisteet: 0";
    startTimer();
    showNextWord();
  }

  // function that gets a random word from the array
  function getRandomWord() {
    if (availableWords.length === 0) return null;
    const index = Math.floor(Math.random() * availableWords.length);
    const word = availableWords[index];
    availableWords.splice(index, 1); // Poistaa sanan listasta
    return word;
  }

  // function that gets a random word to span element
  function showNextWord() {
    const word = getRandomWord();
    if (word === null) {
      endGame("Kaikki sanat käytetty!");
      return;
    }
    document.getElementById("randomWord").textContent = word;
  }

  // function that adds a point to the score for right answer
  function correctGuess() {
    score++;
    document.getElementById("score").textContent = `Pisteet: ${score}`;
    showNextWord();
  }

  // function that starts the timer made in html
  function startTimer() {
    document.getElementById("timer").textContent = `Aikaa jäljellä: ${timeLeft} sekuntia`;
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Aikaa jäljellä: ${timeLeft} sekuntia`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  // function that ends the game
  function endGame() {
    document.getElementById("word").textContent = "Aika loppui!";
      document.getElementById("showNextWord").style.display = "none";
      document.getElementById("correctGuess").style.display = "none";
  }
  
  