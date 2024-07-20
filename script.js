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

const NUMBER_OF_ROUNDS = 5;

for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const computerChoice = getComputerChoice();
    console.log(`Round #${i + 1}: ` + computerChoice);
}