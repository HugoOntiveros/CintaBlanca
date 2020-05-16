//Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad" o es "Menor de edad"

function mayorDeEdad (a) {
    if (a >= 18) {
        return "Mayor de edad"
    } else if (a < 18 && a >= 0) {
        return "Menor de edad"
    } else {
        return "Valor incorrecto, ingrese su edad en años"
    }
}

mayorDeEdad (18)
mayorDeEdad (5)