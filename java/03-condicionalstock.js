//tenemso una variable con la cantidad de productos en stock. Si el stock es mayor a 0, mostrar "Disponible" de lo contrario "sin stock"
const stock = parseInt(prompt('Ingresa el valor del stock'))
const pantalla = document.getElementById("pantalla")
console.log(pantalla)
if(stock > 0){
    //alert ('Disponible')
pantalla.innerHTML = "Disponible"
} else{
    //alert('No disponible')
    pantalla.innerHTML = "<span class = 'texto-danger'> Sin stock </span>"
}
//operador ternario, solo se usa con condicionales dobles pequeñas
//stock > 0 
// ? pantalla.innerHTML = "Disponible" 
// : pantalla.innerHTML = "<span class = 'texto-danger'> Sin stock </span>"