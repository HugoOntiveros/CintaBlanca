// Función callback: Función que recibe como parámetro otra función; sirve para ejecución asíncrona
function miPrimerCallback(operacion, a, b) {
    return operacion(a, b);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

console.log(miPrimerCallback(suma, 5, 7));
console.log(miPrimerCallback(resta, 10, 5));

// Muestra un mensaje en consola mediante un callback. La función de orden superior que escribas debe poder mostrar el mensaje como console.log, console.warn, console.error, console.info, o cualquier método para pintar en consola del objeto console.

function ordenSuperior(consola, mensaje) {
    return consola(mensaje);
}

function log(mensaje) {
    console.log(mensaje);
}

function warn(mensaje) {
    console.warn(mensaje);
}

function error(mensaje) {
    console.error(mensaje);
}

function info(mensaje) {
    console.info(mensaje);
}

ordenSuperior(log, "Esto es un log");
ordenSuperior(warn, "Esto es un warn");
ordenSuperior(error, "Esto es un error");
ordenSuperior(info, "Esto es un info");

// Escribe una función de orden superior que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsuclas o en minúsculas.

function ordenSuperior1(letra, cadena) {
    return letra(cadena);
}

function mayuscula(cadena) {
    return cadena.toUpperCase();
}

function minuscula(cadena) {
    return cadena.toLowerCase();
}

console.log(ordenSuperior1(mayuscula, "Esta cadena es en mayúsculas"));
console.log(ordenSuperior1(minuscula, "Esta cadena es en minúsculas"));

