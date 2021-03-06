// Crea un documento HTML con una lista de modelos de coches 

//cuyo estilo sea de cuadradillo. Escribe una función JavaScript que use la f. getElementsByTagName() para recuperar los elementos de la lista. Añade el estilo de cuadradilla de la lista mediante JavaScript. Añade un nuevo modelo a la lista usando DOM, al principio, al final y en alguna posición intermedia que elijas. 

//Imagina que tenemos que insertar un nuevo modelo de coche, por ejemplo “BMW”, pero 	no conocemos en qué posición de la lista de nodos hijos está. Busca ese elemento por 		su texto y añade el nuevo modelo antes y después de este.


window.addEventListener("load", iniciar)

function iniciar() {
	const formulario = document.getElementById('button');
	const formulario2 = document.getElementById('button2');
	formulario.addEventListener('click', añadirEstilo);
	formulario2.addEventListener('click', añadirCoche);

	
	function añadirEstilo() {
		const list = document.getElementsByTagName("UL")[0];
		//para cambiar el valor de lo que está escrito
		list.getElementsByTagName("li")[0].innerHTML = "Milk";
		//set atribute para poner en modo cuadradillo
		list.setAttribute("type", "square");

	}
	
	function añadirCoche() {
		const ul = document.getElementsByTagName("ul")[0];
		const li = document.createElement("li");
		var coche = document.createTextNode("ZAFIRA");
		li.appendChild(coche);
		ul.appendChild(li);
	}
}



