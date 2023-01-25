const express = require('express');
const BusBooking = require('../controller/busBooking.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();


// bus Booking system api ....
// "bus_name":"ANA",
// "district_from":"Chittagong",
// "district_to":"Dhaka",
// "slot":"10:00",
// "seat":2,
// "amount":500,
// "driver_staff":2

router.route('/')
    .get(BusBooking.getBusBooking)
    .post(BusBooking.createBusBooking)

module.exports = router;