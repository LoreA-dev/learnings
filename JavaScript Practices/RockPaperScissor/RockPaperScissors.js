
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
    // FlAViO -> flavio 
    if (options[resultCPU] === "scissor" && choosenByUser === 'rock') {
        console.log("CPU USED SCISSOR, YOU USED ROCK. USER WIN")
    } else if (options[resultCPU] === "scissor" && choosenByUser === 'scissor') {
        console.log("CPU USED SCISSOR, YOU USED SCISSOR. TIED")
    } else if (options[resultCPU] === "scissor" && choosenByUser === 'paper') {
        console.log("CPU USED SCISSOR, %cYOU USED PAPER. CPU WIN", 'color: red; font-size: 20px;')
    } else if (options[resultCPU] === "paper" && choosenByUser === 'scissor') {
        console.log("CPU USED PAPER, YOU USED SCISSOR. USER WIN")
    } else if (options[resultCPU] === "paper" && choosenByUser === 'rock') {
        console.log("CPU USED PAPER, YOU USED ROCK. CPU WIN")
    } else if (options[resultCPU] === "paper" && choosenByUser === 'paper') {
        console.log("CPU USED PAPER, YOU USED PAPER. TIED")
    } else if (options[resultCPU] === "rock" && choosenByUser === 'rock'){
        console.log("CPU USED ROCK,YOU USED ROCK. TIED")
    } else if (options[resultCPU] === "rock" && choosenByUser === 'paper'){
        console.log("CPU USED ROCK, YOU USED PAPER. USER WIN ")
    } else {
        console.log("CPU USED ROCK, YOU USED SCISSOR. CPU WIN")
    }
    // console.log(options[resultCPU])
}