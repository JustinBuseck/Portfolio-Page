const choices= ["rock","paper","scissors"];
 
const buttons= document.querySelectorAll(".choice");
const playerChoiceE1= document.getElementById("player-choice");
const computerChoiceE1=document.getElementById("computer-choice");
const resultTextE1 = document.getElementById("result-text");
 
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const playerChoice =button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
 
        playerChoiceE1.textContent = playerChoice;
        computerChoiceE1.textContent = computerChoice;
 
        resultTextE1.textContent = result;
   
   
});
});
 function getComputerChoice() {
    const randomIndex = Math.floor(Math.random ()* choices.length);
    return choices [randomIndex];
 
    function getResult(player, computer) {
        if (player== computer)return "It's a Draw!";
        if (
            (player === "rock"&& computer === "scissors") ||
             (player === "paper" && computer === "rock") ||
             (player === "scissors" && computer === "paper")
        ) {
            return "You Win!";
 
        }
        return "You Lose";
    }
 }