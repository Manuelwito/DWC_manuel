// Utiliza los métodos focus() y blur() para cambiar el color de dos cuadros de texto cuando
// posicionamos el foco y cuando lo retiramos.

$(function () {
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
      });
      $("input").blur(function(){
        $(this).css("background-color", "green");
      });
});
