/* Haz una clase llamada Person que siga las siguientes condiciones:
Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
Creá método llamado calcularIMC() (indice de masa corporal)
Crear un método llamado esMayorDeEdad() y regrese un booleano
El constructor pide nombre, edad,sexo,peso y altura
Generar el RFC a partir de el nombre, edad y sexo con obtenerRFC() */
class Person {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
        this.rfc = this.obtenerRFC();
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC = () => this.peso / this.altura ** 2
    esMayorDeEdad = () => this.edad > 17 ? true : false
    obtenerRFC = () => `${this.nombre.split(" ").join("")}${this.edad}${this.sexo}`
};

const person = new Person("Edward Led", 26, "M", 100, 1.70);
console.log(person);
console.log(person.calcularIMC());
console.log(person.esMayorDeEdad());
console.log(person.obtenerRFC());
