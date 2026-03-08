//alternativa borramos document open y close
const nombre = prompt("Ingresa tu nombre:"); //abre una ventana para agregar un mensaje
const apellido = prompt("Ingresa tu apellido:"); //abre una ventana para agregar un mensaje
console.log(nombre);
console.log(apellido);
const pantalla = document.getElementById("pantalla"); //es el div del html con el id, copio el id de html
//alternativa de writeln
 pantalla.innerHTML =  `<p> Tu nombre y Apellido es :  ${nombre}  ${apellido}   </p> `;
 pantalla.innerHTML +=  `(v2) Tu nombre y Apellido es :  ${nombre}  ${apellido}   `;

