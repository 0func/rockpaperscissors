let playerWins = 0;
let computerWins = 0;
let playerSelects;
let computerSelects;


let rockButton = document.querySelector('rockButton');
let paperButton = document.querySelector('.paperButton');
let scissorsButton = document.querySelector('.scissorsButton');

rockButton.addEventListener('click', () => {
    return playRound('rock');
});
paperButton = addEventListener('click', () => {
    return playRound('paper');
});
scissorsButton = addEventListener('click', () => {
    return playRound('scissors');
});

function computerChoice() {
    const compChoice = ['rock', 'paper', 'scissors'];
    const choiceLength = compChoice.length;
    const choiceSelected = compChoice[Math.floor(Math.random() * choiceLength)];
    return choiceSelected;
}

function playRound(playerSelects) {
    if (playerWins === 5 || computerWins === 5) return;
    let computerPlay = computerChoice();
    if (computerPlay === 'rock') {
        if (playerSelects = 'scissors') {
            computerWins++;
            roundResult = "Better Luck Next Time!";
        } else if (playerSelects = 'paper') {
            playerWins++;
            roundResult = "You Win!";
        } else {
            roundResult = "Tie!";
        }
    } else if (computerPlay === 'paper') {
        if (playerSelects = 'scissors') {
            playerWins++;
            roundResult = "You Win!";
        } else if (playerSelects = 'rock') {
            computerWins++;
            roundResult = "Better Luck Next Time!";
        } else {
            roundResult = "Tie!";
        }
    } else if (computerPlay === 'scissors') {
        if (playerSelects = 'paper') {
            computerWins++;
            roundResult = "Better Luck Next Time!";
        } else if (playerSelects = 'rock') {
            playerWins++;
            roundResult = "You Win!";
        } else {
            roundResult = "Tie!";
        }
    }
    let textContainer = document.querySelector('#textContainer');

    if (playerWins <= 5 && computerWins <= 5) {
        roundText = document.createElement('li');
        roundText.textContent = `${roundResult} Current Score - You: ${playerWins} Computer: ${computerWins}`;
        textContainer.appendChild(roundText);
    }
    let scoreContainer = document.querySelector('#scoreContainer')
    if (playerWins === 5 && playerWins > computerWins) {
        roundText = document.createElement('h2');
        roundText.textContent = `You Won!!! Final Score - You: ${playerWins} Computer: ${computerWins}`;
        textContainer.appendChild(roundText);
    } else if (computerWins === 5 && computerWins > playerWins) {
        roundText = document.createElement('h2');
        roundText.textContent = `You Lost!!! Final Score - You: ${playerWins} Computer: ${computerWins}`;
        textContainer.appendChild(roundText)
    }
}
