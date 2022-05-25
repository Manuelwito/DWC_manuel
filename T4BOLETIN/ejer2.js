/**
 * Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.

 */

var texto = prompt("introduzca un texto");

function esAlfabetoEspaniol() {
    var retorno = false;
    if (/^es\b/.test(navigator.language)) {
        retorno = true;
    }
    else {
        retorno = false;
    }
}


if (esAlfabetoEspaniol() == true) {
    alert("correcto es españols");
}
else {
    alert("incorrecto no es español");
}