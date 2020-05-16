// Crea una función llamada letter ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
// "Vocal" si la letra es una vocal.
// "Consonante" si la letra es una consonante.

function letter(l) {
    if (l.toLowerCase() === "a" || l.toLowerCase() === "e" || l.toLowerCase() === "i" || l.toLowerCase() === "o" || l.toLowerCase() === "u" ) {
        return "Vocal";
    } else {
        return "Consonante";
    }
}

letter("a")
letter("A")
letter("c")