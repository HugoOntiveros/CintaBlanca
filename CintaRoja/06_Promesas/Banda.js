class Banda {
    constructor(nombre, anio, website, genero) {
        this.nombre = nombre;
        this.anio = anio;
        this.website = website;
        this.genero = genero;
    }
}

module.exports = { Banda };

const bandaX = {
    nombre: "Nirvana",
    anio: 1988,
    website: "www.nirvana.com",
    genero: "Rock"
}
console.log(bandaX);

/* // Destructuración de objetos
const nombre = bandaX.nombre;
const anio = bandaX.anio;
const website = bandaX.website;
const genero = bandaX.genero;
 */
// Es lo mismo que:
const { nombre, anio, website, genero } = bandaX;

console.log(nombre);
console.log(anio);
console.log(website);
console.log(genero);

