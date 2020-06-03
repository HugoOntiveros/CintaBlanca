/* Promesas: 
Compromiso de hacer algo en el futuro: se puede cumplir o no
 */
const promesaCumple = new Promise((resolve, reject) => {
    // const number = Math.random(); // Aleatorio del 0 al 1
    const number = Math.floor(Math.random() * 100);

    setTimeout(() => {
        if (number >= 50) {
            resolve('Pastel');
        } else {
            reject("Lo siento, no me alcanzó para un pastel :(")
        }
    }, 5000)
});

/* console.log(promesaCumple);
promesa.then() si la promesa se cumple
promesa.catch() si la promesa NO se cumple
 */
promesaCumple
    .then((pastel) => console.log(pastel))
    .catch((razon) => console.log(razon))
// console.log(Math.floor(Math.random() * 100)); // Genera números aleatorios enteros de 0 a 100
// Math.floor redondea hacia arriba, Math.round redondeo para arriba

/* // Vanilla JS promise declaration:
var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (Succesful condition) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  }); */