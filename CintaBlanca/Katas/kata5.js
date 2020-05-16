// Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
//"Positivo" si el número es positivo.
//"Negativo" si el número es negativo.

function evaluate (a) {
    if (a > 0) {
        return "Positivo"
    } else if (a < 0) {
        return "Negativo"
    } else if (a === 0) {
        return "Cero"
    } else {
        return "No es un número"
    }
}

evaluate(4)
evaluate(-9)
evaluate(0)