class Persona{
    constructor(nombre, apellidos, dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
    };

    imprime(){
        document.write("Nombre: "+ this.nombre + "apellidos: " + this.apellidos + "dni " + this.dni);
    }
}