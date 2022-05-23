//Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y
//presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.


var fecha1;
var segundos;

segundos = prompt("introduzca el tiempo en segundos: ");



fecha1 = new Date(0,0,0,0,0,segundos,0);

fecha2 = new Date(fecha2[2],(fecha2[1]-1),fecha2[0]);


if(fecha1.getTime() < fecha2.getTime()){
    alert("la fecha1 es anterior a la fecha2.");
}

else{
    alert("la fecha2 es anterior a la fecha1.");
}