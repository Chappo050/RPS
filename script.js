
let compChoice = "Nothing";
let playerChoice = "Paper";


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
        if (playerSelection == "sciccors" && computerSelection == "paper") {
            return 1;   
        }
    }

    return 0;
}


function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        compChoice = computerPlay();
        score += playRound(playerChoice.toLowerCase(), compChoice);
    }

    console.log(`Your total score is: ${score}/5`);
    alert(`Your total score is: ${score}/5`)
}

playerChoice = prompt("Please choose Rock/Paper/Sciccors");
game();

