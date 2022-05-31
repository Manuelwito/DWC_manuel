//Crear   un   formulario   que   contiene   dos   campos   de   texto   para   recibir   el   nombre   del   usuario y   la   Dirección.   Cuando   el   usuario   sale   de   cada   campo   de   texto,   utilice   el   controlador   de eventos   para   Blur   y   comprobar   si   el   usuario   ha   introducido   nada   en   el   campo   respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   para   decírselo,   y   utilizar   el   método   focus()   para devolver el foco al campo de texto que el usuario acaba de abandonar.



window.addEventListener("load", inicializar, false);

function inicializar(){
    const myInp = document.getElementById('username');
    const mensaje = document.getElementById('mensaje');
    myInp.addEventListener("blur", required);
   


    function required() { 
   
        if(myInp.value == ""){
            mensaje.innerHTML="rellenalo";
            myInp.focus();
        }
        
        else{
            alert("flama");
            mensaje.innerHTML="";
        }
    }
    
}






//

//