// Configuración
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const api = express();
const PORT = process.env.PORT || 3000;

// Conexión a base de datos
// mongoose es un ODM -> Object-Document Mapping; para SQL, usaríamos un ORM -> Object-Relational Mapping
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("DB connected") })
    .catch(() => { console.log("Error connecting to DB") });

/* Ejercicio diseño de base de datos:
Un aeropuerto busca controlar los vuelos que llegan al lugar, desea conocer los vuelos que existen, a qué aerolínea pertenecen, las características del avión y el lugar de procedencia. Ayuda al aeropuerto a solucionar su problema.
 */
// Esquema -> Definición de las reglas de una colección
const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
    },
    aircraft_name: {
        type: String,
        required: true,
    },
    aircraft_model: String,
    flight_from: {
        type: String,
        required: true,
    },
});

// Generar modelo a partir del esquema -> Objeto que nos permite interactuar con la colección
const Flights = mongoose.model("Flights", flightsSchema);

// Middleware
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

// Endpoints
api.get("/", (req, res) => res.status(200).json({ message: "It's alive!" }));

// Create
api.post("/api/flights", (req, res) => {
    // 1) Recibir el objeto flight que contiene la información del vuelo a crear de parte del cliente 
    const { body } = req;
    // 2) Pedir a la base de datos que cree un documento a partir del body que manda el cliente
    const newFlight = new Flights(body);
    newFlight.save()
        // 3) Responder al cliente utilizando la respuesta de la base de datos
        .then((resMongo) => res.status(201).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

// Read ALL
api.get("/api/flights/", (req, res) => {
    Flights.find()
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

// Read ONE
api.get("/api/flights/:id", (req, res) => {
    Flights.findById(req.params.id)
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

// Update
api.patch("/api/flights/:id", (req, res) => {
    Flights.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});


// Delete
api.delete("/api/flights/:id", (req, res) => {
    Flights.findByIdAndDelete(req.params.id)
        .then((resMongo) => res.status(204).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

// Encender el servidor
api.listen(PORT, () => console.log(`Listening on port ${PORT}`));