var miFormulario = document.getElementById("Registro").addEventListener(input, btn-enviar, false);
function btn-enviar(){


for(var i=0; i<miFormulario.elements.length; i++){

    if (miFormulario.elements[i].type == "text"){
    document.write(miFormulario.elements[i].value);
    document.write("<br>");
    }

}
}