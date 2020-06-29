const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/hola", (req, res) => {
    res.send("Qué tal");
});

app.listen(PORT, () => console.log("Está vivo!"));