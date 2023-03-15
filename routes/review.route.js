const express = require("express");
const reviewController = require("../controller/review.controller");

const router = express.Router();
router.route('/')
    .post(reviewController.reviewPost)
    .get(reviewController.getReviewPost)

// get()
//     .post()

module.exports = router;