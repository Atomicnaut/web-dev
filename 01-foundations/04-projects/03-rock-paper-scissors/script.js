// Variables
let playerScore = 0;
let computerScore = 0;
let roundWinner;
let choices = ["rock", "paper", "scissors"];

// DOM
const roundMessage = document.querySelector("#round-message");
const roundInfo = document.querySelector("#round-info");
const playerSign = document.querySelector("#player-sign");
const playerScoreDiv = document.querySelector("#player-score");
const computerSign = document.querySelector("#computer-sign");
const computerScoreDiv = document.querySelector("#computer-score");
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const resetButton = document.querySelector("#reset");

// Click Events
rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));
resetButton.addEventListener("click", resetGame);

// Functions
function isGameOver() {
	return playerScore === 5 || computerScore === 5;
}

function getComputerChoice() {
	let random = Math.floor(Math.random() * 3);
	return choices[random];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) roundWinner = "tie";
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		playerScore++;
		roundWinner = "player";
	}
	if (
		(computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "rock")
	) {
		computerScore++;
		roundWinner = "computer";
	}
	updateScore(roundWinner, playerSelection, computerSelection);
}

function handleClick(playerSelection) {
	roundMessage.classList.remove("typewriter");
	roundMessage.classList.remove("complete-typewriter");

	// Get computer choice
	const computerSelection = getComputerChoice();
	// Play one round
	playRound(playerSelection, computerSelection);

	// Check if game is over after round
	if (isGameOver()) {
		if (playerScore > computerScore) {
			roundMessage.textContent = "Congratulations, You Win!";
			roundInfo.textContent = "Play Again?";
			resetButton.textContent = "Play Again";
		} else {
			roundMessage.textContent = "Sorry, You Lose!";
			roundInfo.textContent = "Play Again?";
			resetButton.textContent = "Play Again";
		}

		// Disable buttons
		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;

		// Style disabled buttons
		rockButton.setAttribute("style", "opacity: 0.5; pointer-events: none;");
		paperButton.setAttribute("style", "opacity: 0.5; pointer-events: none;");
		scissorsButton.setAttribute("style", "opacity: 0.5; pointer-events: none;");
	}
}

function updateScore(winner, playerSelection, computerSelection) {
	// Update round message
	if (winner === "tie") roundMessage.textContent = "It's a Tie!";
	if (winner === "player") roundMessage.textContent = "You Win!";
	if (winner === "computer") roundMessage.textContent = "You Lose!";

	// Update round info
	if (winner === "player") {
		switch (playerSelection) {
			case "rock":
				roundInfo.textContent = "Rock crushes Scissors";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #B4D08A;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #ff4754;"
				);
				break;
			case "paper":
				roundInfo.textContent = "Paper smothers Rock";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #B4D08A;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #ff4754;"
				);
				break;
			case "scissors":
				roundInfo.textContent = "Scissors cuts Paper";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #B4D08A;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #ff4754;"
				);
				break;
			default:
				break;
		}
	} else if (winner === "computer") {
		switch (computerSelection) {
			case "rock":
				roundInfo.textContent = "Rock crushes Scissors";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #ff4754;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #B4D08A;"
				);
				break;
			case "paper":
				roundInfo.textContent = "Paper smothers Rock";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #ff4754;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #B4D08A;"
				);
				break;
			case "scissors":
				roundInfo.textContent = "Scissors cuts Paper";
				// Update sign colors
				playerSign.setAttribute("style", "text-shadow: 0 0 0 #ff4754;");
				computerSign.setAttribute(
					"style",
					"text-shadow: 0 0 0 #B4D08A;"
				);
				break;
			default:
				break;
		}
	} else {
		roundInfo.textContent = `${capitalizeFirstLetter(
			playerSelection
		)} equals ${capitalizeFirstLetter(computerSelection)}`;
		// Update sign colors
		playerSign.setAttribute("style", "text-shadow: 0 0 0 #f5f5f544;");
		computerSign.setAttribute("style", "text-shadow: 0 0 0 #f5f5f544;");
	}

	// Update choice icons
	switch (playerSelection) {
		case "rock":
			playerSign.classList = "";
			playerSign.textContent = "";
			playerSign.classList.add("question-sign");
			playerSign.classList.add("fa-regular");
			playerSign.classList.add("fa-hand-back-fist");
			playerSign.classList.add("fa-rotate-90");
			break;
		case "paper":
			playerSign.classList = "";
			playerSign.textContent = "";
			playerSign.classList.add("question-sign");
			playerSign.classList.add("fa-regular");
			playerSign.classList.add("fa-hand");
			break;
		case "scissors":
			playerSign.classList = "";
			playerSign.textContent = "";
			playerSign.classList.add("question-sign");
			playerSign.classList.add("fa-regular");
			playerSign.classList.add("fa-hand-scissors");
			playerSign.classList.add("fa-flip-horizontal");
			break;
		default:
			break;
	}
	switch (computerSelection) {
		case "rock":
			computerSign.classList = "";
			computerSign.textContent = "";
			computerSign.classList.add("question-sign");
			computerSign.classList.add("fa-regular");
			computerSign.classList.add("fa-hand-back-fist");
			computerSign.classList.add("fa-rotate-90");
			break;
		case "paper":
			computerSign.classList = "";
			computerSign.textContent = "";
			computerSign.classList.add("question-sign");
			computerSign.classList.add("fa-regular");
			computerSign.classList.add("fa-hand");
			break;
		case "scissors":
			computerSign.classList = "";
			computerSign.textContent = "";
			computerSign.classList.add("question-sign");
			computerSign.classList.add("fa-regular");
			computerSign.classList.add("fa-hand-scissors");
			computerSign.classList.add("fa-flip-horizontal");
			break;
		default:
			break;
	}

	// Update scores
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;
}

function capitalizeFirstLetter(string) {
	return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

function resetGame() {
	// Update round info messages
	roundMessage.classList.add("complete-typewriter");
	roundMessage.textContent = "Choose your weapon:";
	roundInfo.textContent = "First to score 5 wins";

	// Reset scores
	playerScore = 0;
	computerScore = 0;

	// Reset score divs
	playerScoreDiv.textContent = "0";
	computerScoreDiv.textContent = "0";

	// Change reset button back
	resetButton.textContent = "Reset";

	// Change player and computer signs back
	playerSign.classList = "";
	playerSign.textContent = "";
	playerSign.classList.add("question-sign");
	playerSign.classList.add("fa-solid");
	playerSign.classList.add("fa-question");
	computerSign.classList = "";
	computerSign.textContent = "";
	computerSign.classList.add("question-sign");
	computerSign.classList.add("fa-solid");
	computerSign.classList.add("fa-question");
	playerSign.setAttribute("style", "text-shadow: 0 0 0 #f5f5f544;");
	computerSign.setAttribute("style", "text-shadow: 0 0 0 #f5f5f544;");

	// Enable buttons
	rockButton.disabled = false;
	paperButton.disabled = false;
	scissorsButton.disabled = false;

	// Style enabled buttons
	rockButton.setAttribute("style", "cursor: pointer; opacity: 1;");
	paperButton.setAttribute("style", "cursor: pointer; opacity: 1;");
	scissorsButton.setAttribute("style", "cursor: pointer; opacity: 1;");
}
