//cree un programa al estilo de un cajero automatico :
//1-consulta
//2-Ingresar dinero
//3-extraer dinero
do {
  const opcion = prompt(
    "Íngresa una opcion: 1-consultar el saldo /2 -ingresar dinero /3-extraer dinero",
  );

  let saldo = 1000; //ambito global, por que la uso desde la linea 5 en adelante

  switch (opcion) {
    case "saldo":
    case "1":
    case 1:
      alert("Tu saldo actual es $" + saldo);
      break;
    case "deposito":
    case "2":
    case 2:
      const deposito = parseInt(
        prompt("Ingresa el monto que deseas depositar"),
      );
      saldo = saldo + deposito;
      alert(`Ingresaste $ ${deposito}, tu saldo actual es $${saldo}`);
      break;
    case "3":
    case "extraer":
    case "3":
    case 3:
      const extraccion = parseInt(prompt("ingresa el monto a extraer"));
      if (extraccion <= saldo) {
        saldo = saldo - extraccion;
        alert(`Retiraste $${extraccion}, tu saldo actual es $${saldo}`);
      } else {
        alert("Fondos insuficientes");
      }
      break;
    default:
      //aqui agrego todas las lineas de codigo que necesito si la opcion ingresada por el ususario es 3
      alert("Ingresaste una opcion incorrecta");
  }
} while (confirm("queres realizar otra operacion?"));
console.log("Aqui termino la ejecucion del switch");
