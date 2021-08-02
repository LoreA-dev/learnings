alert("Calcular 3 notas del estudiante y su nivel")
var Nota_1, Nota_2, Nota_3
Nota_1 = prompt("Escribe primera nota")
Nota_2 = prompt("Escribe segunda nota")
Nota_3 = prompt("Escribe tercera nota")

Nota_1 = parseFloat(Nota_1,10)
Nota_2 = parseFloat(Nota_2,10)
Nota_3 = parseFloat(Nota_3,10)


var suma, promedio
suma= Nota_1 + Nota_2 + Nota_3
promedio= suma/3

if (promedio >= 8 && promedio < 11) {
    alert("Nivel Excelente")
}
if (promedio >= 4 && promedio < 8) {
    alert("Nivel Sobresaliente")
}
if (promedio >= 0 && promedio < 4) {
    alert("Nivel Insuficiente")
}