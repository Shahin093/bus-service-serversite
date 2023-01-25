const express = require('express');
const busCollection = require('../controller/busCollection.controller');

const router = express.Router();
// update and delete route 
// update ---  http://localhost:5000/api/v1/busCollection/639ae054b80ffe0f54071f81


// main route 
router.route('/')
    .get(busCollection.getBusCollection)
    .post(busCollection.createBusCollection);


// http://localhost:5000/api/v1/busCollection/allbuscollection
router.route('/allbuscollection')
    .get(busCollection.allBusCollectionToday);


// sloting filters route 
router.route('/slots')
    .get(busCollection.getBySignleSlot);

    router.route('/:id')
    .get(busCollection.busCollectionGetById)
    .patch(busCollection.busCollectionUpdatedById)
    .delete(busCollection.busCollectonDeletedById);


// var datetime = new Date();
// console.log(datetime.toISOString().slice(0,10));

module.exports = router;