var miFormulario = document.getElementById("Registro").addEventListener(input, btnenviar, false);
function btnenviar(){


for(var i=0; i<miFormulario.elements.length; i++){

    if (miFormulario.elements[i].type == "text"){
    document.write(miFormulario.elements[i].value);
    document.write("<br>");
    }

}
}