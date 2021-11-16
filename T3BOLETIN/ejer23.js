//Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre
//ambas.



var fecha1;
var fecha2;
var fecha3;

fecha1 = prompt("introduzca la fecha 1: dd/mm/aaaa");
fecha2 = prompt("introduzca la fecha 2: dd/mm/aaaa");
fecha3 = prompt("introduzca la fecha 3: dd/mm/aaaa");



fecha1 = fecha1.split('/');
fecha1 = new Date(fecha1[2],(fecha1[1]-1),fecha1[0]);

fecha2 = fecha2.split('/');
fecha2 = new Date(fecha2[2],(fecha2[1]-1),fecha2[0]);

fecha3 = fecha3.split('/');
fecha3 = new Date(fecha3[2],(fecha3[1]-1),fecha3[0]);



if(fecha1.getTime() < fecha2.getTime() <  fecha3.getTime()){
    alert("la fecha3 es la mayor y la pequeña es la 1.");
    var dif;
    dif = (fecha3.getTime()-fecha1.getTime())/1000;
    alert("La diferencia en segundos es: "+dif);

}

//ESTO SE REPITE EN CADA POSIBILIDAD CON ELSE IF
else{

    alert("no.");
}