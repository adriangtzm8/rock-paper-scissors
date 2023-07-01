const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
const resultText = document.querySelector('.resultText');
const buttons = document.querySelectorAll('button');
let player;
let computer;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.textContent;
        playerText.textContent = `Player: ${player}`;
        computer = getComputerChoice();
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = `Result: ` + checkWinner(player, computer);
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
    else if (computer == 'Rock')
    {
        return (player == 'Paper' ? `You win ${player} beats ${computer}` : `You lose ${computer} beats ${player}`);
    }
    else if (computer == 'Paper')
    {
        return (player == 'Scissors' ? `You win ${player} beats ${computer}` : `You lose ${computer} beats ${player}`);
    }
    else if (computer == 'Scissors')
    {
        return (player == 'Rock' ? `You win ${player} beats ${computer}` : `You lose ${computer} beats ${player}`);
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


