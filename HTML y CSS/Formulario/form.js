// const personajes = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Abadango Cluster Princess", "Abradolf Lincler", "Adjudicator Rick", "Agency Director", "Alan Rails", "Albert Einstein", "Alexander", "Alien Googah", "Alien Morty", "Alien Rick", "Amish Cyborg", "Annie", "Antenna Morty", "Antenna Rick", "Ants in my Eyes Johnson"]

// function personas(valor){
//  var nombre = valor.split(" ")
//  if(nombre[1] === undefined){
//      return nombre[0]
//  } else{
//      return nombre.reverse().join('')
//  }
// }

// var nombre = personajes.map(personas)

// console.log(nombre)




// var numeros =[
//     1,2,3,4,5,6,7,8,9,10
// ]

// function cuadrado(valor, posicion) {
//     if(posicion %3 === 0){  
//         return valor * valor * valor
//     } else{
//         return valor * valor
//     }
// }

// var numeroalcuadrado = numeros.map(cuadrado)
// console.log(numeroalcuadrado)





const nombresymas = [{ "nombre": "Rick Sanchez", "edad": 25, "raza": "negro" }, { "nombre": "Morty Smith", "edad": 12, "raza": "blanco" }, { "nombre": "Summer Smith", "edad": 36, "raza": "negro" }, { "nombre": "Beth Smith", "edad": 15, "raza": "negro" }, { "nombre": "Jerry Smith", "edad": 37, "raza": "negro" }, { "nombre": "Abadango Cluster Princess", "edad": 29, "raza": "blanco" }, { "nombre": "Abradolf Lincler", "edad": 42, "raza": "negro" }, { "nombre": "Adjudicator Rick", "edad": 9, "raza": "negro" }, { "nombre": "Agency Director", "edad": 7, "raza": "negro" }, { "nombre": "Alan Rails", "edad": 42, "raza": "negro" }, { "nombre": "Albert Einstein", "edad": 43, "raza": "negro" }, { "nombre": "Alexander", "edad": 6, "raza": "negro" }, { "nombre": "Alien Googah", "edad": 9, "raza": "negro" }, { "nombre": "Alien Morty", "edad": 28, "raza": "negro" }, { "nombre": "Alien Rick", "edad": 10, "raza": "blanco" }, { "nombre": "Amish Cyborg", "edad": 10, "raza": "blanco" }, { "nombre": "Annie", "edad": 14, "raza": "negro" }, { "nombre": "Antenna Morty", "edad": 43, "raza": "blanco" }, { "nombre": "Antenna Rick", "edad": 38, "raza": "negro" }, { "nombre": "Ants in my Eyes Johnson", "edad": 5, "raza": "negro" }]

function correcto(valor, posicion) {
    if(posicion %3 === 0 ){
        return valor.edad * valor.edad * valor.edad   
    } else{
        return valor.edad * valor.edad
    }
}

var resultado = nombresymas.map(correcto)
console.log(resultado)