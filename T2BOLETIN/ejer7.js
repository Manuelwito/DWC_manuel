var precio = parseFloat(prompt("introduzca un precio"));
var dinero = parseFloat(prompt("introduzca el dinero para pagar"));
var cambio;
var devolucion;

if (dinero < precio) {
    document.write("El dinero introducido es menor al producto.");
} else {
    cambio = dinero - precio;

    if (cambio >= 500) {
        devolucion = cambio / 500;
        cambio = cambio % 500;
        document.write(Math.trunc(devolucion) + " billetes de 500 euros.");
    }

    if (cambio >= 200) {
        devolucion = cambio / 200;
        cambio = cambio % 200;
        document.write(Math.trunc(devolucion) + " billetes de 200 euros.");
    }

    if (cambio >= 100) {
        devolucion = cambio / 100;
        cambio = cambio % 100;
        document.write(Math.trunc(devolucion) + " billetes de 100 euros.");
    }

    if (cambio >= 50) {
        devolucion = cambio / 50;
        cambio = cambio % 50;
        document.write(Math.trunc(devolucion) + " billetes de 50 euros.");
    }

    if (cambio >= 20) {
        devolucion = cambio / 20;
        cambio = cambio % 20;
        document.write(Math.trunc(devolucion) + " billetes de 20 euros.");
    }

    if (cambio >= 10) {
        devolucion = cambio / 10;
        cambio = cambio % 10;
        document.write(Math.trunc(devolucion) + " billetes de 10 euros.");
    }

    if (cambio >= 5) {
        devolucion = cambio / 5;
        cambio = cambio % 5;
        document.write(Math.trunc(devolucion) + " billetes de 5 euros.");
    }

    if (cambio >= 2) {
        devolucion = cambio / 2;
        cambio = cambio % 2;
        document.write(Math.trunc(devolucion) + " monedas de 2 euros.");
    }

    if (cambio >= 1) {
        devolucion = cambio / 1;
        cambio = cambio % 1;
        document.write(Math.trunc(devolucion) + " monedas de 1 euros.");
    }

    if (cambio >= 0.50) {
        devolucion = cambio / 0.50;
        cambio = cambio % 0.50;
        document.write(Math.trunc(devolucion) + " monedas de 0,50 euros.");
    }

    if (cambio >= 0.20) {
        devolucion = cambio / 0.20;
        cambio = cambio % 0.20;
        document.write(Math.trunc(devolucion) + " monedas de 0,20 euros.");
    }

    if (cambio >= 0.10) {
        devolucion = cambio / 0.10;
        cambio = cambio % 0.10;
        document.write(Math.trunc(devolucion) + " monedas de 0.10 euros.");
    }

    if (cambio >= 0.05) {
        devolucion = cambio / 0.05;
        cambio = cambio % 0.05;
        document.write(Math.trunc(devolucion) + " monedas de 0.05 euros.");
    }

    if (cambio >= 0.02) {
        devolucion = cambio / 0.02;
        cambio = cambio % 0.02;
        document.write(Math.trunc(devolucion) + " monedas de 0.02 euros.");
    }

    if (cambio >= 0.01) {
        devolucion = cambio / 0.01;
        cambio = cambio % 0.01;
        document.write(Math.trunc(devolucion) + " monedas de 0.01 euros.");
    }
}
