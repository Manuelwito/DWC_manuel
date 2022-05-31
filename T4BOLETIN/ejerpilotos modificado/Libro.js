class Libro {
    
    constructor(isbn, nombre, autor){
    this.isbn = isbn;
    this.nombre = nombre;
    this.autor = autor;
};  

    mostrarLibro(){
        document.write("El libro: "+this.isbn+" con nombre: "+this.nombre+" y autor: "+this.autor);
    };

}

