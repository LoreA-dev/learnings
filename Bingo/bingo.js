var bingo = ["B", "I", "N", "G", "O"];
var balotas = [];
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

  balotas.push(" "+ bingo[random_letter] + random_number);
  document.getElementById("created-values").innerHTML = balotas;
}
