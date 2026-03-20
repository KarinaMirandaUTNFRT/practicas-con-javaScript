//determinar si un numero es par o impar
//el usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.
//Algoritmo Par_impar
//definir numero1 Como Entero
//escribir "Ingresa tu numero:"
//leer numero1
//si numero1 % 2 =0 Entonces
//escribir"el numero",numero1," es par"
//sino
//escribir"el numero",numero1," es impar"
//FinSi
//FinAlgoritmo
// creo las variables
const numero1 = parseInt(prompt("Ingresa un numero para comparar"));
console.log(numero1);
console.log(isNaN(numero1));
console.log(isNaN(4));

//validamos que el usuario ingrese un numero no un string
if (isNaN(numero1)) {
  alert("Ingresaste un valor erroneo");
} else {
  const total = numero1 % 2;
  console.log(total);
if (total === 0)
  alert("El numero es par");
} else {
  alert("El numero es impar");
}
}