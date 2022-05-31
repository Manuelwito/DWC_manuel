// Crear   un   formulario   que   contenga   un   cuadro   de   texto.   Después   de   que   el   usuario introduzca   texto,   todas   las   letras   se   convertirán   en   minúsculas,   tan   pronto   como   haga clic en cualquier otro lugar el formulario.

window.addEventListener("load", inicializar, false);

function inicializar(){
    const myInp = document.getElementById('username');
    myInp.addEventListener("blur", convertirMinusculas);

    function convertirMinusculas(){
        var minus = myInp.value.toLowerCase();
        myInp.value = minus;
    }

}