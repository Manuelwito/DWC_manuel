// Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   con   diferentes tipos   de   cafés   ­   espresso,   cappuccino,   moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación   y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar   el   café   a   su   número   de   habitación.   Cree   las   cookies   para   recordar   las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la   página, en introduzca su nombre de usuario, se dirá que hay   una tarifa especial para su (utilice el valor de la cookie) café favorito.
window.addEventListener("load", inicializar, false);

function inicializar() {

    const username = document.getElementById('username');
    const tipoCafe = document.getElementById('tipoCafe');

    const boton = document.getElementById('boton');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', guardaCookies);

    function guardaCookies(e) {

        if (e.currentTarget.name == 'espresso') {
            document.cookie = username.value + "=espresso";
        }
        else if (e.currentTarget.name == 'capuccino') {
            document.cookie = username.value + "=capuccino";
        }
        else if (e.currentTarget.name == 'moka') {
            document.cookie = username.value + "=moka";
        }

        //guardo la cookie con los valores
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('manuel='))
            .split('=')[1];
        //intento mostrar la cookie
        function showCookieValue() {
            const output = document.getElementById('cookie-value')
            output.textContent = '> ' + cookieValue
        }
        var msj = showCookieValue;
        mensaje.innerHTML = msj;
    }
}