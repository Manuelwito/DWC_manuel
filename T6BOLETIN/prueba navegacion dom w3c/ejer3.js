// Crea un documento HTML con una lista de modelos de coches 

//cuyo estilo sea de cuadradillo. Escribe una función JavaScript que use la f. getElementsByTagName() para recuperar los elementos de la lista. Añade el estilo de cuadradilla de la lista mediante JavaScript. Añade un nuevo modelo a la lista usando DOM, al principio, al final y en alguna posición intermedia que elijas. 
//Imagina que tenemos que insertar un nuevo modelo de coche, por ejemplo “BMW”, pero 	no conocemos en qué posición de la lista de nodos hijos está. Busca ese elemento por 		su texto y añade el nuevo modelo antes y después de este.


window.addEventListener("load", iniciar)

function iniciar() {
	const formulario = document.getElementById('button');
	formulario.addEventListener('click', crearElementos);


	function crearElementos() {

		const para = document.createElement("p");
		const node = document.createTextNode("This is new.");
		para.appendChild(node);
		const element = document.getElementById("div1");
		element.appendChild(para);
	}

}



