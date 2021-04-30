let d = document.getElementById("Dibujito")
let Cuadro = d.getContext("2d")
let lineas = 50
let L = 0
let L2 = 50
let X1, Y2, Y1, X2


while(L < lineas){
    Y1 = 10 * L
    X2 = 10 * (L + 1)
    X1 = 10 * L
    Y2 = 10 * (L + 1)
    dibujarLinea("Red", 0 ,Y1 ,X2 ,500)
   // dibujarLinea("indigo", 0 ,Y1/2 ,X2/2 ,250)
    dibujarLinea("blue",500,X1,X2,0)
   // dibujarLinea("brown",250,X1/2,X2/2,0)
    dibujarLinea("green",500, Y1 ,L2 * 10, 500)
   // dibujarLinea("yellow",250, Y1/2 ,L2/2 * 10, 250)
    dibujarLinea("orange",0, Y1 ,L2 * 10, 0)
   // dibujarLinea("blueviolet", 0, Y1/2 ,L2/2 * 10, 0)
    L++
    L2--
    

    //dibujarLinea("navy", 250 ,Y1 ,X2 ,500)
    //dibujarLinea("aqua",250,L2/2,L2*10,500)
    
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
