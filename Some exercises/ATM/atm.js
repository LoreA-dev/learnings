function ingresarDinero(event){
    event.preventDefault()
    const dinero = document.getElementById('entrada-texto').value
    if(!dinero || dinero == '') return alert('Ingresa algo en el cuadro de texto')
    saldoActual = saldoActual + (+dinero)
    document.getElementById('saldo-actual').innerHTML = saldo 
}