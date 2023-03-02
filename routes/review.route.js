const express = require("express");
const reviewController = require("../controller/review.controller");

const router = express.Router();

router.post('/review', reviewController.reviewPost)

module.exports = router;