const request = require("request");
// Destructuración de objeto Banda que recibo de ./Banda
const { Banda } = require("./Banda");

/* const endPoint = "http://www.theaudiodb.com/api/v1/json/1/search.php?s=Hola";

request(endPoint, (error, response, body) => {
    if (error === null) {
        console.log("Encontré al artista");
        console.log(body);
        const respuesta = JSON.parse(body);
        console.log(respuesta.artists);
    } else {
        console.log("No encontré al artista");
    }
}) */

const buscaBanda = (nombre) => {
    return new Promise((resolve, reject) => {
        const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
        request(endPoint, (error, response, body) => {
            if (error === null) {
                // console.log("Encontré al artista");
                // console.log(body);
                // JSON.parse convierte un JSON en string a un JSON funcional
                const respuesta = JSON.parse(body);
                /*                 // Instancia de mi clase banda
                                const banda = new Banda(
                                    respuesta.artists[0].strArtist,
                                    `${respuesta.artists[0].intFormedYear}-${respuesta.artists[0].intDiedYear}`,
                                    respuesta.artists[0].strWebsite,
                                    respuesta.artists[0].strGenre
                                )
                 */                // Creo constantes basadas en los atributos del objeto CON DESTRUCTURACION
                const { strArtist, intFormedYear, strWebsite, strGenre } = respuesta.artists[0];
                // Instancia de mi clase banda
                const banda = new Banda(strArtist, intFormedYear, strWebsite, strGenre);
                resolve(banda);
            } else {
                reject(error);
            }
        });
    });
}

/* // JS vanilla function declaration:
function buscaBanda(nombre) {
    return new Promise(function (resolve, reject) {
        const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;
        request(endPoint, function (error, response, body) {
            if (error === null) {
                console.log("Encontré al artista");
                console.log(body);
                const respuesta = JSON.parse(body);
                console.log(respuesta.artists);
            } else {
                console.log("No encontré al artista");
            }
        });
    });
}
 */
buscaBanda("Nirvana")
    .then((banda) => console.log(banda))
    .catch((error) => console.log(error));
