var nombreCompleto = prompt('Escriba su nombre completo separando nombre y apellidos con un espacio')
console.log('Nombre Completo: ' + nombreCompleto);

var direccion = prompt('Escriba su dirección')
console.log('Dirección: ' + direccion);

var birthYear = prompt('Escriba el año en que nació')
var edad = 2020 - birthYear
console.log('Edad: ' + edad + ' años');

var numeroAnio = Number(birthYear) //Convierte birthYear a número
console.log(typeof(edad)); //Devuelve el tipo de la variable
