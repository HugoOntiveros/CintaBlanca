//Crea una función llamada largest que reciba como parámetro un arreglo de números, esta función debe retornar el número más grande del arreglo.

function largest (a) {
    let r = Math.max(...a);
    return r;
}

largest([5,7,10,9,8,6,2,3,7,1])
largest([22,13,55,98,24,1,4])