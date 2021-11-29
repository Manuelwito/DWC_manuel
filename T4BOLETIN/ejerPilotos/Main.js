var clasificacion = [];

var piloto1 = new Piloto("Fernando Alonso","Alpine Motors");
var piloto2 = new Piloto("Max Verstappen","Redbull Racing");
var piloto3 = new Piloto("Carlos Sainz","Scuderia Ferrari");
var piloto4 = new Piloto("jony Verstappen","Redbull Racing");
var piloto5 = new Piloto("josele Sainz","Scuderia Ferrari");

clasificacion.push([piloto1,4]);
clasificacion.push([piloto2,0.17]);
clasificacion.push([piloto3,0.19]);
clasificacion.push([piloto4,5]);
clasificacion.push([piloto5,1]);

let introduceSesion = (nombre, escuderia, tiempo) => {
    var correcto = false;
    var p = new Piloto(nombre, escuderia);
    if (clasificacion.push([p, tiempo])) {
        correcto = true;
    }
    return correcto;
};

/**
 * Metodo para introducir la sesiones en el array clasificacion
 * @param {string} nombre 
 * @param {string} escuderia 
 * @param {date} tiempo 
 */

while (true) {
    opcion = prompt("Introduzca una opción: 1: Ver clasificación / 2: Introducir una sesión nueva / 3: Finalizar: ");
    /*Opcion 3 del usuario: Finalizar sesion*/
    if (opcion == '3') {
        break;
    }
    /*
   Opcion 2 del usuario: Introudcir sesion
    */
    else if (opcion == '2') {
        nombre = prompt("Introduzca el nombre del piloto: ");
        escuderia = prompt("Introduzca la escuderia del piloto: ");
        tiempo = parseInt(prompt("Introduzca el tiempo obtenido en la sesion: "));
        if (introduceSesion(nombre, escuderia, tiempo)) {
            alert("introducido correctamente");

        }
        continue;
    }

    else if (opcion == '1') {
        cllasificacion = clasificacion.sort()
            
          /*  
            function(a, b){
            return b-a
        });
*/
        for(var i=0; i<clasificacion.length;i++){

            document.write(clasificacion[i][0].muestraPiloto()+" cuyo tiempo es: "+clasificacion[i][1]);
            document.write("</br>");
        }
    
        break;
    }
    
    else {
    alert("los datos introducidos no son correctos pruebe de nuevo");

    continue;
}


    //alias = alias.push(nombre);

}











