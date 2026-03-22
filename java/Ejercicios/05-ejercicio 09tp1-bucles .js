const frase = prompt("Ingresa una frase").toLowerCase();
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `vocales de la palabra ${frase}:`;
console.log(frase.length);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

for (let caracter = 0; caracter < frase.length; caracter++) {
  //mientras que caracter sea menor que freselenght que se incremente el contador
  if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u" ||
    frase.charAt(caracter) === "á" ||
    frase.charAt(caracter) === "é" ||
    frase.charAt(caracter) === "í" ||
    frase.charAt(caracter) === "ó" ||
    frase.charAt(caracter) === "ú"
  ) {
    pantalla.innerHTML += frase.charAt(caracter);
  }
}
