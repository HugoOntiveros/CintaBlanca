// JSON
// JS => JavaScript
// O => Object
// N => Notation

// Un objeto carece de orden en sus elementos
var perro = {
    //  Llave: valor
    nombre: "Kurko",
    edad: 5,
    color: "miel",
    vive: true,
    juguetes: ["Pelota", "Hueso", "Peluche"],
    familia: {
        padre: "David",
        hermano: "Solo",
        tio: "Manuel"
    },
    juega: function () {
        return "El perro está jugando";
    },
    come: function (comida) {
        if (comida == "croquetas") {
            return "El perro está comiendo croquetas";
        } else {
            return "Eso no es comida para perros";
        }
    }
}

// Acceder a propiedades del objeto
console.log(perro);
console.log(perro.nombre);
console.log(perro.edad);
console.log(perro.color);
console.log(perro.vive);
console.log(perro.juguetes);
console.log(perro.juguetes[1]);
console.log(perro.familia.padre);
console.log(perro.juega());
console.log(perro.come("croquetas"));

// Un arreglo determina el orden de los elementos
var paises = ["México", "Colombia", "Perú", "Ecuador"]