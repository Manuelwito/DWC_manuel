$(function () {
    $("#boton").dblclick(function () {
        $("ul li:first").hide();           
    });
    $("#boton2").click(function () {
        $("ul li:first").show();           
    });
});