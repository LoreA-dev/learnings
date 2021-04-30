let Nombre, Documento, Edad
Nombre = prompt("Escriba su nombre")
Documento = prompt ("Escriba su Numero de documento")
Edad = prompt ("Escriba su edad")

i = 18
if (Edad >= i) {
    alert ("Puede pasar 🙆‍ ")
    alert(Nombre + " identificado con " + Documento +" " + "es mayor de edad")
} else {
    alert ("No puede pasar 🙅")
    alert(Nombre + " identificado con " + Documento + " " + "es menor de edad")
}