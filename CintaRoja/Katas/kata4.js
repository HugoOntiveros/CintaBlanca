/* Crea una función llamada evaluateNumber() que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es.
En caso de ser divisible entre 5 y 11, retornar true */
function evaluateNumber(a) {
    if (a%5 === 0 && a%11 === 0) {
        return true;
    } else { 
        return false;
    }
}

evaluateNumber(55);
evaluateNumber(9);