class billet {
    constructor(valor, cantidad) {
        this.value = valor
        this.amount = cantidad
    }
}

function withdrawal() {
    result.innerText = ""
    giver = []
    let textBox = document.getElementById("dinero")
    let money = parseInt(textBox.value)

    for (let billets of atm) {
        if (money > 0) {
            div = Math.floor(money / billets.value)
            if (div > billets.amount) {
                moneyToDeliver = billets.amount
            }
            else {
                moneyToDeliver = div
            }
            giver.push(new billet(billets.value, moneyToDeliver))
            money -= (billets.value * moneyToDeliver)
        }
    }

    if (money > 0) {
        result.innerHTML = "Valor a entregar invalido"
        return
    }else{
        for (var givers of giver) {
            console.log(result)
            if (givers.amount > 0) {
                result.innerHTML += givers.amount + " billetes de $" + givers.value + "<br />"
            }
        }
    }
}

let atm = []
let giver = []
atm.push(new billet(50, 10))
atm.push(new billet(20, 5))
atm.push(new billet(10, 5))
atm.push(new billet(5, 3))
let div = 0
let moneyToDeliver = 0

let extraer = document.getElementById("boton")
let result = document.getElementById("resultado")
extraer.addEventListener("click", withdrawal)
