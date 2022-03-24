//Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción. El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.

var cantidad = null;
var moneda;
var libra = 1.20;
var dolar = 0.91;
var yen = 0.0075;
var franco = 0.97;
var corona = 0.096;
var resultado = 0;

do {
    cantidad = parseFloat(prompt("Introduzca la cantidad que desea convertir. RECUERDE INTRODUCIR UN CARÁCTER NÚMERICO."));
} while (isNaN(cantidad) == true)

do {
    moneda = prompt("Introduzca la moneda a la que desea convertir: libra/dolar/yen/franco/corona. ASEGURESE DE INTRODUCIR UNA DE ESAS OPCIONES TAL Y COMO VIENEN ESCRITAS.");

} while (moneda != "libra" && moneda != "dolar" && moneda != "yen" && moneda != "franco" && moneda != "corona")

if (moneda == "libra") {
    resultado = cantidad * libra;
}
if (moneda == "dolar") {
    resultado = cantidad * dolar;
}
if (moneda == "yen") {
    resultado = cantidad * yen;
}
if (moneda == "franco") {
    resultado = cantidad * franco;
}
if (moneda == "corona") {
    resultado = cantidad * corona;
}

document.write("LA MONEDA ELEGIDA HA SIDO: " + moneda + " LA CANTIDAD " + cantidad + " EN " + moneda + " ES " + resultado);