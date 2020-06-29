const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

/* 1.- Agrega un endpoint ‘/api/’ que responda a 
una petición de tipo GET con un código de estado 200 
y el siguiente json: 
            {‘mensaje’:‘hola mundo’}
*/

app.get("/api/", (req, res) => {
    res.status(200).json({ "message": "hello world" })
})

/* 2.- Agrega un endpoint ‘/api/suma’ que responda a una 
petición de tipo GET con la suma de dos números que 
reciba mediante las querys num1 y num2. El servidor
debe responder con un código de estado 200 y un json 
como el siguiente:
                {‘resultado’: 7}
 */

app.get("/api/suma", (req, res) => {
/*     const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const suma = num1 + num2;
    console.log(suma);
    // console.log(req);
    console.log(req.query);
    res.status(200).json({ resultado: suma });
 */    const { num1, num2 } = req.query;
    console.log(req.query);
    const resultado = parseInt(num1) + parseInt(num2);
    res.status(200).json({ resultado });
});

app.listen(3000, () => console.log(`Listening on port: 3000`));


/* 3.- Agrega un endpoint ‘/api/usuario/’ que responda a
una petición de tipo GET con el nombre que sea
recibido a través de params. El servidor debe responder
con un código de estado 200 y un json como este:
              {‘usuario’: ‘Edwin’}
 */
app.get("/api/usuario/:usuario", (req, res) => {
    console.log(req.params);
    const usuario = req.params.usuario;
    res.status(200).json({ usuario })
});


/* 4.- Agrega un endpoint ‘/api/swapi’ que responda a una
petición de tipo GET con el personaje solicitado de
                https://swapi.co/
El cliente debe mandar el número de personaje mediante
params. La respuesta del servidor debe lucir algo así
            {‘personaje’: {
                ‘name’: ‘Luke Skywalker’,
                ...,
            }}
Es decir, en el ejercicio de la SWAPI puedes hacer una peticion desde insomnia/Postman asi:
/api/swapi/10 -> me debe devolver el personaje no 10 de la swapi */

app.get("/api/swapi/:character", (req, res) => {
    const character = req.params.character;
    console.log(character);
    const ENDPOINT = `https://swapi.dev/api/people/${character}/`;
    axios.get(ENDPOINT)
        .then((SWAPIres) => {
            console.log(SWAPIres.status);
            console.log(SWAPIres.data);
            const charJson = SWAPIres.data;
            const SWAPIstatus = SWAPIres.status;
            res.status(SWAPIstatus).json({ "personaje": charJson });
        })
        .catch((error) => {
            console.log(error.message);
            console.log(error.response.statusText);
            console.log(error.response.data);
            const { message } = error;
            const { status, statusText, data } = error.response
            res.status(status).json({ message, statusText, data, "characterChoice": character });
        })
});