function getComputerChoice(){
    let ranNum = Math.floor(Math.random()*3);
    // ranNum will be: 0, 1 or 2

    let choice;

    if (ranNum === 0){
        choice = 'rock';
    }
    else if (ranNum === 1){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }

    return choice;
}

function playRound(playerSelection, computerSelection){
    let result;

    if (playerSelection === computerSelection){
        result = [0, 'This round is a tie']
    }
    else if ((playerSelection === 'rock') && (computerSelection == 'scissors') ||
       (playerSelection === 'paper') && (computerSelection === 'rock')   ||
       (playerSelection === 'scissors') && (computerSelection === 'paper')){
        result = [1, 'You win this round! ' + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection];
    }
    else if ((computerSelection === 'rock') && (playerSelection == 'scissors') ||
            (computerSelection === 'paper') && (playerSelection === 'rock')   ||
            (computerSelection === 'scissors') && (playerSelection === 'paper')){
                result = [2, 'You lose this round! ' + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ' is beaten by ' + computerSelection];
            }
    return result;
}

function refreshGame(ties, playerWins, computerWins, message, body, newGameButton){
    ties.textContent = 'Ties: ' + 0;
    playerWins.textContent = 'You: ' + 0;
    computerWins.textContent = 'Computer: ' + 0;

    message.classList.remove('player-winning-message');
    message.classList.remove('computer-winning-message');
    message.textContent = '';

    buttons.forEach(button => {
        button.disabled = false;
    })

    body.removeChild(newGameButton);
}

function playGame(button){
    let playerSelection = button.getAttribute('data-selection');
    const computerSelection = getComputerChoice();


    let result = playRound(playerSelection, computerSelection);

    const playerWins = document.querySelector('.display-results #player');
    const computerWins = document.querySelector('.display-results #computer');
    const ties = document.querySelector('.display-results #tie');
    const message = document.querySelector('.display-results #message');

    if (result[0] === 0){
        tiesVar += 1;
        ties.textContent = 'Ties: ' + tiesVar;
    } 
    else if (result[0] === 1){
        playerWinsVar += 1;
        playerWins.textContent = 'You: ' + playerWinsVar;
    }    
    else if (result[0] === 2){
        computerWinsVar += 1;
        computerWins.textContent = 'Computer: ' + computerWinsVar;
    }
    
    message.textContent = result[1];

    if (playerWinsVar === 5 || computerWinsVar === 5){

        buttons.forEach(button => {
            button.disabled = true;
        })

        if (playerWinsVar === 5){
            message.classList.toggle('player-winning-message');
            message.textContent = 'You have won 5 rounds and is therefore the champion!';
        }
        else if (computerWinsVar === 5){
            message.classList.toggle('computer-winning-message');
            message.textContent = 'The computer has won 5 rounds and is therefore the champion :(';
        }

        const body = document.querySelector('body');
        const newGameButton = document.createElement('button');
        newGameButton.textContent = "Play Again!";

        playerWinsVar = 0;
        computerWinsVar = 0;
        tiesVar = 0;

        body.appendChild(newGameButton);
        newGameButton.addEventListener('click', function() {
            refreshGame(ties, playerWins, computerWins, message, body, newGameButton)
        });
    }
}

const buttons = document.querySelectorAll('button');
let playerWinsVar = 0;
let computerWinsVar = 0;
let tiesVar = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function () {
           playGame(button);
    })
})
    

