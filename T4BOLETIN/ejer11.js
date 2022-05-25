/**
 * Refactoriza el siguiente código usando funciones flecha.
Asegúrate de que la función se llama tripleAndFilter.
    function tripleAndFilter(arr){
            return arr.map(function(value){
                    return value * 3;
                    }).filter(function(value){
                        return value % 5 === 0;
                })
    }

// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;

*/
const tripleAndFilter = (arr) => {
    return arr.map((value) => {
        return value * 3;
    }).filter((value) => {
        return value % 5 === 0;
    })
}


/*
 
Asegúrate de que la función se llama doubleOddNumbers.
    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

    */

const doubleOddNumbers = (arr) => {
    return arr.filter((val) => {
        return val % 2 !== 0;
    }).map((val) => {
        return val * 2;
    })
}


/*
 
Asegúrate de que la función se llama bar
function bar(){ 
let txt = ''; 
for(let i in arguments){ 
txt += arguments[i];
} 
return txt;
}

*/

const bar = () => {
    let txt = '';
    for (let i in arguments) {
        txt += arguments[i];
    }
    return txt;
}


/*
        d.Observando los ejemplos anteriores, repite el ejercicio 10.d, utilizando la programación funcional    
 */