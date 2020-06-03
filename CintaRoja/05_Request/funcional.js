const array = [10, 21, 33, 46, 52];

/* Imperativa => Iteramos nuestro arreglo por medio de un for
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
} */

// Declarativa o funcional
array.forEach((valor) => console.log(valor));

// Map: Generar un nuevo arreglo a partir de otro
array.map((a, b, c) => console.log(a, b, c));
/* Es lo mismo que:
array.map(function (a, b, c) {
    console.log(a, b, c);
})
 */
// Generar un nuevo arreglo con su valor multiplicado por 2
const array2 = array.map((element, index) => `Indice ${index} ${element * 2}`);
console.log(array2);

// Filter: Generar un nuevo arreglo que cumpla una condición
const arrayFiltered = array.filter((a, b) => a % 2 === 0);
console.log(arrayFiltered);

const countries = ["México", "Perú", "Colombia", "Costa Rica"];
// Utilizando filter devuelve los países con 6 caracteres o menos
const filteredCountries = countries.filter((country) => country.length <= 6)
console.log(filteredCountries);
