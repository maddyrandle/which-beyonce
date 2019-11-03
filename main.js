var playerForm = document.querySelector(".player-form");
var playGameButton = document.querySelector(".button");
var playerOneName = document.querySelector(".input-1");
var playerTwoName = document.querySelector(".input-2");
var instructionPage = document.querySelector(".instruction-page");

playGameButton.addEventListener("click", checkNameInput)


function checkNameInput() {
  if (playerOneName.value.length > 0) {
    hidePlayerForm();
    showInstructions();
  } else {
    alert("ENTER PLAYER NAME(S) TO CONTINUE!");
  }
}

function hidePlayerForm() {
  playerForm.style.display = "none";
}

function showInstructions(name) {
  var instructionPageHtml = `
    <div class="instruction-page">
      <div class="instruction-box">
        <h2>WELCOME <span class="player">MADDY</span>!</h2>
        <p class="instruction">The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
        <p class="instruction">To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé. Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at them before they flip back over. Then it’s time for the other player to try!</p>
        <p class="instruction">After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
      </div>
      <button class="button" type="button" name="button">PLAY GAME</button>
    </div>
  `;
      instructionPage.insertAdjacentHTML("afterbegin", instructionPageHtml);
}
