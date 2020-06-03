// npm init crea proyecto
// npm install request; instala request
const request = require('request')

request("https://pokeapi.co/api/v2/pokemon/pikachu", (error, response, body) => {
    console.error("error: ", error);
    console.log("statusCode: ", response.statusCode);
    console.log("body: ", body);
})