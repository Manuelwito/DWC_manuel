class Piloto{
    constructor(nombre, escuderia){
        this.nombre = nombre;
        this.escuderia = escuderia;
    };
    muestraPiloto(){
        document.write("El piloto "+this.nombre+" de la escuderia: "+this.escuderia);
    }
}