// Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, no debe permitir escribir más. Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres permitidos que le quedan al usuario para poder escribir.
window.addEventListener("load", inicializar);


function inicializar() {
    var mensaje = document.getElementById["mensaje"];
    mensaje.addEventListener("keyup", cuentaCaracteres, false);
}

function cuentaCaracteres(e) {
    var maxLength = 145;
    var longitudCadena = e.currentTarget.value.lenght;
    var restante = (maxLength - longitudCadena);

    if (restante < 0) {
        document.getElementById("numCaracteres").innerHTML = '<span style = "color: red;">Has pasado el limite, es' + maxLength + ' caracteres</span>';
    } else {
        document.getElementById("numCaracteres").innerHTML = restante + ' caracteres restantes';
    }

}

