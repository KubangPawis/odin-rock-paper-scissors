function getComputerChoice() {
    const choiceArr = ["Rock", "Paper", "Scissors"];
    const randomizer = Math.floor(Math.random() * choiceArr.length);
    console.log(`Randomizer Value: ${randomizer}`);

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
        humanPrompt = prompt("ROCK, PAPER, or SCISSORS?");
        humanPrompt = humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase();

        if (!choiceArr.includes(humanPrompt)) {
            alert("Invalid answer! Please try again...");
        }
    }
    return humanPrompt;
}

const NUMBER_OF_ROUNDS = 5;

for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log(`Computer - Round #${i + 1}: ` + computerChoice);
    console.log(`Human - Round #${i + 1}: ` + humanChoice);
}