// 7. Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ. 
var contadorC = 0;
var contadorN = 0;
var contador = 0;
var nombre;
var continuar = true;

do {
    let erC = new RegExp("C", "g")
    let erN = new RegExp("ñ", "g")
    nombre = prompt("Introduzca un nombre");
    if (nombre == 'ULTIMO') {
        continuar = false;
    }
    if (nombre.match(erC)) {
        contadorC = contadorC + 1;
    }
    if (nombre.match(erN)) {
        contadorN = contadorN + 1;
    }
    contador++;

} while (continuar == true)


document.write("Has introducido " + contadorC + " nombres con la letra C");
document.write("</br>");
document.write("Has introducido " + contadorN + " nombres con la letra ñ");
document.write("</br>");
document.write("Has introducido " + contador + " nombres en total");