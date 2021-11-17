class Banda{

    /*
    *
MostrarBanda
MostrarIntegrantes    
    */

    constructor(nombre, año, integrantes, telefono, estilo){
        this.nombre = nombre;
        this.año = año;
        this.integrantes = integrantes;
        this.telefono = telefono;
        this.estilo = estilo;
    }

    mostrarBanda(){
        document.write(this.nombre+" "+this.año+" "+this.telefono+" "+this.estilo+" ");
        this.mostrarIntegrantes();
    }

    mostrarIntegrantes(integrantes){

        document.write("Integrantes: <br>");
        for (const [clave, valor] of this.integrantes) {
            document.write("Nombre: "+ clave+"<br>");
            document.write("Apellido: "+ valor[0]+"<br>");
            document.write("Apellido: "+ valor[1]+"<br>");
            document.write("Instrumento: "+ valor[2]+"<br>");
        }
        document.write("<br>");   
    }
















}