// Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e imprima por pantalla dichos números y su suma. 

var cadena = prompt("introduce una cadena");

function extraer(cadena){
    cadena.replace(/\D/g,'');
    return cadena;
}
var resultado = extraer(cadena);
document.write(resultado);