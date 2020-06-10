/* Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, la función deberá retornar el país con mayor número de letras.
Por ejemplo, del siguiente arreglo de países: */

/* // Imperative solution
const longestCountry = (countries) => {
    let countriesLength = []
    for (let i = 0; i < countries.length; i++) {
        countriesLength.push(countries[i].length);
        console.log(countriesLength);
    }
    const longest = Math.max(...countriesLength);
    console.log(longest);
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length === longest) {
            result = countries[i]
        }
    }
    console.log(result);
    return result;
}
 */
// Declarative solution
const longestCountry = (countries) => {
    const countriesLength = countries.map((a) => a.length);
    console.log(countriesLength);
    const longest = Math.max(...countriesLength)
    console.log(longest);
    const result = countries.filter((a) => {
        return a.length === longest;
    });
    console.log(result);
    for (let i=0; i<result.length; i++) {
        return result[i];
    }
}


longestCountry(["Mexico", "USA", "Canada", "Peru", "Colombia"])