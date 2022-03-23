"use strict"
const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('user-choice')
const resultDispaly = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')


let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or your can use possibleChoices.lenth
    console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = 'rock';
    }

    if(randomNumber === 2) {
        computerChoice = 'paper';
    }

    if(randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "it's an draw ..!";
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you Won ..!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you Won ..!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you Won ..!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you lost ..!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost ..!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost ..!"
    }
    resultDispaly.innerHTML = result;
}
