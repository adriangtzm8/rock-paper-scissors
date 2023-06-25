

function getComputerChoice()
{
    // Get random number between 1 and 3 and store it in a variable
    let random = Math.floor(Math.random() * (4 - 1) + 1);
    // Depending on number return rock, paper or scissors
    if (random == 1)
    {
        return "rock";
    }
    else if (random == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
    
}

function getUserChoice()
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

function game()
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
        const userSelection = getUserChoice();
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

game();