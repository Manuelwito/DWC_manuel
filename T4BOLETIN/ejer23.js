/**
 * Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados

Muestra el contenido de la estructura

Devuelve las abreviaturas de todos los módulos guardados

Devuelve el nombre completo de todos los módulos

Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos


 */

const asignaturas = new Map();

asignaturas.set("DWECL", "Desarrollo Web en Entorno Cliente");
asignaturas.set("DIW", "Diseño de Interfaces Web");
asignaturas.set("DAW", "Desarrollo de aplicaciones Web");
asignaturas.set("DWES", "Desarrollo Web en Entorno Servidor");
document.write("</br>");

//Muestra cuántos módulos hay almacenados
document.write("LAS ASIGNATURAS TOTALES SON: ");
document.write(asignaturas.size);
document.write("</br>");
document.write("</br>");

//Muestra el contenido de la estructura
for (let [clave, valor] of asignaturas) {
    document.write(clave);
    document.write("</br>");
    document.write(valor);
    document.write("</br>");
}

//Devuelve las abreviaturas de todos los módulos guardados
document.write("</br>");
document.write("las abreviaturas son: ");
document.write("</br>");
for (let [clave, valor] of asignaturas) {
    document.write(clave);
    document.write("</br>");  
}

document.write("</br>");
document.write("los nombres largos son: ");
document.write("</br>");
for (let [clave, valor] of asignaturas) {
    document.write(valor);
    document.write("</br>");   
}

//busqueda dentro del map
if(asignaturas.has("DAW")){

    document.write("</br>");
    document.write("SI, ASIGNATURA DAW EXISTE");
    document.write("</br>");
}else{
    document.write("</br>");
    document.write("no, ASIGNATURA DAW NO EXISTE");
    document.write("</br>");
}


    
   


