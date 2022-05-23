// 11. Hacer un programa en el que el usuario que introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad del usuario por pantalla.

var datos = prompt("Introduzca un nombre, profesion y edad, separado por comas");

var arrayDeDatos = datos.split(",");
document.write('<p>La cadena original es: "' + datos + '"');

document.write('<p>La edad  es: "' + arrayDeDatos[2]+'"');

