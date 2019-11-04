var frontPage = document.querySelector(".front-page");
var gameBoard = document.querySelector(".gameboard");
var instructions = document.querySelector(".instruction-page");
var playButton1 = document.querySelector(".button-1");
var playButton2 = document.querySelector(".button-2");
var playerOneName = document.querySelector(".name-input-1");
var playerTwoName = document.querySelector(".name-input-2");
var cards = document.querySelectorAll(".card");

playButton1.addEventListener("click", firstClickOnPlay);
playButton2.addEventListener("click", secondClickOnPlay);
cards.forEach(card => card.addEventListener("click", flipCard));

let matched = false;
let firstCard, secondCard;


function showInstructions() {
  interpolatePlayerName1();
  frontPage.classList.add("hidden");
  gameBoard.classList.add("hidden");
  instructions.classList.remove("hidden");
}

function showGameboard() {
  interpolatePlayerName2();
  frontPage.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  instructions.classList.add("hidden");
}

function firstClickOnPlay() {
  validateName();
}

function secondClickOnPlay() {
  showGameboard()
}

function validateName() {
  if (playerOneName.value.length > 0 && playerTwoName.value.length > 0) {
    showInstructions();
  } else {
    alert("ENTER PLAYER NAME(S) TO CONTINUE");
  }
}
// Refactor...
function interpolatePlayerName1() {
  var interpolate1 = document.querySelector(".interpolate-1");
  var interpolate2 = document.querySelector(".interpolate-2");
  interpolate1.insertAdjacentHTML("afterbegin", `<span class="interpolate-1">${playerOneName.value}</span>`);
  interpolate2.insertAdjacentHTML("afterbegin", `<span class="interpolate-2">${playerTwoName.value}</span>`);
}

function interpolatePlayerName2() {
  var interpolate3 = document.querySelector(".interpolate-3");
  var interpolate4 = document.querySelector(".interpolate-4");
  interpolate3.insertAdjacentHTML("afterbegin", `<h2 class="players-name interpolate-3">${playerOneName.value}</h2>`);
  interpolate4.insertAdjacentHTML("afterbegin", `<h2 class="players-name interpolate-4">${playerTwoName.value}</h2>`);
}







// Original attempt to add other pages' html in the JavaScript.

// function showInstructions() {
//   var instructionPageHtml = `
//     <div class="instruction-page">
//       <h2>WELCOME <span class="player">${playerOneName.value}</span> & <span class="player">${playerTwoName.value}</span>!</h2>
//       <p class="instruction">The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
//       <p class="instruction">To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé. Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at them before they flip back over. Then it’s time for the other player to try!</p>
//       <p class="instruction">After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
//     </div>
//     <button class="button-2 button" type="button" name="button">PLAY GAME</button>
//   `;
//       instructions.insertAdjacentHTML("afterbegin", instructionPageHtml);
// }
//
// function showGameboard() {
//   var gameboardPageHtml = `
//     <div class="gameboard">
//       <aside class="player-1-left">
//         <div class="top-1">
//           <h2 class="gameboard-player-name">${playerOneName.value}</h2>
//         </div>
//         <div class="matches-1">
//           <h2 class="gameboard-matches">MATCHES THIS ROUND</h2>
//           <h1 class="match-count">0</h1>
//         </div>
//         <div class="game-wins-1">
//           <h2 class="wins-1">GAME WINS</h2>
//         </div>
//       </aside>
//       <div class="card-container">
//         <div class="row-1">
//           <div class="card card-1"></div>
//           <div class="card card-2"></div>
//           <div class="card card-3"></div>
//         </div>
//         <div class="row-2">
//           <div class="card card-4"></div>
//           <div class="card card-5"></div>
//           <div class="card card-6"></div>
//           <div class="card card-7"></div>
//         </div>
//         <div class="row-3">
//           <div class="card card-8"></div>
//           <div class="card card-9"></div>
//           <div class="card card-10"></div>
//         </div>
//       </div>
//       <aside class="player-2-right">
//         <div class="top-2">
//           <h2 class="gameboard-player-name">${playerTwoName.value}</h2>
//         </div>
//         <div class="matches-2">
//           <h2 class="gameboard-matches">MATCHES THIS ROUND</h2>
//           <h1 class="match-count">0</h1>
//         </div>
//         <div class="game-wins-2">
//           <h2 class="wins-2">GAME WINS</h2>
//         </div>
//       </aside>
//     </div>
//   `;
//       gameboardContainer.insertAdjacentHTML("afterbegin", gameboardPageHtml);
// }
