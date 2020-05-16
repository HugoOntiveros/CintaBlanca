function hola() {
    console.log("Hola");
}

function suma(a, b) {
    console.log(a+b);
    return a + b;
    }

hola()
hola()
hola()
hola()

suma(5, 5)
suma(10, 10)

// Arrow functions ECMAS5

const multiplicacion = (x, y) => {
    return x*y
}

console.log(multiplicacion(5,10));

//Kata 9
function hola (a) {
    let r = Math.max(...a);
    console.log(r);
}

hola ([1, 2, 7, 25, 57, 28])