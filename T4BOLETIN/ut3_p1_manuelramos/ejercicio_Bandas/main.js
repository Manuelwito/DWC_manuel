
    /**
 * Con estas bandas se quiere mantener un listado con el que se permita:
    imprimirListadoBandas
    buscarBandaPorNombre: busca una banda en la lista por su nombre
    buscarBandasPorEstilo: busca las bandas en la lista que pertenezcan a un estilo dado
    ordenarBandasPorAño: ordena la lista por año de formación
    eliminarBanda: elimina una banda dada por su nombre si esta se encuentra en la lista 
 */
    
   
    
    const integrantesUrss = new Map();
    integrantesUrss.set("Pablo",["Perez", "Perez", "bajista"]);
    integrantesUrss.set("Jose",["Perez", "Perez", "bateria"]);
    integrantesUrss.set("David",["Perez", "Perez", "guitarrista"]);

    banda1 = new Banda("La urss", 2009, integrantesUrss, 6670233242, "Rock");

    const integrantesDesakato = new Map();
    integrantesDesakato.set("Pepo",["Lopez", "Perez", "vocalista"]);
    integrantesDesakato.set("David",["Lopez", "Perez", "guitarrista"]);
  
    banda2 = new Banda("Desakato", 2002, integrantesDesakato, 6670233242, "Punk");


    const bandas = new Array();

    bandas.push(banda1);
    bandas.push(banda2);

    sala1 = new Sala("Hollander", bandas);

    
    sala1.imprimirListadoBandas();
    
    




