let Valor_1, Valor_2, Valor_3

Valor_1 = +prompt("Ingrese primer valor")
Valor_2 = +prompt("Ingrese segundo valor")
Valor_3 = +prompt("Ingrese tercer valor")

if (Valor_1 > Valor_2 && Valor_1 > Valor_3) {
    alert("El primer valor es mayor")
} else if (Valor_2 > Valor_1 && Valor_2 > Valor_3) {
    alert("El segundo valor es mayor")
} else if (Valor_3 > Valor_1 && Valor_3 > Valor_2) {
    alert("El tercer valor es mayor")
} else { 
    alert("Valores repetidos ")
    if(Valor_1 == Valor_2 || Valor_1 == Valor_3){
        alert("El " + Valor_1 + " está repetido :v")
    }else if(Valor2 == Valor_3){        
        alert("El " + Valor_3 + " está repetido :v")
    }
}
