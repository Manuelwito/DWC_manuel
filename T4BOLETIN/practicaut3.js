/*
Nombre servirá para guardar el alias que está introduciendo el usuario
alias será un array donde guardar los alias
*/
var nombre = "";
var alias = "";
let re1 = /(@)+([a-z]{7})+([0-9]{3})/i;
let re2 = /([a-z]{7})+([0-9]{3})/i;
var arroba = '@';
/*
mientras no se introduzca la palabra Fin el programa permanecerá en este bucle:
*/
while(nombre!='fin'){


    nombre = prompt("introduzca su alias (Los alias comienzan obligatoriamente por @ y a continuación contendrán 7 caracteres (primera letra del nombre, tres primeras letras del primer apellido y tres primeras letras del segundo apellido)  y terminará con 3 dígitos (últimos 3 dígitos del dni).): ");
    /*
    Expresión regular para validar la entrada del alias correctamente
    */
    if(nombre.match(re1)){
        alert("correcto");
        alias = alias.concat(nombre);
        continue;
    }
    else if(nombre.match(re2)){
        nombre= arroba.concat(nombre);
        alert("correcto");
        alias = alias.concat(nombre);
        continue;
    }
    else{
        alert("los datos introducidos no son correctos pruebe de nuevo");
        continue; 
    }
}



var ventana;
function abrir(){
    if(ventana==null){
        ventana = window.open("","","scrollbars=1,height=2,width=2");     
        ventana.document.write(alias);        
    }
}

function cerrar(){
    ventana.close();
    ventana=null;
}