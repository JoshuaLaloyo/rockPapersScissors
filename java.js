console.log(`Hello, World!`);
// this code below is to randomly generate a choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return `rocks`;
    }
    else if (randomNumber === 1) {
        return `papers`;
    }
    else if (randomNumber === 2) {
        return `scissors`;
    }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt(`Hello player number 1, place rocks, papers or scissors to win.`);
    choice = choice;
    return choice;
}
// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie!`;
    }
    else if ((humanChoice === `rocks` && computerChoice === `scissors`) ||
             (humanChoice === `papers`&& computerChoice === `rocks`) ||
             (humanChoice === "scissors" && computerChoice === `papers`)) {
        console.log(`Your Score: ${humanScore++}`, `Computer Score: ${computerScore}`);
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if ((computerChoice === `rocks` && humanChoice === `scissors`) ||
             (computerChoice === `papers` && humanChoice === `rocks`) ||
             (computerChoice === `scissors` && humanChoice === `papers`)) {
        console.log(`Your Score: ${humanScore}`, `Computer Score: ${computerScore++}`);
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else {
        return `Invalid choice! Please choose rocks, papers, or scissors.`;
    }
}
// const humanSelection = getHumanChoice().toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection));

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
}
terminal.log(`Final Score: Your Score: ${humanScore}, Computer Score: ${computerScore}`);