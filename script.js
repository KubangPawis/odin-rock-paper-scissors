function getComputerChoice() {
    const choiceArr = ["Rock", "Paper", "Scissors"];
    const randomizer = Math.floor(Math.random() * choiceArr.length);
    switch (randomizer) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return;
    }
}

function playRound(humanChoice, computerChoice) {
    const roundResultUpdater = document.querySelector(".round-result-container > p");

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        roundResultUpdater.textContent = "You Win! Rock beats Scissors.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        roundResultUpdater.textContent = "You Win! Scissors beats Paper."
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        roundResultUpdater.textContent = "You Win! Paper beats Rock.";
    } else if (humanChoice === computerChoice) {
        roundResultUpdater.textContent = `Draw! You both picked ${humanChoice}`;
    } else {
        computerScore++;
        roundResultUpdater.textContent = `You Lose! ${humanChoice} loses to ${computerChoice}`;
    }
}

function playGame() {
    const roundCounter = document.querySelector(".round-counter-container > h2");
    const playerScoreTracker = document.querySelector("#player-score-container > p");
    const computerScoreTracker = document.querySelector("#computer-score-container > p");
    const computerChoice = getComputerChoice();

    roundCount++;
    console.log(`ROUND #${roundCount}`);
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    playRound(humanChoice, computerChoice);
    roundCounter.textContent = `Round #${roundCount}`;
    playerScoreTracker.textContent = humanScore;
    computerScoreTracker.textContent = computerScore;

    if (humanScore === 5) {
        console.log("CONGRATULATIONS! You are the Winner.");
        alert("CONGRATULATIONS! You are the Winner.");
    } else if (computerScore === 5) {
        console.log("GAME OVER! Better luck next time.");
        alert("GAME OVER! Better luck next time.");
    }
}

function initializeDOM() {
    const choiceButtons = document.querySelectorAll(".button-container > button");
    choiceButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const targetButton = e.target;
            switch (targetButton.id) {
                case "button-rock":
                    humanChoice = "Rock";
                    break;
                case "button-paper":
                    humanChoice = "Paper";
                    break;
                case "button-scissors":
                    humanChoice = "Scissors";
                    break;
            }
            playGame();
        });
    });
}

let roundCount = 1;
let humanScore = 0;
let computerScore = 0;
let humanChoice;

initializeDOM();