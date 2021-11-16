/* EJERCIO 21: Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 

SIN TERMINAR:
*/


var usuarios = new Array();

do{
    var cadena = prompt("introduzca su nombre, apellidos, Dni y fecha de nacimiento separados por comas: ");
    
    var usuario = cadena.split(',');
    usuarios.push(usuario);
}while(cadena != " ");

document.write(usuarios);

var busqueda = prompt("indique el apellido o dni o la edad para buscar un usuario");

if(usuarios.includes(busqueda));

