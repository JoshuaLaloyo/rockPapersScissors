console.log(`Hello, World!`);
// this code below is to randomly generate a choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return `Rocks`;
    }
    else if (randomNumber === 1) {
        return `Papers`;
    }
    else if (randomNumber === 2) {
        return `Scissors`;
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt(`Hello player number 1, place rocks, papers or scissors to win.`);
    choice = choice.toLowerCase();
    return choice;
}
// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

