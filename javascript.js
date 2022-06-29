let choice = ["Rock", "Paper", "Scissors"];

let randomChoiceValue = () => Math.floor(Math.random()*3);

let computerPlay = () => choice[randomChoiceValue()];

function playerPlay () {
     let choice = prompt('Enter rock, paper, or scissors');
     let choiceUpper = choice.toUpperCase();
     while (choiceUpper != "ROCK" && choiceUpper != "PAPER" && choiceUpper != "SCISSORS") {
        alert('Please enter rock or paper or scissors only');
        choice = prompt('Enter rock, paper, or scissors');
        choiceUpper = choice.toUpperCase();
    };
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let psUpper = playerSelection.toUpperCase();
    let csUpper = computerSelection.toUpperCase();
    
    // handles all draws
    if (psUpper === csUpper) {
        return "draw";
    };

    if (psUpper === "ROCK") {
        return (csUpper === "PAPER") ? "lose" : "win";
    }
    if (psUpper === "PAPER") {
        return (csUpper === "SCISSORS") ? "lose" : "win";
    }
    if (psUpper === "SCISSORS") {
        return (csUpper === "ROCK") ? "lose" : "win";
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
}