// Crear   un   formulario   que   pida   la   dirección   de   envío   del   usuario.   La   próxima   vez   que   el usuario acceda a la página, se rellenará la dirección utilizando el valor de la cookie. 


/*al inicializar el programa (load) llamada a metodo inicializar para registrar los eventos*/
window.addEventListener("load", inicializar, false);

function inicializar() {
    //RECOGEMOS LOS EVENTOS
    const formulario = document.getElementById("registro");
    //RECOGEMOS LA direccion DE UNA COOKIE
    const direccion = getCookie("direccion");
    if (direccion != "") {
        //SI EL CAMPO ESTÁ RELLENO LA RECOGEMOS DEL FORMULARIO
        document.getElementById('direccion').value = direccion;
    }
    //const myInp = document.getElementById('username');
    const boton = document.getElementById('boton');

    boton.addEventListener('click', function (event) {
        var direccionS = document.forms["registro"].direccion.value;
        setCookie("direccion", direccionS, 1);
    });



}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


