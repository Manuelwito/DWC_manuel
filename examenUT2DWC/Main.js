// Creación del array
var citasPrevias = [];

//Introducción de datos en el array:

//DECLARANDO PACIENTES
var paciente1 = new Paciente("Fernando", "Alonso", "30243299B", 41342522, true);
var paciente2 = new Paciente("Joaquin", "Rodriguez", "30448889B", 4145422, false);
var paciente3 = new Paciente("Jose", "Alonso", "68513299B", 41144522, true);

var medico1 = new Medico("Emilio", "Aragon", "44445555z", 88777444);
var medico2 = new Medico("Vilches", "Rodriguez", "48755224d", 88777445);
var medico3 = new Medico("Fernando", "Alonso", "68513299B", 88777446);

const fechaHora1 = new Date(2021, 09, 15, 17, 30, 00);
const fechaHora2 = new Date(2021, 09, 15, 19, 30, 00);
const fechaHora3 = new Date(2021, 09, 15, 21, 30, 00);

citaPrevia1 = new CitaPrevia(fechaHora1, paciente1, medico1);
citaPrevia2 = new CitaPrevia(fechaHora2, paciente2, medico2);
citaPrevia3 = new CitaPrevia(fechaHora3, paciente3, medico3);

citasPrevias.push(citaPrevia1);
citasPrevias.push(citaPrevia2);
citasPrevias.push(citaPrevia3);



 /**
  * IntroduceCita: introducir en el array una cita. Antes de añadirla deberá comprobar si el paciente tiene ya una cita. En ese caso mostrará el siguiente *       mensaje: “El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra”.
  * @param {Date} fecha 
  * @param {Paciente} p 
  * @param {Medico} medico 
  */
function introduceCita(fecha, p, medico){
    existe = true;
    for (let i = 0; i < citasPrevias.length; i++) {
        if(citasPrevias[i].paciente !== p){
        document.write("El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra");
        existe = false; 
        }        
    }
    if(existe == false){
       let citaPrevia = new CitaPrevia(fecha, p, medico);  
       citasPrevias.push(citaPrevia);
    }
}

/**
 * eliminarCita: elimina una cita. Si no la encuentra, la función imprimirá un mensaje avisando de que la cita no ha sido encontrada.
 * @param {Array} citasPrevias 
 * @param {Paciente} p 
 * @returns boolean true si se ha eliminado
 */
function elminarCita(citasPrevias, p) {
    eliminado = false;
    for (let i = 0; i < citasPrevias.length; i++) {
        if(citasPrevias[i].paciente == p){
        citasPrevias.splice(i, 1);
        eliminado = true;
        }        
    }
    return eliminado; 
}

/**
 * 
 * @param {Array} citasPrevias 
 * @param {Paciente} p 
 * @returns 
 */
function buscarCita(citasPrevias, p) {
    for (let i = 0; i < citasPrevias.length; i++) {
        if(citasPrevias[i].paciente == p){
        citasPrevias[i].imprime();
        citaRetorno = citasPrevias[i];
        return citaRetorno; 
        }        
    }
}

/**
 * mostrarCitas: muestra todas las citas del array. Cada cita se mostrará en una línea diferente.
 * @param {Array} citasPrevias 
 */
function imprimeCitas(citasPrevias){
    for (let i = 0; i < citasPrevias.length; i++) {
            citasPrevias[i].imprime();
            document.write("<br>");   
    }
}

function imprimePacientes(citasPrevias){
    for (let i = 0; i < citasPrevias.length; i++) {
            var p = new Paciente;
            p = citasPrevias[i].paciente;
            p.imprime(); 
            document.write("<br>");   
    }
}

/**LLAMADA A LOS METODOS ANTERIORES PARA COMPROBAR FUNCIONAMIENTO DE MISMOS */
imprimePacientes(citasPrevias);
document.write("<br>");
document.write("<br>");
var p = paciente2;


//elminarCita(citasPrevias, p);
//imprimePacientes(citasPrevias);

document.write("<br>");
document.write("<br>");
buscarCita(citasPrevias, p);

document.write("<br>");
imprimeCitas(citasPrevias);


