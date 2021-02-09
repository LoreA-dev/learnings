let boton = document.getElementById("calcular")

let arroz = 0.5,
gambas = 0.25,
arrozNecesario, gambasNecesarias
let costo_de_arroz, costo_de_gambas

boton.addEventListener("click", calcular)

function calcular (){
    let numero_de_personas = +document.getElementById("personas").value ,
    valor_arrozporKilo = +document.getElementById("valordelarroz").value,
    valor_gambasporKilo = +document.getElementById("valordegambas").value;
    
    arrozNecesario = parseFloat((numero_de_personas / 4) * arroz);
    gambasNecesarias = parseFloat((numero_de_personas / 4) * gambas);
    
    costo_de_arroz = arrozNecesario * valor_arrozporKilo
    costo_de_gambas = gambasNecesarias * valor_gambasporKilo
    
    document.write(`\nPara ${numero_de_personas} personas, necesitarás ${arrozNecesario}Kg de arroz y ${gambasNecesarias}Kg de gambas.\n 
    El costo del arroz es de $${costo_de_arroz}, y el de las gambas es de $${costo_de_gambas} 
    `)
    
}


// numero_de_personas = +prompt("Ingrese el número de personas a comer")
// valor_arrozporKilo = +prompt("Ingrese el valor del arroz por Kilo")
// valor_gambasporKilo = +prompt("Ingrese el valor de las gambas por Kilo")

