// PascalCase = clases
// camelCase = variables, funciones, métodos, atributos
// Super clase o clase padre
class Mascota {
    constructor(nombre, patas) {
        this.reino = "Animalia";
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;
    }
    alimentar() {
        return this.nombre + " se está alimentando."
    }
}

// var miMascota = new Mascota("Lucky", 4);
// console.log(miMascota);

// Subclase de Mascota
// Sintaxis: class subclase extends superclase
class Perro extends Mascota {
    constructor(nombre, patas, ladra, cola) {
        // super ejecuta constructor de clase padre 
        super(nombre, patas)
        this.ladra = ladra;
        this.cola = cola;
    }
    truco() {
        return this.nombre + " está haciendo un truco."
    }
}

var perro1 = new Perro("Gabo", 4, true, true);
console.log(perro1);
console.log(perro1.alimentar());
console.log(perro1.truco());

// Serpiente
class Serpiente extends Mascota {
    constructor(nombre, patas, color) {
        super(nombre, patas);
        this.color = color;
        this.venenosa = false;
    }
    enroscarse() {
        return this.nombre + " se está enroscando."
    }
}

var serpiente1 = new Serpiente("Rocky", 0, "café")
console.log(serpiente1);
console.log(serpiente1.alimentar(), serpiente1.enroscarse());
