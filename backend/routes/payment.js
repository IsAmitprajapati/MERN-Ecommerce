const express = require("express")
const routerPayment = express.Router()

const checkout = require("../controllers/payment/checkout")


//payment api's

routerPayment.post("/checkout",checkout)

module.exports = routerPayment

