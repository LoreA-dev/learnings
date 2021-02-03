let d = document.getElementById("Dibujito")
let lienzo = d.getContext("2d")

// lienzo.beginPath()
// lienzo.strokeStyle = "blue"
// lienzo.moveTo(100,100)
// lienzo.lineTo(200,200)
// lienzo.stroke()
// lienzo.closePath()

function dibujarLinea(Color, X_Inicial, Y_Inicial, X_Final, Y_Final, Ancho = 10)
{
    lienzo.beginPath()
    lienzo.strokeStyle = Color
    lienzo.lineWidth= Ancho
    lienzo.moveTo(X_Inicial,Y_Inicial)
    lienzo.lineTo(X_Final,Y_Final)
    lienzo.stroke()
    lienzo.closePath()
}
function dibujarCurva(
    Color_Curva, 
    X_LINE_INIT, 
    Y_LINE_INIT,
    X1_Curva, 
    Y1_Curva, 
    X2_Curva, 
    Y2_Curva, 
    X_LINE_FIN, 
    Y_LINE_FIN, 
    Ancho_Curva = 8)
{
    lienzo.beginPath()
    lienzo.strokeStyle = Color_Curva
    lienzo.lineWidth= Ancho_Curva
    lienzo.moveTo(X_LINE_INIT,Y_LINE_INIT)
    lienzo.bezierCurveTo(X1_Curva, X2_Curva, Y1_Curva, Y2_Curva, X_LINE_FIN, Y_LINE_FIN)
    lienzo.stroke()
    lienzo.closePath()
}

// Letra L 
dibujarLinea ("pink", 0,0, 0, 30)
dibujarLinea ("pink", 0,30, 20, 30)
// Letra O 
dibujarLinea ("blue", 30,30, 55, 30)
dibujarLinea ("blue", 50,0, 50, 30)
dibujarLinea ("blue", 30,0, 30, 35)
dibujarLinea ("blue", 30,0, 50, 0)
// Letra R 
dibujarLinea ("yellow", 70, 0, 70, 35)
dibujarLinea ("yellow", 70, 15, 88, 35)
dibujarLinea ("yellow", 85, 0, 85, 20)
dibujarLinea ("yellow", 70, 0, 90, 0)
dibujarLinea ("yellow", 70, 15, 90, 15)
// Letra E  
dibujarLinea ("red", 105, 0, 105, 35)
dibujarLinea ("red", 105, 0, 125, 0)
dibujarLinea ("red", 105, 15, 125, 15)
dibujarLinea ("red", 100, 30, 125, 30)
// Letra N 
dibujarLinea ("green", 140, 0, 140, 35)
dibujarLinea ("green", 140, 0, 160, 35)
dibujarLinea ("green", 159, 0, 159, 34)
// Letra A 
dibujarLinea ("purple", 188, 0, 175, 34)
dibujarLinea ("purple", 189, 0, 200, 34)
dibujarLinea ("purple", 180, 22, 200, 22)

dibujarLinea ("Blue", 500, 0, 500, 500)

// Curva izquierda
dibujarCurva(
    "red",
    148,100, //Inicio
    270,375, //Cv1
    15,120, //Cv2
    140, 297, //Final
    20 // Grosor
    ) 

// Curva derecha
dibujarCurva(
    "red",
    155,297, //Inicio
    5,10, //Cv1
    190,5, //Cv2
    158, 105, //Final
    20 // Grosor
    ) 

// dibujarCurva(
//     "bluesky",
//     154, 80, 
//     200,200, 
//     200,200, 
//     206,297,
//     ) 

    
/**
 * 
 * Lini inici: (3,4.93)
 * linea final: (3.47,0.46)
 * Curv 1: (4.7,8.7)
 * Curv 2: (7.75,4)
 */
