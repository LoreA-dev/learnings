class billet {
    constructor(valor, cantidad) {
        this.value = valor
        this.amount = cantidad
    }
}


function withdrawal() {
    for (let billet of atm) {
        console.log(billet)
        // if (texto > 0) {
        //     let div = Math.floor(texto/this.value)

        //     if (div > this.amount) {

        //     }
        // }
    }
}


let atm = []
let giver = []
atm.push(new billet(50, 3))
atm.push(new billet(20, 2))
atm.push(new billet(10, 2))


let papers = 0


let extraer = document.getElementById("boton")
let texto = document.getElementById("dinero")
extraer.addEventListener("click", withdrawal)

let money = parseInt(texto.value)




// for (let money of atm){
//     money.show()
// }