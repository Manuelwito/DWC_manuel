// 32. En un cuadro de diálogo de alerta, muestre el alto y ancho en píxeles y la profundidad de color de su pantalla. Cada valor será separado por un salto de línea. 

var altura;
var ancho;

function cuadroDialogo() {
    ancho = window.innerHeight;
    altura = window.innerWidth;
    alert("El ancho de la página es: "+ancho+"\nEl alto de la página es "+altura+"\nLa profundidad del color es:");
}