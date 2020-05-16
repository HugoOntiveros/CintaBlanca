for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let a = 50; a <= 500 ; a+= 50) {
    console.log(a);
}

for (let b = 100; b >= 0 ; b-= 5) {
    console.log(b);
}

for (let c = 200; c <= 600 ; c+= 4) {
    console.log(c);
}

let animales = ["perro", "gato", "gallina","caballo", "conejo"]
for (x=0; x < animales.length; x++){
    console.log(animales[x]);
}

let palabra = "Hola"
console.log(palabra.length);

//Kata 6
let pares = []
for ( i = 0; i <= 100; i += 2 ) {
    pares.push(i);
}
console.log(pares);
