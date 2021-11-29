function enviar(){

    var respuesta1 = document.getElementById("a1")
    var respuesta2 = document.getElementById("b1")
    var respuesta3 = document.getElementById("c1")
    var respuesta4 = document.getElementById("d1")

    var respuestaA2 = document.getElementById("a2")
    var respuestaB2 = document.getElementById("b2")
    var respuestaC3 = document.getElementById("c2")
    var respuestaD4 = document.getElementById("d2")

    if(respuesta1.checked==true){
        document.write("1: La respuesta elegida es "+respuesta1.value+" RESPUESTA INCORRECTA. La respuesta correcta era C");
    }
    else if(respuesta2.checked==true){
        document.write("1: La respuesta elegida es "+respuesta2.value+" RESPUESTA INCORRECTA. La respuesta correcta era C");
    }
    else if(respuesta3.checked==true){
        alert("La respuesta elegida es "+respuesta3.value+" CORRECTO");
    }
    else if(respuesta4.checked==true){
        alert("La respuesta elegida es "+respuesta4.value);
    }
}
