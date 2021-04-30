alert("INSTRUCCIONES=\n 1. Puedes dibujar con el mouse, siempre y cuando mantengas el click izquierdo presionado.\n2. Puedes dibujar con las fechas del tecleado, estas comiezan desde el centro. ")
let permiso = prompt("Escribe OK si entendiste las instrucciones")

let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

if ( permiso === "OK" || permiso === "ok"){
    document.addEventListener("keydown", dibujarTeclado)
    document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
    document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
    document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
} else {
    alert("No puedes continuar, sin antes entender las instrucciones")  
}

let cuadro = document.getElementById("Area_de_dibujo")
let papel = cuadro.getContext("2d")
let borraTodo = document.getElementById("eraser")
let borrador= document.getElementById("borra")

let x = 250
let y = 250

borraTodo.addEventListener("click", opcionBorrarTodo)

function opcionBorrarTodo () {
    papel.clearRect(0, 0, cuadro.width, cuadro.height);
    papel.beginPath();
    papel.rect(0, 0, 500, 500);
    papel.fillStyle = "white";
    papel.fill();
}


let isBorrador = false   
let moveX, moveY

borrador.addEventListener("click", cambiarEstadoDeBorrador)

function cambiarEstadoDeBorrador(evento_Borrador){
    console.log(evento_Borrador)

        if(isBorrador){
            evento_Borrador.target.value = "Borrador"
        }else{
            evento_Borrador.target.value = "Volver a Pintar"
        }
        isBorrador   = !isBorrador;     
    
    }

function dibujarLinea(Color, X_Inicial, Y_Inicial, X_Final, Y_Final, lienzo)
{
    lienzo.beginPath()
    lienzo.strokeStyle = Color
    lienzo.lineWidth = 10
    lienzo.moveTo(X_Inicial,Y_Inicial)
    lienzo.lineTo(X_Final,Y_Final)
    lienzo.stroke()
    lienzo.closePath()
}

function dibujarTeclado(evento)
{    
    let colorsito= document.getElementById("Color").value
    
    dibujarLinea(colorsito, 249, 249 ,251 ,251, papel)
    
    let movimiento = 10
    if(x===500){
        x = 0 
    }else if(x===0){
        x = 500
    }
    
    if(y===500){
        y = 0 
    }else if(y===0){
        y = 500
    }

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorsito, x, y , x , y - movimiento, papel)
            y =  y - movimiento
            break;
            
            case teclas.DOWN:
            dibujarLinea(colorsito, x, y , x , y + movimiento, papel)
            y = y + movimiento
            break;

            case teclas.LEFT:
            dibujarLinea(colorsito, x, y , x - movimiento, y, papel)
            x = x - movimiento
            break;
        
            case teclas.RIGTH:
            dibujarLinea(colorsito, x, y , x + movimiento, y, papel)
            x = x + movimiento
            break;
        }

    }

let estadoMouse = 0     
let movimiento_X, movimiento_Y

function dibujarMouse(evento_Mouse){
    let movimiento = 7
    movimiento_X = evento_Mouse.clientX
    movimiento_Y = evento_Mouse.clientY - 71
    let colorsito =document.getElementById("Color").value                                  
    
    if(isBorrador){
        colorsito = "white"
    }

    switch(estadoMouse)
    {
            case 1:
                dibujarLinea(colorsito, movimiento_X, movimiento_Y , movimiento_X + movimiento , movimiento_Y, papel)
            break           
        }
        
    }

function presionarMouse(evento_Mouse){
        estadoMouse = 1;        
    }

function soltarMouse(evento_Mouse){
        estadoMouse = 0;      
    }

