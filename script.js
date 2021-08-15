
let compChoice = "Nothing";
let playerChoice = "Paper";

let score = 0;
let plays = 0;
let loss = 0;

let scoreText = document.getElementById("score");
let winLossText = document.getElementById("WinLoss");

function computerPlay () {
    const throwNumber = Math.floor(Math.random() * 3) +1;
    switch (throwNumber) {
        case 1:
        return "rock";
            break;
        
        case 2:
        return "paper";
            break;
            
        case 3:
            return "sciccors";
            break;

        default:
            console.log("Nothing chosen, error!")
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
        
    } else {
        
        if (playerSelection == "rock" && computerSelection == "paper") {
            return 1;
        }
        if (playerSelection == "paper" && computerSelection == "rock") {
            return 1;
        }
        if (playerSelection == "scissors" && computerSelection == "paper") {
            return 1;   
        }
    }
    return 0;
}

function playGame(playerSelection) {
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    plays ++;
    if (result == 1) {
        console.log("You win!");
        score ++;
        scoreText.innerText = `Current Score: ${score}`;
        winLossText.innerText = `Win/Total Ratio: ${score} / ${plays}`;
    }
    else{
        console.log("You Lose!");
        winLossText.innerText = `Win/Total Ratio: ${score} / ${plays}`;
    }
}

document.getElementById("rockBtn").addEventListener("click", function(){playGame("rock");});
document.getElementById("paperBtn").addEventListener("click", function(){playGame("paper");});
document.getElementById("scissorBtn").addEventListener("click", function(){playGame("scissors");});

