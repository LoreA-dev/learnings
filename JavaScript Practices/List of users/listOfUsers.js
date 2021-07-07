let button = document.getElementById("acceptButton");
button.addEventListener("click", addView);

function addView() {
    function Information(name, age) {
        this.name = name;
        this.age = age;
    }

    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    
  addUser = new Information(newName, newAge);
  newData();
}

let newInformation = [];

function newData() {
  newInformation.push(addUser);
  console.log(newInformation);
  document.getElementById("table").innerHTML +=
    `<tbody><td>` +
    addUser.name +
    `</td><td>` +
    addUser.age +
    `</td></tbody>`;
}
