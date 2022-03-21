// Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
// a. Es de día desde las 7:30 hasta las 14:00 horas.
// b. Es tarde desde las 14:01 hasta las horas 20:30.
// c. Es noche desde las 20:31 hasta las horas 7:29.


var instante = prompt("Introduzca un instante de tiempo en formato hh:ss: ");

if (instante > "07:30" && instante < "14:00") {
    alert("buenos días");
}
else if (instante > "14:01" && instante < "20:30") {
    alert("buenas tardes");
}
else{
    alert("buenas noches");
}