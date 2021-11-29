class CitaPrevia{
    constructor(fecha, paciente, medico){
        this.fecha = fecha;
        this.paciente = paciente;
        this.medico = medico;
    };

    imprime(){
        document.write(" CITA: ");
        document.write("<br>");
        document.write(" fecha: "+ this.fecha);
        document.write("<br>");
        this.paciente.imprime();
        this.medico.imprime();
        document.write("<br>");
        document.write(" --------------------------------------- ");   
    }
}