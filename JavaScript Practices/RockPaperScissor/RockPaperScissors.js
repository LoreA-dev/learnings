var options = ["scissor", "paper", "rock"];

var rockButton = document.getElementById("rock");
rockButton.addEventListener("click", game);

var paperButton = document.getElementById("paper");
paperButton.addEventListener("click", game);

var scissorButton = document.getElementById("scissor");
scissorButton.addEventListener("click", game);

function assignCPUButton(type) {
    switch (type) {
        case 'scissor':
            document.getElementById('scissorCPU').classList.add('selected')
        break;
        case 'rock':    
            document.getElementById('rockCPU').classList.add('selected')
        break;
        case 'paper':
            document.getElementById('paperCPU').classList.add('selected')
        break;
    }
}
function cleanCPUButtons() {
    document.getElementById('scissorCPU').classList.remove('selected')
    document.getElementById('rockCPU').classList.remove('selected')
    document.getElementById('paperCPU').classList.remove('selected')

}

function colorUSERButton(type) {
    switch (type) {
        case 'scissor':
            document.getElementById('scissor').classList.add('changesButtonUser')
        break;
        case 'rock':    
            document.getElementById('rock').classList.add('changesButtonUser')
        break;
        case 'paper':
            document.getElementById('paper').classList.add('changesButtonUser')
        break;
    }
}
function cleanUserChanges() {
    document.getElementById('scissor').classList.remove('changesButtonUser')
    document.getElementById('rock').classList.remove('changesButtonUser')
    document.getElementById('paper').classList.remove('changesButtonUser')
}

function game(event) {
  cleanCPUButtons()
  cleanUserChanges()
  var resultCPU = Math.floor(Math.random() * 3);
  assignCPUButton(options[resultCPU])

  let choosenByUser = event.target.innerText.toLowerCase();
  
  choosenByUser =
  choosenByUser === ""
  ? event.target.parentElement.innerText.toLowerCase().trim()
  : choosenByUser;

  colorUSERButton(choosenByUser)
  
  const choices = choosenByUser + "|" + options[resultCPU];

  var result_container = document.getElementById("result_container");
  result_container.classList.add("result");
  
  var text_reset = document.getElementById("textInside");
  var newText
  

  switch (choices) {
    case "scissor|rock":
      newText = "You used " + choosenByUser + ".<br><br><br> CPU WIN" + "<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
    case "scissor|paper":
      newText = "You used " + choosenByUser + ".<br><br><br> USER WIN" + "<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
    case "paper|scissor":
      newText = "You used " + choosenByUser + ".<br><br><br> CPU WIN" +"<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
    case "paper|rock":
      newText = "You used " + choosenByUser + ".<br><br><br> USER WIN" + "<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
    case "rock|paper":
      newText = "You used " + choosenByUser + ".<br><br><br> CPU WIN" +"<br><br><br> cpu used " + options[resultCPU] +"." ; 
      break;
    case "rock|scissor":
      newText = "You used " + choosenByUser +  ".<br><br><br> USER WIN" + "<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
    default:
      newText = "You used " + choosenByUser + ".<br><br><br> TIED" + "<br><br><br> cpu used " + options[resultCPU] +"."; 
      break;
  }
  text_reset.innerHTML = newText;
}
