//cree un programa al estilo de un cajero automatico :
//1-consulta
//2-Ingresar dinero
//3-extraer dinero

const opcion = prompt(
  "Íngresa una opcion: 1-consultar el saldo /2 -ingresar dinero /3-extraer dinero",
);
//if (opcion === "1") {
alert("consultar el saldo");
//} else if (opcion === "2") {
//alert("Aquin tengo que ingresar el dinero");
//} else if (opcion === "3") {
//alert("Aqui tengo que extraer el dinero");
//} else {
//alert("ingresaste una opcion erronea");
//} 
switch (opcion) {
  case "1":
    alert("aqui tengo que  Consultar saldo");
    break;
  case "2":
    alert("aqui tengo que  Ingresar dinero");
    break;
  case "3":
    alert("aqui tengo que  Extraer dinero");
    break;
  default:
    alert("aqui tengo que  ingresaste una opcion erronea");
}
console.log("aqui termino la ejecucion del switch");
