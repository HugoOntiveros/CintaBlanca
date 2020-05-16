//---------- ARREGLOS ----------
var colores = ["azul", "rojo", "verde", "amarillo"]

console.log(colores);
console.log(colores[0]); //Llamar elemento en posición 0
console.log(colores[2]); //Llamar elemento en posición 0

colores[4] = "blanco" //Agregar elemento al arreglo
colores.push('rosa')
console.log(colores);

colores[7] = "negro"
colores.push("naranja")
console.log(colores);

colores.pop() //Borra el ÚLTIMO elemento del arreglo
console.log(colores);

colores.splice(6,1) //Elimina elementos (elemento a partir del cual borra, elementos a borrar)
console.log(colores);

colores.splice(6, 1, "fucsia") //Reemplaza el elemento.
console.log(colores);

//---------- OBJETOS ----------
var objeto = {
    llave: "valor"
}

var persona = {
    nombre: "Hugo",
    edad : 22,
    telefono : "0123456789",
    juegos : ["COD", "Halo", "GoW"]
}

console.log(persona);
console.log(persona.telefono);
console.log(persona.juegos[1]);

