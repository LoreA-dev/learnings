let button = document.getElementById("doneButton");
button.addEventListener("click", showCard);

let card = document.getElementById("cards");
let selectedQuestions;
let select;

var title = document.createElement("h4");

let previusButton = document.getElementById("previusButton");
previusButton.addEventListener("click", previusParagraph);
let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", nextParagraph);

let newParagraph = document.createElement("p");
let currentPage = 0;

let maxItemPerPage = 5;

let questions = [
  {
    question: "How are you?",
    topic: "Present Simple",
  },
  {
    question: "Did you eat pizza yesterday?",
    topic: "Past Simple",
  },
  {
    question: "Did you wash the diches?",
    topic: "Past Simple",
  },
  {
    question: "Did you wash the diches?",
    topic: "Past Simple",
  },
  {
    question: "Is Mike going to have trained enough before his first game?",
    topic: "Future Perfect Simple",
  },
  {
    question: "Are they learning?",
    topic: "Present Continous",
  },
  {
    question: "will I be cooking?",
    topic: "Future Continous",
  },
  {
    question: "will you be dancing?",
    topic: "Future Continous",
  },
  {
    question: "will she be singing?",
    topic: "Future Continous",
  },
  {
    question: "will he be eating?",
    topic: "Future Continous",
  },
  {
    question: "will we be drinking?",
    topic: "Future Continous",
  },
  {
    question: "will it be snowing?",
    topic: "Future Continous",
  },
  {
    question: " will they be talking?",
    topic: "Future Continous",
  },
  {
    question: " will you love me?",
    topic: "Future Continous",
  },
];

// const questions = require('./MOCK_DATA.json')

function showCard() {
  currentPage = 0;

  select = document.getElementById("selectOptions").value;

  title.innerText = "Questions: ";

  //This filter is for the topic of the select

  selectedQuestions = questions.filter(function (object) {
    return object.topic === select;
  });

  //This one is for the limit of the questions (paginate)

  const startAt = currentPage * maxItemPerPage;
  const endAt = startAt + maxItemPerPage;

  selectedQuestions = selectedQuestions.filter(function (v, index) {
    return index >= startAt && index < endAt;
  });

  card.innerHTML = "";

  card.appendChild(title);
  selectedQuestions.forEach(function (value, index) {
    var textInside = document.createElement("p");

    textInside.innerText = `${index + 1}. ${value.question}`;
    card.appendChild(textInside);
  });
}

function nextParagraph() {
  currentPage++;


  //This filter is for the topic of the select

  selectedQuestions = questions.filter(function (object) {
    return object.topic === select;
  });

  //This one is for the limit of the questions (paginate)

  const startAt = currentPage * maxItemPerPage;
  const endAt = startAt + maxItemPerPage;

  selectedQuestions = selectedQuestions.filter(function (v, index) {
    return index >= startAt && index < endAt;
  });

  card.innerHTML = "";

  selectedQuestions.forEach(function (value, index) {

    var textInside = document.createElement("p");

    textInside.innerText = `${startAt + index + 1}. ${value.question}`;

    card.appendChild(textInside);
  });
}
function previusParagraph() {
  currentPage--;


  //This filter is for the topic of the select
  selectedQuestions = questions.filter(function (object) {
    return object.topic === select;
  });

  //This one is for the limit of the questions (paginate)

  const startAt = currentPage * maxItemPerPage;
  const endAt = startAt + maxItemPerPage;

  selectedQuestions = selectedQuestions.filter(function (v, index) {
    return index >= startAt && index < endAt;
  });

  card.innerHTML = "";  
  selectedQuestions.forEach(function (value, index) {

    var textInside = document.createElement("p");

    textInside.innerText = `${startAt + index + 1}. ${value.question}`;

    card.appendChild(textInside);
  });
}
