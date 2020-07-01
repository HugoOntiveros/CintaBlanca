/* 1) Crear una base de datos para un supermercado que pueda 
almacenar lo siguiente:
- Artículo
    -Nombre (string)
    -Precio (number)
    -Existencias (number)
- Ticket
    -subtotal (number)
    -IVA (number)
    -total (number)
    -articulos (articulo)
2) Crear una API que permita realizar las operaciones      
   elementales CRUD sobre artículos y ticket.
3) Crear archivos de routes distintos para las operaciones de tickets y productos
4) Mediante un ENDPOINT calcular el subtotal, IVA y total de
   algún ticket.

COMO REGLA DE NEGOCIO los documentos “Ticket” deben inicializar
subtotal, IVA y total con un valor default en 0.
NOTA: Al hacer la petición del paso 4) se debe actualizar
el contenido del ticket según los artículos que contenga
5) Deploy con Heroku
6) En la raíz del server devolver una vista, documentar la API utilizando HTML y CSS, puedes utilizar Bootstrap, Materialize, Bulma, etc (No jQuery)
 */
require("dotenv").config();
require("./mongoClient/index");
const express = require("express");
const path = require("path");
const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));


api.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

// CRUD Products
api.use(require("./routes/ProductRoutes"));

// CRUD Tickets
api.use(require("./routes/TicketRoutes"));

api.listen(PORT, () => console.log(`Listening on port ${PORT}`));