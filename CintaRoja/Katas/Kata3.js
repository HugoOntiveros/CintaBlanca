// Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado.

function decimalToBinary(a) {
    let b = [];
    let r = "";
    let contador = 0;
    for (let i=a; i>0; i = Math.floor(i/2)) {
        b.unshift(a%2);
        a = Math.floor(a/2);
        contador++;
    }
    for (let i2=0; i2<contador; i2++) {
        r = r + b[i2];
    }
    return r;
}

decimalToBinary(5)
decimalToBinary(67)
decimalToBinary(181)