
//while- do while - for
/* const pantalla = document.getElementById("pantalla");
let contador = 1;

while (contador <= 50){   //la condicion debe cumplirse al principio
    pantalla.innerHtml += `<p> Fila ${contador}</p>`
}

do {
    pantalla.innerHtml += `<p> Fila ${contador}</p>`
    contador ++; //contador = contador +1
} while (contador <= 50);


for (let contador = 1; contador <=50; contador ++ ){
pantalla.innerHTML += '<p> Fila ${contador}</p>'
} */

while(confirm('queres realizar esta operacion')){
    pantalla.innerHTML += '<p> Fila Creada con confirm </p>'
}
