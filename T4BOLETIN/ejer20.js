/*EJERCICIO 20: Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
*/

var usuarios = new Array();

do{

var cadena = prompt("introduzca su nombre, apellidos, Dni y fecha de nacimiento separados por comas: ");

var usuario = cadena.split(',');




usuarios.push(usuario);



}while(cadena != " ");

document.write(usuarios);
