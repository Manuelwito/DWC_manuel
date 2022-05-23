// 13. Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes. 

var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

do {
    var datos = prompt("Introduzca una dirección de e mail");
} while (email_regex.test(datos) == false);

document.write("email introducido correctamente");

var arrayDeDatos = datos.split("@");
document.write('<p>La cadena original es: "' + datos + '"');

document.write('<p>el servidor  es: "' + arrayDeDatos[1]+'"');
document.write('<p>el usuario es  es: "' + arrayDeDatos[0]+'"');