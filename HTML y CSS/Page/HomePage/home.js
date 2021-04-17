let buttonDropdown = document.getElementById("dropdown")
buttonDropdown.addEventListener("click", dropdownButton)

let youCanSeeTheDropdown = false

let buttonsInside = document.getElementById("buttonsInsideDropdown")
buttonsInside.addEventListener("click", dropdownButton)

function dropdownButton(){
   if (youCanSeeTheDropdown === false){
      youCanSeeTheDropdown = true
      buttonsInside.classList.remove("hidden")
   } else{
      youCanSeeTheDropdown = false
      buttonsInside.classList.add("hidden")
   }
   
}