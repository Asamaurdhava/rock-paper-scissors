// Rock Paper Scissors - The Odin Project

console.log("Hello World"); // Step 1: Verify JS is linked

// Step 2: Get computer choice
function getComputerChoice() {
    const randomNum = Math.random();
    
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Get human choice
function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}

// Step 6: Main game function (contains score variables and playRound)
function playGame() {
    // Step 4: Score variables (scoped inside playGame)
    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Play a single round
    function playRound(humanChoice, computerChoice) {
        // Make human choice case-insensitive
        const human = humanChoice.toLowerCase();
        const computer = computerChoice;

        // Check for tie
        if (human === computer) {
            console.log(`It's a tie! You both chose ${human}.`);
            return;
        }

        // Determine winner
        if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${human} beats ${computer}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computer} beats ${human}.`);
        }
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
    }

    // Declare final winner
    console.log("=== GAME OVER ===");
    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("😢 The computer won. Better luck next time!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// Start the game
playGame();