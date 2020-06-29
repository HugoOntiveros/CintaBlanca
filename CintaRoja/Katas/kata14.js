/* Escribe una función de orden superior llamada superior() que reciba una cadena de caracteres, debe devolver mediante un callback la cadena de caracteres en mayúsculas o en minúsculas.
Por ejemplo: superior("PejeLagarto", minus);
-> pejelagarto
superior("PejeLagarto", mayus);
-> PEJELAGARTO */

const mayus = (string) => string.toUpperCase();
const minus = (string) => string.toLowerCase();

const superior = (string, func) => {
    console.log(func(string));
    return func(string);
}

superior("Hola", minus);
superior("Hola", mayus);