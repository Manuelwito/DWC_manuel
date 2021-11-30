window.onload = inicializar;

function inicializar(){
    var elementos=document.forms["formulario"];
    for (var i =0;  i < elementos.elements.length; i++) {
        elementos.elements[i].addEventListener('click', resetear, false);
    }
}

function resetear(e){
    if(e.currentTarget.name=="p1"){
        texto=e.getElementById("texto").value;
        document.getElementById("caracteres").innerHTML = "You wrote :"+ texto;
    }
}

