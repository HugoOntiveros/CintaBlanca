var { Largometraje } = require("./Largometraje")

// Clase hijo
class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero, director) {
        super(titulo, duracion);
        this.genero = genero;
        this.director = director;
        this.entrada = "$5";
    }
}

var pelicula1 = new Pelicula("Episodio I Star Wars", "1:30 minutos", "Ciencia Ficción", "George Lucas")
var pelicula2 = new Pelicula("Hombre al agua", "1:20 minutos", "Comedia", "Eugenio Derbez")

module.exports = { pelicula1, pelicula2 }