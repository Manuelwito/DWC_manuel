// Crear   un   formulario   que   pida   la   dirección   de   envío   del   usuario.   La   próxima   vez   que   el usuario acceda a la página, se rellenará la dirección utilizando el valor de la cookie. 


window.addEventListener("load", inicializar, false);

function inicializar(){
   
    
   
   
    const myInp = document.getElementById('username');
    const direccion = document.getElementById('direccion');
    const boton = document.getElementById('boton');
    
    boton.addEventListener("click", guardar);
    
    function guardar() { 
   
        document.cookie = myInp.value + "="+direccion.value;
        
    }
    

    
}