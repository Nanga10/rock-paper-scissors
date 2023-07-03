const btnRock = document.getElementById("rock-btn");
const btnPaper = document.getElementById("paper-btn");
const btnScissors = document.getElementById("scissors-btn");

let handPlayerEl = document.getElementById("player-hand-element");
let handCpuEl = document.getElementById("cpu-hand-element");
let arrPlay = ["ROCK", "PAPER", "SCISSORS"];
let handPlayer = " ";
let handCpu = " ";
let statusEl = document.getElementById("status-element");

btnRock.addEventListener("click", function () {
  handPlayer = "ROCK";
  handPlayerEl.textContent = handPlayer;
  cpuHand();
  gameStatus();
});

btnPaper.addEventListener("click", function () {
  handPlayer = "PAPER";
  handPlayerEl.textContent = handPlayer;
  cpuHand();
  gameStatus();
});

btnScissors.addEventListener("click", function () {
  handPlayer = "SCISSORS";
  handPlayerEl.textContent = handPlayer;
  cpuHand();
  gameStatus();
});

function cpuHand() {
  let numRandom = Math.floor(Math.random() * 3);
  handCpu = arrPlay[numRandom];
  //console.log(numRandom)
  handCpuEl.textContent = handCpu;
}

function gameStatus() {
  if (
    (handPlayer == "PAPER" && handCpu == "ROCK") ||
    (handPlayer == "ROCK" && handCpu == "SCISSORS") ||
    (handPlayer == "SCISSORS" && handCpu == "PAPER")
  ) {
    statusEl.textContent = "YOU WIN";
  } else if (
    (handPlayer == "ROCK" && handCpu == "ROCK") ||
    (handPlayer == "SCISSORS" && handCpu == "SCISSORS") ||
    (handPlayer == "PAPER" && handCpu == "PAPER")
  ) {
    statusEl.textContent = "TIE! LETS GO AGAIN";
  } else {
    statusEl.textContent = "YOU LOSE";
  }
}

// keep track of score
