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

function getPlayerChoice(){
    let choice = prompt('Please choose rock paper or scissors');
    choice = choice.toLowerCase();

    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt('Invalid entry, please choose rock paper or scissors');
        choice = choice.toLowerCase();
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    let result;

    if (playerSelection === computerSelection){
        result = [0, 'tie']
    }
    else if ((playerSelection === 'rock') && (computerSelection == 'scissors') ||
       (playerSelection === 'paper') && (computerSelection === 'rock')   ||
       (playerSelection === 'scissors') && (computerSelection === 'paper')){
        result = [1, 'You Win! ' + playerSelection + ' beats ' + computerSelection];
    }
    else if ((computerSelection === 'rock') && (playerSelection == 'scissors') ||
            (computerSelection === 'paper') && (playerSelection === 'rock')   ||
            (computerSelection === 'scissors') && (playerSelection === 'paper')){
                result = [2, 'You Lose! ' + playerSelection + ' beats ' + computerSelection];
            }
    return result;
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let result;

    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
        console.log(result[1]);
        if ( result[0] === 0){
            ties += 1;
        } 
        else if (result[0] === 1){
            playerWins += 1;
        }    
        else if (result[0] === 2){
            computerWins += 1;
        }
    }

    if (playerWins > computerWins){
        console.log('You win! with ' + playerWins + ' victorious rounds over the computer\'s ' + computerWins + ' rounds. ' + ties + ' rounds were a tie.' )
    }
    else if (computerWins > playerWins){
        console.log('You lose! You only won ' + playerWins + ' rounds compared to the computer\'s ' + computerWins + '. ' + ties + ' rounds were a tie.' )
    }
    else{
        console.log('It\'s a tie! with both winning ' + playerWins + ' rounds and tieing ' + (ties) + ' rounds')
    }
}

game()