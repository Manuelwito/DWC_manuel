$(function () {
    $("#boton").dblclick(function () {
        $("a").hide();   
    });
    $("#boton2").click(function () {
        $("ul li:first").show();           
    });
});