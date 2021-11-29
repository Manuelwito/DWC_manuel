class Paciente extends Persona{
    constructor(nombre, apellidos, dni, numeroAfiliado, mutualista){
        super(nombre, apellidos, dni);
        this.numeroAfiliado = numeroAfiliado;
        this.mutualista = mutualista;
    };

    imprime(){

        super.imprime();
        document.write(" numero Afiliado: "+ this.numeroAfiliado);
        document.write("<br>");
    }
         
}