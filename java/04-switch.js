//cree un programa al estilo de un cajero autoimatico :
//1-consulta
//2-Ingresar dinero
//3-extraer dinero

const opcion = prompt(
  "Íngresa una opcion: 1-consultar el saldo -2 -ingresar dinero -3-extraer dinero",
);
if (opcion === "1") {
  alert("consultar el saldo");
} else if (opcion === "2") {
  alert("Aquin tengo que ingresar el dinero");
} else if (opcion === "3") {
  alert("Aqui tengo que extraer el dinero");
} else {
  alert("ingresaste una opcion erronea");
}
