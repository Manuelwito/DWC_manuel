$(function () {
    $("#boton").dblclick(function () {
        $("p:first").hide();           
    });
    $("#boton2").click(function () {
        $("p:first").show();           
    });
});