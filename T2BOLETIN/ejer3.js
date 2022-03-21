// Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.

var numero = prompt("introduce un número para saber su inverso: ");
if (numero == 0) {
    alert("Error, no podemos calcular el inverso de 0.")
} else {
    alert("El inverso de " + numero + " es 1/" + numero);
}