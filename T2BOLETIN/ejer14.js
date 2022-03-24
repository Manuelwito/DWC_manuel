//Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento donde se recoge si se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.

var genero = "";
const regex = /[H|M]/;

do{ 
 
    
    genero = prompt("introduzca el genero: H/M ");
    if(genero=="*")
        break;
        
}while(regex.test(genero)==false);

document.write("fin");

//SIN TERMINAR