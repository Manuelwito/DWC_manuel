//Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. Utilice   el   atributo   id   para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado.

window.onload = inicializar;

function inicializar(){
    var elementos=document.forms[0];
    for (var i =0;  i < elementos.elements.length; i++) {
        elementos.elements[i].addEventListener('click', cambiaColor, false);
    }
}

function cambiaColor(e){
    if(e.currentTarget.name=="color1"){
        divP1=document.getElementById("p1");
        if(e.currentTarget.value=="rosa"){
            divP1.style = "background-color:blueviolet;";
        }
        else{
            divP1.style= "background-color:green;";
        }
    }
}



