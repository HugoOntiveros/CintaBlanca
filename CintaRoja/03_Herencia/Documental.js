var { Largometraje } = require("./Largometraje")

// Clase hijo
class Documental extends Largometraje {
    constructor(titulo, duracion, patrocinador, anio) {
        super(titulo, duracion);
        this.patrocinador = patrocinador;
        this.anio = anio;
        this.entrada = "$3";
    }
}

var documental1 = new Documental("The Last Dance", "5:00 minutos", "Netflix", 2020)
var documental2 = new Documental("Sting", "2:00 minutos", "Netflix", 2014)

module.exports = { documental1, documental2 }