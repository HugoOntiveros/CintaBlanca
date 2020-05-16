let j1 = prompt("Jugador 1 seleccione: piedra, papel o tijera.").toLowerCase()
if (j1 === "piedra" || j1 === "papel" || j1 === "tijera") {
console.log("El jugador 1 seleccionó: " + j1 + ".")
} else {
    console.error("Jugador 1 no seleccionó una opción válida.");
}

let j2 = prompt("Jugador 2 seleccione: piedra, papel o tijera.").toLowerCase()
if (j2 === "piedra" || j2 === "papel" || j2 === "tijera") {
    console.log("El jugador 2 seleccionó: " + j2 + ".")
} else {
        console.error("Jugador 2 no seleccionó una opción válida.");
}
    
if (j1 === j2 && j1 === "piedra" || j1 === "papel" || j1 === "tijera") {
    console.log("Los jugadores empataron.")
    } else if (j1 === "piedra" && j2 === "papel") {
        console.log("Jugador 2 ganó ¡Felicidades!"); 
    } else if (j1 === "papel" && j2 === "tijera") {
        console.log("Jugador 2 ganó ¡Felicidades!"); 
    } else if (j1 === "tijera" && j2 === "piedra") {
        console.log("Jugador 2 ganó ¡Felicidades!"); 
    } else if (j2 === "piedra" && j1 === "papel") {
        console.log("Jugador 1 ganó ¡Felicidades!"); 
    } else if (j2 === "papel" && j1 === "tijera") {
        console.log("Jugador 1 ganó ¡Felicidades!"); 
    } else if (j2 === "tijera" && j1 === "piedra") {
        console.log("Jugador 1 ganó ¡Felicidades!"); 
    } else {
        console.error("Por favor seleccione una de las 3 opciones: piedra, papel o tijera.");
    }