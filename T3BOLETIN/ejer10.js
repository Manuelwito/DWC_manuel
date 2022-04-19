// 10. Hacer un script que pida el número de teléfono y en función del prefijo nos indique la provincia, sólo para Andalucía). Si es otro indicar desconocido. 


var telefono = prompt("Introduzca un telefono");


if (telefono.charAt(2) == "5") {
document.write("El telefono  " + telefono + " Pertenece a la provincia de Sevilla");
document.write("</br>");
}

if (telefono.charAt(2) == "6") {
    document.write("El telefono  " + telefono + " Pertenece a la provincia de Cádiz");
    document.write("</br>");
}

if (telefono.charAt(2) == "2") {
    document.write("El telefono  " + telefono + " Pertenece a la provincia de Almeria");
    document.write("</br>");
}

if (telefono.charAt(2) == "1") {
    document.write("El telefono  " + telefono + " Pertenece a la provincia de Granada");
    document.write("</br>");
}

if (telefono.charAt(2) == "3") {
    document.write("El telefono  " + telefono + " Pertenece a la provincia de Malaga");
    document.write("</br>");
}




