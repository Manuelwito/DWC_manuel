/**
 * EJERCICIO 25: Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.
 */
var array = [4,4,4,5,6,7,7,7,7];

//LA FUNCIÓN: 
let eliminaRepes = (array) => {
    array = [...new Set(array)];
    array = new Array(array);
    return array;
};

//PRUEBA DE LA FUNCIÓN:
array = eliminaRepes(array);

for(let a of array){
    document.write(a+",");
}