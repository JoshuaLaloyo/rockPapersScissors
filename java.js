console.log(`Hello World`)
const body = document.querySelector(`body`);
const rocks = document.createElement(`button`);
const papers = document.createElement(`button`);
const scissors = document.createElement(`button`);
const paragraph = document.createElement(`p`)
const paragraph1 = document.createElement(`p`);
const paragraph2 = document.createElement(`p`);
const paragraph3 = document.createElement(`p`);
rocks.textContent = `Rocks`;
papers.textContent = `Papers`;
scissors.textContent = `Scissors`;
body.appendChild(rocks);
body.appendChild(papers);
body.appendChild(scissors);
body.appendChild(paragraph);
body.appendChild(paragraph1);
body.appendChild(paragraph2);
body.appendChild(paragraph3);

let computerChoice = ``;
function getComputerChoice() {
    const random = Math.floor(Math.random()*3)
    if (random === 0) {
        computerChoice = `rocks`;
        return computerChoice;
    } else if (random === 1) {
        computerChoice = `papers`;
        return computerChoice;
    }
    computerChoice = `scissors`;
    return computerChoice;
}
function getHumanChoice(){
    const humanChoice = this.textContent.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
function playRound() {
    if (roundCount >= 5) return; // Only allow 5 rounds
    const humanChoice = getHumanChoice.call(this);
    const computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        paragraph1.textContent = `Your score: ${humanScore}`;
        paragraph2.textContent = `Computer score: ${computerScore}`;
        paragraph.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (computerChoice === `rocks` && humanChoice === `scissors`) ||
        (computerChoice === `papers` && humanChoice === `rocks`) ||
        (computerChoice === `scissors` && humanChoice === `papers`)
    ) {
        computerScore++;
        paragraph1.textContent = `Your score: ${humanScore}`;
        paragraph2.textContent = `Computer score: ${computerScore}`;
        paragraph.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        humanScore++;
        paragraph1.textContent = `Your score: ${humanScore}`;
        paragraph2.textContent = `Computer score: ${computerScore}`;
        paragraph.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    roundCount++;
    if (roundCount === 5) {
        paragraph2.textContent = `Final Score - Your Score: ${humanScore}, Computer Score: ${computerScore}`;
        if (humanScore > computerScore) {
            paragraph3.textContent += ` You win the game!`;
        } else if (humanScore < computerScore) {
            paragraph3.textContent += ` You lose the game!`;
        } else {
            paragraph2.textContent += ` It's a tie!`;
        }
    }
}

rocks.addEventListener(`click`, playRound);
papers.addEventListener(`click`, playRound);
scissors.addEventListener(`click`, playRound);