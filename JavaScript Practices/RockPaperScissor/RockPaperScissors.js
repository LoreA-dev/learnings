
var options= [
    "scissor",
    "paper",
    "rock"
]

var rockButton = document.getElementById("rock")
rockButton.addEventListener("click", game)

var paperButton = document.getElementById("paper")
paperButton.addEventListener("click", game)

var scissorButton = document.getElementById("scissor")
scissorButton.addEventListener("click", game)

function game (event) {
    var resultCPU = Math.floor(Math.random() * 3);
    const choosenByUser = event.target.innerText.toLowerCase();

    if (options[resultCPU] === "scissor" && choosenByUser === 'rock') {
        console.log("CPU USED SCISSOR, YOU USED ROCK. WIN USER")
    } else if (options[resultCPU] === "scissor" && choosenByUser === 'scissor') {
        console.log("CPU USED SCISSOR, YOU USED SCISSOR. TIED")
    } else if (options[resultCPU] === "scissor" && choosenByUser === 'paper') {
        console.log("CPU USED SCISSOR, YOU USED PAPER. WIN CPU")
    } else if (options[resultCPU] === "paper" && choosenByUser === 'scissor') {
        console.log("CPU USED PAPER, YOU USED SCISSOR. WIN USER")
    } else if (options[resultCPU] === "paper" && choosenByUser === 'rock') {
        console.log("CPU USED PAPER, YOU USED ROCK. WIN CPU")
    } else if (options[resultCPU] === "paper" && choosenByUser === 'paper') {
        console.log("CPU USED PAPER, YOU USED PAPER. TIED")
    } else if (options[resultCPU] === "rock" && choosenByUser === 'rock'){
        console.log("CPU USED ROCK,YOU USED ROCK. TIED")
    } else if (options[resultCPU] === "rock" && choosenByUser === 'paper'){
        console.log("CPU USED ROCK, YOU USED PAPER. WIN USER")
    } else {
        console.log("CPU USED ROCK, YOU USED SCISSOR. WIN CPU")
    }
    // console.log(options[resultCPU])
}