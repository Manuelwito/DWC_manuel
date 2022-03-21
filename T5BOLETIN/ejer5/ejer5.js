// Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, no debe permitir escribir más. Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres permitidos que le quedan al usuario para poder escribir.


window.onload = inicializar;

function inicializar(){
    var mensaje=document.getElementById["p1"];
    mensaje.addEventListener("keyup", cuentaCaracteres, false);
    
}

function cuentaCaracteres(e){
  
    
    if(e.currentTarget.name=="p1"){
        texto=e.getElementById("campo1").value;
        document.getElementById("caracteres").innerHTML = "You wrote :"+ texto;
    }
}

