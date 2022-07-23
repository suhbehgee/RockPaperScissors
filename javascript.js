// let choice = ["ROCK", "PAPER", "SCISSORS"];

// let playerWinCount = 0, computerWinCount = 0, draws = 0;

// let randomChoiceValue = () => Math.floor(Math.random()*3);
// let computerPlay = () => choice[randomChoiceValue()];
let gameOver = false;

const playerRock = document.querySelector('#playerRock');
const playerPaper = document.querySelector('#playerPaper');
const playerScissors = document.querySelector('#playerScissors');
const playerRps = document.querySelectorAll('.playerRps');
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
const playerScoreBox = document.querySelector('#playerScoreBox');
const computerScoreBox = document.querySelector('#computerScoreBox');
const drawScoreBox = document.querySelector('#drawScoreBox');
const playerCount = document.querySelector('#playerWin');
const computerCount = document.querySelector('#computerWin');
const drawCount = document.querySelector('#draw');
const myModal = document.querySelector('.modal');
const resetBtn = document.querySelector('#resetBtn');
const whoWonText = document.querySelector('#whoWonText');
const startOverBtn = document.querySelector('#startOverBtn');
//following two lines are for controlling animation restart
const rpsImagesPlayer = document.querySelector('.rpsImages.playerImages');
const rpsImagesComputer = document.querySelector('.rpsImages.computerImages');

rpsImagesPlayer.addEventListener('animationend', function(){console.log(rpsImagesPlayer);});
rpsImagesComputer.addEventListener('animationend', function(){console.log(rpsImagesComputer);});
// rpsImages.addEventListener('animationend', function(){rpsImages.style.animationName='';});
resetBtn.addEventListener('click', resetScores);
window.addEventListener('click', (e) => {if (e.target == myModal) { myModal.style.display = 'none'}});
startOverBtn.addEventListener('click', resetScores);
playerRps.forEach(image => image.addEventListener('transitionend', removeTransitions));

playerRock.addEventListener('click', () => startGame('ROCK'));
playerPaper.addEventListener('click', () => startGame('PAPER'));
playerScissors.addEventListener('click', () => startGame('SCISSORS'));

function startGame (playerSelection) {
    let computerSelection = computerPlay();
    let outcome='';
    outcome = playRound (playerSelection, computerSelection);
    updateScore(outcome);
    console.log(playerSelection, computerSelection, outcome);
};

function removeTransitions () {
    computerRock.classList.remove('computerSelect');
    computerPaper.classList.remove('computerSelect');
    computerScissors.classList.remove('computerSelect');
    drawScoreBox.classList.remove('scoreCount');
    playerScoreBox.classList.remove('scoreCount');
    computerScoreBox.classList.remove('scoreCount');
};

function computerPlay () {
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    // computerRock.classList.remove('computerSelect');
    // computerPaper.classList.remove('computerSelect');
    // computerScissors.classList.remove('computerSelect');
    removeTransitions();
    let computerSelection = choice[Math.floor(Math.random()*3)];
    switch (computerSelection) {
        case 'ROCK':
            computerRock.classList.add('computerSelect');
            break;
        case 'PAPER':
            computerPaper.classList.add('computerSelect');
            break;
        case 'SCISSORS':
            computerScissors.classList.add('computerSelect');
            break;
    }
    return computerSelection;    
}

function updateScore (result) {
    switch (result) {
        case 'draw':
            ++drawCount.textContent;
            drawScoreBox.classList.add('scoreCount');
            break;
        case 'lose':
            ++computerCount.textContent;
            computerScoreBox.classList.add('scoreCount');
            break;
        case 'win':
            ++playerCount.textContent;
            playerScoreBox.classList.add('scoreCount');
            break;
    }
    if (gameOver == false && (computerCount.textContent == 5 || playerCount.textContent == 5)) {
        gameOver = true;
        displayWinner();
        return;
    }
};

function displayWinner () {
    if (computerCount.textContent == 5) {
        whoWonText.textContent = 'COMPUTER Wins!!';
    } else {
        whoWonText.textContent = 'PLAYER Wins!!';
    }

    myModal.style.display = 'block';

    // playerCount.textContent = 0;
    // computerCount.textContent = 0;
    // drawCount.textContent = 0;
}

function resetScores () {
    playerCount.textContent = 0;
    computerCount.textContent = 0;
    drawCount.textContent = 0;
    gameOver = false;
    myModal.style.display = 'none';
    removeTransitions();
    // following lines restart the CSS animation
    rpsImagesPlayer.style.animation = 'none';
    rpsImagesPlayer.offsetWidth;
    rpsImagesPlayer.style.animation = 'animateTop 0.5s';
    rpsImagesComputer.style.animation = 'none';
    rpsImagesComputer.offsetWidth;
    rpsImagesComputer.style.animation = 'animateTop 0.5s';
}

// function playerPlay () {
//      let choice = prompt('Enter rock, paper, or scissors');
//      let choiceUpper = choice.toUpperCase();
//      while (choiceUpper != "ROCK" && choiceUpper != "PAPER" && choiceUpper != "SCISSORS") {
//         alert('Please enter rock or paper or scissors only');
//         choice = prompt('Enter rock, paper, or scissors');
//         choiceUpper = choice.toUpperCase();
//     };
//     return choice;
// }

function playRound (playerSelection, computerSelection) {
    // let psUpper = playerSelection.toUpperCase();
    // let csUpper = computerSelection.toUpperCase();
    
    // handles all draws
    if (playerSelection === computerSelection) {
        return "draw";
    };

    if (playerSelection === "ROCK") {
        return (computerSelection === "PAPER") ? "lose" : "win";
    }
    if (playerSelection === "PAPER") {
        return (computerSelection === "SCISSORS") ? "lose" : "win";
    }
    if (playerSelection === "SCISSORS") {
        return (computerSelection === "ROCK") ? "lose" : "win";
    }

    // code below required 3 times for each playerSelection (paper/rock/scissors)
    // if (psUpper === "ROCK" && csUpper === "PAPER") {
    //     return loseString;
    // } else if (psUpper === "ROCK" && csUpper === "SCISSORS") {
    //     return winString;
    // } else {
    //     return drawString;
    // };
};

function game() {
    let playerSelection;
    let computerSelection;
    let outcome;
    let win=0, lose=0, draw=0;
    for (let i=0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        outcome = playRound (playerSelection, computerSelection);
        if (outcome === "win") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            win++;
        } else if (outcome === "lose") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            lose++;
        } else {
            console.log(`Draw! You both chose ${playerSelection}`);
            draw++;
        }        
    };
    console.log("After 5 rounds you won " + win + " times, lost " + lose + " times, and had " + draw + " draws.");

};
