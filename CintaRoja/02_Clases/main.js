// var platilloFavorito = {
//     nombre: "Alitas",
//     sabor: "Lemon pepper",
//     Ingredientes: ["Pollo","Pimienta", "Limón", "Harina", "Huevo"]
// }

// console.log(platilloFavorito);

// Clases son moldes de un objeto, para construir un "tipo" de objeto que yo defino
// Se nombran con primera letra mayúscula y en singular
class Auto {
    constructor(colores, cilindrada) {
        this.color = colores;
        this.llantas = 4;
        this.cilindrada = cilindrada
    }
    // Función dentro de objeto = método
    prender() {
        return "El auto " + this.color + " se ha prendido."
    }
    // Setter = Método que cambia valor de un atributo
    cambiarCilindrada(nuevaCilindrada) {
        this.cilindrada = nuevaCilindrada;
        return "Se ha cambiado el motor.";
    }
    // Getter = Método que recupera el valor de un atributo
    darResumen() {
        return "Este auto es de color " + this.color + " y su cilindrada es " + this.cilindrada + " L."
    }
}

// Sintaxis para la método especial "constructor": estos métodos se ejecutan primero
// class Nombre {
//     constructor(parámetro) {
//         this.nombreParámetroAMostrar = parámetro;
//         this.nombreParámetroEnComún = valor;
//     }
// }

// Instancia de clase auto (un objeto que pertenece a esta clasificación o molde clase)
var miAuto = new Auto("Rojo", 2.0);
var autoPepe = new Auto("Verde", 2.0);

// Sintaxis instancia:
// var nombreVariable = new Clase(Parámetros de constructor);

console.log(miAuto);
// Resultado: Clase { parámetro1: valor1; parámetro2: valor2 ... }
console.log(miAuto.color);
console.log(autoPepe);
console.log(miAuto.prender());
console.log(miAuto.cambiarCilindrada(1.2));
console.log(miAuto);
miAuto.cambiarCilindrada(1.5);
console.log(miAuto);
console.log(miAuto.darResumen());
