/* Crea una función llamada cleanArray(), que elimine de un arreglo los siguientes elementos:
null, 0, "", false y undefined
La función debe retornar el arreglo sin los elementos anteriormente mencionados.
 */
const dirtyArray = [5, 6, null, 0, "", false, undefined];
console.log(dirtyArray);

const cleanArray = (array) => {
    const cleanedArray = array.filter((val) => {
        return val !== null && val !== 0 && val !== "" && val !== false && val !== undefined;
    })
    console.log(cleanedArray);
    return cleanedArray;
}

cleanArray(dirtyArray);
