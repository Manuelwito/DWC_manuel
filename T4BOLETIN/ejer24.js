/**
 * EJERCICIO 24:
 * En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más conveniente.
 */

const asignaturas = new Map();

var moduloDWECL = ["Desarrollo Web en Entorno Cliente", "500 horas", 60];
var moduloDWES = ["Desarrollo Web en Entorno Servidor", "50 horas", 51];
var moduloDAW = ["Despliegue de Aplicaciones Web", "250 horas", 55];

 asignaturas.set("DWECL", moduloDWECL);
 asignaturas.set("DWES", moduloDWES);
 asignaturas.set("DAW", moduloDAW);

 for (let [clave,valor] of asignaturas) {
     document.write("El MODULO ES "+ clave +" y su informacion es: alumnos: "+valor[2]+" nombre: "+valor[0]+"</br>");
 }
 




