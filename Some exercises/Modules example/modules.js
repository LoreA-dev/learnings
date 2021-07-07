for (let numero = 0; numero <= 50; numero++){
    if (numero %3 === 0 ){
        document.write( numero + " modulo de 3");
    } else if (numero %5 === 0) {
        document.write(numero + " modulo de 5");
    } else {
        document.write(numero);
    }
    document.write("<br />")
}
