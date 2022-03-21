/*Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la valide para que esté
comprendida entre 0 y 10 y se escriba en letras de la siguiente manera:
SUSPENSO si es menor que 5
APROBADO mayor que 5 y menor que 6
BIEN entre 6 y 7
NOTABLE entre 7 y 8
SOBRESALIENTE entre 9 y 10
*/
const regex = /[0-9|10]/;
do {
    var nota = prompt("Introduzca su nota por teclado: ");
} while (regex.test(nota) == false);

document.write("tu nota es: ");
document.write("</br>");

if (nota < 5) {
    document.write("SUSPENSO");
}
else if (nota == 5) {
    document.write("APROBADO");
} else if (nota >= 7 || nota <= 8) {
    document.write("NOTABLE");
} else if (nota >= 6 || nota < 7) {
    document.write("BIEN");
} else if (nota >= 9 || nota <= 10) {
    document.write("SOBRESALIENTE");
}



