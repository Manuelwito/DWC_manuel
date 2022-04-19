//  Hacer un programa que lea una cadena de la entrada estándar y un patrón, y cuente cuántas veces aparece dicho patrón en el texto.

var contadorC = 0;
var nombre = prompt("Introduzca una cadena");
let er = new RegExp(prompt("Introduzca un patrón"), "g");
contadorC = (nombre.match(er)).length;
document.write("Su patrón se repite " + contadorC + " veces");
