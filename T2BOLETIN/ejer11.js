// Hacer un algoritmo que lea el número correspondiente a un mes del calendario y presente en pantalla su nombre usando una estructura de control adecuada.

var numero = null;

do {
    numero = parseInt(prompt("Introduzca un número. RECUERDE INTRODUCIR UN CARÁCTER NÚMERICO ENTRE 1 Y 12."));
} while (isNaN(numero) == true || numero > 12 || numero <= 0)

if(numero == 1){
    document.write("Enero");
}
if(numero == 2){
    document.write("Febrero");
}
if(numero == 3){
    document.write("Marzo");
}
if(numero == 4){
    document.write("Abril");
}
if(numero == 5){
    document.write("Mayo");
}
if(numero == 6){
    document.write("Junio");
}
if(numero == 7){
    document.write("Julio");
}
if(numero == 8){
    document.write("Agosto");
}
if(numero == 9){
    document.write("Septiembre");
}
if(numero == 10){
    document.write("Octubre");
}
if(numero == 11){
    document.write("Noviembre");
}
if(numero == 12){
    document.write("Diciembre");
}
