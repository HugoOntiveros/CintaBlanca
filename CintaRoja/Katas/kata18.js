/* A partir del siguiente arreglo de mascotas:
const mascotas = [ { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] }, { nombre: "Ludovico", especie: "Perro", comidasFavoritas: ["Huesos", "Jamon"] }, { nombre: "Pavlov", especie: "Perro", comidasFavoritas: ["Croquetas", "Pollo"] }, { nombre: "Chancla", especie: "Gato", comidasFavoritas: ["Atun", "Pescado"] }, { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] } ];
Genera un nuevo arreglo llamado nombresMascotas que contenga los nombres de todas las mascotas. */
const mascotas = [
    { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro", comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov", especie: "Perro", comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla", especie: "Gato", comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] }
];

const nombresMascotas = mascotas.map((val) => val.nombre);