const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/api/products", (req, res) => {
    const { body } = req;
    const newProduct = new Products(body);
    newProduct.save()
        .then((resMongo) => res.status(201).json({ Products: resMongo }))
        .catch((err) => res.status(400).json({ err }));
});

router.get("/api/products", (req, res) => {
    Products.find()
        .then(resMongo => {
            console.log(resMongo[1]._id);
            res.status(200).json({ Products: resMongo })
        })
        .catch(err => res.status(400).json({ err }));
});

router.get("/api/products/:id", (req, res) => {
    Products.findById(req.params.id)
        .then(resMongo => res.status(200).json({ Product: resMongo }))
        .catch(err => res.status(400).json({ err }));
});

router.patch("/api/products/:id", (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resMongo) => res.status(200).json({ resMongo }))
        .catch((err) => res.status(400).json({ err }));
});

router.delete("/api/products/:id", (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(resMongo => res.status(204).json({ Product: resMongo }))
        .catch(err => res.status(400).json({ err }));
});

module.exports = router;