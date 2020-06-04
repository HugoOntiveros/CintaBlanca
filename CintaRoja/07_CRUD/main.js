/* CRUD usado en BD
C => Create
R => Read
U => Update
D => Delete */
/* Escribe el código que permita hacer las operaciones elementales
    CRUD de la siguiente API genérica:
    https://goodreads-devf-aaron.herokuapp.com/docs/ 
	
   Recuerda probar con Postman cómo hay que hacer las peticiones a la API para ver qué y cómo responde el servidor.
    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa. 
    2.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.
    3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor 
        modificado en una promesa.
    4.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para eliminar un
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.
    5.- Encadenando promesas, es decir, usando las funciones
        que escribiste en los puntos previos, debes:
	crear, modificar y eliminar un autor. */

    // 1 create author
const request = require("request");

const creaAutor = (nombre, apellido, nacionalidad, bio, genero, edad) => {
    class Autor {
        constructor(nombre, apellido, nacionalidad, bio, genero, edad) {
            this.name = nombre;
            this.last_name = apellido;
            this.nacionalidad = nacionalidad;
            this.biography = bio;
            this.gender = genero;
            this.age = edad;
            // this.isalive = vivo;
        }
    }

    const autor = new Autor(nombre, apellido, nacionalidad, bio, genero, edad)
    // console.log(autor);
    // const miAutor = JSON.stringify(autor);
    // console.log(miAutor);
    // console.log(typeof miAutor);

    return new Promise((resolve, reject) => {
        const endPoint = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
        request.post(endPoint, { 
            json:
            // form:     //Funciona igual que "json:" 
                autor }, (err, response, body) => {
            // console.log(err, response.statusCode);
            if (response.statusCode === 201) {
                resolve(autor);                
            } else {
                reject(response);
                console.log(err);
                console.log(response.statusMessage);
                console.log(body);
            }
        })
    })
}


creaAutor("Hugo", "Ontiveros", "MX", "Biografía", "M", 23)
    .then((autor) => console.log(autor))
    .catch((response) => console.log(`Status code: ${response.statusCode}`))