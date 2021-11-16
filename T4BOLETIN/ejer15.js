//Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee
//igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....

var str;

str = prompt("introduzca una palabra");

if(reverseString(str) == str){

    alert("la palabra es palíndromo");

} else{

    alert ("la palabra no es palíndromo");
}
