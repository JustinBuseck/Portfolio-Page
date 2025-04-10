// Get DOM elements
const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

// Possible choices
const options = ['rock', 'paper', 'scissors'];

// Add event listeners to buttons
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('date-choice').toLowerCase();
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        // Update the UI
        playerChoiceDisplay.textContent = capitalize(playerChoice);
        computerChoiceDisplay.textContent = capitalize(computerChoice);
        resultText.textContent = result;
    });
});

// Function to get a random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Helper function to capitalize the first letter of a string
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}