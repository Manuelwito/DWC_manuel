/**
 * Con estas bandas se quiere mantener un listado con el que se permita:
    imprimirListadoBandas
    buscarBandaPorNombre: busca una banda en la lista por su nombre
    buscarBandasPorEstilo: busca las bandas en la lista que pertenezcan a un estilo dado
    ordenarBandasPorAño: ordena la lista por año de formación
    eliminarBanda: elimina una banda dada por su nombre si esta se encuentra en la lista 
 */


class Sala{
    constructor(nombre, bandas){
        this.nombre = nombre;
        this.bandas = bandas;
    }

    imprimirListadoBandas(){
      
       for(let banda of bandas){
            banda.mostrarBanda();
            document.write("</br>")
       }
      
    }


    buscarBandaPorNombre(){

    }

    ordenarBandasPorEstilo(){


    }

    ordenarBandasPorAño(){




    }

    eliminarBanda(){




    }
}