/* Lenguajes declarativos: dicen que hacer pero no como (consola)
Lenguajes imperativos: dicen como ejecutar las instrucciones para lograr lo que se quiere
Función pura: Siempre devuelve el mismo resultado
Función impura: El resultado depende de algo externo, como Math.random() USAR VARIABLES LOCALES
var: Variables globales (ya no se usa, mala práctica)
let: Variables locales
const: Constante
ES6 => ECMA Script 6, "JS moderno"
 */

//Arrow function: puedo poner todo en una solo línea sin usar return
const suma = (a, b) => a + b;
/* 
Es lo mismo que
function suma(a, b) {
    return a+b;
}
Y a su vez es lo mismo que:
const suma = (a, b) => {
    return a + b;
}
*/


console.log(suma(2, 3));

const array = ["México", "Perú", "Colombia"];
/* Forma imperativa de recorrer el arreglo:
for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
*/
// Solo para arreglo: forEach necesita una función anónima. Recorre de forma declarativa
array.forEach((element) => console.log(element));

// Método Map => Genera un nuevo arreglo
array.map((a, b, c) => console.log(a, b, c));
//Sintaxis: array.map((element, index, array) => (a, b, c))

/* Generar un nuevo arreglo:
[ "País 0: México", "País 1: Perú", "País 2: Colombia" ]
usando el método map
 */
// const newArray = array.map((a, b) => "País " + b + ": " + a);

//Expansión de parámetro para concatenar, similar a bash:    (es lo mismo que la línea 44)
const newArray = array.map((a, b) => `País ${b}: ${a}`);

console.log(newArray);


// map se hereda de la clase Array, así como forEach