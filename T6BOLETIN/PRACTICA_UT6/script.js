window.addEventListener("load", inicio);

function inicio() {
    const arrayJuguetes = [{
        img: "https://juguettos.com/1361787-large_default/A0041951.jpg", precio: "14,99",
        href: "https://juguettos.com/1039-la-banda", ref: "A0041951",
        title: "La Banda Tambor Acústico", coleccion: "La Banda"
    },
    {
        img: "https://juguettos.com/1362350-large_default/A0133071.jpg", precio: "21,99",
        href: "https://juguettos.com/1039-la-banda", ref: "A0051216",
        title: "La Banda Guitarra Española", coleccion: "La Banda"
    },
    ];
    const encabezado = document.getElementsByTagName('h1')[0];
    const body = document.getElementsByTagName('body')[0];
    encabezado.addEventListener('click', compruebaEncabezado);

    /*
    Metodo que comprueba si el encabezado h1 debe de mostrar los juguetes u ocultarlos
    */
    function compruebaEncabezado() {
        if (encabezado.firstChild.nodeValue == "MOSTRAR JUGUETES") {
            cargarJuguetes();
            encabezado.firstChild.nodeValue = "OCULTAR JUGUETES"
        } else {
            document.body.lastChild.remove();
            encabezado.firstChild.nodeValue = "MOSTRAR JUGUETES"
        }
    }


    function cargarJuguetes() {

        const juguetes = arrayJuguetes;

        const div1 = document.createElement('div');
        const ul = document.createElement('ul');

        //Bucle para crear los elementos y cargar el contenido de sus nodos
        for (var i = 0; i < juguetes.length; i++) {
            var li1 = document.createElement('li');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            var img1 = document.createElement('img');
            var div4 = document.createElement('div');
            var a1 = document.createElement('a');
            var p1 = document.createElement('p');

            p1.textContent = juguetes[i].ref;
            div4.textContent = juguetes[i].precio;
            div4.setAttribute("class", "content_price");
		    div4.appendChild(document.createTextNode(arrayJuguetes[i]["precio"] + "€"));

            //img atributo src y title lo recogen las dos del json
            img1.setAttribute("src", juguetes[i].img);
            img1.setAttribute("title", juguetes[i].title);

            img1.addEventListener("click", mostrarDescripcion, false);

            //divLeft
		    div2.setAttribute("class", "left-block");
            
            //divDesc
            div3.setAttribute("class", "desc");
            div3.setAttribute("style", "display:none");
            
            
            a1.setAttribute("href", juguetes[i].href);
            a1.textContent = juguetes[i].coleccion;

            //POR ÚLTIMO UBICAMOS LOS NODOS CON SUS PADRES E HIJOS A TRAVÉS DE APPEND CHILD
            div3.appendChild(div4);
            div3.appendChild(a1);
            div3.appendChild(p1);
            
            div2.appendChild(img1);
            div2.appendChild(div3);
         

            li1.appendChild(div2);

            ul.appendChild(li1);
            div1.appendChild(ul);
            body.appendChild(div1);
        }

    }

    function mostrarDescripcion(e) {
        var div3 = e.currentTarget.nextSibling;
        if (div3.getAttribute("style") == "display: block;") {
            div3.setAttribute("style", "display: none;");
        } else {
            div3.setAttribute("style", "display: block;");
        }

    }
}

