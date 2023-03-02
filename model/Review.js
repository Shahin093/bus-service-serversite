const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const validator = require('validator');


const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Name is required"],
    },
    email: {
        type: String,
        // required: [true, "email is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    ratingNumber: {
        type: Number,
        required: [true, 'Rating is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
});

const ReviewRating = mongoose.model("ReviewRating", reviewSchema);
module.exports = ReviewRating;