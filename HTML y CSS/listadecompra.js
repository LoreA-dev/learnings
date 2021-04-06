// crear variable global para contador
var CUNTER_LIST = 0; 
document.getElementById("boton").addEventListener("click", addToList)
document.getElementById("eliminar").addEventListener("click", eliminar)

function eliminar (){
  let items = document.getElementsByClassName('cbox');

  for(let i = 0; i < items.length; i++){
    if(items[i].checked){     
      const fatherElement = items[i].parentNode;
      const grandfatherElement = fatherElement.parentNode;
      grandfatherElement.removeChild(fatherElement);
      i--;
    }
  }
}

function addToList (){
  //Extracción de datos
  var texto = document.getElementById("itemName").value
  var categoria = document.getElementById("category").value
  
  var validation = texto.trim();
  if (validation === "") {
    alert("No tienes escrito nada. 🤦‍♀️")
    return;
  }
  //Creación de lista
  
  var item = document.createElement("li")
  
  //checkbox

  var checkbox = createCheckbox(texto)
  item.appendChild(checkbox)

  //Volver casilla a ""

  document.getElementById("itemName").value = ""

  //Lista por categoria 

  if (categoria == "frutas") {
    document.getElementById("frutas").appendChild(item) 
  } else if (categoria == "carnes") {
    document.getElementById("carnes").appendChild(item) 
  } else if (categoria == "embutidos") {
    document.getElementById("embutidos").appendChild(item) 
  } else if (categoria == "lacteos") {
    document.getElementById("lacteos").appendChild(item) 
  } else{
    document.getElementById("granos").appendChild(item) 
  } 
    
}

  function createCheckbox(texto){
    var label = document.createElement("label")
    var input = document.createElement("input")
    var span = document.createElement("span")

    input.type = "checkbox";
    input.classList.add("cbox");
    span.innerHTML = texto

    label.appendChild(input);
    label.appendChild(span);
    return label;

  }


function receiveForm(event){
  event.preventDefault();
  const form = event.target
  
  var validation = form.confirmation.value;
  
  if (validation === 'yes'){
    alert("YES")
  } else{
    alert("NO")
  }
}