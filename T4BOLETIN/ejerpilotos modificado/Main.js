
var ventana;
var harrypoter = new Libro("eaea5", "Harry Potter", "JRowling");
var esdla = new Libro("aefaed56", "La comunidad del anillo", "JTolkien");

function nuevaVentana() {
    if (ventana == null) {
        

        ventana = window.open("", "", "scrollbars=1,height=2,width=2 ");
        
        ventana.document.write(esdla.mostrarLibro());
    }
}

