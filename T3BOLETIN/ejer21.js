//21. Escribe un algoritmo que lea desde la entrada
// estándar dos fechas dadas por día, mes
//y año y calcule cuál de ellas es anterior a la otra.

var fecha1;
var fecha2;

fecha1 = prompt("introduzca la fecha 1: dd/mm/aaaa");
fecha2 = prompt("introduzca la fecha 2: dd/mm/aaaa");

fecha1 = fecha1.split('/');
fecha1 = new Date(fecha1[2],(fecha1[1]-1),fecha1[0]);

fecha2 = fecha2.split('/');
fecha2 = new Date(fecha2[2],(fecha2[1]-1),fecha2[0]);


if(fecha1.getTime() < fecha2.getTime()){
    alert("la fecha1 es anterior a la fecha2.");
}

else{
    alert("la fecha2 es anterior a la fecha1.");
}


