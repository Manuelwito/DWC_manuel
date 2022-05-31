//Crear   un   formulario   que   contiene   dos   campos   de   texto   para   recibir   el   nombre   del   usuario y   la   Dirección.   Cuando   el   usuario   sale   de   cada   campo   de   texto,   utilice   el   controlador   de eventos   para   Blur   y   comprobar   si   el   usuario   ha   introducido   nada   en   el   campo   respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   para   decírselo,   y   utilizar   el   método   focus()   para devolver el foco al campo de texto que el usuario acaba de abandonar.


const myInp = document.getElementById('username');

myInp.addEventListener("onblur", required())


function required() { 
   
    if(myInp == ""){
        alert("rellenalo");
    }
    
    else{
        alert("flama");
    }
}

