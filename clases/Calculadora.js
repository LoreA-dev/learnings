let Numero_1, Numero_2, opcion, resultado
opcion = prompt("Ingrese '1' para suma, '2' para resta, '3' para multiplicación y '4' para división")

if (opcion != '1' && opcion != '2' && opcion != '3' && opcion != '1' && opcion != '4') {
    alert("Funcion invalida, maricón")
} else {
    Numero_1 = prompt("Ingrese primer número")
    Numero_2 = prompt("Ingrese segundo número")

    Numero_1 = parseFloat(Numero_1, 10)
    Numero_2 = parseFloat(Numero_2, 10)
    if (opcion == '1') {
        resultado = Numero_1 + Numero_2
        alert(resultado)
    } else if (opcion == '2') {
        resultado = Numero_1 - Numero_2
        alert(resultado)
    } else if (opcion == '3') {
        resultado = Numero_1 * Numero_2
        alert(resultado)
    } else if (opcion == '4') {
        resultado = Numero_1 / Numero_2
        alert(resultado)
    }
}



