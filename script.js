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

function getHumanChoice() {
    const choiceArr = ["Rock", "Paper", "Scissors"];
    let humanPrompt;

    while (!choiceArr.includes(humanPrompt)) {
        humanPrompt = prompt("ROCK, PAPER, or SCISSORS?").trim();
        humanPrompt = humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase();

        if (!choiceArr.includes(humanPrompt)) {
            alert("Invalid answer! Please try again...");
        }
    }
    return humanPrompt;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return "You Win! Scissors beats Paper."
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You Win! Paper beats Rock.";
    } else if (humanChoice === computerChoice) {
        return `Draw! You both picked ${humanChoice}`;
    } else {
        computerScore++;
        return `You Lose! ${humanChoice} loses to ${computerChoice}`;
    }
}

function playGame() {
    alert("~ LET'S PLAY ROCK-PAPER-SCISSORS ~");

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log(`ROUND #${i + 1}`);
        console.log("Computer: " + computerChoice);
        console.log("Human: " + humanChoice);

        const roundResult = playRound(humanChoice, computerChoice);
        console.log(roundResult);
    }

    if (humanScore > computerScore) {
        alert("CONGRATULATIONS! You are the Winner.");
        console.log("CONGRATULATIONS! You are the Winner.");
    } else if (humanScore < computerScore) {
        alert("GAME OVER! Better luck next time.");
        console.log("GAME OVER! Better luck next time.");
    } else {
        alert("You DREW! Play another game?");
        console.log("You DREW! Play another game?");
    }
}

const NUMBER_OF_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

playGame();