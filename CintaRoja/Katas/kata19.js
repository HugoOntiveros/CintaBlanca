// Hacer superclase Maestro y subclases MaestroDeFísica y Maestro de Música y a cada uno asignarle su materia y calcular su promedio de grupo a partir de calificaciones (usar arreglos). El maestro de física tiene un atributo "antiguedad" que guarda un valor numerico, mientras que el maestro de música tiene un atributo "edad" también guardando un valor numérico.
class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
        this.promedio = this.calcularPromedio();
    }
    calcularPromedio = () => {
        let Promedio = 0;
        this.calificaciones.forEach(element => {
            Promedio += element;
        });
        Promedio = Promedio / this.calificaciones.length;
        return Promedio;
    }
};

class MaestroDeFísica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
        this.promedio = this.calcularPromedio();
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, promedio, edad) {
        super(materia, promedio);
        this.edad = edad;
    }
}

maestro = new Maestro("Materia", [9, 5, 8, 10])
console.log(maestro);
console.log(maestro.calcularPromedio());


maestroFisica = new MaestroDeFísica("Física", [9, 5, 8, 10], 15);
console.log(maestroFisica);
console.log(maestroFisica.calcularPromedio());

maestroMusica = new MaestroDeMusica("Música", [9, 10, 8, 10], 30);
console.log(maestroMusica);
console.log(maestroMusica.calcularPromedio());
