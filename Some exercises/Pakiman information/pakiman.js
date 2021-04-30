let imagenes = []
imagenes["Vaca loca"] = "vaca.png"
imagenes["Cerdo volador"] = "cerdo.png"
imagenes["Pollo ardiente"] = "pollo.png"


class pakiman{
    constructor(nombre, vida, ataque){
        this.imagen = new Image()
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque

        this.imagen.src = imagenes[this.nombre]
    }
    hablar(){
        alert("Soy " + this.nombre)
    }
    mostrar(){
        document.body.appendChild(this.imagen)
        document.write("<p>")
        document.write("<strong>" + this.nombre + "</strong><br />")
        document.write("Vida: " + this.vida + "<br />")
        document.write("Ataque: " + this.ataque)

        document.write("</p>")
    }
}

let coleccion = []
    coleccion.push(new pakiman("Vaca loca", 300, 120))
    coleccion.push(new pakiman("Cerdo volador" , 250, 20))
    coleccion.push(new pakiman("Pollo ardiente" , 80, 50))

for (let paki of coleccion){
    paki.mostrar()
}

