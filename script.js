let computerPlay = () => {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

var answer;
var won = 0, lose = 0, draw = 0;

function paper() {
    answer = "paper";
    playGame();
}

function rock() {
    answer = "rock";
    playGame();
}

function scissors() {
    answer = "scissors";
    playGame();
}


function choice() {
    document.getElementById("choice").addEventListener("click", displayResult());

    function displayResult() {
        document.getElementById("won").innerText = "Won: " + won;
        document.getElementById("lose").innerText = "Lose: " + lose;
        document.getElementById("draw").innerText = "Draw: " + draw;

        if (won == 5) {
            console.log("You won the game");
            document.getElementById("results").innerText = "Congratulations! You won the game";
            won = 0, lose = 0, draw = 0;
            document.getElementById("playAgain").innerText = "The game will restart in 3 seconds";
            disableBtns();
        }

        if (lose == 5) {
            console.log("You Lose, computer won the game");
            document.getElementById("results").innerText = "You Lose, computer won the game";
            won = 0, lose = 0, draw = 0;
            document.getElementById("playAgain").innerText = "The game will restart in 3 seconds";
            disableBtns();
        }
    }
}

function choiceResult(playerSelection, computerSelection) {
    document.getElementById("playerChoice").innerText = "You picked: " + playerSelection;
    document.getElementById("computerChoice").innerText = "Computer picked: " + computerSelection;
}

function disableBtns(won, lose) {

    setTimeout(() => {
        document.getElementById("results").innerText = "";
        document.getElementById("playAgain").innerText = "";
        document.getElementById("playerChoice").innerText = "";
        document.getElementById("computerChoice").innerText = "";
        choice();
    }, 3000);
}


function playGame(playerSelection, computerSelection) {


    var result;
    //var container = document.getElementById('container');
    playerSelection = answer;
    console.log("You picked: " + playerSelection);
    computerSelection = computerPlay();
    console.log("Computer Picked: " + computerSelection);

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result = "You Won! Rock beats Scissors";
            console.log(result);
            won++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
        if (computerSelection == "paper") {
            result = "You Lose! Rock doesn't beat Paper";
            console.log(result);
            lose++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You Won! Paper beats Rock";
            console.log(result);
            won++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
        if (computerSelection == "scissors") {
            result = "You Lose! Paper doesn't beat Scissors";
            console.log(result);
            lose++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            result = "You Won! Scissors beats Paper";
            console.log(result);
            won++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
        if (computerSelection == "rock") {
            result = "You Lose! Scissors doesn't beat Rock";
            console.log(result);
            lose++;
            choiceResult(playerSelection, computerSelection);
            choice();
        }
    }

    if (playerSelection == computerSelection) {
        result = "It's a Draw, you both choose: " + playerSelection;
        console.log(result);
        draw++;
        choiceResult(playerSelection, computerSelection);
        choice();
    }

}

