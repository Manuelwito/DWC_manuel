class Medico extends Persona{
    constructor(nombre, apellidos, dni, numeroFacultativo){
        super(nombre, apellidos, dni);
        this.numeroFacultativo = numeroFacultativo;
    };
    imprime(){

        super.imprime();
        document.write(" numero Facultativo: "+ this.numeroFacultativo);
        document.write("<br>");
    }
}