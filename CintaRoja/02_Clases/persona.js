/* Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, género, peso y altura.
     calcularIMC()
     esMayorDeEdad()
     El constructor pide nombre, edad, género, peso y altura
 */
class Persona {
    constructor(nombre, edad, genero, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.peso = peso
        this.altura = altura
    }
    IMC() {
        return "El IMC de " + this.nombre + " es " + this.peso/this.altura**2
    }
    esMayorDeEdad() {
        if (this.edad > 17)
            return "Es mayor de edad";
        return "Es menor edad"
    }
}

var miPersona = new Persona("Luis", 25, true, 60, 1.7);
console.log(miPersona);
console.log(miPersona.IMC());
console.log(miPersona.esMayorDeEdad());
