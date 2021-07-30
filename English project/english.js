let checkboxQuestion = document.getElementById("showContent");
checkboxQuestion.addEventListener("click", addQuestions);

function addQuestions() {
  if (checkboxQuestion.checked){
    addContent.style.display = "flex"
  }else{
    addContent.style.display = "none"
  }
}

let button = document.getElementById("acceptButton");
button.addEventListener("click", addInformation)


let array = [{
  question: '',
  answer: [] 
}]

let counter = 1

function Data (question, answer) {
  this.question = question,
  this.answers = answer
};

function addInformation() {

  let questionText = document.getElementById("question").value;
  let answerText = document.getElementById("answer").value
  answerText = answerText.split(',')
  
  let addNewData = new Data(questionText, answerText);
  
 ArrayToTest.push(addNewData);
 render(ArrayToTest)
}

//Add the modal
  var modal = document.getElementById("modal");
  var buttonForModal = document.getElementById("modalButton");
  buttonForModal.addEventListener("click", modalActived);
  var closeSpan = document.getElementsByClassName("close")[0];
  closeSpan.addEventListener("click", modalDisabled);
  window.addEventListener("click", closeModal);
  
  function modalActived () {
    modal.style.display = "block";
  }
  
  function modalDisabled() {
    modal.style.display = "none";
  }
  
  function closeModal (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


const ArrayToTest = [{
  "question": "¿Las rosas son?",
  "answers": ["rojas", "azules", "negros"],
  "correct": 0
},{
  "question": "¿Cuál NO es una fuerza del universo?",
  "answers": ["Electrones", "fuerte", "debil"],
  "correct": 0
},{
  "question": "¿A cuantos bits equivale un byte?",
  "answers": ["88", "16", "8"],
  "correct": 2
},{
  "question": "¿Cuantos valores puede tener un binario?",
  "answers": ["1", "2", "3"],
  "correct": 1
},{
  "question": "¿De donde vino el agua de la tierra?",
  "answers": ["De meteoritos", "De las plantas", "de extraterrestres"],
  "correct": 0
},{
  "question": "¿Cuál es el proceso que ayuda a las plantas a obtener energia?",
  "answers": ["Electromagnetismo", "Fotosintesis", "Penelope"],
  "correct": 1
}]

function render(arrayToRender) {
  document.getElementById("text_container").innerHTML = ''
  // Recorre el Array y por cada uno: 
  arrayToRender.forEach(function (value, counter) {
    //Primero crea el div
    let mainContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let questionText = document.createElement('h3');
    // Agrega el titulo al div 
    questionText.innerText = `${counter +1}. ` + value.question ;
    contentContainer.appendChild(questionText);
    // Recorre las respuestas y crea los option
    value.answers.forEach(function(option, chooseCounter) {
      let answersText = document.createElement('p');
      let radioButton = document.createElement('input');
      

      radioButton.setAttribute("type", "radio");
      radioButton.id= 'answer' + counter + chooseCounter
      radioButton.name = counter
      
      var label = document.createElement('label')
      label.htmlFor = 'answer' + counter + chooseCounter
      
      label.innerHTML = option
      
      radioButton.value = option
      answersText.appendChild(radioButton);
      answersText.appendChild(label);
  
  
      contentContainer.appendChild(answersText);
      contentContainer.classList.add("containerContent")
      
    })

    
    mainContainer.appendChild(contentContainer)
    document.getElementById("text_container").appendChild(mainContainer)
  })
}
render(ArrayToTest);