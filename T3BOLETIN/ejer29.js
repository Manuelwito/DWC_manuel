// 29. Crear dos enlaces, uno para abrir una nueva ventana y uno para cerrarla. La nueva ventana mostrará este mensaje en una fuente grande : El ojo es la ventana a tu alma. La nueva ventana se coloca en la esquina izquierda de la pantalla , será redimensionable , tendrá una barra de desplazamiento, y estará en primer plano. 
var ventana; 
function nuevaVentana() {
    if(ventana==null){
        ventana = window.open("","","scrollbars=1,height=2,width=2");
        ventana.document.write("El ojo es la ventana de tu alma");
    }
}