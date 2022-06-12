$(function () {
    $("#boton").dblclick(function () {
        $("#lista1 li:first").hide();   
        $("#lista2 li:first").hide();        
    });
    $("#boton2").click(function () {
        $("ul li:first").show();           
    });
});