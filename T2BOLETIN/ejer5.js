// Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.

do {
    var cadenita = prompt("introduzca un año: "); 
    var año = parseInt(cadenita); 
} while (Number.isInteger(año) != true)


if (año % 400 == 0 || año%4 == 0 || año%100 != 0) {
    alert("verdadero");
} else {
    alert("falso");
}