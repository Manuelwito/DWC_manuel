//Hacer el Tarot que comprueba que la fecha de nac, introducida no es mayor que la
//actual.

var fecha;
fechaActual = Date.now();
//fechaActual = new Date().getTime(); es lo mismo que now()

//while (true){
fecha = prompt("introduzca la fecha de nacimiento en formato (yyyy/mm/dd): ");
fecha = fecha.split('/');

fecha = new Date(fecha[0], (fecha[1] - 1), fecha[2]);
//EL MES SIEMPRE SE PONE CON UN MENOS 1 EN EL ARRAY

if (fecha.getTime() < fechaActual) {
    alert("la fecha introducida es correcta.");
}

else {
    alert("la fecha introducida no es correcta.");
}





/*
    Date.parse(fecha);
    alert(getTime(fecha));      
   
    if(fecha > Date.now()){

        continue;
    }
    else{
        alert("fecha correcta");
        break;
    }
}*/
