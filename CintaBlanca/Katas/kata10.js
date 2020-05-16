// Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como parámetros como se muestra a continuación:
// game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto el ganador es el jugador 2.
// La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
// "J1" Si ha ganado el jugador 1.
// "J2" Si ha ganado el jugador 2.
// "Empate" Si hay un empate.

function game (a, b) {
    a = a.toLowerCase()
    b = b.toLowerCase() 
if (a === b && (a === "piedra" || a === "papel" || a === "tijeras")) {
    return "Empate";
    } else if (a === "piedra" && b === "papel") {
        return "J2"; 
    } else if (a === "papel" && b === "tijeras") {
        return "J2"; 
    } else if (a === "tijeras" && b === "piedra") {
        return "J2"; 
    } else if (b === "piedra" && a === "papel") {
        return "J1"; 
    } else if (b === "papel" && a === "tijeras") {
        return "J1"; 
    } else if (b === "tijeras" && a === "piedra") {
        return "J1"; 
    } else {
        console.error("Por favor seleccione una de las 3 opciones: piedra, papel o tijera.");
    }
}

game("Piedra", "Papel")
game("Papel", "Papel")
game("Tijeras", "Papel")