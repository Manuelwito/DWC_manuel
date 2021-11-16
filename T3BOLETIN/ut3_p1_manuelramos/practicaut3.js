/*
Nombre servirá para guardar el alias que está introduciendo el usuario
alias será un array donde guardar los alias
*/
var nombre = "";
let alias = [];
let re = /(@)+([a-z]{7})+([0-9]{3})/i;

/*
mientras no se introduzca la palabra Fin el programa permanecerá en este bucle:
*/
while(true){


    nombre = prompt("introduzca su alias (Los alias comienzan obligatoriamente por @ y a continuación contendrán 7 caracteres (primera letra del nombre, tres primeras letras del primer apellido y tres primeras letras del segundo apellido)  y terminará con 3 dígitos (últimos 3 dígitos del dni).): ");

    if(nombre=='fin'){


        break;
    }

    /*
    Expresión regular para validar la entrada del alias correctamente
    */
    else if(nombre.match(re)){

        alert("correcto");
        continue;

    }


    else{
        alert("los datos introducidos no son correctos pruebe de nuevo");

        continue; 
    }


    alias = alias.push(nombre);

}

var ventana;
            function abrir(){
                if(ventana==null){

                    ventana = window.open("","","scrollbars=1,height=2,width=2");
                    var nombres = "";
                    
                    //bucle para recorrer el array. (SIN TERMINAR)
                    alias.forEach(element => {
                         nombres = element;

                         ventana.document.write(nombres); 
                    });
                    
                }
            }

            function cerrar(){
                ventana.close();
                ventana=null;
            }