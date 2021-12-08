//Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto.   Que   pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.   El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas. Envíe el formulario a un programa de servidor si es correcto.
window.onload = inicializar;

function inicializar(){
    var formulario = document.forms['formulario1'];
    var img = document.getElementById('img');
    img.addEventListener('click', indicaRequisitos, false);
}

function indicaRequisitos(e){
    var textoprueba = document.getElementById('textoprueba');
    textoprueba.innerHTML = "que dise mamona";
}

