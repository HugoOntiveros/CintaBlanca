// Crea una funcion llamada petNames() A partir del siguiente arreglo de mascotas: const mascotas = [ { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] }, { nombre: "Ludovico", especie: "Perro", comidasFavoritas: ["Huesos", "Jamon"] }, { nombre: "Pavlov", especie: "Perro", comidasFavoritas: ["Croquetas", "Pollo"] }, { nombre: "Chancla", especie: "Gato", comidasFavoritas: ["Atun", "Pescado"] }, { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] } ]; Genera un nuevo arreglo que contenga los nombres de todas las mascotas.
const mascotas = [
    { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro", comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov", especie: "Perro", comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla", especie: "Gato", comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] }
];

/* const petNames = (petsArray) => {
    const namesArray = petsArray.map((value) => {
        return value.nombre;
    })
    console.log(namesArray);
    return namesArray;
}

petNames(mascotas);
 */
/* const petNames = (petsArray) => {
    const names = [];
    for (let i = 0; i < petsArray.length; i++) {
        console.log(petsArray[i].nombre);
        names.push(petsArray[i].nombre);
    }
    console.log(names);
}

petNames(mascotas)
 */
const petNames = () => {
    const mascotas = [
        { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro", comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov", especie: "Perro", comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla", especie: "Gato", comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] }
    ];
    const names = mascotas.map((value) => value.nombre)
    console.log(names);
    return names;
}

petNames();

