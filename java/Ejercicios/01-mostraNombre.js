const nombre = prompt("Ingresa tu nombre:"); //abre una ventana para agregar un mensaje
const apellido = prompt("Ingresa tu apellido:"); //abre una ventana para agregar un mensaje
console.log(nombre);
console.log(apellido);

//mostrar un mensaje al usuario
//alert("Tu nombre y Apellido es: " + nombre + ',' + apellido )
//document.writeln('<p> Tu nombre y Apellido es : ' + nombre + ' ' + apellido + ' </p>'  )
document.open()
document.writeln(
  `<p> Tu nombre y Apellido es :  ${nombre}  ${apellido}   </p> `,
);
document.close();
