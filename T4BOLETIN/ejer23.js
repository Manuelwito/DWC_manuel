/**EJERCICIO 23:
 * Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

 */

const modulo = new Map();
modulo.set("DWECL","Desarrollo Web en Entorno Cliente");
modulo.set("DWES","Desarrollo Web en Entorno Servidor");
modulo.set("DAW","Despliegue de Aplicaciones Web");
modulo.set("DIW","Diseño de Interfaces Web");

document.write(modulo.size);

for (let [clave,valor] of modulo) {
    document.write("El acronimo del modulo "+ valor +" es "+clave+"</br>");
}

let claves = modulo.keys();
for(let k of claves){
    document.write(k+"</br>")
}

let valores = modulo.values();
for(let v of valores){
    document.write(v+"</br>")
}

if (modulo.has("DAW")) {
    document.write("Esta el modulo DAW</br>");
    modulo.delete("DAW");
}else{
    document.write("El modulo DAW no esta,")
}

var moduloAsc = new Map([...modulo.entries()].sort());
for (let entrada of moduloAsc) {
    document.write(entrada+"</br>");
}

var clave = modulo.keys();
var orden = [...clave].sort();

for (let or of orden){
    document.write(or+"<br>");
}
