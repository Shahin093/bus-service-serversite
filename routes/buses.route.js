const express = require('express');
const buses = require('../controller/buses.controller');

const router = express.Router();

router.route('/')
    .post(buses.createBuses)
    .get(buses.getBuses)


router.route('/:id')
    .patch(buses.updateBusById)
    .delete(buses.deleteBusById)

module.exports = router;