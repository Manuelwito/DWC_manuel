// Utiliza los métodos focus() y blur() para cambiar el color de dos cuadros de texto cuando
// posicionamos el foco y cuando lo retiramos.

$(function () {
    $("#boton").click(function(){
      const parrafo = document.getElementById('p1');
      alert(parrafo.textContent);
      });
      //Al clickar en el segundo botón se debe obtener una alerta con el contenido
     // incluyendo las marcas HTML del párrafo.
     $("#boton2").click(function(){
      const parrafo = document.getElementById('p1');
      alert(parrafo);
      });

      //   • Al clickar en el tercer botón, se debe obtener una alerta con el valor del cuadro de
      //texto.

      $("#boton3").click(function(){
        const cuadro = document.getElementById('cuadrodetexto').value;
        alert(cuadro);
        });
});
