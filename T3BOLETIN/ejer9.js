// 9. Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A y cuántas líneas tiene. 
//Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador o un salto de línea y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas. 


var contadorP = 0;
var contadorC = 0;

let erA = new RegExp("^A", "g")
var texto = prompt("Introduzca un texto");
contadorP = texto.split(' ').length;

var i = 0;
while (i < texto.length) {

    if (texto.charAt(i) == " ") {
        if (texto.toUpperCase().charAt(i + 1) == "A") {
            contadorC++;
        }
    }
    i++;
}

document.write("Tienes " + contadorC + " que empiezan por la letra A");
document.write("</br>");
document.write("Has introducido " + contadorP + " palabras en total");


