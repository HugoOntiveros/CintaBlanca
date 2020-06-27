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
*/
const request = require("request");

class Author {
    constructor(name, last_name, nationality, bio, gender, age) {
        this.name = name;
        this.last_name = last_name;
        this.nacionalidad = nationality;
        this.biography = bio;
        this.gender = gender;
        this.age = age;
        // this.isalive = vivo;
    }
}

const createAuthor = (name, last_name, nationality, bio, gender, age) => {

    const author = new Author(name, last_name, nationality, bio, gender, age)
    // const myAuthor = JSON.stringify(author);

    return new Promise((resolve, reject) => {
        const ENDPOINT = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
        request.post(ENDPOINT, {
            json:
                // form:     //Funciona igual que "json:"
                author
        }, (error, response, body) => {
            if (response.statusCode === 201) {
                resolve(body);
            } else {
                reject(response);
                console.log(error);
                console.log(body);
            }
        });
    });
}

// createAuthor("Hugo", "Ontiveros", "MX", "Biografía", "M", 23)
//     .then((body) => console.log(body))
//     .catch((response) => console.log(`Status: ${response.statusCode} ${response.statusMessage}`));

/* 2.- Escribe una función que reciba como parámetro un ID
   para realizar una petición a la API para hallar un
   autor con el ID especificado. La función debe retornar
   una promesa con la respuesta del servidor.
 */
const getAuthor = (id) => {
    return new Promise((resolve, reject) => {
        const ENDPOINT = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`;
        request.get(ENDPOINT, (error, response, body) => {
            if (response.statusCode === 200) {
                resolve(JSON.parse(body));
            } else {
                reject(response);
                console.log(JSON.parse(body));
            }
        })
    })
}

// getAuthor(6731)
// .then((body) => console.log(body))
// .catch((response) => console.log(response.statusCode, response.statusMessage));


/*    3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor
        modificado en una promesa.
*/

const changeAuthor = (id, name, last_name, nationality, bio, gender, age) => {

    const modAuthor = new Author(name, last_name, nationality, bio, gender, age)

    return new Promise((resolve, reject) => {
        const ENDPOINT = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`;
        request.put(ENDPOINT, {
            json:
                modAuthor
        }, (error, response, body) => {
            if (response.statusCode === 200) {
                resolve(body);
            } else {
                reject(response);
                console.log(body);
            }
        }
        );
    })
}

// changeAuthor(6731, "Modificado", "Modificado", "USA", "ModTest", "F", 26)
//     .then((body) => console.log(body))
//     .catch((response) => console.log(response.statusCode, response.statusMessage));

/*
    4.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para eliminar un
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.
*/

const deleteAuthor = (id) => {
    return new Promise((resolve, reject) => {
        const ENDPOINT = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`;
        request.delete(ENDPOINT, (error, response, body) => {
            if (response.statusCode === 204) {
                resolve(response);
            } else {
                reject(body);
                console.log(response.statusCode, response.statusMessage);
            }
        })
    })
}

// deleteAuthor(6702)
// .then((response) => console.log(response.statusCode, response.statusMessage))
// .catch((body) => console.log(JSON.parse(body)));

/*     5.- Encadenando promesas, es decir, usando las funciones
    que escribiste en los puntos previos, debes:
	crear, modificar y eliminar un autor.
 */

createAuthor("Hugo", "Ontiveros", "MX", "Biografía", "M", 23)
    .then((body) => {
        console.log("Author created.");
        console.log(body);
        getAuthor(body.id)
            .then((body) => {
                console.log("Author information:");
                console.log(body);
                changeAuthor(body.id, "Modificado", "Modificado", "USA", "ModTest", "F", 26)
                    .then((body) => {
                        console.log("Author information modified.");
                        console.log(body);
                        deleteAuthor(body.id)
                            .then((response) => {
                                console.log("Author deleted.");
                                console.log(response.statusCode, response.statusMessage);
                            }).catch((body) => console.log("Error deleting author:", body))
                    }).catch((response) => console.log("Error changing author information:", response.statusCode, response.statusMessage))
            }).catch((response) => console.log("Error retrieving author information:", response.statusCode, response.statusMessage))
    }).catch((response) => console.log("Error creating author:", response.statusCode, response.statusMessage));

