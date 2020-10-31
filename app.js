let playerScore = 0;
let computerScore = 0;

const rockWins = "Your rock smashes scissors! You win!!";
const rockLoses = "Paper smothers your rock. You lose.";
const paperWins = "Your paper smothers rock! You win!";
const paperLoses = "Scissors cuts your paper. You lose";
const scissorsWins = "You scissors cuts paper! You win!";
const scissorsLoses = "Rock smashes your scissors. You lose.";
const tie = "It's a tie....";

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
        default:
            return null;
    }
}

function updateImage(choice, contestant){
    const imgToUpdate = document.getElementById(`${contestant}img`);
    
    imgToUpdate.src = `images/${choice}.png`;
}

function updateResult(result){
    const resultDisplay = document.getElementById('result');

    resultDisplay.textContent = result;
}

function increasePlayerScore(){
    const playerScoreText = document.getElementById('playerScore');
    playerScore++;
    playerScoreText.textContent = playerScore;
}

function increaseComputerScore(){
    const computerScoreText = document.getElementById('computerScore');
    computerScore++;
    computerScoreText.textContent = computerScore;
}

function playGame(e){
    const playerChoice = e.target.id;
    updateImage(e.target.id, 'player');

    const computerChoice = getComputerChoice();
    updateImage(computerChoice, 'computer')

    console.log(`You picked: ${playerChoice}  - The Computer picked: ${computerChoice}`);
    console.log(playerChoice + computerChoice);
    switch (playerChoice + computerChoice){
        case "rockscissors":
            increasePlayerScore();
            updateResult(rockWins);
            break;
        case "paperrock":
            increasePlayerScore();
            updateResult(paperWins);
            break;
        case "scissorspaper":
            increasePlayerScore();
            updateResult(scissorsWins);
            break;
        case "rockpaper":
            increaseComputerScore();
            updateResult(rockLoses);
            break;
        case "paperscissors":
            increaseComputerScore();
            updateResult(paperLoses);
            break;
        case "scissorsrock":
            increaseComputerScore();
            updateResult(scissorsLoses);
            break;
        default:
            updateResult(tie);
            break;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playGame));

if (computerScore === 0 && playerScore === 0) {
    updateResult(tie);    
}