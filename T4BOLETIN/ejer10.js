/*
10 - 

A: Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.
*/


let elMenor = (...num) => {
    let minimo = Math.min(...num);
    return minimo;
}

document.write(elMenor(28,99,6,32,898,76));
document.write("</br>");

/*
B: Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array. 
*/
let colocaEnMedio = (array1 , array2) => {
    var centro = Math.round(array1.length / 2);
    array1.splice(centro, 0, array2);
    return array1; 
} 

const array1 = [1,2,3,4,5,6,7,8,9];
const array2 = [43,75,234,67,99];
document.write(colocaEnMedio(array1, array2));
document.write("</br>");

/*
C: Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.
*/

let uneArrays = (...num) => {
    var nuevoArray = new Array();
    for (let i = 0; i < num.length; i++) {
        nuevoArray = nuevoArray.concat(num[i]);
    }
    return nuevoArray;
}

const array3 = [9,8,7];
const array4 = [1,2,3];
document.write(uneArrays(array1, array2, array3, array4));
document.write("</br>");

/*
D: 
Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
*/

let sumaArgPares = (...num) => {

    var pares = 0;
    for (let i = 0; i < num.length; i++) {
       if (num[i]%2 == 0){
            pares = pares + num[i];           
       }    
    }
    return pares;
}

document.write(sumaArgPares(1,2,3,4,5,6,7,8,9,89));

/*commit*/ 