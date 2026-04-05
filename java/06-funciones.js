function aplicarDescuento(precio, descuento) {
    const percioFinal = precio - ((precio * descuento)/100)
    //let percioFinal = ((precio * descuento)/100)
    //percioFinal = precio - percioFinal
    console.log(percioFinal)
}
const precio = Number(prompt('ingresa el precio'))  //esta variable precio nada tiene que ver con la variable precio dentro de la funcion, tienen ambitos diferentes
const descuento = Number(prompt('ingresa el descuento'))
aplicarDescuento(precio, descuento)