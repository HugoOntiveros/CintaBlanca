// Crea una función llamada palindrome() que reciba como parametro una oración, si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false
/* const palindrome = (oracion) => {
    console.log(oracion.length);
    const oracionSP = oracion.slice(0, (oracion.length-1))
    console.log(oracionSP);
    const inversa = oracionSP.split(" ").reverse().join(" ")
    console.log(inversa);
    if (oracionSP === inversa) {
        console.log(true);        
    } else {
        console.log(false);        
    }
}
 */
const palindrome = (oracion) => {
    const oracionSE = oracion.replace(/ /g, "");
    console.log(oracionSE);
    const reverse = oracionSE.split("").reverse().join("");
    console.log(reverse);
    if (reverse.toLowerCase() === oracionSE.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

palindrome("Anita lava la tina");
palindrome("Hola que tal");