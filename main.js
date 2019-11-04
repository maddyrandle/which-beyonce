var frontPage = document.querySelector(".front-page");
var instructions = document.querySelector(".instruction-page");
var gameBoard = document.querySelector(".gameboard");
var playButton1 = document.querySelector(".button-1");
var playButton2 = document.querySelector(".button-2");
var playerName1 = document.querySelector(".name-input-1");
var playerName2 = document.querySelector(".name-input-2");


playButton1.addEventListener("click", firstOnPlayClick);
playButton2.addEventListener("click", secondOnPlayClick);


function firstOnPlayClick() {
  validateName();

}

function secondOnPlayClick() {
  showGameboard()
}

function validateName() {
  if (playerName1.value.length > 0 && playerName2.value.length > 0) {
    showInstructions();
  } else {
    alert("ENTER PLAYER NAME(S) TO CONTINUE");
  }
}

function showInstructions() {
    instructions.classList.remove("hidden");
    frontPage.classList.add("hidden");
    gameBoard.classList.add("hidden");
}

function showGameboard() {
    gameBoard.classList.remove("hidden");
    instructions.classList.add("hidden");
    frontPage.classList.add("hidden");
}


// function showInstructions() {
//   playGameButton.classList.add("hidden");
//   var instructionPageHtml = `
//     <div class="instruction-page hidden">
//     <div class="instruction-box">
//       <h2>WELCOME <span class="player">${playerOneName.value}</span> & <span class="player">${playerTwoName.value}</span>!</h2>
//       <p class="instruction">The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
//       <p class="instruction">To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé. Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at them before they flip back over. Then it’s time for the other player to try!</p>
//       <p class="instruction">After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
//     </div>
//     <button class="button-2 button" type="button" name="button">PLAY GAME</button>
//     </div>
//   `;
//       instructionPage.insertAdjacentHTML("afterbegin", instructionPageHtml);
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
