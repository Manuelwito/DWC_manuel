// 12. Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir un dirección correcta. 

var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

do {
    var datos = prompt("Introduzca una dirección de e mail");
} while (email_regex.test(datos) == false);

document.write("email introducido correctamente");