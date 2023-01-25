const express = require("express");
const usePay = require("../controller/pay.controller");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();


router.post('/', usePay.paymentGetway)

module.exports = router;






