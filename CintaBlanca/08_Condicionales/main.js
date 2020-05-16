let num1 = 10;

if(num1 < 9){
    console.log("¡VERDADERO! El número " + num1 + " es menor que 9.");
} else {
    console.log("¡FALSO! El número " + num1 + " es mayor o igual que 9.");
}

// let numP = Number(prompt("Ingresa un número para verificar su paridad:"))
// let residuo = numP % 2
// if (residuo === 0){
//     console.log("El número " + numP + " es par.");
// } else if (residuo === 1) {
//     console.log("El número " + numP + " es impar.");
// } else {
//     console.error("Introduce un número");
// }

let edad = Number(prompt("Ingresa tu edad:"))
if (edad >= 18 && edad <= 80){
    console.log("Puedes conducir.");
} else if (edad < 16 || edad >80) {
    console.log("No puedes conducir.");
} else if (edad === 16 || edad === 17) {
    console.log("Puedes sacar tu permiso.");
} else {
    console.log("Por favor, ingresa un número.");
}