const cuadrado = (x) => {
    return x**2
}

console.log("Area de cuadrado de lado 5: " + cuadrado(5));

const rectangulo = (x, y) => {
    return x*y
}

console.log("Area de rectangulo de base 10 y altura 5: " + rectangulo(5, 10));

const triangulo = (x, y) => {
    return x*y/2
}

console.log("Area de triangulo de base 5 y altura 10: " + triangulo(5, 10));

const cuad = (x) => {
    return Math.pow(x, 2)
}

console.log(cuad(10));
