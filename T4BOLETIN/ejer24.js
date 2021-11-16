//Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del
//usuario y muestre “Felicidades!” si es el día señalado.


var cumpleaños;
var fechaActual = Date.now();

cumpleaños = prompt("introduzca la fecha de su cumpleaños: dd/mm");


cumpleaños = cumpleaños.split('/');
fecha1 = new Date(fecha1[1],(fecha1[0]-1),2021);


fechaActual = fechaActual.getTime();

if(fecha1.getTime() < fecha2.getTime()){
    alert("la fecha1 es anterior a la fecha2.");
}

else{
    alert("la fecha2 es anterior a la fecha1.");
}