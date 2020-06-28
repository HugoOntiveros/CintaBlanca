// Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
// En caso de ser vocal, devolver "Vocal"

function evaluateLetter(l) {
    if (l.toLowerCase() === "a" || l.toLowerCase() === "e" || l.toLowerCase() === "i" || l.toLowerCase() === "o" || l.toLowerCase() === "u" ) {
        return "Vocal";
    } else {
        return "Consonante";
    }
}
