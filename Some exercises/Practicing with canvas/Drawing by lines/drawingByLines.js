let boton = document.getElementById("Boton")
let texto = document.getElementById("Texto")

boton.addEventListener("click" , dibujoPorClick)


let d = document.getElementById("Dibujito")
let ancho= d.width
let Cuadro = d.getContext("2d")


function dibujoPorClick()
{
    let color = document.getElementById("Color").value
    let lineas = parseInt(texto.value)
    let L = 0
    let L2 = 50
    let X1, Y2, Y1, X2
    let espacio = ancho/lineas
    
     while(L < lineas){
        Y1 = espacio * L
        X2 = espacio * (L + 1)
        X1 = espacio * L
        Y2 = espacio * (L + 1)

        if ( color == "red") {
            dibujarLinea("Red", 0 ,Y1 ,X2 ,500)
            //dibujarLinea("blueviolet", 0, Y1/2 ,L2/2 * 10, 0)
        }else if( color == "blue"){
            dibujarLinea("blue",500,X1,X2,0)
            // dibujarLinea("brown",250,X1/2,X2/2,0)
        } else if( color == "green"){
            dibujarLinea("green",500, Y1 ,L2 * 10, 500)
            // dibujarLinea("yellow",250, Y1/2 ,L2/2 * 10, 250)
        } else if ( color == "orange"){
            dibujarLinea("orange",0, Y1 ,L2 * 10, 0)
            // dibujarLinea("indigo", 0 ,Y1/2 ,X2/2 ,250)
        } 
          
        L++
        L2--
        }

}

function dibujarLinea(
    Color, 
    X_Inicial, 
    Y_Inicial, 
    X_Final, 
    Y_Final, 
    Ancho = 0
    )
{
    Cuadro.beginPath()
    Cuadro.strokeStyle = Color
    Cuadro.lineWidth= Ancho
    Cuadro.moveTo(X_Inicial,Y_Inicial)
    Cuadro.lineTo(X_Final,Y_Final)
    Cuadro.stroke()
    Cuadro.closePath()
}
