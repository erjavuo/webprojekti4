const words = [
    "Vuori", "Tunturi", "Föhntuuli", "Aavikko", "Kaupunki", "Maaseutu", "Niagara",
    "Tulivuori", "Rotko", "Mannerlaatta", "Venetsia", "Eroosio", "Laava", "Tasanko",
    "Jääkausi", "Kraateri", "Joki", "Lämpövyöhyke", "Koli", "Manner"
  ];

const button = document.getElementById('startButton');
const buttonNext = document.getElementById('showNextWord()');

button.addEventListener("click", startGame);

  let currentWord = '';
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
 
  // Function that starts the game
  function startGame(){
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    score = 0;
    timeLeft = 60;
    document.getElementById("score").textContent = "Pisteet: 0";
    startTimer();
    showNextWord();
  }

  // function that gets a random word from the array
  function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }




  
 