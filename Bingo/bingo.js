var bingo = ["B", "I", "N", "G", "O"];
var balotas = [];
let title = document.createElement('h1')
let b = [];
let i = [];
let n = [];
let g = [];
let o = [];

setInterval(function () {
  generate();
}, 2150);

function searchInverval(letter) {
  if (letter == "B") {
    return 15;
  } else if (letter == "I") {
    return 30;
  } else if (letter == "N") {
    return 45;
  } else if (letter == "G") {
    return 60;
  } else if (letter == "O") {
    return 75;
  }
}

function generate() {
  let random_letter = Math.floor(Math.random() * 5);
  document.getElementById("letter").innerHTML = bingo[random_letter];


  //documentation: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
  const max = searchInverval(bingo[random_letter]) + 1;
  const min = max - 14;
  let random_number = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("number").innerHTML = random_number;


  title.innerText= "BBBBBBBBBBBB"
  if (bingo[random_letter] == bingo[0]){
    b.push(bingo[random_letter] + random_number)
    let bContainer = document.getElementById("bContainer")
    bContainer.classList.add("newValueContainer")
    bContainer.innerHTML = b
  }else if(bingo[random_letter] == bingo[1]){
    i.push(bingo[random_letter] + random_number)
    let iContainer = document.getElementById("iContainer")
    iContainer.classList.add("newValueContainer")
    iContainer.innerHTML = '<p>I</p>' + i
  }else if(bingo[random_letter] == bingo[2]){
    n.push("\n" + bingo[random_letter] + random_number)
    document.getElementById("nContainer").innerHTML = n
  }else if(bingo[random_letter] == bingo[3]){
    g.push("\n" + bingo[random_letter] + random_number)
    document.getElementById("gContainer").innerHTML = g
  }else if(bingo[random_letter] == bingo[4]){
    o.push("\n" + bingo[random_letter] + random_number)
    document.getElementById("oContainer").innerHTML = o
  }

  // balotas.push(" "+ bingo[random_letter] + random_number);
  // document.getElementById("created-values").innerHTML = b;
}
