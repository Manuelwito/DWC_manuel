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
    encabezado.addEventListener('click', cargarJuguetes);



    function cargarJuguetes() {

        const juguetes = arrayJuguetes;

        var div1 = document.createElement('div');

        //ul
        var ul = document.createElement('ul');



        for (var i = 0; i < juguetes.length; i++) {
            var li1 = document.createElement('li');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            var img1 = document.createElement('img');
            var div4 = document.createElement('div');
            var a1 = document.createElement('div');
            var p1 = document.createElement('p');

            p1.textContent = juguetes[i].ref;
            div4.textContent = juguetes[i].precio;

            /**
             * ME HE QUEDADO AQUÍ. CARGAR INFORMACION DEL JSON EN LOS ELEMENTOS DEL ARRAY Y CONTROLARLO:
             */

            
            // myPara2.textContent = 'Age: ' + heroes[i].age;
            //myPara3.textContent = 'Superpowers:';

            //const superPowers = heroes[i].powers;


            //   var li1 = document.createTextNode("li");
            div3.appendChild(div4);
            div3.appendChild(p1);
            div3.appendChild(a1);

            div2.appendChild(div3);
            div2.appendChild(img1);

            li1.appendChild(div2);

            ul.appendChild(li1);
            div1.appendChild(ul);
            body.appendChild(div1);



        }

        /*
                function showHeroes(jsonObj) {
                    const heroes = jsonObj['members'];
        
                    for (var i = 0; i < heroes.length; i++) {
                        const myArticle = document.createElement('article');
                        const myH2 = document.createElement('h2');
                        const myPara1 = document.createElement('p');
                        const myPara2 = document.createElement('p');
                        const myPara3 = document.createElement('p');
                        const myList = document.createElement('ul');
        
                        myH2.textContent = heroes[i].name;
                        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
                        myPara2.textContent = 'Age: ' + heroes[i].age;
                        myPara3.textContent = 'Superpowers:';
        
                        const superPowers = heroes[i].powers;
                        for (var j = 0; j < superPowers.length; j++) {
                            const listItem = document.createElement('li');
                            listItem.textContent = superPowers[j];
                            myList.appendChild(listItem);
                        }
        
                        myArticle.appendChild(myH2);
                        myArticle.appendChild(myPara1);
                        myArticle.appendChild(myPara2);
                        myArticle.appendChild(myPara3);
                        myArticle.appendChild(myList);
        
                        section.appendChild(myArticle);
                    }
                }*/
    }

}