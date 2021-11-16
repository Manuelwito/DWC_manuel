/**
 * Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es. 
 * 
 * 
 */
var numero = parseInt(prompt("introduzca un número: "));

let esPerfecto = (numero) =>{
    var retorno = false;
    var perfecto = 0;
    for (let x = 2; x <= numero; x++) {
        if(numero%x==0){
        perfecto = perfecto + (numero/x);
    }
    if (perfecto == numero){
        retorno = true;
    }    
}
    return retorno;
}

if(esPerfecto(numero)){
    alert("El numero "+numero+" es un número perfecto");
}else {
    alert("El numero no es perfecto");
}
