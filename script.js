const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
const resultText = document.querySelector('.resultText');
const buttons = document.querySelectorAll('button');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
let player;
let computer;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.className;
        playerText.textContent = `Player: ${player}`;
        computer = getComputerChoice();
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = `Result: ` + checkWinner(player, computer);
        playerScoreText.textContent = `Player score: ${playerScore}`;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        
        if (playerScore >= 5)
        {
            playerScore = 0;
            computerScore = 0;
            resultText.textContent = 'You won the game congrats!';
            

        }
        else if (computerScore >= 5)
        {
            playerScore = 0;
            computerScore = 0;
            resultText.textContent = 'You lost the game! Try again';
            }  
        
    })
})

function getComputerChoice()
{
    // Get random number between 1 and 3 and store it in a variable
    let random = Math.floor(Math.random() * (4 - 1) + 1);
    // Depending on number return rock, paper or scissors
    if (random == 1)
    {
        return "Rock";
    }
    else if (random == 2)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
    
}

function checkWinner(player, computer)
{  

    if (player == computer)
    {
        return "It's a Tie!";
    }
    else if ((computer == 'Rock' && player == 'Scissors') || (computer == 'Paper' && player == 'Rock') || (computer == 'Scissors' && player == 'Paper'))
    {
        computerScore++;
        return `You lose! ${computer} beats ${player}`;
    }
    else if ((player == 'Rock' && computer == 'Scissors') || (player == 'Paper' && computer == 'Rock') || (player == 'Scissors' && computer == 'Paper'))
    {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    }


}
/* function getUserChoice()
{
    // Ask user for input
    const userSelection = prompt("Select:");
    const newUserSelection = userSelection.toLowerCase();
    let isValid = false;

    // Check if input is valid
    if (newUserSelection == "rock" || newUserSelection == "paper" || newUserSelection == "scissors")
    {
        isValid = true;
    }
    // If not ask for input again
    if (isValid == false)
    {
        getUserChoice();
    }
    // If valid return input
    return newUserSelection;
}  

function game(userChoice)
{
    let userCount = 0;
    let computerCount = 0;

    while (true)
    {
        if (userCount == 3)
        {
            console.log("Player wins!");
            break;
        }
        else if (computerCount == 3)
        {
            console.log("Computer wins!");
            break;
        }
        else
        {
            console.log(`Player wins: ${userCount}\nComputer wins: ${computerCount}`);
        }
        const userSelection = userChoice;
        const computerChoice = getComputerChoice();
        
        if (userSelection == computerChoice)
        {
            console.log("Its a tie");
        }
        else if (userSelection == "rock" && computerChoice == "scissors")
        {
            userCount++;
            console.log("You win! Rock beats Scissors");

        }
        else if (userSelection == "paper" && computerChoice == "rock")
        {
            userCount++;
            console.log("You win! Paper beats Rock");
        }
        else if (userSelection == "scissors" && computerChoice == "paper")
        {
            userCount++;
            console.log("You win! Scissors beats Paper");
        }
        else if (userSelection == "scissors" && computerChoice == "rock")
        {
            computerCount++;
            console.log("You lose! Rock beats Scissors");
        }
        else if (userSelection == "paper" && computerChoice == "scissors")
        {
            computerCount++;
            console.log("You lose! Scissors beats Paper");
        }
        else if (userSelection == "rock" && computerChoice == "paper")
        {
            computerCount++;
            console.log("You lose! Paper beats Rock");
        }
    }
    
}
*/


