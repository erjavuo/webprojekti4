const words = [
    "Vuori", "Tunturi", "Föhntuuli", "Aavikko", "Kaupunki", "Maaseutu", "Niagara",
    "Tulivuori", "Rotko", "Mannerlaatta", "Venetsia", "Eroosio", "Laava", "Tasanko",
    "Jääkausi", "Kraateri", "Joki", "Lämpövyöhyke", "Koli", "Manner"
  ];

const button = document.getElementById('startButton');

button.addEventListener("click", startGame);

  let currentWord = '';
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
 
  // Function that starts the game
  function startGame(){
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    showNextWord();
  }

  
 