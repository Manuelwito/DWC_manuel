//Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y dé como resultado el número de Tarot. El programa verificará si la fecha es correcta. El número de Tarot se calcula sumando los números de la fecha de nacimiento y reduciéndolos a un único dígito. Por ejemplo, si su fecha de nacimiento es 20 de julio de 1984, el número de Tarot sería: 20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4

var fecha1 = prompt("introduzca una fecha de nacimiento valida dd/mm/aaaa");
var dia = fecha1.substr(0,2);
var mes = fecha1.substr(3,2);
var anyo = fecha1.substr(6,4);

document.write(dia);
document.write("</br>");
document.write(mes);
document.write("</br>");
document.write(anyo);
document.write("</br>");
document.write(fecha1);

var num_tarot;
num_tarot = parseInt(dia)+parseInt(mes)+parseInt(anyo);

/*
document.write(num_tarot.toString().split('').reduce(function(r, n) { return r+ parseInt(n) }, 0)); 
*/
document.write("</br>");
document.write(num_tarot);


var sum=0;
//SE QUEDA EN BUCLE INFINITO POR UN ERROR AQUÍ AL FINAL. VER SOLUCIÓN.
do{
    if(num_tarot==0){
        num_tarot=sum;
        sum;
    }

    sum+=num_tarot%10;
    num_tarot=parseInt(num_tarot/10)
}while (num_tarot>=1 || sum >9);
document.write(sum);