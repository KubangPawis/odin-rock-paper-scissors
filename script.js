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
        return "You Win! Rock beats Scissors.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You Win! Scissors beats Paper."
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock.";
    } else if (humanChoice === computerChoice) {
        return `Draw! You both picked ${humanChoice}`;
    } else {
        return `You Lose! ${humanChoice} loses to ${computerChoice}`;
    }
}

const NUMBER_OF_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`ROUND #${i + 1}`);
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    const roundResult = playRound(humanChoice, computerChoice);
    console.log(roundResult);
}