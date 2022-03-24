//Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.

var numero;
var menor=null;
var mayor=null;
var media = null;
var contador = 0;
var terminar = false;
var continuar;

while (terminar == false){
    numero = parseFloat(prompt("introduzca un número por teclado"));

    if(contador == 0){
        menor = numero;
        mayor = numero;
    }
    if(numero>mayor){
        mayor = numero;
    }
    
    if(numero < menor){
        menor = numero;
    }

    media = media + numero;
    contador = contador+1;
    document.write("El número introducido último es el: "+numero);
    document.write("</br>");
    document.write("El número menor introducido es el: "+menor);
    document.write("</br>");
    document.write("El número mayor introducido es el: "+mayor);
    document.write("</br>");
    continuar = prompt("Desea FINALIZAR Y CONOCER SUS RESULTADOS? pulse: S/N");
    if(continuar == "S"){
        terminar = true;
    }
}

media = media/contador;
document.write("El número introducido último es el: "+numero);
document.write("</br>");
document.write("El número menor introducido es el: "+menor);
document.write("</br>");
document.write("El número mayor introducido es el: "+mayor);
document.write("</br>");
document.write("LA MEDIA ARITMETICA ES: "+media);
document.write("</br>");