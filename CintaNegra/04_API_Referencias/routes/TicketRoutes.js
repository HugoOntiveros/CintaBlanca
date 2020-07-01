const express = require("express");
const router = express.Router();
const Tickets = require("../models/Tickets")

router.post("/api/tickets", (req, res) => {
    const { body } = req;
    if (!body.products || !body.products > 0) res.status(400).json({ "error": "Validation error" });
    const newTickets = new Tickets(body);
    newTickets.save()
        .then((resMongo) => res.status(201).json({ Tickets: resMongo }))
        .catch((err) => res.status(400).json({ err }));
});

router.get("/api/tickets", (req, res) => {
    Tickets.find().populate("products")
        .then((resMongo) => res.status(200).json({ Tickets: resMongo }))
        .catch((err) => res.status(400).json({ err }))
});
// populate => integridad referencial, los cambios se pasan. Es lento para muchos documentos.

router.get("/api/tickets/:id", (req, res) => {
    Tickets.findById(req.params.id).populate("products")
        .then((resMongo) => res.status(200).json({ Ticket: resMongo }))
        .catch((err) => res.status(400).json({ err }))
});

router.patch("/api/tickets:/id", (req, res) => {
    Tickets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resMongo) => res.status(200).json({ Ticket: resMongo }))
        .catch((err) => res.status(400).json({ err }));
});

router.delete("/api/tickets/:id", (req, res) => {
    Tickets.findByIdAndDelete(req.params.id)
        .then((resMongo) => res.status(204).json({ Ticket: resMongo }))
        .catch((err) => res.status(400).json({ err }))
});

// Update subtotal, total and IVA according to products
router.patch("/api/tickets/:id/checkout", (req, res) => {
    const { id } = req.params;
    Tickets.findById(id)
        .populate("products")
        .then((ticket) => {
            const prices = ticket.products.map((product) => product.price);
            const subtotal = prices.reduce((total, price) => total + price, 0);
            const taxes = subtotal * 0.16;
            const total = subtotal + taxes;
            console.log(subtotal, total, taxes);
            return Tickets.findByIdAndUpdate(id, { subtotal, taxes, total }, { new: true })
        })
        .then((checkoutTicket) => res.status(200).json(checkoutTicket))
        .catch((err) => res.status(400).json(err));
});
// forEach es un map que no acepta asincronicidad (no sirve para request)

module.exports = router;