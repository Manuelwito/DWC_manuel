/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está. */

class Punto{
    constructor(x,y){

        this.x=x;
        this.y=y;
    };



cuadrante(){
    var coordenadas = new Array(this.x, this.y);
    return coordenadas;
};

}
let punto = new Punto(17, 14);

document.write(punto.cuadrante());