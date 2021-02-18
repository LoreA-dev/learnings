let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

const aleatorios = {
    vacaX: aleatorio(0 , 420),
    vacaY: aleatorio(0 , 420),
    loboX: aleatorio(0 , 420),
    loboY: aleatorio(0 , 420),
    polloX: aleatorio(0 , 420),
    polloY: aleatorio(0 , 420),
    cerdoX: aleatorio(0 , 420),
    cerdoY: aleatorio(0 , 420),
}

document.addEventListener("keydown", moverLobo)

let villaPlatzi = document.getElementById("villaplatzi")
let lienzo = villaPlatzi.getContext("2d")

function moverLobo(evento)
{  
    let movimiento = 5
    
    if(loboX > 500){
        loboX = 0 
    }else if(loboX<=0){
        loboX = 500
    }
    
    if(loboY > 500){
        loboY = 0 
    }else if(loboY <= 0){
        loboY = 500
    }
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujar()
            dibujarLobo(loboX, loboY)
            loboY =  loboY - movimiento
            break;
            
            case teclas.DOWN:
            dibujar()
            dibujarLobo(loboX, loboY)
            loboY = loboY + movimiento
            break;
            
            case teclas.LEFT:
            dibujar()
            dibujarLobo(loboX, loboY)
            loboX = loboX - movimiento
            break;
            
            case teclas.RIGTH:
            dibujar()
            dibujarLobo(loboX, loboY)
            loboX = loboX + movimiento
            break;
        }
        
    }

    
    let fondo = {
    url: "./tile.png",
    cargaOK: false
}

fondo.imagen = new Image() 
fondo.imagen.src = fondo.url  
fondo.imagen.addEventListener("load", cargarFondo)

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar()
}


let vaca = {
    url: "./vaca.png",
    cargaOK: false
}

vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVaca)

function cargarVaca(){
    vaca.cargaOK = true
    dibujar();
}

let cerdo = {
    url: "./cerdo.png",
    cargaOK: false
}

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)

function cargarCerdo(){
    cerdo.cargaOK = true
    dibujar()
    
}

let pollo = {
    url: "./pollo.png",
    cargaOK: false
}

pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollo)

function cargarPollo(){
    pollo.cargaOK = true
    dibujar()
    
}

let lobo = {
    url: "./lobo.png",
    cargaOK: false
}


lobo.imagen = new Image()
lobo.imagen.src = lobo.url
lobo.imagen.addEventListener("load", cargarLobo)

function cargarLobo(){
    lobo.cargaOK = true
    dibujarLobo()
    
}

function dibujar()
{
    if (fondo.cargaOK) {
        lienzo.drawImage(fondo.imagen, 0, 0)
    }
    if (vaca.cargaOK){
        let { vacaX, vacaY } = aleatorios
        lienzo.drawImage(vaca.imagen , vacaX, vacaY)
        // let vaca_X = vacaX * 80
        // let vaca_Y = vacaY * 80
    }
    if (cerdo.cargaOK) {
        let cerdoX = aleatorios.cerdoX
        let cerdoY = aleatorios.cerdoY
        lienzo.drawImage(cerdo.imagen , cerdoX, cerdoY)
        // let cerdo_X = cerdoX * 80
        // let cerdo_Y = cerdoY * 80
    }
    if (pollo.cargaOK) {
        let polloX = aleatorios.polloX
        let polloY = aleatorios.polloY  
        lienzo.drawImage(pollo.imagen , polloX, polloY)
        // let pollo_X = polloX * 80
        // let pollo_Y = polloY * 80
    }   
}

let loboX = aleatorio(0,420)
let loboY = aleatorio(0,420)


function dibujarLobo(loboX, loboY) {
    if (lobo.cargaOK) {
        lienzo.drawImage(lobo.imagen , loboX, loboY)
    }
}


function aleatorio (minimo, maximo)
{
    let resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    return resultado
}


