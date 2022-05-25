// Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.

function programita() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var mostrar = parseInt(programita(1, 3, 4, 6));
document.write("la suma es: " + mostrar);